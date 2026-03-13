# Stop The Order | Bitget API

**URL:** https://www.bitget.com/api-doc/copytrading/spot-copytrade/follower/Stop-Order

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
Spot Copy Trade
Trader API
Follower API
Stop The Order
Add or Modify Following Configurations
Set Take Profit And Stop Loss
My Trader List
Get Trader's Current Trading Pair
Get Follow Configuration
Get History Tracking Orders
Get Current Copy Trade Orders
Sell And Sell in Batch
Cancel Follow
Error Code
Spot Copy TradeFollower APIStop The Order
Stop The Order

Rate Limit: 1 req/sec/UID

Request Parameter​
POST /api/v2/copy/spot-follower/stop-order
Request Example
curl -X POST "https://api.bitget.com/api/v2/copy/spot-follower/stop-order" \
   -H "ACCESS-KEY:your apiKey" \
   -H "ACCESS-SIGN:*******" \
   -H "ACCESS-PASSPHRASE:*****" \
   -H "ACCESS-TIMESTAMP:1659076670000" \
   -H "locale:en-US" \
   -H "Content-Type: application/json" \  
   -d '{
        "trackingNoList": ["123"]
}'

Request Parameter​
Parameter Name	Parameter Type	Required	Description
trackingNoList	String	Yes	Order tracking number groups
Up to 50.
Atomic execution results, either all successful or all failed.
Response example
{
        "code": "00000",
        "msg": "success",
        "requestTime": 1656066841304,
        "data": ""
}

Response Description​
Parameter	Parameter Type	Description
code	String	Result code
00000success
others fail
How was your Reading Experience with us?
★
★
★
★
★
Feedback
Previous
My Follower List
Next
Add or Modify Following Configurations