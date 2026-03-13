# python-bitget - Python SDK

**PyPI Package:** https://pypi.org/project/python-bitget/

## Package Info

- **Name:** python-bitget
- **Version:** 1.0.8
- **Author:** Cuongitl
- **License:** MIT
- **Python Version:** >=3.6
- **Homepage:** https://github.com/cuongitl/python-bitget

## Dependencies

- requests
- aiohttp
- websockets
- loguru

## Installation

```bash
pip install python-bitget
```

## Quick Start

### REST API

```python
from pybitget import Client

api_key = "your-api-key"
api_secret = "your-secret-key"
api_passphrase = "your-api-passphrase"

client = Client(api_key, api_secret, passphrase=api_passphrase)

# Get futures accounts
result = client.mix_get_accounts(productType='UMCBL')
print(result)

# Get server time
time = client.spot_get_server_time()
print(time)

# Get coin list
coins = client.spot_get_coin_list()
print(coins)
```

### WebSocket API

```python
from pybitget.stream import BitgetWsClient, SubscribeReq, handel_error
from pybitget.enums import *
from pybitget import logger

api_key = "your-api-key"
api_secret = "your-secret-key"
api_passphrase = "your-api-passphrase"

def on_message(message):
    logger.info(message)

# Auth client
client = BitgetWsClient(
    api_key=api_key,
    api_secret=api_secret,
    passphrase=api_passphrase,
    verbose=True
).build()

# Subscribe to ticker channel
channels = [SubscribeReq("mc", "ticker", "BTCUSD")]
client.subscribe(channels, on_message)
```

## API Coverage

### REST API
- **Spot:** Market, Account, Trade, Wallet
- **Futures (Mix):** Positions, Orders, Leverage, Account
- **Margin:** Cross, Isolated
- **Broker:** Sub-accounts, Commission

### WebSocket
- Public Channels: Ticker, Depth, Candles, Trades
- Private Channels: Orders, Positions, Account

## Available Versions

- `1.0.8`
- `1.0.7`
- `1.0.6`
- `1.0.5`
- `1.0.4`
- `1.0.3`
- `1.0.2`
- `1.0.1`
- `1.0.0`

## Links

- **GitHub:** https://github.com/cuongitl/python-bitget
- **Documentation:** https://python-bitget.readthedocs.io/
- **Telegram:** [Bitget OPENAPI](https://t.me/bitgetOpenapi)
