/**
 * Binance API Documentation Scraper
 * Downloads all Binance API documentation from developers.binance.com and GitHub
 */

import * as fs from 'fs';
import * as path from 'path';

const BASE_DOCS_PATH = '/home/z/my-project/docs/exchange/binance';

// Documentation URLs to scrape
const DOC_URLS = {
  'binance-open-api': {
    'scopes': 'https://developers.binance.com/docs/binance-open-api/scopes',
    'apis': 'https://developers.binance.com/docs/binance-open-api/apis',
  },
  'oauth': {
    'introduction': 'https://developers.binance.com/docs/login/introduction',
    'web-integration': 'https://developers.binance.com/docs/',
    'app-integration': 'https://developers.binance.com/docs/login/app-integration',
  },
  'derivatives': {
    'usds-margined-futures': {
      'general-info': 'https://developers.binance.com/docs/derivatives/usds-margined-futures/general-info',
      'rest-api': 'https://developers.binance.com/docs/derivatives/usds-margined-futures/rest-api',
      'websocket-market-streams': 'https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams',
      'websocket-api': 'https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-api',
    },
    'coin-margined-futures': {
      'general-info': 'https://developers.binance.com/docs/derivatives/coin-margined-futures/general-info',
      'rest-api': 'https://developers.binance.com/docs/derivatives/coin-margined-futures/rest-api',
      'websocket-market-streams': 'https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams',
    },
    'option': {
      'general-info': 'https://developers.binance.com/docs/derivatives/option/general-info',
    },
    'portfolio-margin': {
      'general-info': 'https://developers.binance.com/docs/derivatives/portfolio-margin/general-info',
    },
  },
};

// GitHub raw content URLs
const GITHUB_URLS = {
  spot: {
    'rest-api': 'https://raw.githubusercontent.com/binance/binance-spot-api-docs/master/rest-api.md',
    'web-socket-streams': 'https://raw.githubusercontent.com/binance/binance-spot-api-docs/master/web-socket-streams.md',
    'web-socket-api': 'https://raw.githubusercontent.com/binance/binance-spot-api-docs/master/web-socket-api.md',
    'user-data-stream': 'https://raw.githubusercontent.com/binance/binance-spot-api-docs/master/user-data-stream.md',
    'enums': 'https://raw.githubusercontent.com/binance/binance-spot-api-docs/master/enums.md',
    'errors': 'https://raw.githubusercontent.com/binance/binance-spot-api-docs/master/errors.md',
    'filters': 'https://raw.githubusercontent.com/binance/binance-spot-api-docs/master/filters.md',
  },
  fix: {
    'fix-api': 'https://raw.githubusercontent.com/binance/binance-spot-api-docs/master/fix-api.md',
  },
  sbe: {
    'sbe-market-data-streams': 'https://raw.githubusercontent.com/binance/binance-spot-api-docs/master/sbe-market-data-streams.md',
  },
  faqs: {
    'api_key_types': 'https://raw.githubusercontent.com/binance/binance-spot-api-docs/master/faqs/api_key_types.md',
    'spot_glossary': 'https://raw.githubusercontent.com/binance/binance-spot-api-docs/master/faqs/spot_glossary.md',
    'commission_faq': 'https://raw.githubusercontent.com/binance/binance-spot-api-docs/master/faqs/commission_faq.md',
    'trailing-stop-faq': 'https://raw.githubusercontent.com/binance/binance-spot-api-docs/master/faqs/trailing-stop-faq.md',
    'stp_faq': 'https://raw.githubusercontent.com/binance/binance-spot-api-docs/master/faqs/stp_faq.md',
    'market_orders_faq': 'https://raw.githubusercontent.com/binance/binance-spot-api-docs/master/faqs/market_orders_faq.md',
    'market_data_only': 'https://raw.githubusercontent.com/binance/binance-spot-api-docs/master/faqs/market_data_only.md',
    'sor_faq': 'https://raw.githubusercontent.com/binance/binance-spot-api-docs/master/faqs/sor_faq.md',
    'order_count_decrement': 'https://raw.githubusercontent.com/binance/binance-spot-api-docs/master/faqs/order_count_decrement.md',
    'order_amend_keep_priority': 'https://raw.githubusercontent.com/binance/binance-spot-api-docs/master/faqs/order_amend_keep_priority.md',
    'pegged_orders': 'https://raw.githubusercontent.com/binance/binance-spot-api-docs/master/faqs/pegged_orders.md',
    'sbe_faq': 'https://raw.githubusercontent.com/binance/binance-spot-api-docs/master/faqs/sbe_faq.md',
  },
  demo: {
    'general-info': 'https://raw.githubusercontent.com/binance/binance-spot-api-docs/master/demo-mode/general-info.md',
  },
  testnet: {
    'general-info': 'https://raw.githubusercontent.com/binance/binance-spot-api-docs/master/testnet/general-info.md',
  },
  changelog: {
    'CHANGELOG': 'https://raw.githubusercontent.com/binance/binance-spot-api-docs/master/CHANGELOG.md',
  },
};

interface DocSection {
  name: string;
  description: string;
  path: string;
  files: string[];
}

const DOC_STRUCTURE: DocSection[] = [
  {
    name: 'Spot Trading API',
    description: 'REST API and WebSocket streams for spot trading',
    path: 'spot',
    files: ['rest-api.md', 'web-socket-streams.md', 'web-socket-api.md', 'user-data-stream.md', 'enums.md', 'errors.md', 'filters.md'],
  },
  {
    name: 'FIX API',
    description: 'FIX protocol for institutional trading',
    path: 'fix-api',
    files: ['fix-api.md'],
  },
  {
    name: 'SBE Encoding',
    description: 'Simple Binary Encoding for market data',
    path: 'sbe',
    files: ['sbe-market-data-streams.md'],
  },
  {
    name: 'FAQs',
    description: 'Frequently asked questions about Binance API',
    path: 'faqs',
    files: ['api_key_types.md', 'spot_glossary.md', 'commission_faq.md', 'trailing-stop-faq.md', 'stp_faq.md', 'market_orders_faq.md', 'market_data_only.md', 'sor_faq.md', 'order_count_decrement.md', 'order_amend_keep_priority.md', 'pegged_orders.md', 'sbe_faq.md'],
  },
  {
    name: 'Demo Mode',
    description: 'Paper trading and demo environment',
    path: 'demo-mode',
    files: ['general-info.md'],
  },
];

async function fetchUrl(url: string): Promise<string> {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    return '';
  }
}

function extractContentFromHtml(html: string, url: string): string {
  // Extract content from Docusaurus HTML
  const contentMatch = html.match(/<div class="theme-doc-markdown markdown">([\s\S]*?)<\/div>\s*<\/article>/);
  if (contentMatch) {
    let content = contentMatch[1];
    
    // Convert HTML to Markdown-like format
    content = content
      .replace(/<header>\s*<h1>([^<]*)<\/h1>\s*<\/header>/g, '# $1\n\n')
      .replace(/<h1[^>]*>([^<]*)<\/h1>/g, '# $1\n\n')
      .replace(/<h2[^>]*>([^<]*)<\/h2>/g, '\n## $1\n\n')
      .replace(/<h3[^>]*>([^<]*)<\/h3>/g, '\n### $1\n\n')
      .replace(/<h4[^>]*>([^<]*)<\/h4>/g, '\n#### $1\n\n')
      .replace(/<p>([^<]*)<\/p>/g, '$1\n\n')
      .replace(/<code>([^<]*)<\/code>/g, '`$1`')
      .replace(/<strong>([^<]*)<\/strong>/g, '**$1**')
      .replace(/<em>([^<]*)<\/em>/g, '*$1*')
      .replace(/<li>([^<]*)<\/li>/g, '- $1\n')
      .replace(/<br\s*\/?>/g, '\n')
      .replace(/<[^>]+>/g, '')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/\n{3,}/g, '\n\n')
      .trim();
    
    return content;
  }
  return '';
}

function addHeaderToMarkdown(content: string, title: string, url: string): string {
  const header = `> **Source:** ${url}\n\n`;
  return header + content;
}

async function scrapeBinanceDocs() {
  console.log('Starting Binance API documentation scraping...');
  
  // Ensure base directory exists
  fs.mkdirSync(BASE_DOCS_PATH, { recursive: true });
  
  // Track all downloaded files for README
  const downloadedFiles: { section: string; file: string; path: string }[] = [];
  
  // Download from GitHub
  console.log('\n📥 Downloading from GitHub...');
  
  for (const [category, files] of Object.entries(GITHUB_URLS)) {
    const categoryPath = path.join(BASE_DOCS_PATH, category === 'spot' ? 'spot' : category);
    fs.mkdirSync(categoryPath, { recursive: true });
    
    for (const [name, url] of Object.entries(files)) {
      console.log(`  Downloading ${name}...`);
      const content = await fetchUrl(url);
      if (content) {
        const filename = name.endsWith('.md') ? name : `${name}.md`;
        const filepath = path.join(categoryPath, filename);
        const contentWithHeader = addHeaderToMarkdown(content, name, url);
        fs.writeFileSync(filepath, contentWithHeader);
        downloadedFiles.push({ section: category, file: filename, path: `${category}/${filename}` });
      }
    }
  }
  
  // Try to download from developers.binance.com
  console.log('\n📥 Attempting to download from developers.binance.com...');
  
  // Download OAuth docs
  const oauthPath = path.join(BASE_DOCS_PATH, 'oauth');
  fs.mkdirSync(oauthPath, { recursive: true });
  
  for (const [name, url] of Object.entries(DOC_URLS.oauth)) {
    console.log(`  Downloading ${name}...`);
    const html = await fetchUrl(url);
    if (html) {
      const content = extractContentFromHtml(html, url);
      if (content) {
        const filepath = path.join(oauthPath, `${name}.md`);
        const contentWithHeader = addHeaderToMarkdown(content, name, url);
        fs.writeFileSync(filepath, contentWithHeader);
        downloadedFiles.push({ section: 'oauth', file: `${name}.md`, path: `oauth/${name}.md` });
      }
    }
  }
  
  // Download derivatives docs
  const derivativesPath = path.join(BASE_DOCS_PATH, 'derivatives');
  fs.mkdirSync(derivativesPath, { recursive: true });
  
  for (const [derivType, derivDocs] of Object.entries(DOC_URLS.derivatives)) {
    const derivTypePath = path.join(derivativesPath, derivType);
    fs.mkdirSync(derivTypePath, { recursive: true });
    
    for (const [name, url] of Object.entries(derivDocs)) {
      console.log(`  Downloading ${derivType}/${name}...`);
      const html = await fetchUrl(url);
      if (html) {
        const content = extractContentFromHtml(html, url);
        if (content) {
          const filepath = path.join(derivTypePath, `${name}.md`);
          const contentWithHeader = addHeaderToMarkdown(content, name, url);
          fs.writeFileSync(filepath, contentWithHeader);
          downloadedFiles.push({ section: derivType, file: `${name}.md`, path: `derivatives/${derivType}/${name}.md` });
        }
      }
    }
  }
  
  console.log('\n✅ Documentation scraping completed!');
  console.log(`Total files downloaded: ${downloadedFiles.length}`);
  
  return downloadedFiles;
}

// Run the scraper
scrapeBinanceDocs().catch(console.error);
