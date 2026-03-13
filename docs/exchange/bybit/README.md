# Bybit API Documentation

This folder contains the complete Bybit API documentation fetched from https://bybit-exchange.github.io/docs/

## Overview

Bybit is a cryptocurrency exchange that provides comprehensive API for trading operations.

## Structure

```
bybit/
├── v5/                    # V5 API (Main API version)
│   ├── account/           # Account endpoints
│   ├── asset/             # Asset management
│   ├── broker/            # Broker endpoints
│   ├── earn/              # Earn products
│   ├── market/            # Market data
│   ├── order/             # Order management
│   ├── position/          # Position management
│   ├── user/              # User endpoints
│   ├── websocket/         # WebSocket API
│   └── ...                # More sections
├── p2p/                   # P2P Trading API
├── tax/                   # Tax API V3
├── v3/                    # V3 API (legacy)
└── institutional/         # Institutional endpoints
```

## V5 API Sections

### Market Data
- `v5/market/` - Market data endpoints (tickers, klines, orderbook, trades, etc.)

### Trading
- `v5/order/` - Order management (create, amend, cancel, batch operations)
- `v5/position/` - Position management (leverage, trading stop, margin)

### Account
- `v5/account/` - Account info, wallet balance, fee rates
- `v5/asset/` - Asset transfers, deposits, withdrawals

### User
- `v5/user/` - API key management, sub-accounts

### WebSocket
- `v5/websocket/` - Real-time data streams
- `v5/ws/` - WebSocket connection guide

## Features

- **REST API** - All endpoints documented with parameters and examples
- **WebSocket API** - Real-time market data and account updates
- **Code Examples** - HTTP, Python, Go, Java, .Net, Node.js
- **Error Codes** - Complete error code reference

## Supported Products

- **Spot** - Spot trading
- **Linear** - USDT perpetual futures
- **Inverse** - Inverse perpetual futures
- **Option** - Options trading

## Rate Limits

See `v5/rate-limit.md` for rate limit information.

## Source

All documentation is from: https://bybit-exchange.github.io/docs/

Fetched: March 2025
