import ZAI from 'z-ai-web-dev-sdk';
import * as fs from 'fs';
import * as path from 'path';

const BASE_URL = 'https://tradingview.github.io/lightweight-charts';
const KB_ROOT = '/home/z/my-project/download/Lightweight_Charts_KB';

interface PageInfo {
  url: string;
  title: string;
  html: string;
  text: string;
  images: ImageInfo[];
}

interface ImageInfo {
  url: string;
  alt: string;
  description?: string;
}

// URLs to scrape
const MISSING_URLS = {
  'tutorials/how_to': [
    'horizontal-price-scale',
    'inverted-price-scale',
    'legends',
    'panes',
    'price-and-volume',
    'price-line',
    'series-markers',
    'set-crosshair-position',
    'tooltips',
    'two-price-scales',
    'watermark',
  ],
  'tutorials/demos': [
    'compare-multiple-series',
    'custom-font-family',
    'custom-locale',
    'infinite-history',
    'moving-average',
    'range-switcher',
    'realtime-updates',
    'whitespace',
    'yield-curve-with-update-markers',
  ],
};

// Existing pages that need image extraction
const EXISTING_PAGES = [
  // docs
  { path: 'docs/index.md', url: `${BASE_URL}/docs` },
  { path: 'docs/series-types/index.md', url: `${BASE_URL}/docs/series-types` },
  { path: 'docs/chart-types/index.md', url: `${BASE_URL}/docs/chart-types` },
  { path: 'docs/price-scale/index.md', url: `${BASE_URL}/docs/price-scale` },
  { path: 'docs/panes/index.md', url: `${BASE_URL}/docs/panes` },
  { path: 'docs/time-zones/index.md', url: `${BASE_URL}/docs/time-zones` },
  { path: 'docs/android/index.md', url: `${BASE_URL}/docs/android` },
  { path: 'docs/ios/index.md', url: `${BASE_URL}/docs/ios` },
  { path: 'docs/api/index.md', url: `${BASE_URL}/docs/api` },
  // tutorials
  { path: 'tutorials/index.md', url: `${BASE_URL}/tutorials` },
  { path: 'tutorials/customization/intro.md', url: `${BASE_URL}/tutorials/customization/intro` },
  { path: 'tutorials/customization/creating-a-chart.md', url: `${BASE_URL}/tutorials/customization/creating-a-chart` },
  { path: 'tutorials/customization/chart-colors.md', url: `${BASE_URL}/tutorials/customization/chart-colors` },
  { path: 'tutorials/customization/series.md', url: `${BASE_URL}/tutorials/customization/series` },
  { path: 'tutorials/customization/price-format.md', url: `${BASE_URL}/tutorials/customization/price-format` },
  { path: 'tutorials/customization/time-scale.md', url: `${BASE_URL}/tutorials/customization/time-scale` },
  { path: 'tutorials/customization/crosshair.md', url: `${BASE_URL}/tutorials/customization/crosshair` },
  { path: 'tutorials/customization/second-series.md', url: `${BASE_URL}/tutorials/customization/second-series` },
  { path: 'tutorials/customization/data-points.md', url: `${BASE_URL}/tutorials/customization/data-points` },
  { path: 'tutorials/customization/finishing-touches.md', url: `${BASE_URL}/tutorials/customization/finishing-touches` },
  { path: 'tutorials/customization/conclusion.md', url: `${BASE_URL}/tutorials/customization/conclusion` },
];

class LightweightChartsScraper {
  private zai: any;

  async initialize() {
    this.zai = await ZAI.create();
    console.log('✓ ZAI SDK initialized');
  }

  async fetchPage(url: string): Promise<PageInfo | null> {
    try {
      console.log(`Fetching: ${url}`);
      const result = await this.zai.functions.invoke('page_reader', { url });
      
      const html = result.data?.html || '';
      const images = this.extractImages(html, url);
      
      return {
        url,
        title: result.data?.title || 'Untitled',
        html,
        text: result.data?.text || '',
        images,
      };
    } catch (error) {
      console.error(`Failed to fetch ${url}:`, error);
      return null;
    }
  }

  private extractImages(html: string, baseUrl: string): ImageInfo[] {
    const images: ImageInfo[] = [];
    
    // Extract img tags
    const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*(?:alt=["']([^"']*)["'])?/gi;
    let match;
    
    while ((match = imgRegex.exec(html)) !== null) {
      let imgUrl = match[1];
      const alt = match[2] || '';
      
      // Resolve relative URLs
      if (imgUrl.startsWith('/')) {
        imgUrl = `https://tradingview.github.io${imgUrl}`;
      } else if (!imgUrl.startsWith('http')) {
        imgUrl = new URL(imgUrl, baseUrl).href;
      }
      
      images.push({ url: imgUrl, alt });
    }
    
    // Extract iframe sources (for embedded examples)
    const iframeRegex = /<iframe[^>]+src=["']([^"']+)["']/gi;
    while ((match = iframeRegex.exec(html)) !== null) {
      let iframeUrl = match[1];
      if (iframeUrl.startsWith('/')) {
        iframeUrl = `https://tradingview.github.io${iframeUrl}`;
      }
      images.push({ url: iframeUrl, alt: 'Embedded chart example' });
    }
    
    return images;
  }

  async recognizeImage(imageUrl: string): Promise<string> {
    try {
      console.log(`  Recognizing image: ${imageUrl}`);
      
      const response = await this.zai.chat.completions.createVision({
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: 'Describe this chart or diagram in detail. What type of chart is it? What does it show? Explain all visible elements including axes, data series, colors, and any notable features. This is from Lightweight Charts library documentation.',
              },
              {
                type: 'image_url',
                image_url: { url: imageUrl },
              },
            ],
          },
        ],
        thinking: { type: 'disabled' },
      });
      
      return response.choices[0]?.message?.content || 'Unable to describe image';
    } catch (error) {
      console.error(`Failed to recognize image ${imageUrl}:`, error);
      return 'Image recognition failed';
    }
  }

  htmlToMarkdown(html: string, title: string, url: string, images: ImageInfo[]): string {
    // Basic HTML to Markdown conversion
    let md = `# ${title}\n\n`;
    md += `---\n`;
    md += `source_url: ${url}\n`;
    md += `---\n\n`;
    
    // Remove scripts and styles
    let content = html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<!--[\s\S]*?-->/g, '');
    
    // Convert headings
    content = content.replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n\n');
    content = content.replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n');
    content = content.replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n\n');
    content = content.replace(/<h4[^>]*>(.*?)<\/h4>/gi, '#### $1\n\n');
    
    // Convert code blocks
    content = content.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, '```\n$1\n```\n\n');
    content = content.replace(/<code[^>]*>(.*?)<\/code>/gi, '`$1`');
    
    // Convert links
    content = content.replace(/<a[^>]*href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gi, '[$2]($1)');
    
    // Convert images with descriptions
    for (const img of images) {
      if (img.description) {
        content = content.replace(
          new RegExp(`<img[^>]*src=["']${this.escapeRegex(img.url)}["'][^>]*>`, 'gi'),
          `\n![${img.alt}](${img.url})\n\n**Image Description:** ${img.description}\n\n`
        );
      }
    }
    
    // Convert remaining images
    content = content.replace(/<img[^>]+src=["']([^"']+)["'][^>]*(?:alt=["']([^"']*)["'])?[^>]*\/?>/gi, '\n![$2]($1)\n\n');
    
    // Convert paragraphs
    content = content.replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n');
    
    // Convert lists
    content = content.replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n');
    content = content.replace(/<\/?[ou]l[^>]*>/gi, '\n');
    
    // Convert strong/bold
    content = content.replace(/<(strong|b)[^>]*>(.*?)<\/\1>/gi, '**$2**');
    
    // Convert em/italic
    content = content.replace(/<(em|i)[^>]*>(.*?)<\/\1>/gi, '*$2*');
    
    // Convert br
    content = content.replace(/<br\s*\/?>/gi, '\n');
    
    // Remove remaining HTML tags
    content = content.replace(/<[^>]+>/g, '');
    
    // Clean up whitespace
    content = content
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
    
    md += content;
    
    return md;
  }

  private escapeRegex(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  async scrapeMissingPages() {
    console.log('\n=== Scraping Missing Pages ===\n');
    
    for (const [section, pages] of Object.entries(MISSING_URLS)) {
      for (const page of pages) {
        const url = `${BASE_URL}/${section}/${page}`;
        const pageInfo = await this.fetchPage(url);
        
        if (pageInfo) {
          // Recognize images
          for (const img of pageInfo.images) {
            if (img.url.includes('.png') || img.url.includes('.jpg') || img.url.includes('.gif') || img.url.includes('.webp')) {
              img.description = await this.recognizeImage(img.url);
            }
          }
          
          // Create directory and save
          const dir = path.join(KB_ROOT, section);
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
          }
          
          const md = this.htmlToMarkdown(pageInfo.html, pageInfo.title, url, pageInfo.images);
          const filePath = path.join(dir, `${page}.md`);
          fs.writeFileSync(filePath, md);
          console.log(`  Saved: ${filePath}`);
        }
        
        // Rate limiting
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  }

  async enrichExistingPagesWithImages() {
    console.log('\n=== Enriching Existing Pages with Image Descriptions ===\n');
    
    for (const page of EXISTING_PAGES) {
      const filePath = path.join(KB_ROOT, page.path);
      
      if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        continue;
      }
      
      // Fetch page to get images
      const pageInfo = await this.fetchPage(page.url);
      
      if (pageInfo && pageInfo.images.length > 0) {
        console.log(`Found ${pageInfo.images.length} images in ${page.path}`);
        
        // Recognize images
        const imageDescriptions: { url: string; description: string }[] = [];
        
        for (const img of pageInfo.images) {
          if (img.url.includes('.png') || img.url.includes('.jpg') || img.url.includes('.gif') || img.url.includes('.webp')) {
            const description = await this.recognizeImage(img.url);
            imageDescriptions.push({ url: img.url, description });
          }
        }
        
        // Append image descriptions to existing file
        if (imageDescriptions.length > 0) {
          let content = fs.readFileSync(filePath, 'utf-8');
          content += '\n\n---\n\n## Image Descriptions\n\n';
          
          for (const img of imageDescriptions) {
            content += `### ${img.url.split('/').pop()}\n\n`;
            content += `![Chart Image](${img.url})\n\n`;
            content += `**Description:** ${img.description}\n\n`;
          }
          
          fs.writeFileSync(filePath, content);
          console.log(`  Updated: ${filePath}`);
        }
      }
      
      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}

async function main() {
  const scraper = new LightweightChartsScraper();
  await scraper.initialize();
  
  // Scrape missing pages
  await scraper.scrapeMissingPages();
  
  // Enrich existing pages with image descriptions
  await scraper.enrichExistingPagesWithImages();
  
  console.log('\n✓ Knowledge base creation complete!');
}

main().catch(console.error);
