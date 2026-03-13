# bitget-api - Node.js/TypeScript SDK (Unofficial)

**GitHub Repository:** https://github.com/tiagosiebler/bitget-api

This is a complete clone of the tiagosiebler/bitget-api repository with all code examples.

## Package Info

- **npm:** bitget-api
- **Language:** TypeScript / JavaScript (Node.js)
- **License:** MIT
- **Stars:** 72+

## Installation

```bash
npm install bitget-api
```

## Features

- Full V2 and V3 REST API support
- WebSocket support with auto-reconnect
- TypeScript type definitions
- Browser support via webpack
- HMAC and RSA authentication
- Proxy support

## Project Structure

```
├── src/                          # Source code
│   ├── rest-client-v2.ts         # REST client for V2 API
│   ├── rest-client-v3.ts         # REST client for V3/UTA API
│   ├── websocket-client-v2.ts    # WebSocket client V2
│   ├── websocket-client-v3.ts    # WebSocket client V3
│   ├── websocket-api-client.ts   # WebSocket API client
│   ├── types/                    # TypeScript type definitions
│   └── constants/                # API constants
├── examples/                     # 407 code examples
│   ├── V2 - Classic/             # V2 API examples
│   │   ├── Rest/                 # REST API examples
│   │   └── Websocket/            # WebSocket examples
│   ├── V3 - UTA/                 # V3/UTA API examples
│   │   ├── Rest/                 # REST API examples
│   │   └── Websocket/            # WebSocket examples
│   ├── apidoc/                   # API documentation examples
│   │   ├── RestClientV2/         # V2 REST client examples
│   │   ├── RestClientV3/         # V3 REST client examples
│   │   └── WebsocketAPIClient/   # WebSocket API examples
│   └── auth/                     # Authentication examples
└── llms.txt                      # AI-friendly documentation (339KB)
```

## Quick Start

### REST API V2

```typescript
import { RestClientV2 } from 'bitget-api';

const client = new RestClientV2();

// Get spot candles
const candles = await client.getSpotCandles({
  symbol: 'BTCUSDT',
  granularity: '1min',
  limit: '1000',
});

console.log(candles.data);
```

### REST API V3 (UTA)

```typescript
import { RestClientV3 } from 'bitget-api';

const client = new RestClientV3({
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret',
  apiPass: 'your-passphrase',
});

// Get account balances
const balances = await client.getBalances();
console.log(balances);
```

### WebSocket V2

```typescript
import { WebsocketClientV2 } from 'bitget-api';

const ws = new WebsocketClientV2({
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret',
  apiPass: 'your-passphrase',
});

ws.subscribe({
  instType: 'SP',
  channel: 'ticker',
  instId: 'BTCUSDT',
});

ws.on('update', (data) => {
  console.log('ticker update:', data);
});
```

## Statistics

- **Total Files:** 496
- **Example Files:** 407
- **Source Files:** TypeScript
- **llms.txt:** 339KB (AI-friendly documentation)

## Links

- **npm:** https://www.npmjs.com/package/bitget-api
- **GitHub:** https://github.com/tiagosiebler/bitget-api
- **Documentation:** See `docs/` folder
