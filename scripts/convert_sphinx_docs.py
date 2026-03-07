#!/usr/bin/env python3
import os
import re
import html

def extract_text_content(html_content):
    """Extract text from HTML with proper formatting"""
    result = []
    
    # Extract code blocks first
    code_blocks = []
    def save_code(match):
        code = match.group(1)
        code = html.unescape(code)
        code_blocks.append(code)
        return f'__CODE_BLOCK_{len(code_blocks)-1}__'
    
    # Find all pre blocks
    html_content = re.sub(r'<pre[^>]*>(.*?)</pre>', save_code, html_content, flags=re.DOTALL)
    
    # Extract div.highlight blocks
    html_content = re.sub(r'<div[^>]*class="highlight[^"]*"[^>]*>.*?<pre[^>]*>(.*?)</pre>.*?</div>', save_code, html_content, flags=re.DOTALL)
    
    # Remove script and style tags
    html_content = re.sub(r'<script[^>]*>.*?</script>', '', html_content, flags=re.DOTALL)
    html_content = re.sub(r'<style[^>]*>.*?</style>', '', html_content, flags=re.DOTALL)
    
    # Remove navigation elements
    html_content = re.sub(r'<nav[^>]*>.*?</nav>', '', html_content, flags=re.DOTALL)
    html_content = re.sub(r'<div[^>]*class="[^"]*wy-side-nav[^"]*"[^>]*>.*?</div>', '', html_content, flags=re.DOTALL)
    html_content = re.sub(r'<div[^>]*class="[^"]*rst-footer[^"]*"[^>]*>.*?</div>', '', html_content, flags=re.DOTALL)
    
    # Convert headings
    html_content = re.sub(r'<h1[^>]*>(.*?)</h1>', r'\n# \1\n', html_content, flags=re.DOTALL)
    html_content = re.sub(r'<h2[^>]*>(.*?)</h2>', r'\n## \1\n', html_content, flags=re.DOTALL)
    html_content = re.sub(r'<h3[^>]*>(.*?)</h3>', r'\n### \1\n', html_content, flags=re.DOTALL)
    html_content = re.sub(r'<h4[^>]*>(.*?)</h4>', r'\n#### \1\n', html_content, flags=re.DOTALL)
    
    # Convert formatting
    html_content = re.sub(r'<strong[^>]*>(.*?)</strong>', r'**\1**', html_content, flags=re.DOTALL)
    html_content = re.sub(r'<b[^>]*>(.*?)</b>', r'**\1**', html_content, flags=re.DOTALL)
    html_content = re.sub(r'<em[^>]*>(.*?)</em>', r'*\1*', html_content, flags=re.DOTALL)
    html_content = re.sub(r'<i[^>]*>(.*?)</i>', r'*\1*', html_content, flags=re.DOTALL)
    
    # Convert inline code
    html_content = re.sub(r'<code[^>]*class="[^"]*"[^>]*>(.*?)</code>', r'`\1`', html_content, flags=re.DOTALL)
    html_content = re.sub(r'<code[^>]*>(.*?)</code>', r'`\1`', html_content, flags=re.DOTALL)
    
    # Convert links
    html_content = re.sub(r'<a[^>]*href="([^"]*)"[^>]*>(.*?)</a>', r'[\2](\1)', html_content, flags=re.DOTALL)
    
    # Convert paragraphs
    html_content = re.sub(r'<p[^>]*>(.*?)</p>', r'\n\1\n', html_content, flags=re.DOTALL)
    
    # Convert lists
    html_content = re.sub(r'<li[^>]*>(.*?)</li>', r'\n- \1', html_content, flags=re.DOTALL)
    html_content = re.sub(r'<ul[^>]*>(.*?)</ul>', r'\1\n', html_content, flags=re.DOTALL)
    html_content = re.sub(r'<ol[^>]*>(.*?)</ol>', r'\1\n', html_content, flags=re.DOTALL)
    
    # Convert tables
    html_content = re.sub(r'<tr[^>]*>(.*?)</tr>', r'\1\n', html_content, flags=re.DOTALL)
    html_content = re.sub(r'<th[^>]*>(.*?)</th>', r'| \1 ', html_content, flags=re.DOTALL)
    html_content = re.sub(r'<td[^>]*>(.*?)</td>', r'| \1 ', html_content, flags=re.DOTALL)
    
    # Convert line breaks
    html_content = re.sub(r'<br\s*/?>', '\n', html_content)
    html_content = re.sub(r'<hr\s*/?>', '\n---\n', html_content)
    
    # Remove remaining tags
    html_content = re.sub(r'<div[^>]*>', '', html_content)
    html_content = re.sub(r'</div>', '', html_content)
    html_content = re.sub(r'<span[^>]*>', '', html_content)
    html_content = re.sub(r'</span>', '', html_content)
    html_content = re.sub(r'<[^>]+>', '', html_content)
    
    # Unescape HTML entities
    html_content = html.unescape(html_content)
    
    # Restore code blocks
    for i, code in enumerate(code_blocks):
        html_content = html_content.replace(f'__CODE_BLOCK_{i}__', f'\n```python\n{code}\n```\n')
    
    # Clean up whitespace
    html_content = re.sub(r'\n{3,}', '\n\n', html_content)
    html_content = re.sub(r' {2,}', ' ', html_content)
    
    return html_content.strip()

def process_page(file_path, page_name):
    """Process a single documentation page"""
    print(f"Processing: {page_name}")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract the raw HTML part
        match = re.search(r'<!-- Raw HTML content from page -->(.*)', content, re.DOTALL)
        if match:
            html_content = match.group(1)
        else:
            return False
        
        # Extract title
        title_match = re.search(r'<title>([^<]+)</title>', html_content)
        title = title_match.group(1) if title_match else page_name
        title = title.split('—')[0].strip()
        
        # Find main content area
        content_match = re.search(r'<div[^>]*class="wy-nav-content"[^>]*>(.*?)<div[^>]*class="rst-footer', html_content, re.DOTALL)
        if content_match:
            main_content = content_match.group(1)
        else:
            # Try alternative pattern
            content_match = re.search(r'<section[^>]*>(.*?)</section>', html_content, re.DOTALL)
            if content_match:
                main_content = content_match.group(1)
            else:
                main_content = html_content
        
        # Extract text
        markdown = extract_text_content(main_content)
        
        # Create output
        output = f"""# {title}

> **Source:** https://python-binance.readthedocs.io/en/latest/{page_name}.html

---

{markdown}
"""
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(output)
        
        size = os.path.getsize(file_path)
        print(f"  -> {page_name}.md ({size} bytes)")
        return True
        
    except Exception as e:
        print(f"  Error: {e}")
        return False

def main():
    base_dir = "/home/z/my-project/docs/exchange/binance/python"
    
    pages = [
        "overview", "constants", "general", "market_data", "account",
        "sub_accounts", "margin", "websockets", "depth_cache", "withdraw",
        "helpers", "exceptions", "faqs", "changelog", "binance"
    ]
    
    success = 0
    for page in pages:
        file_path = f"{base_dir}/{page}.md"
        if os.path.exists(file_path):
            if process_page(file_path, page):
                success += 1
    
    print(f"\nProcessed {success}/{len(pages)} files")

if __name__ == "__main__":
    main()
