import ZAI from 'z-ai-web-dev-sdk';
import * as fs from 'fs';
import * as path from 'path';

interface PageReaderResult {
  code: number;
  data: {
    html: string;
    publishedTime?: string;
    title: string;
    url: string;
    usage: {
      tokens: number;
    };
  };
  status: number;
}

const BASE_DIR = '/home/z/my-project/docs/exchange/binance';
const BASE_URL = 'https://developers.binance.com';

// Known Binance API sections
const SECTIONS = [
  // Already scraped
  { name: 'spot', path: '/docs/binance-spot-api' },
  { name: 'futures', path: '/docs/binance-futures-api' },
  { name: 'options', path: '/docs/binance-options-api' },
  { name: 'margin', path: '/docs/binance-margin-api' },
  
  // Potentially missing sections
  { name: 'wallet', path: '/docs/binance-wallet-api' },
  { name: 'pay', path: '/docs/binance-pay-api' },
  { name: 'nft', path: '/docs/binance-nft-api' },
  { name: 'earn', path: '/docs/binance-earn-api' },
  { name: 'convert', path: '/docs/binance-convert-api' },
  { name: 'rebate', path: '/docs/binance-rebate-api' },
  { name: 'vip-loan', path: '/docs/binance-vip-loan-api' },
  { name: 'crypto-loan', path: '/docs/binance-crypto-loan-api' },
  { name: 'simple-earn', path: '/docs/binance-simple-earn-api' },
  { name: 'dual-investment', path: '/docs/binance-dual-investment-api' },
  { name: 'liquidity-farming', path: '/docs/binance-liquidity-farming-api' },
  { name: 'portfolio-margin', path: '/docs/binance-portfolio-margin-api' },
  { name: 'copy-trading', path: '/docs/binance-copy-trading-api' },
  { name: 'managed-sub-account', path: '/docs/binance-managed-sub-account-api' },
  { name: 'institutional', path: '/docs/binance-institutional-api' },
];

// Additional paths to check from main docs page
const ADDITIONAL_PATHS = [
  '/docs/zh-CN/binance-spot-api',
  '/docs/binance-api-change-log',
  '/docs/general/info',
  '/docs/general/rest-api',
  '/docs/general/websocket-api',
  '/docs/general/sbe-encoding',
  '/docs/general/fix-api',
];

class BinanceScraper {
  private zai: any;
  private scrapedUrls = new Set<string>();
  private failedUrls = new Set<string>();

  async initialize() {
    this.zai = await ZAI.create();
    console.log('ZAI SDK initialized');
  }

  async readPage(url: string): Promise<PageReaderResult | null> {
    try {
      console.log(`Fetching: ${url}`);
      const result: PageReaderResult = await this.zai.functions.invoke('page_reader', {
        url: url
      });
      return result;
    } catch (error: any) {
      console.error(`Failed to fetch ${url}: ${error.message}`);
      this.failedUrls.add(url);
      return null;
    }
  }

  extractLinks(html: string, baseUrl: string): string[] {
    const links: string[] = [];
    const linkRegex = /href=["']([^"']+)["']/g;
    let match;

    while ((match = linkRegex.exec(html)) !== null) {
      let link = match[1];
      
      // Convert relative URLs to absolute
      if (link.startsWith('/')) {
        link = BASE_URL + link;
      }
      
      // Filter only documentation links
      if (link.includes('developers.binance.com') && link.includes('/docs/')) {
        links.push(link);
      }
    }

    return [...new Set(links)];
  }

  htmlToMarkdown(html: string, title: string): string {
    // Remove scripts and styles
    let content = html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, '')
      .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, '')
      .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '');

    // Convert common HTML elements to Markdown
    content = content
      .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '# $1\n\n')
      .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '## $1\n\n')
      .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '### $1\n\n')
      .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '#### $1\n\n')
      .replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, '##### $1\n\n')
      .replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi, '###### $1\n\n')
      .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '$1\n\n')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**')
      .replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, '**$1**')
      .replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '*$1*')
      .replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '*$1*')
      .replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, '`$1`')
      .replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, '```\n$1\n```\n\n')
      .replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, '> $1\n\n')
      .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n')
      .replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, '$1\n')
      .replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, '$1\n')
      .replace(/<a[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)')
      .replace(/<img[^>]*src=["']([^"']+)["'][^>]*alt=["']([^"']+)["'][^>]*\/?>/gi, '![$2]($1)')
      .replace(/<[^>]+>/g, '') // Remove remaining HTML tags
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/\n{3,}/g, '\n\n')
      .trim();

    return `# ${title}\n\n${content}`;
  }

  urlToFilePath(url: string): string {
    const urlObj = new URL(url);
    let filePath = urlObj.pathname
      .replace('/docs/', '')
      .replace(/\/$/, '')
      .replace(/\//g, path.sep);
    
    if (!filePath) {
      filePath = 'index';
    }
    
    return path.join(BASE_DIR, filePath + '.md');
  }

  async savePage(url: string, content: string, title: string): Promise<string> {
    const filePath = this.urlToFilePath(url);
    const dir = path.dirname(filePath);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    const markdown = this.htmlToMarkdown(content, title);
    fs.writeFileSync(filePath, markdown, 'utf-8');
    console.log(`Saved: ${filePath}`);
    
    return filePath;
  }

  async scrapeSection(sectionPath: string): Promise<string[]> {
    const url = BASE_URL + sectionPath;
    
    if (this.scrapedUrls.has(url)) {
      return [];
    }
    
    const result = await this.readPage(url);
    if (!result || !result.data) {
      return [];
    }
    
    this.scrapedUrls.add(url);
    
    // Save the page
    await this.savePage(url, result.data.html, result.data.title);
    
    // Extract links to other documentation pages
    const links = this.extractLinks(result.data.html, url);
    
    return links;
  }

  async scrapeMainPage(): Promise<string[]> {
    console.log('\n=== Scraping Main Documentation Page ===\n');
    const result = await this.readPage(BASE_URL + '/docs/');
    
    if (!result || !result.data) {
      console.log('Failed to fetch main page');
      return [];
    }
    
    const links = this.extractLinks(result.data.html, BASE_URL + '/docs/');
    console.log(`Found ${links.length} unique documentation links`);
    
    return links;
  }

  async scrapeAll(maxPages: number = 500) {
    console.log('Starting Binance documentation scraping...\n');
    
    // Get all links from main page
    const mainLinks = await this.scrapeMainPage();
    
    // Add section paths
    const allUrls = new Set<string>(mainLinks);
    
    for (const section of SECTIONS) {
      allUrls.add(BASE_URL + section.path);
    }
    
    for (const path of ADDITIONAL_PATHS) {
      allUrls.add(BASE_URL + path);
    }
    
    console.log(`\nTotal URLs to scrape: ${allUrls.size}`);
    
    let scraped = 0;
    const toScrape = [...allUrls];
    
    while (toScrape.length > 0 && scraped < maxPages) {
      const url = toScrape.shift()!;
      
      if (this.scrapedUrls.has(url)) {
        continue;
      }
      
      const newLinks = await this.scrapeSection(new URL(url).pathname);
      scraped++;
      
      // Add new links to queue
      for (const link of newLinks) {
        if (!this.scrapedUrls.has(link) && !toScrape.includes(link)) {
          toScrape.push(link);
        }
      }
      
      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
      
      console.log(`Progress: ${scraped}/${Math.min(allUrls.size + toScrape.length, maxPages)}`);
    }
    
    console.log('\n=== Scraping Complete ===');
    console.log(`Pages scraped: ${scraped}`);
    console.log(`Failed URLs: ${this.failedUrls.size}`);
    
    if (this.failedUrls.size > 0) {
      console.log('\nFailed URLs:');
      this.failedUrls.forEach(url => console.log(`  - ${url}`));
    }
  }

  async discoverSections(): Promise<string[]> {
    console.log('\n=== Discovering API Sections ===\n');
    
    const foundSections: string[] = [];
    
    for (const section of SECTIONS) {
      const result = await this.readPage(BASE_URL + section.path);
      if (result && result.data && result.data.html) {
        console.log(`✓ Found: ${section.name} (${section.path})`);
        foundSections.push(section.path);
      } else {
        console.log(`✗ Not found: ${section.name} (${section.path})`);
      }
      await new Promise(resolve => setTimeout(resolve, 300));
    }
    
    return foundSections;
  }
}

async function main() {
  const scraper = new BinanceScraper();
  await scraper.initialize();
  
  // First discover what sections exist
  await scraper.discoverSections();
  
  // Then scrape all
  await scraper.scrapeAll(500);
}

main().catch(console.error);
