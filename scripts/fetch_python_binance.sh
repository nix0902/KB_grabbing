#!/bin/bash

BASE_DIR="/home/z/my-project/docs/exchange/binance/python"
BASE_URL="https://python-binance.readthedocs.io/en/latest"

# All pages to fetch
PAGES=(
"index"
"overview"
"constants"
"general"
"market_data"
"account"
"sub_accounts"
"margin"
"websockets"
"depth_cache"
"withdraw"
"helpers"
"exceptions"
"faqs"
"changelog"
"binance"
)

mkdir -p "$BASE_DIR"

echo "Fetching python-binance documentation..."
echo "Total pages: ${#PAGES[@]}"
echo ""

for page in "${PAGES[@]}"; do
    url="$BASE_URL/${page}.html"
    file_path="$BASE_DIR/${page}.md"
    
    echo -n "[$(${#PAGES[@]})] Fetching: $page ... "
    
    response=$(curl -s -w "\n%{http_code}" "$url" 2>/dev/null)
    http_code=$(echo "$response" | tail -1)
    content=$(echo "$response" | head -n -1)
    
    if [ "$http_code" = "200" ] && [ -n "$content" ]; then
        # Extract title
        title=$(echo "$content" | grep -oP '(?<=<title>).*?(?=</title>)' | head -1 | sed 's/&mdash;/-/g' | sed 's/&amp;/\&/g')
        
        # Create markdown
        echo "# ${title:-$page}" > "$file_path"
        echo "" >> "$file_path"
        echo "> **Source:** $url" >> "$file_path"
        echo "" >> "$file_path"
        echo "<!-- Raw HTML content from page -->" >> "$file_path"
        echo "$content" >> "$file_path"
        
        size=$(wc -c < "$file_path")
        echo "✓ OK ($size bytes)"
    else
        echo "✗ FAILED (HTTP $http_code)"
    fi
    
    sleep 0.3
done

echo ""
echo "Done fetching ${#PAGES[@]} pages!"
