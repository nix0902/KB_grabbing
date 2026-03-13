# Unfollow the Trader | Bitget API

**URL:** https://www.bitget.com/api-doc/copytrading/future-copytrade/follower/Cancel-Trader

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
Copy Trading API
Future Copy Trade
Trader API
Follower API
Get Current Tracking Orders
Get History Tracking Orders
Set TPSL
Copy settings
Set Copy Trade Settings
Get Copy Trade Settings
Get My Traders
Close Positions
Get Follow Limit
Unfollow the Trader
Spot Copy Trade
Error Code
Future Copy TradeFollower APIUnfollow the Trader
Unfollow the Trader

Rate Limit: 5 req/sec/UID

HTTP Request​
POST /api/v2/copy/mix-follower/cancel-trader
Request Example
curl -X POST "https://api.bitget.com/api/v2/copy/mix-follower/cancel-trader" \
  -H "ACCESS-KEY:your apiKey" \
  -H "ACCESS-SIGN:*******" \
  -H "ACCESS-PASSPHRASE:*****" \
  -H "ACCESS-TIMESTAMP:1659076670000" \
  -H "locale:en-US" \
  -H "Content-Type: application/json" \
  -d '{"traderId": "123123"}'

Request Parameters​
Parameter	Type	Required	Description
traderId	String	Yes	Trader user ID
Response example
{
    "code": "00000",
    "data": "success",
    "msg": "success",
    "requestTime": 1627354109502
}

Response Parameters​
Parameter	Type	Description
data	String	Result
success fail
How was your Reading Experience with us?
★
★
★
★
★
Feedback
Previous
Get Follow Limit
Next
Get Profit Summary