# Get Agent Commission Detail | Bitget API

**URL:** https://www.bitget.com/api-doc/affiliate/customerInfo/GetCommissionDetail

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
Affiliate Introduction
Affiliate API
Get Agent Direct commissions
Get Agent Customer Trade Volume List
Get Agent Customer List
Get Agent Customer Kyc Result
Get Agent Customer Deposit List
Get Agent Customer Assets List
Get Agent Commission Detail
Error Code
Affiliate APIGet Agent Commission Detail
Get Agent Commission Detail
Rate limit: 10/sec/UID
Description​
startTime and endTime should be set simultaneously or not set at all.
The maximum time span supported by startTime and endTime is 7 days.
This API supports retrieving data within the past 90 days.
If startTime and endTime are not set in the request, it will default to returning information for yesterday (00:00-23: 59 UTC+8).
HTTP Request​
GET /api/v2/broker/agent-commission
Request Example
curl "https://api.bitget.com/api/v2/broker/agent-commission" \
  -H "ACCESS-KEY:your apiKey" \
  -H "ACCESS-SIGN:*" \
  -H "ACCESS-PASSPHRASE:*" \
  -H "ACCESS-TIMESTAMP:1659076670000" \
  -H "locale:zh-CN" \
  -H "Content-Type: application/json" \

Request Parameters​
Parameter	Type	Required	Description
startTime	String	No	Start time
Unix millisecond timestamp
endTime	String	No	End time
Unix millisecond timestamp
limit	String	No	max:100,default: 100
idLessThan	String	No	Requests the content on the page before this ID (older data), the value input should be the endld of the corresponding interface.
Response Example
{
  "code": "00000",
  "msg": "success",
  "requestTime": 1694593273026,
  "data": {
    "endId": "6624",
    "commissionList": [
      {
        "uid": "3125195374",
        "bizType": "futures",
        "subBizType": "usdt_futures",
        "symbol": "BTCUSDT",
        "coin": "BTC",
        "fee": "0.0000111",
        "volume": "2.2",
        "activityBonusDeduct": "0.00001",
        "spotCouponDeduct": "0.00001",
        "futuresCouponDeduct": "0.00001",
        "spotFeeDiscountDeduct": "0.00001",
        "negativeMakerFeeDeduct": "0.00001",
        "feePaid": "0.00005",
        "directCommission": "0.00001",
        "subCommission": "0.00001",
        "partnerCommission": "0.000001",
        "partnerActualCommission": "0.00001",
        "traderType": "trader",
        "apiType": "non_api",
        "status": "settled",
        "startCalculationTime": "1728635651441",
        "endCalculationTime": "1728635651441"
      }
    ]
  }
}

Response Parameters​
Parameter	Type	Description
commissionList	Array	Customer Commission List
>uid	String	Partner UID
> bizType	String	Trade type
spot
futures
>subBizType	String	subBizType
spot
margin
usdt_futures
coin_futures
usdc_futures
>symbol	String	symbol
>coin	String	coin
>fee	String	Total fee
Statistical values within the input time range
Precision is 8 decimal places
>volume	String	Transaction amount
Statistical value within the input time range
Precision is 8 decimal places
>activityBonusDeduct	String	Fees offset by experience funds
>spotCouponDeduct	String	Fees offset by spot cashback coupons
>futuresCouponDeduct	String	Fees offset by contract airdrop coupons
>spotFeeDiscountDeduct	String	Fees reduced by spot fee discounts
>negativeMakerFeeDeduct	String	Fees offset by negative maker fees
>feePaid	String	Actual paid fee
Statistical value within the input time period
Precision is 8 decimal places
>directCommission	String	Direct customer commission
Direct customers are first-level users directly invited by KOL
Statistical value within the participation period
Precision is 8 decimal places
>subCommission	String	Subordinate commission
Direct customer subordinates are second-level, third-level...(not first-level) indirect invitation relationship
Statistical value within the participation time period
Precision is 8 decimal places
>partnerCommission	String	Partner Commission
Statistical value within the entry time period
Precision is 8 decimal places
>partnerActualCommission	String	Partner's actual commission
Statistical value within the entry time period
Precision is 8 decimal places
>traderType	String	Trader type
user: ordinary user Trader: trader
>apiType	String	API type
api: API user non_api: non-API user
>status	String	status
settled
unsettled
notIssued

>startCalculationTime	String	Statistics start time Unix millisecond timestamp
>endCalculationTime	String	Statistics end time Unix millisecond timestamp
endId	String	The last data ID. When used as a request, the id is used as an index for the next query
How was your Reading Experience with us?
★
★
★
★
★
Feedback
Previous
Get Agent Customer Assets List
Next
Rest API Error Code