# Bitget API Documentation & SDKs

This folder contains comprehensive Bitget API documentation and SDKs for various programming languages.

## Contents

### Scraped Documentation (via Playwright)

#### scraped_docs/
**200 pages** of official Bitget API documentation scraped using Playwright to bypass Cloudflare protection.
- **common/** - Introduction, Quick Start, FAQ, Changelog, Release Notes, Signature examples, WebSocket intro
- **spot/** - Market data, Trading, Account, Plans, WebSocket
- **contract/** - Futures trading: Market, Account, Trade
- **margin/** - Cross & Isolated margin: Common, Account, Trade
- **broker/** - Sub-account management, Commission tracking
- **copytrading/** - Spot & Futures copy trading
- **earn/** - Savings, Account operations
- **uta/** - Unified Trading Account: Guide, Enums, Error codes
- **affiliate/** - Customer info, Error codes
- **instloan/** - Institutional lending
- **classic/** - Classic API documentation

Each section contains:
- `.md` files - Markdown format for easy reading
- `.html` files - Original HTML content
- `.txt` files - Plain text extraction

### Official Documentation

#### apidoc/
Official Bitget API documentation in HTML format with code examples.
- **en/** - English documentation
  - `spot/` - Spot trading API
  - `margin/` - Margin trading API
  - `mix/` - Futures/Mix trading API
  - `copyTrade/` - Copy trading API
  - `broker/` - Broker API
- **zh/** - Chinese documentation
- **sdk/** - Postman collections for API testing
  - `Biget_Spot.postman_collection.json`
  - `Bitget_Mix.postman_collection.json`
  - `Bitget_CopyTrade.postman_collection.json`

### Official SDKs

#### v3-bitget-api-sdk/
Official V3 API SDKs for multiple languages:
- `bitget-python-sdk-api/` - Python SDK
- `bitget-java-sdk-api/` - Java SDK
- `bitget-node-sdk-api/` - Node.js SDK
- `bitget-golang-sdk-api/` - Go SDK
- `bitget-php-sdk-api/` - PHP SDK
- `api-rsa-generator/` - RSA key generator

#### WebSocket-JAVA-Demo/
Official Java WebSocket demo for market data streaming.

#### agent_hub/
Bitget Agent Hub - AI agent integration tools.

### Community SDKs

#### bitget-api/
Node.js & TypeScript SDK by tiagosiebler (72+ stars)
- Full V2 and V3 REST API support
- WebSocket support with auto-reconnect
- TypeScript type definitions
- 900+ example files with code samples
- `llms.txt` - AI-friendly documentation (339KB)

#### python-bitget/
Python SDK by cuongitl (51+ stars)
- Full API endpoint support
- REST and WebSocket clients
- Example scripts included

#### Bitget.Net/
C# .NET SDK by JKorf (34+ stars)
- .NET Standard client library
- REST and WebSocket support
- Spot and Futures API
- Unit tests and examples

## API Coverage

### Spot API
- Market data (tickers, orderbook, trades, klines)
- Account information
- Order management (create, cancel, query)
- Wallet operations

### Margin API
- Cross margin trading
- Isolated margin trading
- Borrow/Repay operations
- Margin account management

### Mix/Futures API
- USDT-M futures
- Coin-M futures
- USDC-M futures
- Position management
- Leverage settings

### Copy Trading API
- Follow traders
- Copy trading operations
- Performance tracking

### Broker API
- Sub-account management
- Commission tracking
- Broker operations

## Usage Examples

### Python (Official SDK)
```python
from bitget import bitget_api

api = bitget_api.BitgetApi(api_key, secret_key, passphrase)
result = api.get_accounts()
```

### Node.js (Community SDK)
```typescript
import { RestClientV2 } from 'bitget-api';

const client = new RestClientV2({
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret',
  apiPass: 'your-passphrase',
});

const balances = await client.getBalances();
```

### C# (Bitget.Net)
```csharp
using Bitget.Net.Clients;

var client = new BitgetRestClient();
var ticker = await client.SpotApi.ExchangeData.GetTickerAsync("BTCUSDT");
```

## Statistics

- **Total Files:** 2,000+
- **Total Size:** ~34MB
- **Code Files:** 918 (.ts, .js, .py, .java, .go, .cs)
- **Documentation Pages:** 200+ (scraped via Playwright)
- **SDK Examples:** 900+

## Resources

- Official API Docs: https://www.bitget.com/api-doc
- GitHub Organization: https://github.com/BitgetLimited
- API Status: https://status.bitget.com/

## Scraping Method

The website bitget.com is protected by Cloudflare. Documentation was scraped using:
- **Playwright** with Chromium browser
- Headless mode with user-agent spoofing
- Automatic Cloudflare challenge bypass
- English locale (en-US)
- Rate-limited to avoid blocking

Scraper script: `/home/z/bitget_full_scraper.py`
