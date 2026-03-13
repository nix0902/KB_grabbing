# Get Server Time | Bitget API

**URL:** https://www.bitget.com/api-doc/spot/public/Get-Server-Time

---

Skip to main content
Common
Spot
Future
Broker
Margin
CopyTrading
V1
English
Spot Trading API
Public
Get Server Time
Get Symbol Config
Get Currency Information
Wallet
Market
Trade
Trigger
Account
Tax
P2P
Convert
Virtual Subaccount
Earn
Websocket
Error Code
PublicGet Server Time
Get Server Time

Frequency limit: 20 times/1s (IP)

Description​

Getting server time,Unix millisecond timestamp

HTTP request​
GET /api/v2/public/time
Request Example
curl "https://api.bitget.com/api/v2/public/time"

Request Parameters​
Parameter	Type	Required	Description
N/A			
Response Example
{
    "code": "00000",
    "msg": "success",
    "requestTime": 1688008631614,
    "data": {
        "serverTime": "1688008631614"
    }
}

Response Parameters​
Parameter	Type	Description
serverTime	String	Server time, Unix millisecond timestamp, e.g. 1690196141868
Previous
Spot Trading API
Next
Get Symbol Config