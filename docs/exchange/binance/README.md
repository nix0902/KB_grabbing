# Binance API Documentation

> **Source:** https://developers.binance.com/docs/

Comprehensive Binance API documentation for AI agent reference. This documentation covers all major Binance trading APIs and services.

## 📊 Statistics

- **Total Files:** 113+ markdown files
- **Last Updated:** March 2025

## 📂 Sections

### Trading APIs

| Section | Files | Description |
|---------|-------|-------------|
| [Spot API](./spot/) | 60+ | Spot trading REST API, WebSocket streams |
| [Futures API](./binance-futures-api/) | 7 | USDT-M and Coin-M futures |
| [Options API](./binance-options-api/) | 2 | European options trading |
| [Margin API](./margin/) | 2 | Margin trading endpoints |
| [FIX API](./fix-api/) | 1 | FIX protocol for institutional traders |

### Account & Authentication

| Section | Files | Description |
|---------|-------|-------------|
| [Login/OAuth](./login/) | 3 | OAuth 2.0 authentication flows |
| [OAuth](./oauth/) | 2 | OAuth integration details |
| [Sub Account](./sub-account/) | 1 | Sub-account management |

### Market Data

| Section | Files | Description |
|---------|-------|-------------|
| [WebSocket](./websocket/) | 2 | Real-time market data streams |
| [REST API](./rest-api/) | 2 | General REST API information |
| [SBE](./sbe/) | 1 | Simple Binary Encoding streams |

### Financial Services

| Section | Files | Description |
|---------|-------|-------------|
| [Simple Earn](./simple-earn/) | 1 | Staking and savings products |
| [Crypto Loan](./crypto-loan/) | 1 | Crypto-backed loans |

### Reference

| Section | Files | Description |
|---------|-------|-------------|
| [FAQs](./faqs/) | 12 | Frequently asked questions |
| [Enums](./spot/enums.md) | - | API enumerations |
| [Errors](./spot/errors.md) | - | Error codes and messages |
| [Filters](./spot/filters.md) | - | Trading filters |

## 🔑 API Endpoints

### Base URLs

```
Spot:        https://api.binance.com
Futures USDT: https://fapi.binance.com
Futures Coin: https://dapi.binance.com
Options:     https://eapi.binance.com
```

### Authentication

All private endpoints require API key authentication with HMAC SHA256, RSA, or Ed25519 signatures.

**Example - HMAC Signature (Bash):**
```bash
apiKey="your_api_key"
secretKey="your_secret_key"
timestamp=$(date +%s000)
query="symbol=BTCUSDT&side=BUY&type=LIMIT&quantity=1&price=50000&timestamp=$timestamp"
signature=$(echo -n "$query" | openssl dgst -sha256 -hmac "$secretKey" | awk '{print $2}')
curl -H "X-MBX-APIKEY: $apiKey" "https://api.binance.com/api/v3/order?$query&signature=$signature"
```

**Example - Python:**
```python
import hmac
import hashlib
import requests
from urllib.parse import urlencode

API_KEY = 'your_api_key'
API_SECRET = 'your_secret_key'

def sign(params):
    query = urlencode(params)
    signature = hmac.new(
        API_SECRET.encode(),
        query.encode(),
        hashlib.sha256
    ).hexdigest()
    return query + '&signature=' + signature

params = {
    'symbol': 'BTCUSDT',
    'side': 'BUY',
    'type': 'LIMIT',
    'quantity': 0.001,
    'price': 50000,
    'timestamp': int(time.time() * 1000)
}

headers = {'X-MBX-APIKEY': API_KEY}
response = requests.post(
    f'https://api.binance.com/api/v3/order?{sign(params)}',
    headers=headers
)
```

## 📡 WebSocket Streams

### Public Streams
```
wss://stream.binance.com:9443/ws/<streamName>
wss://stream.binance.com:9443/stream?streams=<streamName1>/<streamName2>
```

### Stream Types
- `<symbol>@ticker` - 24hr ticker
- `<symbol>@kline_<interval>` - Kline/candlestick
- `<symbol>@depth` - Order book depth
- `<symbol>@trade` - Trade stream
- `<symbol>@aggTrade` - Aggregate trade stream

### User Data Stream
```javascript
// Subscribe to user data
const ws = new WebSocket('wss://stream.binance.com:9443/ws/<listenKey>');
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log(data);
};
```

## ⚡ Rate Limits

| Type | Limit | Window |
|------|-------|--------|
| IP Requests | 6,000 | 1 minute |
| Order Rate | 50-300 | 10 seconds |
| Orders | 200,000 | 1 day |

## 🚨 Error Codes

| Code | Message | Description |
|------|---------|-------------|
| -1000 | UNKNOWN | Unknown error |
| -1001 | DISCONNECTED | Internal error |
| -1002 | UNAUTHORIZED | Invalid API key |
| -1003 | TOO_MANY_REQUESTS | Rate limit exceeded |
| -1006 | UNEXPECTED_RESP | Unexpected response |
| -1007 | TIMEOUT | Request timeout |
| -1013 | INVALID_MESSAGE | Invalid quantity/price |
| -1015 | TOO_MANY_REQUESTS | Too much request weight |
| -1021 | INVALID_TIMESTAMP | Timestamp outside recvWindow |
| -1022 | INVALID_SIGNATURE | Invalid signature |
| -2010 | NEW_ORDER_REJECTED | Order rejected |
| -2011 | CANCEL_REJECTED | Cancel rejected |
| -2013 | NO_SUCH_ORDER | Order does not exist |

## 📚 Key Documentation Files

### Spot Trading
- [REST API](./spot/rest-api.md) - Complete REST API reference
- [WebSocket Streams](./spot/web-socket-streams.md) - Market data streams
- [WebSocket API](./spot/web-socket-api.md) - Trading via WebSocket
- [User Data Stream](./spot/user-data-stream.md) - Account updates
- [Errors](./spot/errors.md) - Error codes reference
- [Enums](./spot/enums.md) - Enumeration values

### Futures
- [Futures Overview](./binance-futures-api/overview.md)
- [Public API](./binance-futures-api/public-api.md)
- [Trade REST API](./binance-futures-api/trade-rest-api.md)
- [WebSocket Streams](./binance-futures-api/websocket-market-streams.md)

### Authentication
- [Login Introduction](./login/introduction.md)
- [Web Integration](./login/web-integration.md)
- [App Integration](./login/app-integration.md)

## 🔗 Official Resources

- [Binance API Announcements](https://t.me/binance_api_announcements)
- [Binance API Telegram](https://t.me/binance_api_english)
- [Spot Testnet](https://testnet.binance.vision/)
- [Postman Collection](https://github.com/binance/binance-api-postman)

## 📝 SDKs & Connectors

Official connectors available for:
- [Python](https://github.com/binance/binance-connector-python)
- [Node.js](https://github.com/binance/binance-connector-node)
- [Java](https://github.com/binance/binance-connector-java)
- [C#](https://github.com/binance/binance-connector-dotnet)
- [Go](https://github.com/binance/binance-connector-go)
- [PHP](https://github.com/binance/binance-connector-php)
- [Ruby](https://github.com/binance/binance-connector-ruby)
- [Rust](https://github.com/binance/binance-spot-connector-rust)
- [TypeScript](https://github.com/binance/binance-connector-typescript)

---

*Documentation scraped for AI agent reference*
*Source: https://github.com/binance/binance-spot-api-docs*
