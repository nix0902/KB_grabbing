# Get LTV | Bitget API

**URL:** https://www.bitget.com/api-doc/instloan/account/Get-LTV

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
Account
Get LTV
Get transferable amount
Get Risk Unit
Bind/Unbind Sub-account UID to Risk Unit
Orders
AccountGet LTV
Get LTV

Rate limit: 5 req/sec/UID

HTTP Request​
GET /api/v2/spot/ins-loan/ltv-convert
Request Example
curl "https://api.bitget.com /api/v2/spot/ins-loan/ltv-convert" \
  -H "ACCESS-KEY:your apiKey" \
  -H "ACCESS-SIGN:*******" \
  -H "ACCESS-PASSPHRASE:*****" \
  -H "ACCESS-TIMESTAMP:1659076670000" \
  -H "locale:en-US" \
  -H "Content-Type: application/json"

Request Parameters​
Parameter	Type	Required	Description
riskUnitId	String	No	Risk Sub-unit ID (Required for parent account calls, not required for risk sub-unit account calls)
Response Example
{
  "code": "00000",
  "msg": "success",
  "requestTime": 1711697588556,
  "data": {
    "ltv": "0.6667",
    "subAccountUids": [
      "xxxxxxxxxx",
      "xxxxxxxxxx"
    ],
    "unpaidUsdtAmount": "1.12",
    "usdtBalance":"1223",
    "unpaidInfo":[
      {
        "coin":"USDT",
        "unpaidQty":"12",
        "unpaidInterest":"1.2"
      }
    ],
    "balanceInfo":[
      {
        "coin":"USDT",
        "price":"12",
        "amount":"1.2",
        "convertedUsdtAmount":"12"
      }
    ]
  }
}

Response Parameters​
Parameter	Type	Description
ltv	String	Risk rate, 0.6667
subAccountUids	Array	Sub-accounts user ID in Risk Unit
usdtBalance	String	Total assets (margin coins converted to USDT)
unpaidUsdtAmount	String	Total debt (converted to USDT)
unpaidInfo	Array	Debt details
> coin	String	coin
> unpaidQty	String	Unpaid principle
> unpaidInterest	String	Unpaid interest
balanceInfo	Array	Asset details
> coin	String	Margin coin
> price	String	Margin coin price
> amount	String	Margin coin amount
> convertedUsdtAmount	String	Margin conversion amount (converted to USDT)
How was your Reading Experience with us?
★
★
★
★
★
Feedback
Previous
Get Spot Symbols
Next
Get transferable amount