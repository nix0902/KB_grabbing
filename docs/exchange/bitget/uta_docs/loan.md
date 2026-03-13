# Get Margin Coin Info | Bitget API

**URL:** https://www.bitget.com/api-doc/uta/loan/Get-Ensure-Coins

---

Skip to main content
Classic
UTA
English
Unified Trading Account
Quick Start
Change Log
Market
Account
Trade
Strategy
Tax
Crypto Loans
Inst Loan
Get Transferred Quantity
Get Trade Symbols
Get Risk Unit
Get Repayment Orders
Get Product Info
Get Loan Orders
Get LTV
Get Margin Coin Info
Bind/Unbind UID to Risk Unit
Broker
Websocket
Error Code
Enumeration
Inst LoanGet Margin Coin Info
Get Margin Coin Info
Copy Page
Description​

Get Margin Coin Info

HTTP Request​
GET /api/v3/ins-loan/ensure-coins-convert
Rate limit: 3/sec/UID
Permission: UTA mgt. (read)
Request
curl "https://api.bitget.com/api/v3/ins-loan/ensure-coins-convert?productId=xxxxxxxx" \
   -H "ACCESS-KEY:*******" \
   -H "ACCESS-SIGN:*" \
   -H "ACCESS-PASSPHRASE:*" \
   -H "ACCESS-TIMESTAMP:1659076670000" \
   -H "locale:en-US" \
   -H "Content-Type: application/json" 

Request Parameters​
Parameter	Type	Required	Comments
productId	String	Yes	Product Id
Response
{
  "code": "00000",
  "msg": "success",
  "requestTime": 1711697581815,
  "data": {
    "productId": "xxxxxxxx",
    "coinInfo": [
      {
        "coin": "USDC",
        "convertRatio": "1",
        "maxConvertValue": "1000",
        "convertRatioList": [
          {
            "ladder": "0-100000000",
            "convertRatio": "1"
          },
          {
            "ladder": "100000000-200000000",
            "convertRatio": "0.99"
          }
        ]
      },
      {
        "coin": "USDT",
        "convertRatio": "1",
        "maxConvertValue": "1000",
        "convertRatioList": [
          {
            "ladder": "0-100000000",
            "convertRatio": "1"
          },
          {
            "ladder": "100000000-200000000",
            "convertRatio": "0.99"
          }
        ]
      }
    ]
  }
}

Response Parameters​
Parameter	Type	Comments
productId	String	Product Id
coinInfo	Array	Spot margin coin
> coin	String	Margin coin
> convertRatio	String	Margin coin convert ratio
> maxConvertValue	String	Maximum convert value(USDT)
> convertRatioList	Array	Tiered conversion rate
> > ladder	String	ladder
> > convertRatio	String	Margin coin convert ratio
How was your Reading Experience with us?
★
★
★
★
★
Feedback
Previous
Get LTV
Next
Bind/Unbind UID to Risk Unit