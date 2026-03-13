# Get Contract OI Limit | Bitget API

**URL:** https://www.bitget.com/api-doc/contract/market/Get-Contracts-Oi

---

Skip to main content
Common
Spot
Futures
Broker
Affiliate
Margin
Copy Trading
Earn
Inst Loan
UTA
English
Futures Trading API
Market
VIP Fee Rate
Get Interest rate history
Get Interest Exchange Rate
Get Discount Rate
Get Merge Market Depth
Get Ticker
Get All Tickers
Get Recent Transactions
Get History Transactions
Get Candlestick Data
Get Historical Candlestick
Get Historical Index Price Candlestick
Get Historical Mark Price Candlestick
Get Open Interest
Get Next Funding Time
Get Mark/Index/Market Prices
Get Historical Funding Rates
Get Current Funding Rate
Get Contract OI Limit
Get Contract Config
Account
Position
Trade
Trigger Order
Websocket
Error Code
MarketGet Contract OI Limit
Get Contract OI Limit

Rate Limit: 10 req/sec/IP

Description​

Interface is used to get future contract OI Limit.

HTTP Request​
GET /api/v2/mix/market/oi-limit
Request Example
curl "https://api.bitget.com/api/v2/mix/market/oi-limit?productType=usdt-futures&symbol=BTCUSDT"

Request Parameters​
Parameter	Type	Required	Description
symbol	String	No	Trading pair, based on the symbolName, i.e. BTCUSDT
productType	String	Yes	Product type
USDT-FUTURES USDT-M Futures
COIN-FUTURES Coin-M Futures
USDC-FUTURES USDC-M Futures

Response Example
{
    "code": "00000",
    "msg": "success",
    "requestTime": 1741596239587,
    "data": [
        {
            "symbol": "BTCUSDT",
            "notionalValue": "100000",
            "totalNotionalValue": "200000"
        },
        {
            "symbol": "BCHUSDT",
            "notionalValue": "100000",
            "totalNotionalValue": "200000"
        }
    ]
}

Response Parameters​
Parameter	Type	Description
> symbol	String	Product name
> notionalValue	String	Individual User Position Notional Value
> totalNotionalValue	String	Sub-account and Main-account Position Notional Value
How was your Reading Experience with us?
★
★
★
★
★
Feedback
Previous
Get Current Funding Rate
Next
Get Contract Config