# Get Loan Debts | Bitget API

**URL:** https://www.bitget.com/api-doc/uta/crypto-loans/Get-Loan-Debts

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
Get Loan Coins
Get Loan Interest
Borrow Coins
Get Borrow Ongoing
Get Borrow History
Repay Coins
Get Repay History
Revise Pledge
Get Pledge Rate History
Get Loan Debts
Get Loan Reduces
Inst Loan
Broker
Websocket
Error Code
Enumeration
Crypto LoansGet Loan Debts
Get Loan Debts
Copy Page
Description​

Get Loan Debts

HTTP Request​
GET /api/v3/loan/debts
Rate limit: 10/sec/UID
Permission: UTA mgt. (read)
Request
curl "https://api.bitget.com/api/v3/loan/debts" \
   -H "ACCESS-KEY:*******" \
   -H "ACCESS-SIGN:*" \
   -H "ACCESS-PASSPHRASE:*" \
   -H "ACCESS-TIMESTAMP:1659076670000" \
   -H "locale:en-US" \
   -H "Content-Type: application/json" 

Request Parameters​

N/A

Response
{
  "code": "00000",
  "msg": "success",
  "requestTime": 1770266637419,
  "data": {
    "pledgeInfos": [
      {
        "coin": "BGB",
        "amount": "1.02556765",
        "amountUsdt": "3.03"
      }
    ],
    "loanInfos": [
      {
        "coin": "USDT",
        "amount": "2.00009297",
        "amountUsdt": "2.01"
      }
    ]
  }
}

Response Parameters​
Parameter	Type	Comments
loanInfos	Array	Collateral assets
> coin	String	Collateral coin
> amount	String	Collateral amount (denominated in coin)
> amountUsdt	String	Collateral value (in USDT)
> coin	String	Initial borrowed amount
pledgeInfos	String	Liability assets
> coin	String	Liability coin
> amount	String	Liability amount (denominated in coin)
> amountUsdt	String	Liability value (in USDT)
How was your Reading Experience with us?
★
★
★
★
★
Feedback
Previous
Get Pledge Rate History
Next
Get Loan Reduces