# Bitget API Documentation from GitHub Pages

This folder contains the official Bitget API documentation scraped from GitHub Pages.

**Source:** https://bitgetlimited.github.io/apidoc/

## Contents

### English Documentation (en/)
- **spot.md** (524KB) - Spot Trading API
  - Market data, trading, account, wallet operations
  - WebSocket streams
  
- **mix.md** (575KB) - Futures/Mix Trading API
  - USDT-M and Coin-M futures
  - Position management, leverage, orders
  - Plan orders (TP/SL)
  - WebSocket streams
  
- **margin.md** (423KB) - Margin Trading API
  - Cross and isolated margin
  - Borrow/repay operations
  - Account management
  
- **copyTrade.md** (415KB) - Copy Trading API
  - Follower operations
  - Trader management
  
- **broker.md** (312KB) - Broker API
  - Sub-account management
  - Commission tracking

### Chinese Documentation (zh/)
- spot.md
- mix.md  
- margin.md

### HTML Files
Original HTML files with styling and navigation preserved.

## Features

- Complete API reference with endpoints
- Request/response examples in **curl**
- Parameter descriptions
- Rate limits and permissions
- WebSocket channel documentation
- Error codes

## Example API Call

```bash
curl -X POST "https://api.bitget.com/api/mix/v1/account/open-count" \
  -H "ACCESS-KEY:yourApiKey" \
  -H "ACCESS-SIGN:*******" \
  -H "ACCESS-PASSPHRASE:*****" \
  -H "ACCESS-TIMESTAMP:1659076670000" \
  -H "locale:en-US" \
  -H "Content-Type: application/json" \
  -d '{"symbol": "SBTCSUSDT_SUMCBL","marginCoin": "SUSDT","openPrice": "30189.5","leverage": "20","openAmount":"5000"}'
```

## Statistics

- **Total Files:** 25
- **Total Size:** 6.6MB
- **Languages:** English, Chinese
- **API Sections:** 5 (Spot, Mix, Margin, CopyTrade, Broker)

## Related

- Official site: https://www.bitget.com/api-doc
- GitHub repo: https://github.com/BitgetLimited/apidoc
