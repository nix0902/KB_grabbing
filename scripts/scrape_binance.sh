#!/bin/bash

# Binance Documentation Scraper
# Saves documentation to /home/z/my-project/docs/exchange/binance/

BASE_URL="https://developers.binance.com/docs"
OUTPUT_DIR="/home/z/my-project/docs/exchange/binance"

mkdir -p "$OUTPUT_DIR"

# Function to fetch and save page
fetch_page() {
    local path="$1"
    local section="$2"
    local filename="$3"

    local url="${BASE_URL}${path}"
    local output_path="${OUTPUT_DIR}/${section}"

    mkdir -p "$output_path"

    echo "Fetching: $url"

    # Fetch HTML
    html=$(curl -s "$url" -H "User-Agent: Mozilla/5.0" --max-time 30 2>/dev/null)

    if [ -z "$html" ]; then
        echo "  Failed to fetch"
        return 1
    fi

    # Extract title
    title=$(echo "$html" | grep -oP '(?<=<title>)[^<]+' | sed 's/ | Binance Open Platform//' | head -1)

    # Extract main content (Docusaurus markdown content)
    content=$(echo "$html" | grep -oP '(?<=<div class="theme-doc-markdown markdown">)[\s\S]*?(?=</div>\s*</article>)' | head -1)

    # If that doesn't work, try article tag
    if [ -z "$content" ]; then
        content=$(echo "$html" | grep -oP '(?<=<article>)[\s\S]*?(?=</article>)' | head -1)
    fi

    # Convert HTML to basic markdown
    content=$(echo "$content" | \
        sed 's/<h1[^>]*>/# /g; s/<\/h1>//g' | \
        sed 's/<h2[^>]*>/## /g; s/<\/h2>//g' | \
        sed 's/<h3[^>]*>/### /g; s/<\/h3>//g' | \
        sed 's/<h4[^>]*>/#### /g; s/<\/h4>//g' | \
        sed 's/<h5[^>]*>/##### /g; s/<\/h5>//g' | \
        sed 's/<h6[^>]*>/###### /g; s/<\/h6>//g' | \
        sed 's/<p>//g; s/<\/p>/\n\n/g' | \
        sed 's/<strong>/\*\*/g; s/<\/strong>/\*\*/g' | \
        sed 's/<b>/\*\*/g; s/<\/b>/\*\*/g' | \
        sed 's/<em>/\*/g; s/<\/em>/\*/g' | \
        sed 's/<i>/\*/g; s/<\/i>/\*/g' | \
        sed 's/<code>/`/g; s/<\/code>/`/g' | \
        sed 's/<pre[^>]*><code[^>]*>/```\n/g; s/<\/code><\/pre>/\n```\n/g' | \
        sed 's/<li>/- /g; s/<\/li>//g' | \
        sed 's/<br\s*\/\?>/\n/g' | \
        sed 's/<[^>]*>//g' | \
        sed 's/&amp;/\&/g; s/&lt;/</g; s/&gt;/>/g; s/&quot;/"/g; s/&#x27;/'"'"'/g; s/&nbsp;/ /g')

    # Create markdown file
    cat > "${output_path}/${filename}.md" << EOF
# ${title:-Untitled}

> **Source:** ${url}

${content}

---
*Documentation scraped for AI agent reference*
EOF

    echo "  Saved: ${output_path}/${filename}.md"
    sleep 0.5
}

# Known API sections and pages
declare -A PAGES=(
    # Binance Open API
    ["binance-open-api/scopes"]="binance-open-api/scopes"
    ["binance-open-api/overview"]="binance-open-api/overview"

    # Login/OAuth
    ["login/introduction"]="login/introduction"
    ["login/web-integration"]="login/web-integration"
    ["login/app-integration"]="login/app-integration"

    # Spot API
    ["binance-spot-api/overview"]="binance-spot-api/overview"
    ["binance-spot-api/general-info"]="binance-spot-api/general-info"
    ["binance-spot-api/public-api"]="binance-spot-api/public-api"
    ["binance-spot-api/trading-rest-api"]="binance-spot-api/trading-rest-api"
    ["binance-spot-api/trading-websocket"]="binance-spot-api/trading-websocket"
    ["binance-spot-api/market-streams"]="binance-spot-api/market-streams"
    ["binance-spot-api/enums"]="binance-spot-api/enums"
    ["binance-spot-api/errors"]="binance-spot-api/errors"

    # Futures API
    ["binance-futures-api/overview"]="binance-futures-api/overview"
    ["binance-futures-api/general-info"]="binance-futures-api/general-info"
    ["binance-futures-api/public-api"]="binance-futures-api/public-api"
    ["binance-futures-api/trade-rest-api"]="binance-futures-api/trade-rest-api"
    ["binance-futures-api/websocket-market-streams"]="binance-futures-api/websocket-market-streams"
    ["binance-futures-api/user-data-stream"]="binance-futures-api/user-data-stream"
    ["binance-futures-api/errors"]="binance-futures-api/errors"

    # Options API
    ["binance-options-api/overview"]="binance-options-api/overview"
    ["binance-options-api/general-info"]="binance-options-api/general-info"

    # Margin
    ["margin/overview"]="margin/overview"
    ["margin/general-info"]="margin/general-info"

    # Crypto Loan
    ["crypto-loan/overview"]="crypto-loan/overview"

    # Simple Earn
    ["simple-earn/overview"]="simple-earn/overview"

    # Sub Account
    ["sub-account/overview"]="sub-account/overview"

    # WebSocket
    ["websocket/general-info"]="websocket/general-info"
    ["websocket/market-streams"]="websocket/market-streams"

    # REST API
    ["rest-api/general-info"]="rest-api/general-info"
    ["rest-api/authentication"]="rest-api/authentication"
)

# Fetch all known pages
for page_path in "${!PAGES[@]}"; do
    section="${PAGES[$page_path]%%/*}"
    filename="${PAGES[$page_path]#*/}"
    fetch_page "/$page_path" "$section" "$filename"
done

# Create main README
cat > "${OUTPUT_DIR}/README.md" << 'EOF'
# Binance API Documentation

> **Source:** https://developers.binance.com/docs/

Complete Binance API documentation for AI agent reference.

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
- **Spot:** `https://api.binance.com`
- **Futures:** `https://fapi.binance.com`
- **Options:** `https://eapi.binance.com`

### Authentication
All private endpoints require HMAC SHA256 signatures using API keys.

## Common Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `recvWindow` | long | Time window for request validity (max 60000ms) |
| `timestamp` | long | Request timestamp in milliseconds |
| `signature` | string | HMAC SHA256 signature |

## Rate Limits

- **Spot:** 1200 requests per minute
- **Futures:** 2400 requests per minute
- **Orders:** 50 orders per 10 seconds

## Error Codes

Common error responses:
- `-1000`: Unknown error
- `-1001`: Disconnected
- `-1002`: Unauthorized
- `-1003`: Too many requests
- `-1006`: Unexpected response
- `-1007`: Timeout
- `-1013`: Invalid quantity
- `-1015`: Too much request weight
- `-1021`: Timestamp problem
- `-1022`: Invalid signature

---
*Documentation scraped for AI agent reference*
EOF

echo ""
echo "========================================="
echo "Scraping complete!"
echo "Output directory: $OUTPUT_DIR"
echo "Total sections: ${#PAGES[@]}"
