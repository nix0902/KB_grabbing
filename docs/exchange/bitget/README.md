# Bitget API Documentation & SDKs

This folder contains comprehensive Bitget API documentation and SDKs for various programming languages.

## Contents

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
- Extensive examples folder with:
  - REST API examples (public, private, trading)
  - WebSocket examples
  - Authentication examples (HMAC, RSA)
- `llms.txt` - AI-friendly documentation

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

## Resources

- Official API Docs: https://www.bitget.com/api-doc
- GitHub Organization: https://github.com/BitgetLimited
- API Status: https://status.bitget.com/

## Notes

- The website bitget.com is protected by Cloudflare, so direct scraping is not possible
- This documentation was sourced from official GitHub repositories
- All SDKs include working code examples
- Postman collections are available for API testing
