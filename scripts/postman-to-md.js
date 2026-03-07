const fs = require('fs');
const path = require('path');

const POSTMAN_DIR = '/home/z/my-project/docs/exchange/binance/postman-collections';
const OUTPUT_DIR = '/home/z/my-project/docs/exchange/binance';

function parsePostmanCollection(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content);
}

function extractEndpoints(collection) {
  const endpoints = [];
  
  function processItem(item, parentName = '') {
    if (item.item) {
      // This is a folder
      item.item.forEach(subItem => {
        processItem(subItem, item.name);
      });
    } else if (item.request) {
      // This is an endpoint
      const endpoint = {
        name: item.name,
        method: item.request.method,
        url: typeof item.request.url === 'string' ? item.request.url : item.request.url?.raw || '',
        description: item.request.description || '',
        headers: item.request.header || [],
        params: [],
        body: item.request.body || null,
        responses: item.response || [],
        folder: parentName
      };
      
      // Extract query params
      if (item.request.url && typeof item.request.url === 'object' && item.request.url.query) {
        endpoint.params = item.request.url.query.map(q => ({
          key: q.key,
          value: q.value || '',
          description: q.description || ''
        }));
      }
      
      endpoints.push(endpoint);
    }
  }
  
  if (collection.item) {
    collection.item.forEach(item => processItem(item));
  }
  
  return endpoints;
}

function generateMarkdown(collection, endpoints) {
  const apiName = collection.info?.name || 'API Documentation';
  let md = `# ${apiName}\n\n`;
  md += `> **Source:** Binance Official Postman Collection\n\n`;
  md += `**Total Endpoints:** ${endpoints.length}\n\n`;
  md += `---\n\n`;
  
  // Group by folder
  const grouped = {};
  endpoints.forEach(ep => {
    const folder = ep.folder || 'General';
    if (!grouped[folder]) grouped[folder] = [];
    grouped[folder].push(ep);
  });
  
  // Generate documentation
  Object.entries(grouped).forEach(([folder, eps]) => {
    md += `## ${folder}\n\n`;
    
    eps.forEach(ep => {
      md += `### ${ep.name}\n\n`;
      md += `\`${ep.method}\` \`${ep.url}\`\n\n`;
      
      if (ep.description) {
        md += `**Description:** ${ep.description}\n\n`;
      }
      
      if (ep.params.length > 0) {
        md += `**Parameters:**\n\n`;
        md += `| Parameter | Type | Required | Description |\n`;
        md += `|-----------|------|----------|-------------|\n`;
        ep.params.forEach(p => {
          md += `| \`${p.key}\` | string | ${p.value ? 'No' : 'Yes'} | ${p.description || '-'} |\n`;
        });
        md += `\n`;
      }
      
      if (ep.body) {
        md += `**Request Body:**\n\n`;
        if (typeof ep.body === 'object' && ep.body.raw) {
          md += `\`\`\`json\n${ep.body.raw}\n\`\`\`\n\n`;
        } else if (typeof ep.body === 'string') {
          md += `\`\`\`json\n${ep.body}\n\`\`\`\n\n`;
        }
      }
      
      if (ep.responses && ep.responses.length > 0) {
        const response = ep.responses[0];
        if (response.body) {
          md += `**Response Example:**\n\n`;
          md += `\`\`\`json\n${response.body}\n\`\`\`\n\n`;
        }
      }
      
      md += `---\n\n`;
    });
  });
  
  return md;
}

function processAllCollections() {
  const files = fs.readdirSync(POSTMAN_DIR).filter(f => f.endsWith('.json'));
  
  files.forEach(file => {
    console.log(`Processing: ${file}`);
    
    try {
      const collection = parsePostmanCollection(path.join(POSTMAN_DIR, file));
      const endpoints = extractEndpoints(collection);
      const markdown = generateMarkdown(collection, endpoints);
      
      // Determine output folder
      const apiName = collection.info?.name || file.replace('.json', '');
      let folderName = apiName.toLowerCase()
        .replace(/binance/gi, '')
        .replace(/api/gi, '')
        .replace(/trading/gi, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
      
      const outputPath = path.join(OUTPUT_DIR, folderName, 'README.md');
      const outputDir = path.dirname(outputPath);
      
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      fs.writeFileSync(outputPath, markdown);
      console.log(`  -> Saved to: ${folderName}/README.md (${endpoints.length} endpoints)`);
      
    } catch (error) {
      console.error(`  Error processing ${file}: ${error.message}`);
    }
  });
}

processAllCollections();
console.log('\nDone!');
