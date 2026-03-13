# Get Business Line All Symbol Trade Rate | Bitget API

**URL:** https://www.bitget.com/api-doc/common/public/Get-All-Trade-Rate

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
Bitget API Introduction
V2 API Update Guide
Changelog
Quick Start
FAQ
SDK
Signature
Signature Sample
Websocket API
Notice
API Domain
Public
Get Server Time
Get Trade Rate
Get Business Line All Symbol Trade Rate
Tax
Demo Trading
P2P
Trading Insights
Virtual Subaccount
Assets
Convert
BGB-Convert
PublicGet Business Line All Symbol Trade Rate
Get Business Line All Symbol Trade Rate

Frequency limit:10 times/1s (UID)

Description​

Get Trade Rate

HTTP Request​
GET /api/v2/common/all-trade-rate
Request Example
curl "https://api.bitget.com/api/v2/common/all-trade-rate?business=mix" \
   -H "ACCESS-KEY:*******" \
   -H "ACCESS-SIGN:*" \
   -H "ACCESS-PASSPHRASE:*" \
   -H "ACCESS-TIMESTAMP:1659076670000" \
   -H "locale:en-US" \
   -H "Content-Type: application/json"

Request Parameter​
Parameter	Type	Required	Description
symbol	String	Yes	Trading pair name, e.g. BTCUSDT
businessType	String	Yes	Business type
mix contract
spot Spot
margin leverage
Response Example
{
    "code": "00000",
    "msg": "success",
    "requestTime": 1683875302853,
    "data": [
        {
            "symbol": "BTCUSDT",
            "makerFeeRate": "0.0001",
            "takerFeeRate": "0.0004"
        },
        {
            "symbol": "ETHUSDT",
            "makerFeeRate": "0.0001",
            "takerFeeRate": "0.0004"
        },
        {
            "symbol": "DOGEUSDT",
            "makerFeeRate": "0.0001",
            "takerFeeRate": "0.0004"
        }
    ]
}

Response Parameter​
Parameter	Type	Description
symbol	String	Trading pair
makerRateRate	String	Pending Order Handling Rates
Fractional form, i.e., 0.0002 for two parts per million
takerFeeRate	String	Taking Order Handling Rates
Fractional form, i.e., 0.0002 for two parts per million
How was your Reading Experience with us?
★
★
★
★
★
Feedback
Previous
Get Trade Rate
Next
Spot Transaction Records