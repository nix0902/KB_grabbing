# BingX API Documentation

This folder contains comprehensive BingX exchange API documentation and SDK resources.

## Contents

### Official Documentation
- **docs_source/** - Official docs-v3 repository source code (Vue.js SPA)
- **docs_main/** - Main docs repository
- **bingx-api.github.io/** - Downloaded GitHub Pages content

### Scraped Documentation  
- **scraped_docs/** - Scraped API documentation pages (61 files)
- **api_docs/** - Extracted API documentation including:
  - `endpoints_list.txt` - 168 unique API endpoints
  - `api_endpoints.txt` - 638 endpoint references
  - `raw_api_docs.txt` - Raw API documentation extraction

### Specialized Documentation
- **standard-contract-doc/** - Standard Contract API documentation
  - `REST API.md` - Detailed REST API documentation with code examples
  - `REST接口.md` - Chinese version
- **spot-api-doc/** - Spot API documentation
- **swap-api-doc/** - Swap API documentation  
- **swap-api-v2-doc/** - Swap V2 API documentation
- **comm-api-doc/** - Common API documentation

### AI Integration
- **api-ai-skills/** - AI coding assistant skill library for BingX API
  - Supports Claude Code, Cursor, Codex, and OpenCode
  - `README.md` - Integration guide
  - `AGENTS.md` - AI agent configuration

## API Base URL
```
https://open-api.bingx.com
```

## API Categories

### Swap (Perpetual Futures)
- Market Data: symbols, depth, trades, kline, ticker, funding rate
- Trading: place order, cancel order, modify order, batch orders
- Account: balance, positions, leverage, margin
- WebSocket: depth, trade, kline, account updates

### Spot
- Market Data: symbols, depth, trades, kline, ticker
- Trading: order, cancel order, open orders, order history
- Account: balance, transfer, deposits, withdrawals
- WebSocket: trade, kline, depth, account updates

### Coin-M Futures
- Market Data: contracts, kline, depth, ticker
- Trading: order, cancel, leverage, margin
- Account: assets, positions

### Account & Wallet
- Fund Account: assets, transfers
- Wallet: deposits, withdrawals
- Sub-accounts: create, manage, API keys

### Agent
- Invited users, commission details
- Partner information

### Copy Trading
- Trader orders, profit overview
- Commission rates

## Authentication

All private endpoints require:
1. API Key in header: `X-BX-APIKEY`
2. Signature parameter (HMAC SHA256)
3. Timestamp parameter (milliseconds)

### Signature Example
```python
import hmac
import hashlib

params = "symbol=BTC-USDT&timestamp=1649404670162"
signature = hmac.new(
    secret_key.encode(),
    params.encode(),
    hashlib.sha256
).hexdigest()
```

## Rate Limits
- Most endpoints: 5-10 requests/second
- WebSocket: 10 subscriptions/second

## Links
- Official Docs: https://bingx-api.github.io/docs-v3/
- GitHub: https://github.com/BingX-api
- API Status: https://bingx-api.github.io/docs-v3/#/en/info

## Common Endpoints

| Category | Endpoint | Method | Description |
|----------|----------|--------|-------------|
| Swap Market | /openApi/swap/v2/quote/contracts | GET | Get contracts |
| Swap Market | /openApi/swap/v2/quote/depth | GET | Order book depth |
| Swap Trade | /openApi/swap/v2/trade/order | POST | Place order |
| Spot Market | /openApi/spot/v1/common/symbols | GET | Get symbols |
| Spot Trade | /openApi/spot/v1/trade/order | POST | Place order |
| Account | /openApi/account/v1/allAccountBalance | GET | Account balance |

## WebSocket
- Base URL: `wss://open-api-sw.bingx.com/open-api`
- Subscription format: `{"id":"xxx","reqType":"sub","dataType":"xxx"}`
