# Earn account | Bitget API

**URL:** https://www.bitget.com/api-doc/earn/account/Earn-Assets

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
Earn API
Savings
Earn
Earn account
Shark Fin
Loan
EarnEarn account
Earn account

Frequency limit: 10c/1s (Uid)

Description​

Earn account overview

HTTP Request​
GET /api/v2/earn/account/assets
Request Example
curl "https://api.bitget.com/api/v2/earn/account/assets" \
  -H "ACCESS-KEY:your apiKey" \
  -H "ACCESS-SIGN:*******" \
  -H "ACCESS-PASSPHRASE:*****" \
  -H "ACCESS-TIMESTAMP:1659076670000" \
  -H "locale:en-US" \
  -H "Content-Type: application/json"

Request Parameters​
Parameter	Type	Required	Description
coin	String	No	assets coin
Response Example
{
  "code": "00000",
  "msg": "success",
  "requestTime": 1712046333409,
  "data": [
    {
      "coin": "BTC",
      "amount": "0.10000000"
    },
    {
      "coin": "USDT",
      "amount": "400.00000000"
    }
  ]
}

Response Parameters​
Parameter	Type	Description
data	List<Object>	Savings assets list
> coin	String	coin
> amount	String	amount
How was your Reading Experience with us?
★
★
★
★
★
Feedback
Previous
Savings Redemption Results
Next
Sharkfin Products