#!/usr/bin/env python3
import os
import re
from html.parser import HTMLParser
from html import unescape

class HTMLToMarkdown(HTMLParser):
    def __init__(self):
        super().__init__()
        self.reset()
        self.result = []
        self.current_tag = None
        self.list_depth = 0
        self.in_pre = False
        self.in_code = False
        self.code_class = ''
        self.skip_nav = False
        self.skip_script = False
        self.in_h1 = False
        
    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        self.current_tag = tag
        
        # Skip navigation and scripts
        if tag in ['nav', 'script', 'style', 'header', 'footer']:
            if tag == 'nav':
                self.skip_nav = True
            elif tag == 'script':
                self.skip_script = True
            return
            
        if self.skip_nav or self.skip_script:
            return
            
        # Handle different tags
        if tag == 'h1':
            self.in_h1 = True
            self.result.append('\n# ')
        elif tag == 'h2':
            self.result.append('\n## ')
        elif tag == 'h3':
            self.result.append('\n### ')
        elif tag == 'h4':
            self.result.append('\n#### ')
        elif tag == 'h5':
            self.result.append('\n##### ')
        elif tag == 'h6':
            self.result.append('\n###### ')
        elif tag == 'p':
            self.result.append('\n\n')
        elif tag == 'br':
            self.result.append('\n')
        elif tag == 'hr':
            self.result.append('\n---\n')
        elif tag == 'strong' or tag == 'b':
            self.result.append('**')
        elif tag == 'em' or tag == 'i':
            self.result.append('*')
        elif tag == 'code':
            self.in_code = True
            code_class = attrs_dict.get('class', '')
            if 'highlight' in code_class or self.in_pre:
                pass  # Will be handled by pre
            else:
                self.result.append('`')
        elif tag == 'pre':
            self.in_pre = True
            self.result.append('\n```python\n')
        elif tag == 'a':
            href = attrs_dict.get('href', '')
            self.result.append('[')
        elif tag == 'img':
            alt = attrs_dict.get('alt', '')
            src = attrs_dict.get('src', '')
            self.result.append(f'![{alt}]({src})')
        elif tag == 'li':
            indent = '  ' * self.list_depth
            self.result.append(f'\n{indent}- ')
        elif tag == 'ul':
            self.list_depth += 1
        elif tag == 'ol':
            self.list_depth += 1
        elif tag == 'blockquote':
            self.result.append('\n> ')
        elif tag == 'table':
            self.result.append('\n')
        elif tag == 'th':
            self.result.append('| ')
        elif tag == 'td':
            self.result.append('| ')
        elif tag == 'tr':
            pass
            
    def handle_endtag(self, tag):
        if tag == 'nav':
            self.skip_nav = False
            return
        elif tag == 'script':
            self.skip_script = False
            return
            
        if self.skip_nav or self.skip_script:
            return
            
        if tag == 'h1':
            self.in_h1 = False
            self.result.append('\n')
        elif tag in ['h2', 'h3', 'h4', 'h5', 'h6']:
            self.result.append('\n')
        elif tag == 'p':
            self.result.append('\n')
        elif tag == 'strong' or tag == 'b':
            self.result.append('**')
        elif tag == 'em' or tag == 'i':
            self.result.append('*')
        elif tag == 'code':
            self.in_code = False
            if not self.in_pre:
                self.result.append('`')
        elif tag == 'pre':
            self.in_pre = False
            self.result.append('\n```\n')
        elif tag == 'a':
            self.result.append(']')
        elif tag == 'ul' or tag == 'ol':
            self.list_depth = max(0, self.list_depth - 1)
        elif tag == 'tr':
            self.result.append('|\n')
        elif tag == 'thead':
            # Add separator after header
            self.result.append('|---|---|---|\n')
            
    def handle_data(self, data):
        if self.skip_nav or self.skip_script:
            return
        # Clean up whitespace but preserve code indentation
        if self.in_pre:
            self.result.append(data)
        else:
            # Collapse multiple spaces
            cleaned = re.sub(r' +', ' ', data)
            self.result.append(cleaned)
            
    def get_markdown(self):
        return ''.join(self.result)

def extract_content(html):
    """Extract main content from HTML"""
    # Try to find main content area
    match = re.search(r'<section[^>]*class="wy-nav-content"[^>]*>(.*?)</section>\s*</div>\s*<div[^>]*class="rst-footer"', html, re.DOTALL)
    if match:
        content = match.group(1)
    else:
        # Try another pattern
        match = re.search(r'<div[^>]*class="wy-nav-content"[^>]*>(.*?)</div>\s*<div[^>]*class="rst-footer"', html, re.DOTALL)
        if match:
            content = match.group(1)
        else:
            content = html
    
    # Remove navigation sidebar
    content = re.sub(r'<nav[^>]*>.*?</nav>', '', content, flags=re.DOTALL)
    content = re.sub(r'<div[^>]*class="wy-side-nav"[^>]*>.*?</div>', '', content, flags=re.DOTALL)
    
    return content

def convert_html_to_markdown(html, title=''):
    """Convert HTML to Markdown"""
    content = extract_content(html)
    
    parser = HTMLToMarkdown()
    try:
        parser.feed(content)
    except:
        pass
    
    md = parser.get_markdown()
    
    # Clean up
    md = re.sub(r'\n{3,}', '\n\n', md)
    md = re.sub(r'^\s+', '', md, flags=re.MULTILINE)
    md = md.strip()
    
    return md

def process_file(input_path, output_path, page_name):
    """Process a single HTML file"""
    print(f"Converting: {page_name}")
    
    try:
        with open(input_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract title
        title_match = re.search(r'<title>([^<]+)</title>', content)
        title = title_match.group(1) if title_match else page_name
        title = title.replace('python-binance', 'Python Binance').replace('—', '-')
        
        # Get HTML content (it's stored as raw HTML in the file)
        html_match = re.search(r'<!-- Raw HTML content from page -->(.*)', content, re.DOTALL)
        if html_match:
            html_content = html_match.group(1)
        else:
            html_content = content
        
        # Convert to markdown
        md_content = convert_html_to_markdown(html_content, title)
        
        # Write output
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(f"# {title}\n\n")
            f.write(f"> **Source:** https://python-binance.readthedocs.io/en/latest/{page_name}.html\n\n")
            f.write("---\n\n")
            f.write(md_content)
        
        size = os.path.getsize(output_path)
        print(f"  -> {output_path} ({size} bytes)")
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
        input_path = f"{base_dir}/{page}.md"
        output_path = f"{base_dir}/{page}.md"
        
        if os.path.exists(input_path):
            if process_file(input_path, output_path, page):
                success += 1
    
    print(f"\nConverted {success}/{len(pages)} files")

if __name__ == "__main__":
    main()
