#!/usr/bin/env bun

import { execSync } from 'child_process';
import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'fs';
import { join } from 'path';

const BASE_URL = 'https://developers.binance.com/docs';
const OUTPUT_DIR = '/home/z/my-project/docs/exchange/binance';

// Create output directory
mkdirSync(OUTPUT_DIR, { recursive: true });

// Known documentation sections
const sections = [
  { name: 'binance-open-api', path: '/binance-open-api' },
  { name: 'login', path: '/login' },
  { name: 'binance-spot-api', path: '/binance-spot-api' },
  { name: 'binance-futures-api', path: '/binance-futures-api' },
  { name: 'binance-options-api', path: '/binance-options-api' },
  { name: 'crypto-loan', path: '/crypto-loan' },
  { name: 'simple-earn', path: '/simple-earn' },
  { name: 'dual-Investment', path: '/dual-Investment' },
  { name: 'staking', path: '/staking' },
  { name: 'pay', path: '/pay' },
  { name: 'convert', path: '/convert' },
  { name: 'nft', path: '/nft' },
  { name: 'sub-account', path: '/sub-account' },
  { name: 'margin', path: '/margin' },
];

interface PageInfo {
  title: string;
  content: string;
  url: string;
}

function fetchPage(url: string): string {
  try {
    console.log(`Fetching: ${url}`);
    const result = execSync(`curl -s "${url}" -H "User-Agent: Mozilla/5.0" --max-time 30`, {
      encoding: 'utf-8',
      maxBuffer: 50 * 1024 * 1024
    });
    return result;
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    return '';
  }
}

function extractContent(html: string, url: string): PageInfo | null {
  // Extract title
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].replace(' | Binance Open Platform', '').trim() : 'Untitled';

  // Extract main content from Docusaurus
  const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  const markdownMatch = html.match(/<div class="theme-doc-markdown markdown[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/article>/i);

  let content = '';

  if (markdownMatch) {
    content = markdownMatch[1];
  } else if (articleMatch) {
    content = articleMatch[1];
  } else if (mainMatch) {
    content = mainMatch[1];
  }

  if (!content) {
    return null;
  }

  // Convert HTML to Markdown-like format
  content = htmlToMarkdown(content);

  return { title, content, url };
}

function htmlToMarkdown(html: string): string {
  let md = html;

  // Remove scripts and styles
  md = md.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  md = md.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  md = md.replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, '');

  // Convert headers
  md = md.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '# $1\n\n');
  md = md.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '## $1\n\n');
  md = md.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '### $1\n\n');
  md = md.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '#### $1\n\n');
  md = md.replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, '##### $1\n\n');
  md = md.replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi, '###### $1\n\n');

  // Convert links
  md = md.replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)');

  // Convert bold and italic
  md = md.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**');
  md = md.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, '**$1**');
  md = md.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '*$1*');
  md = md.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '*$1*');

  // Convert code blocks
  md = md.replace(/<pre[^>]*><code[^>]*class="language-([^"]*)"[^>]*>([\s\S]*?)<\/code><\/pre>/gi, '```$1\n$2\n```\n\n');
  md = md.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, '```\n$1\n```\n\n');
  md = md.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, '`$1`');

  // Convert lists
  md = md.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n');
  md = md.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, '$1\n');
  md = md.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, '$1\n');

  // Convert paragraphs and divs
  md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '$1\n\n');
  md = md.replace(/<div[^>]*>([\s\S]*?)<\/div>/gi, '$1\n');

  // Convert tables
  md = md.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (match) => {
    let table = match;
    table = table.replace(/<thead[^>]*>([\s\S]*?)<\/thead>/gi, '$1');
    table = table.replace(/<tbody[^>]*>([\s\S]*?)<\/tbody>/gi, '$1');
    table = table.replace(/<tr[^>]*>([\s\S]*?)<\/tr>/gi, (row) => {
      const cells = row.match(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi) || [];
      const cellContent = cells.map(c => c.replace(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi, '$1').trim()).join(' | ');
      return `| ${cellContent} |\n`;
    });
    return table + '\n';
  });

  // Convert blockquotes
  md = md.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, '> $1\n\n');

  // Remove remaining HTML tags
  md = md.replace(/<[^>]+>/g, '');

  // Clean up HTML entities
  md = md.replace(/&amp;/g, '&');
  md = md.replace(/&lt;/g, '<');
  md = md.replace(/&gt;/g, '>');
  md = md.replace(/&quot;/g, '"');
  md = md.replace(/&#x27;/g, "'");
  md = md.replace(/&nbsp;/g, ' ');

  // Clean up whitespace
  md = md.replace(/\n{3,}/g, '\n\n');
  md = md.replace(/[ \t]+/g, ' ');
  md = md.trim();

  return md;
}

function savePage(page: PageInfo, section: string, filename: string): void {
  const sectionDir = join(OUTPUT_DIR, section);
  mkdirSync(sectionDir, { recursive: true });

  const filepath = join(sectionDir, filename);
  const content = `# ${page.title}

> Source: ${page.url}

${page.content}
`;

  writeFileSync(filepath, content, 'utf-8');
  console.log(`Saved: ${filepath}`);
}

function extractLinks(html: string, basePath: string): string[] {
  const links: string[] = [];
  const linkRegex = /href="(\/docs\/[^"]+)"/g;
  let match;

  while ((match = linkRegex.exec(html)) !== null) {
    const link = match[1];
    if (!links.includes(link)) {
      links.push(link);
    }
  }

  return links;
}

async function main() {
  console.log('Starting Binance documentation scraping...\n');

  const allPages: Map<string, PageInfo> = new Map();
  const visitedUrls = new Set<string>();

  // First, get all links from the main page
  const mainHtml = fetchPage(BASE_URL);
  const allLinks = extractLinks(mainHtml, '/docs');

  console.log(`Found ${allLinks.length} unique links\n`);

  // Add discovered section paths
  for (const section of sections) {
    const sectionUrl = `${section.path}/introduction`;
    if (!allLinks.includes(sectionUrl)) {
      allLinks.push(sectionUrl);
    }
    // Add common paths
    allLinks.push(`${section.path}/overview`);
    allLinks.push(`${section.path}/scopes`);
    allLinks.push(section.path);
  }

  // Fetch each page
  for (const link of allLinks) {
    if (visitedUrls.has(link)) continue;
    visitedUrls.add(link);

    const fullUrl = `https://developers.binance.com${link}`;
    const html = fetchPage(fullUrl);

    if (html) {
      const pageInfo = extractContent(html, fullUrl);
      if (pageInfo && pageInfo.content.length > 100) {
        allPages.set(link, pageInfo);

        // Extract section from path
        const pathParts = link.split('/').filter(p => p);
        const section = pathParts[1] || 'general';
        const filename = pathParts.slice(2).join('_') || 'index';

        savePage(pageInfo, section, `${filename}.md`);
      }
    }

    // Small delay between requests
    await new Promise(r => setTimeout(r, 500));
  }

  // Create README
  const readme = `# Binance API Documentation

> Source: https://developers.binance.com/docs/

This documentation was scraped for AI agent reference.

## Sections

${sections.map(s => `- [${s.name}](./${s.name}/)`).join('\n')}

## Statistics

- Total pages: ${allPages.size}
- Scraped at: ${new Date().toISOString()}
`;

  writeFileSync(join(OUTPUT_DIR, 'README.md'), readme, 'utf-8');

  console.log(`\n\nScraping complete!`);
  console.log(`Total pages saved: ${allPages.size}`);
  console.log(`Output directory: ${OUTPUT_DIR}`);
}

main().catch(console.error);
