#!/usr/bin/env bun

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://developers.binance.com/docs';
const OUTPUT_DIR = '/home/z/my-project/docs/exchange/binance';

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function fetchHTML(url) {
  try {
    console.log(`Fetching: ${url}`);
    const result = execSync(`curl -s "${url}" -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" --max-time 30`, {
      encoding: 'utf-8',
      maxBuffer: 50 * 1024 * 1024
    });
    return result;
  } catch (error) {
    console.error(`Error fetching ${url}:`, error.message);
    return '';
  }
}

function extractMarkdown(html, url) {
  if (!html) return null;

  // Extract title
  let title = 'Untitled';
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (titleMatch) {
    title = titleMatch[1]
      .replace(' | Binance Open Platform', '')
      .replace(' | Binance Developers', '')
      .trim();
  }

  // Try to find the main content div in Docusaurus
  let content = '';

  // Method 1: Look for theme-doc-markdown class
  const markdownMatch = html.match(/<div[^>]*class="[^"]*theme-doc-markdown[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/article>/i);
  if (markdownMatch) {
    content = markdownMatch[1];
  }

  // Method 2: Look for article tag
  if (!content) {
    const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
    if (articleMatch) {
      content = articleMatch[1];
    }
  }

  // Method 3: Look for main content area
  if (!content) {
    const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
    if (mainMatch) {
      content = mainMatch[1];
    }
  }

  // If still no content, try to get the entire body text
  if (!content) {
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
      content = bodyMatch[1];
      // Remove scripts, styles, nav, footer
      content = content
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
        .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, '')
        .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '')
        .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, '');
    }
  }

  if (!content) return null;

  // Convert HTML to Markdown
  let markdown = content;

  // Remove remaining script and style tags
  markdown = markdown.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  markdown = markdown.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  markdown = markdown.replace(/<!--[\s\S]*?-->/g, '');

  // Convert headings
  markdown = markdown.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n# $1\n\n');
  markdown = markdown.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n\n');
  markdown = markdown.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n\n');
  markdown = markdown.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '\n#### $1\n\n');
  markdown = markdown.replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, '\n##### $1\n\n');
  markdown = markdown.replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi, '\n###### $1\n\n');

  // Convert links - must be done before other tags
  markdown = markdown.replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)');

  // Convert code blocks first (before inline code)
  markdown = markdown.replace(/<pre[^>]*><code[^>]*class="language-([^"]*)"[^>]*>([\s\S]*?)<\/code><\/pre>/gi, '\n```$1\n$2\n```\n\n');
  markdown = markdown.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, '\n```\n$1\n```\n\n');

  // Convert inline code
  markdown = markdown.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, '`$1`');

  // Convert bold and italic
  markdown = markdown.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**');
  markdown = markdown.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, '**$1**');
  markdown = markdown.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '*$1*');
  markdown = markdown.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '*$1*');

  // Convert tables
  markdown = markdown.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (match, content) => {
    let table = content;
    // Extract header row
    table = table.replace(/<thead[^>]*>([\s\S]*?)<\/thead>/gi, '$1');
    table = table.replace(/<tbody[^>]*>([\s\S]*?)<\/tbody>/gi, '$1');
    
    // Convert rows
    table = table.replace(/<tr[^>]*>([\s\S]*?)<\/tr>/gi, (rowMatch, rowContent) => {
      const cells = rowContent.match(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi) || [];
      const cellContents = cells.map(c => {
        return c.replace(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi, '$1')
          .replace(/<[^>]+>/g, '').trim();
      });
      return '| ' + cellContents.join(' | ') + ' |\n';
    });
    return table + '\n';
  });

  // Convert lists
  markdown = markdown.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n');
  markdown = markdown.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, '$1\n');
  markdown = markdown.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, '$1\n');

  // Convert blockquotes
  markdown = markdown.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, '> $1\n\n');

  // Convert paragraphs and divs
  markdown = markdown.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '$1\n\n');
  markdown = markdown.replace(/<div[^>]*>([\s\S]*?)<\/div>/gi, '$1\n');

  // Convert line breaks
  markdown = markdown.replace(/<br\s*\/?>/gi, '\n');
  markdown = markdown.replace(/<hr\s*\/?>/gi, '\n---\n');

  // Remove remaining HTML tags
  markdown = markdown.replace(/<[^>]+>/g, '');

  // Decode HTML entities
  markdown = markdown
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#x([0-9A-Fa-f]+);/g, (match, code) => String.fromCharCode(parseInt(code, 16)));

  // Clean up whitespace
  markdown = markdown
    .replace(/\n{3,}/g, '\n\n')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n +\n/g, '\n\n')
    .trim();

  return { title, markdown, url };
}

function savePage(pageInfo, section, filename) {
  const sectionDir = path.join(OUTPUT_DIR, section);
  if (!fs.existsSync(sectionDir)) {
    fs.mkdirSync(sectionDir, { recursive: true });
  }

  const filepath = path.join(sectionDir, `${filename}.md`);
  const content = `# ${pageInfo.title}

> **Source:** ${pageInfo.url}

${pageInfo.markdown}

---
*Documentation scraped for AI agent reference*
`;

  fs.writeFileSync(filepath, content, 'utf-8');
  console.log(`  Saved: ${filepath}`);
}

// Known pages to scrape
const pages = [
  // Login/OAuth
  { path: '/login/introduction', section: 'login', file: 'introduction' },
  { path: '/login/web-integration', section: 'login', file: 'web-integration' },
  { path: '/login/app-integration', section: 'login', file: 'app-integration' },

  // Binance Open API
  { path: '/binance-open-api/overview', section: 'binance-open-api', file: 'overview' },
  { path: '/binance-open-api/scopes', section: 'binance-open-api', file: 'scopes' },

  // Spot API
  { path: '/binance-spot-api/overview', section: 'binance-spot-api', file: 'overview' },
  { path: '/binance-spot-api/general-info', section: 'binance-spot-api', file: 'general-info' },
  { path: '/binance-spot-api/public-api', section: 'binance-spot-api', file: 'public-api' },
  { path: '/binance-spot-api/trading-rest-api', section: 'binance-spot-api', file: 'trading-rest-api' },
  { path: '/binance-spot-api/trading-websocket', section: 'binance-spot-api', file: 'trading-websocket' },
  { path: '/binance-spot-api/market-streams', section: 'binance-spot-api', file: 'market-streams' },
  { path: '/binance-spot-api/enums', section: 'binance-spot-api', file: 'enums' },
  { path: '/binance-spot-api/errors', section: 'binance-spot-api', file: 'errors' },

  // Futures API
  { path: '/binance-futures-api/overview', section: 'binance-futures-api', file: 'overview' },
  { path: '/binance-futures-api/general-info', section: 'binance-futures-api', file: 'general-info' },
  { path: '/binance-futures-api/public-api', section: 'binance-futures-api', file: 'public-api' },
  { path: '/binance-futures-api/trade-rest-api', section: 'binance-futures-api', file: 'trade-rest-api' },
  { path: '/binance-futures-api/websocket-market-streams', section: 'binance-futures-api', file: 'websocket-market-streams' },
  { path: '/binance-futures-api/user-data-stream', section: 'binance-futures-api', file: 'user-data-stream' },
  { path: '/binance-futures-api/errors', section: 'binance-futures-api', file: 'errors' },

  // Options API
  { path: '/binance-options-api/overview', section: 'binance-options-api', file: 'overview' },
  { path: '/binance-options-api/general-info', section: 'binance-options-api', file: 'general-info' },

  // Margin
  { path: '/margin/overview', section: 'margin', file: 'overview' },
  { path: '/margin/general-info', section: 'margin', file: 'general-info' },

  // WebSocket
  { path: '/websocket/general-info', section: 'websocket', file: 'general-info' },
  { path: '/websocket/market-streams', section: 'websocket', file: 'market-streams' },

  // REST API
  { path: '/rest-api/general-info', section: 'rest-api', file: 'general-info' },
  { path: '/rest-api/authentication', section: 'rest-api', file: 'authentication' },

  // Simple Earn
  { path: '/simple-earn/overview', section: 'simple-earn', file: 'overview' },

  // Crypto Loan
  { path: '/crypto-loan/overview', section: 'crypto-loan', file: 'overview' },

  // Sub Account
  { path: '/sub-account/overview', section: 'sub-account', file: 'overview' },
];

console.log('Starting Binance documentation scraping...\n');

let savedCount = 0;
let failedCount = 0;

for (const page of pages) {
  const url = `${BASE_URL}${page.path}`;
  const html = fetchHTML(url);

  if (html) {
    const pageInfo = extractMarkdown(html, url);
    if (pageInfo && pageInfo.markdown && pageInfo.markdown.length > 50) {
      savePage(pageInfo, page.section, page.file);
      savedCount++;
    } else {
      console.log(`  Warning: No content extracted for ${url}`);
      failedCount++;
    }
  } else {
    failedCount++;
  }

  // Small delay between requests
  Bun.sleepSync(300);
}

// Create README
const readme = `# Binance API Documentation

> **Source:** https://developers.binance.com/docs/

Comprehensive Binance API documentation for AI agent reference.

## Sections

### Trading APIs
- [Binance Open API](./binance-open-api/) - OAuth scopes and general API access
- [Spot Trading](./binance-spot-api/) - Spot market trading APIs
- [Futures Trading](./binance-futures-api/) - Futures market APIs
- [Options Trading](./binance-options-api/) - Options market APIs
- [Margin Trading](./margin/) - Margin trading APIs

### Account & Authentication
- [Login (OAuth 2)](./login/) - OAuth 2.0 authentication
- [Sub Account](./sub-account/) - Sub-account management

### Earn Products
- [Simple Earn](./simple-earn/) - Staking and savings products
- [Crypto Loan](./crypto-loan/) - Crypto-backed loans

### Technical Reference
- [WebSocket](./websocket/) - Real-time data streams
- [REST API](./rest-api/) - REST API reference

## API Endpoints

### Base URLs
- **Spot:** \`https://api.binance.com\`
- **Futures (USDT-M):** \`https://fapi.binance.com\`
- **Futures (Coin-M):** \`https://dapi.binance.com\`
- **Options:** \`https://eapi.binance.com\`

### Authentication
All private endpoints require HMAC SHA256 signatures using API keys.

Example signature generation:
\`\`\`javascript
const crypto = require('crypto');

function signature(queryString, secretKey) {
  return crypto
    .createHmac('sha256', secretKey)
    .update(queryString)
    .digest('hex');
}
\`\`\`

## Common Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| \`recvWindow\` | long | Time window for request validity (max 60000ms) |
| \`timestamp\` | long | Request timestamp in milliseconds |
| \`signature\` | string | HMAC SHA256 signature |

## Rate Limits

- **Spot:** 1200 requests per minute
- **Futures:** 2400 requests per minute
- **Orders:** 50-300 orders per 10 seconds (varies by endpoint)

## Error Codes

| Code | Description |
|------|-------------|
| \`-1000\` | Unknown error |
| \`-1001\` | Disconnected |
| \`-1002\` | Unauthorized |
| \`-1003\` | Too many requests (WAF) |
| \`-1006\` | Unexpected response |
| \`-1007\` | Timeout |
| \`-1013\` | Invalid quantity/price |
| \`-1015\` | Too much request weight |
| \`-1021\` | Timestamp outside recvWindow |
| \`-1022\` | Invalid signature |
| \`-2010\` | New order rejected |
| \`-2011\` | Cancel order rejected |
| \`-2013\` | Order does not exist |
| \`-2014\` | API key format invalid |
| \`-2015\` | Invalid API key/permission |

---
*Documentation scraped for AI agent reference*
*Last updated: ${new Date().toISOString()}*
`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'README.md'), readme, 'utf-8');

console.log('\n=========================================');
console.log('Scraping complete!');
console.log(`Output directory: ${OUTPUT_DIR}`);
console.log(`Pages saved: ${savedCount}`);
console.log(`Pages failed: ${failedCount}`);
