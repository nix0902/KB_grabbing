#!/bin/bash

# Script to fetch Bybit documentation
# Uses pandoc for HTML to Markdown conversion

OUTPUT_DIR="/home/z/my-project/docs/exchange/bybit"
URL_FILE="/tmp/bybit_urls.txt"
LOG_FILE="/tmp/bybit_fetch.log"

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Counter
total=$(wc -l < "$URL_FILE")
current=0
success=0
failed=0

echo "Starting to fetch $total pages..."
echo "Started at $(date)" > "$LOG_FILE"

# Read each URL
while IFS= read -r url; do
    current=$((current + 1))
    
    # Skip API explorer pages (they're just interactive tools, not docs)
    if [[ "$url" == *"api-explorer"* ]]; then
        echo "[$current/$total] SKIP: $url (API Explorer)"
        continue
    fi
    
    # Skip search and markdown-page
    if [[ "$url" == *"search"* ]] || [[ "$url" == *"markdown-page"* ]]; then
        echo "[$current/$total] SKIP: $url (utility page)"
        continue
    fi
    
    # Convert URL to file path
    path="${url#https://bybit-exchange.github.io/docs/}"
    
    # Handle root URL
    if [[ -z "$path" ]] || [[ "$path" == "/" ]]; then
        path="index"
    fi
    
    # Remove trailing slash
    path="${path%/}"
    
    # Create directory structure
    dir="$OUTPUT_DIR/$(dirname "$path")"
    filename=$(basename "$path")
    
    mkdir -p "$dir"
    
    output_file="$dir/${filename}.md"
    
    echo -n "[$current/$total] $path ... "
    
    # Fetch page
    http_code=$(curl -sL -w "%{http_code}" -o /tmp/bybit_page.html "$url" 2>/dev/null)
    
    if [[ "$http_code" == "200" ]]; then
        # Extract title
        title=$(grep -oP '<title[^>]*>\K[^<]+' /tmp/bybit_page.html 2>/dev/null | head -1 | sed 's/|.*//;s/^[[:space:]]*//;s/[[:space:]]*$//')
        
        # Extract main content
        # Docusaurus uses article tag or div with markdown class
        if grep -q '<article' /tmp/bybit_page.html; then
            sed -n '/<article/,/<\/article>/p' /tmp/bybit_page.html > /tmp/bybit_content.html
        elif grep -q 'class="markdown"' /tmp/bybit_page.html; then
            sed -n '/class="markdown"/,/<\/div>/p' /tmp/bybit_page.html | head -5000 > /tmp/bybit_content.html
        else
            cp /tmp/bybit_page.html /tmp/bybit_content.html
        fi
        
        # Write markdown header
        {
            echo "---"
            echo "title: \"$title\""
            echo "url: \"$url\""
            echo "source: \"https://bybit-exchange.github.io/docs/\""
            echo "fetched: \"$(date -Iseconds)\""
            echo "---"
            echo ""
            echo "# $title"
            echo ""
            echo "Source: [$url]($url)"
            echo ""
        } > "$output_file"
        
        # Use pandoc to convert HTML to Markdown
        pandoc -f html -t markdown --wrap=none /tmp/bybit_content.html >> "$output_file" 2>/dev/null
        
        # Clean up some artifacts
        sed -i 's/:::.*//g' "$output_file"
        sed -i '/^```{=html}$/d' "$output_file"
        sed -i 's/{#[^}]*}//g' "$output_file"
        
        echo "OK ($(wc -l < "$output_file") lines)"
        success=$((success + 1))
    else
        echo "FAILED (HTTP $http_code)"
        echo "FAILED: $url (HTTP $http_code)" >> "$LOG_FILE"
        failed=$((failed + 1))
    fi
    
    # Small delay
    sleep 0.05
    
done < "$URL_FILE"

echo ""
echo "==================================="
echo "Total: $current pages processed"
echo "Success: $success"
echo "Failed: $failed"
echo "Skipped: $((total - current))"
echo "==================================="
echo "Output: $OUTPUT_DIR"
echo "Finished at $(date)" >> "$LOG_FILE"
