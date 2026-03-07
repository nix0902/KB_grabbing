#!/bin/bash

BASE_DIR="/home/z/my-project/docs/cornix"
BASE_URL="https://help.cornix.io/en"

# All collections and their articles
declare -A COLLECTIONS
COLLECTIONS["getting-started"]="3260334-getting-started"
COLLECTIONS["account-subscription"]="3325876-account-subscription"
COLLECTIONS["trading-bots"]="3519226-trading-bots"
COLLECTIONS["trading-configurations"]="3260337-trading-configurations"
COLLECTIONS["demo-accounts"]="12054609-demo-accounts"
COLLECTIONS["backtesting"]="12054616-backtesting"
COLLECTIONS["marketplace"]="12054644-marketplace"
COLLECTIONS["trading-functionalities"]="3260343-trading-functionalities"
COLLECTIONS["channel-admins"]="3260344-channel-admins"
COLLECTIONS["affiliation-program"]="12054732-affiliation-program"
COLLECTIONS["errors-notifications"]="12054798-errors-notifications"
COLLECTIONS["faqs-more"]="3260345-faqs-more"

mkdir -p "$BASE_DIR"

echo "Fetching Cornix documentation..."
total=0

for folder in "${!COLLECTIONS[@]}"; do
    collection="${COLLECTIONS[$folder]}"
    echo ""
    echo "=== Collection: $folder ==="
    
    mkdir -p "$BASE_DIR/$folder"
    
    # Get articles from collection page
    articles=$(curl -s "$BASE_URL/collections/$collection" 2>/dev/null | grep -oE 'articles/[0-9]+-[a-z0-9-]+' | sort -u)
    
    count=0
    for article in $articles; do
        article_id=$(echo "$article" | sed 's/articles\///')
        article_name=$(echo "$article_id" | sed 's/^[0-9]*-//' | tr '-' '_')
        
        echo -n "  Fetching: $article_name ... "
        
        url="$BASE_URL/$article"
        file_path="$BASE_DIR/$folder/${article_name}.md"
        
        response=$(curl -s -w "\n%{http_code}" "$url" 2>/dev/null)
        http_code=$(echo "$response" | tail -1)
        content=$(echo "$response" | head -n -1)
        
        if [ "$http_code" = "200" ] && [ -n "$content" ]; then
            # Extract title
            title=$(echo "$content" | grep -oP '(?<=<title>).*?(?=</title>)' | head -1 | sed 's/ |.*//')
            
            echo "# ${title:-$article_name}" > "$file_path"
            echo "" >> "$file_path"
            echo "> **Source:** $url" >> "$file_path"
            echo "" >> "$file_path"
            echo "$content" >> "$file_path"
            
            size=$(wc -c < "$file_path")
            echo "✓ ($size bytes)"
            ((count++))
            ((total++))
        else
            echo "✗ FAILED"
        fi
        
        sleep 0.2
    done
    
    echo "  Collection: $count articles"
done

echo ""
echo "=== Total: $total articles ==="
