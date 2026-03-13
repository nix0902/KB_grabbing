# bitget-api - Node.js SDK

**npm Package:** https://www.npmjs.com/package/bitget-api

## Package Info

- **Name:** bitget-api
- **Latest Version:** 3.1.6
- **License:** MIT
- **Total Versions:** 56

## Description

Complete Node.js & JavaScript SDK for Bitget V1-V3 REST APIs & WebSockets, with TypeScript & end-to-end tests.

## Installation

```bash
npm install bitget-api
```

## Quick Start

```typescript
import { RestClientV2 } from 'bitget-api';

const client = new RestClientV2({
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret',
  apiPass: 'your-passphrase',
});

// Get account balances
const balances = await client.getBalances();
console.log(balances);
```

## Available Versions

- `3.1.6`
- `3.1.5`
- `3.1.4`
- `3.1.3`
- `3.1.2`
- `3.1.1`
- `3.1.0`
- `3.0.9`
- `3.0.8`
- `3.0.7`
- `3.0.6`
- `3.0.5`
- `3.0.4`
- `3.0.3`
- `3.0.2`
- `3.0.12`
- `3.0.11`
- `3.0.10`
- `3.0.1`
- `3.0.0`

## GitHub Repository

https://github.com/tiagosiebler/bitget-api

## Features

- Full V2 and V3 REST API support
- WebSocket support with auto-reconnect
- TypeScript type definitions
- Browser support via webpack
- HMAC and RSA authentication
- Proxy support

## API Coverage

### REST API
- Spot Trading
- Futures Trading
- Margin Trading
- Account Management
- Wallet Operations

### WebSocket
- Market Data Streams
- Private Account Updates
- Order Updates
- Position Updates
