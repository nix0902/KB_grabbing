# Python Bitget SDK Documentation

Official Python SDK documentation for Bitget exchange API.

**Source:** https://python-bitget.readthedocs.io/en/latest/

## Contents

### Files

| File | Size | Description |
|------|------|-------------|
| `overview.md` | 7.6KB | Getting Started - Installation, API Key, Client Init |
| `spot.md` | 15KB | Spot Trading API - Market, Wallet, Account, Trade |
| `mix.md` | 25KB | Futures API (USDT-M, Coin-M) - Positions, Orders, Leverage |
| `broker.md` | 7.4KB | Broker API - Sub-accounts, Commissions |
| `websockets.md` | 3.8KB | WebSocket API - Real-time data streams |
| `index.md` | 13KB | API Index |

## Installation

```bash
pip install python-bitget
```

## Quick Start

### Initialize Client

```python
from pybitget import Client

api_key = "your-api-key"
api_secret = "your-secret-key"
api_passphrase = "your-api-passphrase"

client = Client(api_key, api_secret, api_passphrase, use_server_time=False)
```

### Spot API Examples

```python
# Get server time
data = client.spot_get_server_time()

# Get coin list
data = client.spot_get_coin_list()

# Get symbols
data = client.spot_get_symbols()

# Get ticker
data = client.spot_get_ticker(symbol="BTCUSDT")

# Get order book
data = client.spot_get_depth(symbol="BTCUSDT", limit=100)

# Place order
data = client.spot_place_order(symbol, side, orderType, price, size)
```

### Futures API Examples

```python
# Get symbols info
data = client.mix_get_symbols_info(productType="USDT-FUTURES")

# Get depth
data = client.mix_get_depth(symbol="BTCUSDT", limit=100)

# Get ticker
data = client.mix_get_single_symbol_ticker(symbol="BTCUSDT")

# Place order
data = client.mix_place_order(symbol, marginCoin, side, orderType, price, size)
```

### WebSocket Example

```python
from pybitget.stream import BitgetWsClient, SubscribeReq, handel_error

def on_message(message):
    print(message)

# Auth client
client = BitgetWsClient(
    api_key="your-api-key",
    api_secret="your-secret-key",
    passphrase="your-api-passphrase",
    verbose=True
).build()

# Subscribe to channels
channels = [SubscribeReq("mc", "ticker", "BTCUSD")]
client.subscribe(channels, on_message)
```

## API Sections

### Spot
- **Public:** Server time, Coin list, Symbols
- **Market:** Tickers, Trades, Candles, Depth
- **Wallet:** Transfer, Withdraw, Deposit
- **Account:** Assets, Bills, Sub-accounts
- **Trade:** Orders, Batch orders, Plan orders

### Futures (Mix)
- **Market:** Symbols, Depth, Tickers, Candles, Funding rate
- **Account:** Balance, Positions, Leverage, Margin
- **Trade:** Place/Cancel orders, Batch operations
- **Plan Orders:** TP/SL, Stop orders

### WebSocket
- Public channels: Ticker, Depth, Candles, Trades
- Private channels: Orders, Positions, Account

## GitHub Repository

https://github.com/cuongitl/python-bitget

## Statistics

- **Files:** 8 HTML + 8 Markdown
- **Size:** 4.4MB total
- **Python Examples:** 100+ code snippets
