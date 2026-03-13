# Get Withdrawal Records | Bitget API

**URL:** https://www.bitget.com/api-doc/uta/account/withdrawal/Get-Withdrawal-Records

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
Get Account Assets
Get Account Funding Assets
Get Account Info
Set Leverage
Set Holding Mode
Get Financial Records
Get Repayable Coins
Get Payment Coins
Repay
Get Convert Records
Switch Deduct
Set Up Deposit Account
Get Deduct Info
Get Account Fee Rate
Switch Account
Get Switch Status
Get Max Transferable
Get OI Limit
Adjust Account Mode
SubAccount
Transfer
Deposit
Withdrawal
Withdrawal
Get Withdrawal Records
Trade
Strategy
Tax
Crypto Loans
Inst Loan
Broker
Websocket
Error Code
Enumeration
AccountWithdrawalGet Withdrawal Records
Get Withdrawal Records
Copy Page
Description​

Get withdrawal records.

HTTP Request​
GET /api/v3/account/withdrawal-records
Rate limit: 10/sec/UID
Permission: UTA mgt. (read)
Request
curl "https://api.bitget.com/api/v3/account/withdrawal-records?startTime=1700561435000&endTime=1703153435933" \
   -H "ACCESS-KEY:*******" \
   -H "ACCESS-SIGN:*" \
   -H "ACCESS-PASSPHRASE:*" \
   -H "ACCESS-TIMESTAMP:1659076670000" \
   -H "locale:en-US" \
   -H "Content-Type: application/json"

Request Parameters​
Parameter	Type	Required	Comments
coin	String	No	Coin name
- If not filled in, all coin deposit records will be retrieved.
orderId	String	No	order ID
- When querying a single order, you may use either orderId or clientOid. If both are provided, orderIdF takes precedence.
clientOid	String	No	Client Order ID
- When querying a single order, you may use either orderId or clientOid. If both are provided, orderId takes precedence.
startTime	String	Yes	Query record start time
Unix millisecond timestamp, e.g., 1690196141868

endTime	String	Yes	Query record end time
Unix millisecond timestamp, e.g., 1690196141868

limit	String	No	Items per page
The default value is 20, and the maximum value is 100.
cursor	String	No	Cursor ID
- Used for pagination to reduce query response time
- Do not send for the initial query. When querying the second page and subsequent data, use the smallest orderId returned from the previous query. The results will return data less than that value
Response
{
  "code": "00000",
  "msg": "success",
  "requestTime": 1740481864545,
  "data": [
    {
      "orderId": "1278112570963742720",
      "clientOid": "12121212112",
      "recordId": "1278112570963742720",
      "coin": "usdt",
      "type": "deposit",
      "dest": "internal_transfer",
      "size": "100",
      "status": "success",
      "fromAddress": "0x51xxx",
      "toAddress": "0x51xxx",
      "chain": "erc20",
      "fee": "10",
      "confirm": "5",
      "tag": "",
      "createdTime": "1740451703778",
      "updatedTime": "1740451703778"
    }
  ]
}

Response Parameters​
Parameter	Type	Comments
orderId	String	Order ID
clientOid	String	Client Order ID
recordId	String	Deposit Record ID
- If dest is on_chain, it's the on-chain hash value.
- If dest is internal_transfer, it's the order ID.
coin	String	Coin name
type	String	Operation Type
withdrawWithdrawal
dest	String	Withdrawal Type
on_chainOn-chain deposit
internal_transferInternal transfer
size	String	Withdrawal quantity.
status	String	Withdrawal Status
pendingPending
successSuccess
failFail
fromAddress	String	Withdrawal Initiator
- If dest is on_chain, it's the on-chain address.
- If dest is internal_transfer, it's the UID, email, or mobile number.
toAddress	String	Withdrawal Recipient
- If dest is on_chain, it's the on-chain address.
- If dest is internal_transfer, it's the UID, email, or mobile number.
chain	String	Withdrawal Network
- This parameter can be ignored when dest is internal_transfer
fee	String	Transaction Fee
- The unit of measurement is the withdrawal currency.
confirm	String	Confirmation block count
tag	String	Tags
createdTime	String	Withdrawal record creation time, Unix millisecond timestamp
updatedTime	String	Withdrawal record update time, Unix millisecond timestamp
How was your Reading Experience with us?
★
★
★
★
★
Feedback
Previous
Withdrawal
Next
Place Order