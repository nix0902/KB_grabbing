#!/bin/bash

BASE_DIR="/home/z/my-project/docs/exchange/binance"

# All URLs to fetch
URLS=(
"binance-spot-api-docs/testnet/websocket-api/request-security"
"binance-spot-api-docs/testnet/websocket-api/session-authentication"
"binance-spot-api-docs/testnet/websocket-api/data-sources"
"binance-spot-api-docs/testnet/websocket-api/general-requests"
"binance-spot-api-docs/testnet/websocket-api/trading-requests"
"binance-spot-api-docs/testnet/websocket-api/account-requests"
"binance-spot-api-docs/testnet/websocket-api/user-data-stream-requests"
"binance-spot-api-docs/testnet/web-socket-streams"
"binance-spot-api-docs/testnet/sbe-market-data-streams"
"binance-spot-api-docs/testnet/errors"
"binance-spot-api-docs/testnet/TESTNET-TERMS-OF-USE"
"binance-spot-api-docs/PROD-TERMS-OF-USE"
"binance-spot-api-docs/demo-mode"
"binance-spot-api-docs/demo-mode/general-info"
"binance-spot-api-docs/demo-mode/DEMO-TERMS-OF-USE"
"binance-spot-api-docs/errors"
"binance-spot-api-docs/faqs/spot_glossary"
"binance-spot-api-docs/faqs/pegged_orders"
"binance-spot-api-docs/faqs/opo"
"binance-spot-api-docs/faqs/commission_faq"
"binance-spot-api-docs/faqs/trailing-stop-faq"
"binance-spot-api-docs/faqs/stp_faq"
"binance-spot-api-docs/faqs/market_data_only"
"binance-spot-api-docs/faqs/sor_faq"
"binance-spot-api-docs/faqs/order_count_decrement"
"binance-spot-api-docs/faqs/sbe_faq"
"binance-spot-api-docs/faqs/api_key_types"
"binance-spot-api-docs/testnet/websocket-api/rate-limits"
"binance-spot-api-docs/testnet/websocket-api/event-format"
"binance-spot-api-docs/testnet/websocket-api/response-format"
"binance-spot-api-docs/testnet/websocket-api/request-format"
"binance-spot-api-docs/testnet/websocket-api/general-api-information"
"binance-spot-api-docs/testnet/user-data-stream"
"binance-spot-api-docs/testnet/fix-api"
"binance-spot-api-docs/testnet/rest-api/account-endpoints"
"binance-spot-api-docs/testnet/rest-api/trading-endpoints"
"binance-spot-api-docs/testnet/rest-api/market-data-endpoints"
"binance-spot-api-docs/testnet/rest-api/general-endpoints"
"binance-spot-api-docs/testnet/rest-api/request-security"
"binance-spot-api-docs/testnet/rest-api/data-sources"
"binance-spot-api-docs/testnet/rest-api/limits"
"binance-spot-api-docs/testnet/rest-api/general-information-on-endpoints"
"binance-spot-api-docs/testnet/rest-api/error-codes"
"binance-spot-api-docs/testnet/rest-api/http-return-codes"
"binance-spot-api-docs/testnet/rest-api/general-api-information"
"binance-spot-api-docs/testnet/enums"
"binance-spot-api-docs/testnet/filters"
"binance-spot-api-docs/testnet/general-info"
"binance-spot-api-docs/testnet"
"binance-spot-api-docs/websocket-api/user-data-stream-requests"
"binance-spot-api-docs/websocket-api/account-requests"
"binance-spot-api-docs/websocket-api/trading-requests"
"binance-spot-api-docs/websocket-api/authentication-requests"
"binance-spot-api-docs/websocket-api/market-data-requests"
"binance-spot-api-docs/websocket-api/general-requests"
"binance-spot-api-docs/websocket-api/data-sources"
"binance-spot-api-docs/websocket-api/session-authentication"
"binance-spot-api-docs/websocket-api/request-security"
"binance-spot-api-docs/websocket-api/rate-limits"
"binance-spot-api-docs/websocket-api/event-format"
"binance-spot-api-docs/websocket-api/response-format"
"binance-spot-api-docs/websocket-api/request-format"
"binance-spot-api-docs/websocket-api/general-api-information"
"binance-spot-api-docs/user-data-stream"
"binance-spot-api-docs/sbe-market-data-streams"
"binance-spot-api-docs/web-socket-streams"
"binance-spot-api-docs/fix-api"
"binance-spot-api-docs/rest-api/account-endpoints"
"binance-spot-api-docs/rest-api/trading-endpoints"
"binance-spot-api-docs/rest-api/market-data-endpoints"
"binance-spot-api-docs/rest-api/general-endpoints"
"binance-spot-api-docs/rest-api/request-security"
"binance-spot-api-docs/rest-api/data-sources"
"binance-spot-api-docs/rest-api/limits"
"binance-spot-api-docs/rest-api/general-information-on-endpoints"
"binance-spot-api-docs/rest-api/error-codes"
"binance-spot-api-docs/rest-api/http-return-codes"
"binance-spot-api-docs/rest-api/general-api-information"
"binance-spot-api-docs/enums"
"binance-spot-api-docs/filters"
"binance-spot-api-docs/README"
"binance-pay/introduction"
"binance-w3w/evm-compatible-provider"
"rebate/Introduction"
"vip_loan/Introduction"
"link_plus/change-log"
"sub_account/Introduction"
"wallet/Introduction"
"w3w_web3_dapp/self-listing"
"babt/introduction"
"crypto_loan/Introduction"
"fund_account/change-log"
"alpha/change-log"
"algo/Introduction"
"mini-program/quick-start"
"cms/cms-log"
"gift_card/Introduction"
"mining/Introduction"
"vip_services/change-log"
"institutional_loan/Introduction"
"margin_trading/Introduction"
"connect_prime/introduction"
"w3w_open_platform/self-listing-op"
"pay/Introduction"
"fiat/Introduction"
"advanced_earn/Introduction"
"spot_block_match/change-log"
"convert/Introduction"
"derivatives/Introduction"
"binance_connect/introduction"
"w3w_task_verification_api/apis"
"simple_earn/Introduction"
"c2c/Introduction"
"staking/Introduction"
"binance_link/change-log"
"copy_trading/Introduction"
"binance-spot-api-docs/CHANGELOG"
)

echo "Fetching ${#URLS[@]} pages..."
echo ""

count=0
success=0
failed=0

for path in "${URLS[@]}"; do
    url="https://developers.binance.com/docs/${path}"
    file_path="$BASE_DIR/${path}.md"
    dir_path=$(dirname "$file_path")
    
    # Create directory
    mkdir -p "$dir_path"
    
    # Fetch page
    echo -n "[$((count+1))/${#URLS[@]}] Fetching: $path ... "
    
    response=$(curl -s -w "\n%{http_code}" "$url" 2>/dev/null)
    http_code=$(echo "$response" | tail -1)
    content=$(echo "$response" | head -n -1)
    
    if [ "$http_code" = "200" ] && [ -n "$content" ]; then
        # Extract content from HTML
        # Get title
        title=$(echo "$content" | grep -oP '(?<=<title>).*?(?=</title>)' | head -1)
        
        # Create markdown with raw HTML content for now
        echo "# ${title:-$path}" > "$file_path"
        echo "" >> "$file_path"
        echo "> **Source:** $url" >> "$file_path"
        echo "" >> "$file_path"
        echo "<!-- Raw HTML content from page -->" >> "$file_path"
        echo "$content" >> "$file_path"
        
        size=$(wc -c < "$file_path")
        echo "✓ OK ($size bytes)"
        ((success++))
    else
        echo "✗ FAILED (HTTP $http_code)"
        ((failed++))
    fi
    
    ((count++))
    
    # Small delay to avoid rate limiting
    sleep 0.2
done

echo ""
echo "=== Summary ==="
echo "Total: $count"
echo "Success: $success"
echo "Failed: $failed"
