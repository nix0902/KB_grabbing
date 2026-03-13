# Bitget SDK for Rust

Source: https://docs.rs/bitget_sdk/latest/bitget_sdk/

## Crate Info
- **Name:** bitget_sdk
- **Version:** 0.1.1
- **License:** MIT
- **Repository:** https://github.com/blockchain-toolbox/bitget-rs

## Description
Bitget Exchange API SDK for Rust - High-performance, modular SDK for Bitget exchange API.

## Features
- REST API support for spot trading
- WebSocket support for market data and order updates
- Account and asset management
- Order placement and cancellation
- Market data queries

## Modules

### account_api
Account-related API endpoints for position management and account info.

### asset_api
Asset-related operations including balance queries.

### client
HTTP client with signature support for authenticated requests.

### consts
Constants including API URLs, WebSocket URLs, and HTTP methods.

### exceptions
Error types for API interactions.

### fund_flow_api
Fund flow and transfer history operations.

### history_api
Historical data and fill records.

### market_api
Market data including ticker, orderbook, and candles.

### order_api
Order placement and cancellation operations.

### order_query_api
Order query and history operations.

### transfer_api
Transfer operations between accounts.

### utils
Utility functions for signing, timestamps, and query building.

### ws_api
WebSocket client for real-time data streaming.

## Installation

Add to your Cargo.toml:
```toml
[dependencies]
bitget_sdk = "0.1.1"
```

## Usage Example

```rust
use bitget_sdk::BitgetClient;
use bitget_sdk::order_api::*;

let client = BitgetClient::new(api_key, api_secret, passphrase);
let resp = client.place_spot_order_v2(...)?;
```

## Dependencies
- anyhow - Error handling
- serde / serde_json - JSON serialization
- tracing - Logging
- reqwest - HTTP client
- tokio - Async runtime
- tokio-tungstenite - WebSocket
- base64, chrono, hmac, sha2 - Cryptographic utilities

## Files
- `docs.rs/` - Official Rust documentation from docs.rs
- `librs_content.md` - Attempted lib.rs content

## Links
- Docs.rs: https://docs.rs/bitget_sdk/latest/bitget_sdk/
- Crates.io: https://crates.io/crates/bitget_sdk
- GitHub: https://github.com/blockchain-toolbox/bitget-rs
