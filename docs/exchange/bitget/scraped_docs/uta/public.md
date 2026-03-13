# Get Market Maker Score Weight | Bitget API

**URL:** https://www.bitget.com/api-doc/uta/public/Get-Score-Weights

---

Skip to main content
Classic
UTA
English
Unified Trading Account
Quick Start
Change Log
Market
Get Instruments
Get Tickers
Get OrderBook
Get RPI OrderBook
Get Recent Public Fills
Get Proof Of Reserves
Get Open Interest
Get Kline/Candlestick
Get Kline/Candlestick History
Get Current Funding Rate
Get Funding Rate History
Get Risk Reserve
Get Discount Rate
Get Margin Loan
Get Position Tier
Get Open Interest Limit
Get Index Price Components
Get Market Maker Fee Group
Get Market Maker Score Weight
Account
Trade
Strategy
Tax
Crypto Loans
Inst Loan
Broker
Websocket
Error Code
Enumeration
MarketGet Market Maker Score Weight
Get Market Maker Score Weight
Copy Page
Description​

Used by market makers to query the market-making score weights for each symbol

HTTP Request​
GET /api/v3/market/score-weights
Rate limit: 5/sec/IP
Request
curl "https://api.bitget.com/api/v3/market/score-weights?category=SPOT"

Request Parameters​
Parameter	Type	Required	Comments
category	String	No	Business line type
SPOT
FUTURES
If not filled in, all business lines will be returned by default.
Response
{
  "code": "00000",
  "msg": "success",
  "requestTime": 1772524004421,
  "data": [
    {
      "category": "SPOT",
      "label": "usdt",
      "symbol": "LUMIAUSDT",
      "requiredSpread": "0.0005",
      "minMakerVolume": "500",
      "weight": "50"
    }
  ]
}

Response Parameters​
Parameter	Type	Comments
category	String	Business line type
SPOT
FUTURES
label	String	Label
symbol	String	Symbol name
e.g: ETHUSDT
requiredSpread	String	Required maker-order spread rate
For example, 0.0005 means 0.05%
minMakerVolume	String	Cumulative minimum maker-order amount
Positive integer, e.g. 5000, 10000
unit: USDT
weight	String	Weight (in decimal form)
How was your Reading Experience with us?
★
★
★
★
★
Feedback
Previous
Get Market Maker Fee Group
Next
Get Account Assets