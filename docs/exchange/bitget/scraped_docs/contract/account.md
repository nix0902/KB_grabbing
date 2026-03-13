# Get Isolated Symbols | Bitget API

**URL:** https://www.bitget.com/api-doc/contract/account/Get-Isolated-Symbols

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
Futures Trading API
Market
Account
Get Single Account
Get Account List
Get Subaccount Assets
Get USDT-M futures Interest history
Get Max Openable Quantity
Get Liquidation Price
My Estimated Open Count
Set Isolated Position Auto Margin
Change Leverage
Change The Product Line Leverage
Adjust Position Margin
Set USDT-M Futures Asset Mode
Change Margin Mode
Union Convert
Change Position Mode
Get Account Bills
Get Union Transfer Limits
Get Union Config
Get Switch Union USDT
Get Isolated Symbols
Position
Trade
Trigger Order
Websocket
Error Code
AccountGet Isolated Symbols
Get Isolated Symbols

Rate limits: 10 time/1s (uid)

Description​

Retrieve trading pairs with isolated margin mode under the account.

HTTP Request​
GET /api/v2/mix/account/isolated-symbols
Request
curl "https://api/v2/mix/account/isolated-symbols?productType=USDT-FUTURES" \
   -H "ACCESS-KEY:*******" \
   -H "ACCESS-SIGN:*" \
   -H "ACCESS-PASSPHRASE:*" \
   -H "ACCESS-TIMESTAMP:1659076670000" \
   -H "locale:en-US" \
   -H "Content-Type: application/json" 

Request Parameters​
Parameter	Type	Required	Description
productType	String	Yes	Product type
USDT-FUTURES USDT-M Futures
COIN-FUTURES Coin-M Futures
USDC-FUTURES USDC-M Futures
Response
{
  "code": "00000",
  "msg": "success",
  "requestTime": 1761568886493,
  "data": [
    {
      "symbol": "COAIUSDT",
      "marginMode": "isolated"
    },
    {
      "symbol": "EVAAUSDT",
      "marginMode": "isolated"
    }
  ]
}

Response Parameters​
Parameter	Type	Description
symbol	String	Symbol name
marginMode	String	The margin mode is fixed as isolated
How was your Reading Experience with us?
★
★
★
★
★
Feedback
Previous
Get Switch Union USDT
Next
Get Position Tier