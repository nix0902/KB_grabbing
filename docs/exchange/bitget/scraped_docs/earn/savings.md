# Savings Redemption Results | Bitget API

**URL:** https://www.bitget.com/api-doc/earn/savings/Savings-Redeem-Result

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
Savings Product List
Savings Account
Savings Assets
Savings Records
Savings Subscription Detail
Subscribe Savings
Savings Subscription Result
Redeem Savings
Savings Redemption Results
Earn
Shark Fin
Loan
SavingsSavings Redemption Results
Savings Redemption Results

Frequency limit: 10c/1s (Uid)

Description​

Get savings redeem result

HTTP Request​
GET /api/v2/earn/savings/redeem-result
Request Example
curl "https://api.bitget.com/api/v2/earn/savings/redeem-result?orderId=123123&periodType=flexible" \
  -H "ACCESS-KEY:your apiKey" \
  -H "ACCESS-SIGN:*******" \
  -H "ACCESS-PASSPHRASE:*****" \
  -H "ACCESS-TIMESTAMP:1659076670000" \
  -H "locale:en-US" \
  -H "Content-Type: application/json"

Request Parameters​
Parameter	Type	Required	Description
orderId	String	Yes	subscription order ID
periodType	String	Yes	Period type
flexible flexible current
fixed fixed term
Response Example
{
    "code": "00000",
    "msg": "success",
    "requestTime": 1696752594890,
    "data": {
        "result": "success",
        "msg": ""
    }
}

Response Parameters​
Parameter	Type	Description
result	String	Redemption result
success Success
fail Fail
msg	String	There will be an error message when the result is fail
How was your Reading Experience with us?
★
★
★
★
★
Feedback
Previous
Redeem Savings
Next
Earn account