# Get Upgrade Status | Bitget API

**URL:** https://www.bitget.com/api-doc/spot/account/Get_Upgrade_Status

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
Spot Trading API
Market
Trade
Trigger
Account
Get Account Information
Get Account Assets
Get Sub-accounts Assets
Modify Deposit Account
Get Account Bills
Transfer
GET Transferable Coin List
Sub Transfer
Withdraw
Get MainSub Transfer Record
Get Transfer Record
Switch BGB Deduct
Get Deposit Address
Get SubAccount Deposit Address
Get BGB Deduct Info
Cancel Withdrawal
Get SubAccount Deposit Records
Get Withdrawal Records
Get Deposit Records
Upgrade Account
Get Upgrade Status
Websocket
Error Code
AccountGet Upgrade Status
Get Upgrade Status
Description​

No account type restrictions; both parent and sub-accounts are supported.

HTTP Request​
GET /api/v2/spot/account/upgrade-status
Rate Limit: 1 req/sec/UID
Request Example
curl "https://api.bitget.com/api/v2/spot/account/upgrade-status" \
   -H "ACCESS-KEY:*******" \
   -H "ACCESS-SIGN:*" \
   -H "ACCESS-PASSPHRASE:*" \
   -H "ACCESS-TIMESTAMP:1659076670000" \
   -H "locale:en-US" \
   -H "Content-Type: application/json" 

Request Parameter​
Parameter	Type	Required	Description
subUid	String	No	Sub-account User ID

Response Example
{
  "code": "00000",
  "msg": "success",
  "requestTime": 1746687063471,
  "data": {
    "status": "fail",
    "reason": "upgrade_disabled"
  }
}

Response Parameter​
Parameter	Type	Description
status	String	Upgrade Status
processProcessing
successSuccess
failFailed
reason	String	Failure Reason
Only returned when the status = fail
How was your Reading Experience with us?
★
★
★
★
★
Feedback
Previous
Upgrade Account
Next
Market Channel