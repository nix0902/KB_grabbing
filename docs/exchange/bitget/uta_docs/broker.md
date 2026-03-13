# Delete Broker Subaccount Apikey | Bitget API

**URL:** https://www.bitget.com/api-doc/uta/broker/Delete-Subaccount-Apikey

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
Broker
Create Broker Sub-Account
Get Broker Sub-Account List
Modify Broker Sub-Account
Broker Subaccount Withdrawal
Get Broker Subaccount Deposit Address
Get All Broker Subaccount Deposit Withdrawal
Get Broker Commission
Create Broker Sub-Account API Key
Modify Broker Sub-Account API Key
Delete Broker Subaccount Apikey
Get Broker Sub-Account API Key
Websocket
Error Code
Enumeration
BrokerDelete Broker Subaccount Apikey
Delete Broker Subaccount Apikey
Copy Page
Description​
This endpoint has no response parameters.
It returns the deletion result synchronously.
Determine whether the deletion succeeded or failed (and the failure reason) based on the returned code and msg.
HTTP Request​
POST /api/v3/broker/delete-sub-apikey
Rate limit: 20/sec/UID
Only the master account with a user type of ND Broker can call this API endpoint.
Request
curl -X POST "https://api.bitget.com/api/v3/broker/delete-sub-apikey" \
  -H "ACCESS-KEY:your apiKey" \
  -H "ACCESS-SIGN:*" \
  -H "ACCESS-PASSPHRASE:*" \
  -H "ACCESS-TIMESTAMP:1659076670000" \
  -H "locale:zh-CN" \
  -H "Content-Type: application/json" \
  -d '{"subUid": "12345678910","apiKey": "bg_123456789109"}'

Request Parameters​
Parameter	Type	Required	Comments
subUid	String	Yes	Sub-account UID
apiKey	String	Yes	API Key
Response

{
  "code": "00000",
  "msg": "success",
  "requestTime": 1767151778823
}

Response Parameters​
Parameter	Type	Comments
code	String	Code
msg	String	Message
requestTime	String	Request Time
How was your Reading Experience with us?
★
★
★
★
★
Feedback
Previous
Modify Broker Sub-Account API Key
Next
Get Broker Sub-Account API Key