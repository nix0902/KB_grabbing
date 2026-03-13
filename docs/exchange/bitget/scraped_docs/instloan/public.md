# Get Spot Symbols | Bitget API

**URL:** https://www.bitget.com/api-doc/instloan/public/Get-Spot-Symbols

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
Inst Loan
Public
Get Product Info
Get Margin Coin Info
Get Spot Symbols
Account
Orders
PublicGet Spot Symbols
Get Spot Symbols

Rate limit: 5 req/sec/UID

HTTP Request​
GET /api/v2/spot/ins-loan/symbols
Request Example
curl "https://api.bitget.com/api/v2/spot/ins-loan/symbols?productId=xxx" \
  -H "ACCESS-KEY:your apiKey" \
  -H "ACCESS-SIGN:*******" \
  -H "ACCESS-PASSPHRASE:*****" \
  -H "ACCESS-TIMESTAMP:1659076670000" \
  -H "locale:en-US" \
  -H "Content-Type: application/json"

Request Parameters​
Parameter	Type	Required	Description
productId	String	Yes	Product Id
Response Example
{
  "code": "00000",
  "msg": "success",
  "requestTime": 1711697588556,
  "data": {
    "productId": "xxxxxxxx",
    "spotSymbols": [
      "BTCUSDT",
      "ETHUSDT"
    ]
  }
}

Response Parameters​
Parameter	Type	Comments
productId	String	Product Id
> spotSymbols	Array	Spot trading pairs
How was your Reading Experience with us?
★
★
★
★
★
Feedback
Previous
Get Margin Coin Info
Next
Get LTV