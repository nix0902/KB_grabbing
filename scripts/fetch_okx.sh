#!/bin/bash

# Script to fetch OKX documentation
OUTPUT_DIR="/home/z/my-project/docs/exchange/okx"
mkdir -p "$OUTPUT_DIR"

# URLs to fetch
declare -A URLS=(
    ["en"]="https://www.okx.com/docs-v5/en/"
    ["trick"]="https://www.okx.com/docs-v5/trick_en/"
    ["agent"]="https://www.okx.com/docs-v5/agent_en/"
    ["broker"]="https://www.okx.com/docs-v5/broker_en/"
    ["log"]="https://www.okx.com/docs-v5/log_en/"
)

echo "=== Fetching OKX Documentation ==="

for name in "${!URLS[@]}"; do
    url="${URLS[$name]}"
    echo ""
    echo "Fetching: $name ($url)"
    
    html_file="/tmp/okx_${name}.html"
    md_file="$OUTPUT_DIR/${name}.md"
    
    # Fetch HTML
    http_code=$(curl -sL -w "%{http_code}" -o "$html_file" "$url" 2>/dev/null)
    
    if [[ "$http_code" == "200" ]]; then
        echo "  Downloaded: $(wc -l < "$html_file") lines"
        
        # Extract title
        title=$(grep -oP '<title[^>]*>\K[^<]+' "$html_file" | head -1 | sed 's/|.*//;s/^[[:space:]]*//;s/[[:space:]]*$//')
        
        # Write header
        {
            echo "---"
            echo "title: \"$title\""
            echo "source: \"$url\""
            echo "fetched: \"$(date -Iseconds)\""
            echo "---"
            echo ""
        } > "$md_file"
        
        # Convert HTML to Markdown using pandoc
        echo "  Converting to Markdown..."
        pandoc -f html -t markdown --wrap=none --extract-media="$OUTPUT_DIR/media" \
            "$html_file" >> "$md_file" 2>/dev/null
        
        # Clean up
        sed -i 's/:::.*//g' "$md_file"
        sed -i '/^```{=html}$/d' "$md_file"
        sed -i 's/{#[^}]*}//g' "$md_file"
        
        echo "  Created: $md_file ($(wc -l < "$md_file") lines)"
    else
        echo "  FAILED: HTTP $http_code"
    fi
done

echo ""
echo "=== Done ==="
