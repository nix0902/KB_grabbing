# Get the leverage interest rate | Bitget API

**URL:** https://www.bitget.com/api-doc/margin/common/interest-rate-record

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
Margin Trading API
Common
Get Support Currencies
Get the leverage interest rate
Cross
Isolated
Error Code
CommonGet the leverage interest rate
Get the leverage interest rate

Frequency limit:10 times/1s (IP)

Description​
HTTP Request​
GET /api/v2/margin/interest-rate-record
Request
curl "https://api.bitget.com/api/v2/margin/interest-rate-record?coin=BTC"
   -H "ACCESS-KEY:*******" \
   -H "ACCESS-SIGN:*******" \
   -H "ACCESS-PASSPHRASE:*****" \
   -H "ACCESS-TIMESTAMP:1659076670000" \
   -H "locale:en-US" \
   -H "Content-Type: application/json"

Request Parameters​
Parameter	Type	Required	Description
coin	String	Yes	coin
Response
{
  "code": "00000",
  "msg": "success",
  "requestTime": 1746692917537,
  "data": {
    "coin": "BTC",
    "dailyInterestRate": "0.00003000",
    "annualInterestRate": "0.01095000",
    "updatedTime": "1746690900381"
  }
}

Response Parameters​
Parameter	Type	Description
coin	String	coin
dailyInterestRate	String	Daily interest rate
Return in decimal form with 8 decimal places.
quoteCoin	String	Annual interest rate
Return in decimal form with 8 decimal places.
annualInterestRate	String	update time
In Unix timestamp format in milliseconds
How was your Reading Experience with us?
★
★
★
★
★
Feedback
Previous
Get Support Currencies
Next
Get Cross Borrow History