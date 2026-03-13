# Change Log | Bitget API

**URL:** https://www.bitget.com/api-doc/uta/changelog

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
Websocket
Error Code
Enumeration
Change Log
Change Log
Copy Page
[March 12, 2026] Retail Price Improvement (RPI) orders are now available on Unified Trading Account (UTA).​

new API: /api/v3/market/rpi-orderbook
new channel: rpi order book

Please refer to Bitget Retail Price Improvement (RPI) Orders for more details.

[March 12, 2026] Support querying basic/advanced account mode information​

API:


/api/v3/account/settings

Changes:
A new field accountLevel has been added to indicate the account level: basic (Basic mode) and advanced (Advanced mode).

[March 11, 2026] Fee Sign Adjustment for the “Get Trade Fills” API​

API:


/api/v3/trade/fills

Changes:
To align with the WebSocket trade-fill channel pushes, we have unified the sign convention for fees in trade fills. The current fee sign convention in the trade-fill REST API is:

fee < 0: The platform pays the user (the user receives a rebate).
fee > 0: The user pays the platform (the user pays a trading fee).
[March 3, 2026] Launch of Market Maker Fee Rate API Query​

API:


/api/v3/market/fee-group Get market maker fee rate groups
/api/v3/market/score-weights Get market maker score weights
[Feb 8, 2026] API supports borrowing for transfers & Trading product information adds launchTime field​

API:


/api/v3/account/transfer: Added allowBorrow parameter to support automatic borrowing through margin when account balance is insufficient
/api/v3/account/sub-transfer: Added allowBorrow parameter to support borrowing transfers between main and sub-accounts
/api/v3/market/instruments: Added launchTime field in response parameters to indicate the launch time of trading pairs

Changes:


Transfer endpoints now support automatic margin borrowing when balance is insufficient by setting allowBorrow to yes
Trading product information now includes launch time (Unix millisecond timestamp) for better tracking of new listings
[Feb 5, 2026] Unified Account Staking & Lending API is now live.​

API:


/api/v3/loan/borrow: Query supported collateral currencies
/api/v3/loan/interest: Query estimated interest and borrowable amount
/api/v3/loan/borrow: Borrow
/api/v3/loan/borrow-ongoing: Query current borrowings
/api/v3/loan/borrow-history: Query borrowing history
/api/v3/loan/repay: Repay
/api/v3/loan/repay-history: Query repayment history
/api/v3/loan/revise-pledge: Adjust collateral ratio
/api/v3/loan/pledge-rate-history: Query collateral ratio history
/api/v3/loan/debts: Query assets and liabilities
/api/v3/loan/reduces: Query liquidation records
[Feb 5, 2026] Adjustment to the response of institution loan Get Margin Coin Info endpiont​

RestAPI : /api/v3/ins-loan/ensure-coins-convert Adjustment： When the margin mode is enabled as "Tiered Discount Rate Model", the response of institution loan Get Margin Coin Info endpiont will add ladder (ladder) and margin coin conversion rate (convertRatio) parameters;

[Feb 4, 2026] WebSocket sends error message before disconnection during service upgrade​

WebSocket:
Changes：


Within 60 seconds before disconnecting during service upgrades, WebSocket will now send an error message (error code: 30033, error message: "Service upgrade in progress. Connection reset imminent. Please reconnect.") to notify clients that the connection will be reset. Clients should reconnect upon receiving this message.
[Jan 27, 2026] The unit for public trade volume in UTA Coin-M futures has been changed to the quote coin​

API:


/api/v3/market/fills、Public Trades Channel Changes：

The unit for public trade volume in UTA Coin-M futures has been changed to the quote coin
[Jan 23, 2026] Added an API for switching account modes​

API:


/api/v3/account/adjust-account-mode Changes：

Added an API for switching account modes, supporting switching between Basic Mode and Advanced Mode under a unified account.
[Jan 22, 2026] Adjustment to the books1 depth channel push frequency for WebSocket Unified Account (v3).​

Websocket: Order Book Channel
Adjustment: The books1 depth channel push frequency has been adjusted to 1 ms.


[Jan 6, 2026] Agent Broker API endpoints migrated to v2:​

API:

Get Agent Direct commissions
Before：/api/broker/v1/agent/customer-commissions
After：/api/v2/broker/customer-commissions

Get Agent Customer Trade Volume List
Before：/api/broker/v1/agent/customerTradeVolumnList
After：/api/v2/broker/customer-trade-volume

Get Agent Customer List
Before：/api/broker/v1/agent/customerList
After：/api/v2/broker/customer-list

Get Agent Customer Kyc Result
Before：/api/broker/v1/agent/customer-kyc-result
After：/api/v2/broker/customer-kyc-result

Get Agent Customer Deposit List
Before：/api/broker/v1/agent/customerDepositList
After：/api/v2/broker/customer-deposit

Get Agent Customer Assets List
Before：/api/broker/v1/agent/customerAccountAssetsList
After：/api/v2/broker/customer-asset

Get Agent Commission Detail
Before：/api/broker/v1/agent/commission-distribution
After：/api/v2/broker/agent-commission

[Jan 6, 2026] New Broker API endpoints added:​

API:

/api/v3/broker/create-sub Create broker sub-account
/api/v3/broker/sub-list Get broker sub-account list
/api/v3/broker/modify-sub Modify broker sub-account
/api/v3/broker/sub-withdrawal Withdraw from broker sub-account
/api/v3/broker/sub-deposit-address Create deposit address for broker sub-account
/api/v3/broker/all-sub-deposit-withdrawal Get sub-account deposit/withdrawal records
/api/v3/broker/commission Get broker sub-account commission records
/api/v3/broker/create-sub-apikey Create API key for broker sub-account
/api/v3/broker/modify-sub-apikey Modify API key for broker sub-account
/api/v3/broker/delete-sub-apikey Delete API key for broker sub-account
/api/v3/broker/query-sub-apikey Query API keys for broker sub-account
[January 6, 2026] Add Index Component Interface & Direct Client Commission and Direct Client Authentication Interface Optimization & Perpetual Current/Historical Open Orders and Order Channel Optimization​

Interface:

/api/v3/market/index-components


/api/broker/v1/agent/customer-commissions


/api/broker/v1/agent/customer-kyc-result


/api/v3/trade/unfilled-orders, /api/v3/trade/history-orders, order channel


Changes：

Add index component interface


Added productType field to return parameters of the Agent Direct Client Commission interface


The return of the direct client authentication interface must include KYB verification information, specifically that the status of direct clients who have passed KYB verification, as obtained by the agent through this interface, is "passed"


Added delegateType field to the perpetual current/historical open orders interface and order channel.


[December 29, 2025]Place order interface request parameters: added new Coin-Margined enum for product type (Currently supports demo trading only)​

Interface:

/api/v3/trade/place-order Changes：
In the request parameters for the order placement interface, a new enum value COIN-FUTURES has been added to the product type category.
[December 11, 2025]Get trade symbols endpoint adds field for maximum allowable borrowable leverage for spot margin​

Interface:

/api/v3/ins-loan/symbols Changes：
Get trade symbols endpoint adds field for maximum allowable borrowable leverage for spot margin.
[November 28, 2025]The maximum number of returned entries for the candlestick API has been increased to 1,000.​

Interface:

/api/v3/market/candles

Changes：

The maximum number of returned entries for the candlestick API has been increased to 1,000.
[November 28, 2025] New API for Get Open Interest Limit.​

Interface：/api/v3/user/create-sub
Changes：

New API for Get Open Interest Limit.
[November 26, 2025] Add instructions for switching to Advanced Mode when creating a new sub-account.​

Interface：/api/v3/user/create-sub
Changes：

Add instructions for switching to Advanced Mode when creating a new sub-account: Sub-accounts are created in Unified Account - Basic Mode by default. To switch to Advanced Mode, please set it manually on the web page.
[November 26, 2025] Websocket Added a new platform liquidation push channel

Websocket: Liquidation channel
Changes: Websocket Added a new platform liquidation push channel

[November 26, 2025] Websocket Added new ADL notification channel​

Websocket: ADL notification channel
Changes: Websocket Added new ADL notification channel

[November 21, 2025] The return value of the get instruments API has added a new enumeration for status.​

Interface：/api/v3/market/instruments
Changes：

The return value of the get instruments API: a new enumeration value limit_close has been added to the status .
[November 21, 2025] Add new tax API​

Interface：/api/v3/tax/records
Changes：

Add new tax API
[November 12, 2025] WebSocket Order Modification Channel Adds Request Parameters​

Websocket: order modification channel
Changes: The order modification channel now includes new request parameters: category and symbol.

[November 8, 2025] WebSocket Supports Broker API Code​

Websocket: place order channel
Changes: The order placement channel supports passing the Broker API Code to receive rebates.

[October 29, 2025] Added API for retrieving the maximum transferable amount.​

Interface：/api/v3/account/max-transferable
Changes：

Added API for retrieving the maximum transferable amount.
[October 9, 2025] Notice: Optimization of Idempotency Rule for clientOid in Unified Account​

Affected APIs:
REST API: Place Order, Batch Place Order
REST API: Order Details
WebSocket : Place Order, Batch Place Order
Before Optimization: Based on a time limit, the validity period of clientOid does not exceed 2 hours.
After Optimization: The time limit is removed, and the rule is optimized to be determined by the current order status. Specifically, clientOid cannot be duplicated during the order pending period; once the order is filled or canceled, clientOid can be duplicated.


[September 26, 2025] New API for a sub-account initiates a transfer to the master account​

Interface：/api/v3/account/sub-master-transfer
Changes：

New API for a sub-account initiates a transfer to the master account
[September 25, 2025] Candlestick and Historical Candlestick APIs Add Premium Index; Get Trading Product Information API Adds RWA Identifier Field​

Interface: /api/v3/market/candles、/api/v3/market/history-candles、/api/v3/market/instruments
Changes：

The K-Line Data and Historical K-Line Data APIs now include the Premium Index.
The Get Trading Product Information API now includes the RWA identifier field.
[September 23, 2025] Launch of WebSocket Order Modification and Batch Order Modification Channels​

WebSocket: Order Modification, Batch Order Modification Channels
Changes： Newly added WebSocket Order Modification Channel and WebSocket Batch Order Modification Channel

[September 2, 2025] Add reason field for Get Switch Status​

Interface: /api/v3/account/switch-status
Changes：

Add reason field for Get Switch Status
[August 28, 2025] Notice: Optimization of Push Frequency for Websocket Order Book Channel (books1) in Unified Account (v3)​

Websocket: Order Book Channel
Adjustment Content: The push frequency of the order book channel (books1) is optimized to 20ms. The symbols for this optimization are: BTCUSDT, ETHUSDT, XRPUSDT, SOLUSDT, SUIUSDT, DOGEUSDT, ADAUSDT, PEPEUSDT, LINKUSDT, HBARUSDT

[August 26, 2025] Announcement: New Scheduled Push Mechanism for WebSocket Account and Position Channels​

Websocket: account channel、position channel

Adjustment: A new scheduled push mechanism has been added to the WebSocket Account and Position channels, with pushes at a fixed 5-second interval.

[August 12, 2025] WebSocket futures market data channel adds nextFundingTime field.​

Websocket: futures ticker channel
Adjustment: A new field nextFundingTime has been added to the WebSocket futures market data channel.

[August 12, 2025] WebSocket order channel response adds "amount".​

Websocket: order channel
Adjustment: The response parameters of the WebSocket order channel have added "amount"

[August 12, 2025] The unified account execution API has added the Execution Correlation ID.​

Websocket: publicTrade channel、fill channel
Interface: /api/v3/trade/fills、/api/v3/market/fills
Adjustment: The unified account execution API has added the Execution Correlation ID.

[August 8, 2025] Transaction details API adds category input and clientOid response.​

Interface：/api/v3/trade/fills
Adjustment：

Transaction details API adds category input and clientOid response.
[August 8, 2025] Account settings API adds UID and account mode response.​

Interface：/api/v3/account/settings
Adjustment：

Account settings API adds UID and account mode response.
[August 7, 2025] The depth channel push parameters have newly added the pseq parameter.​

Websocket: Depth Channel
Adjustment:The depth channel push parameters have newly added the pseq parameter.

[August 1, 2025] Add a new API for retrieving position ADL ranking​

Interface：/api/v3/position/adlRank
Changes：

Add a new API for retrieving position ADL ranking
[July 31, 2025] Account Channel, Positions Channel Push Logic Optimization​

Websocket: Private Channels - Account Channel, Positions Channel
Adjustment:

Account Channel: Pushes the latest asset results; if there's a backlog of messages in the push queue, only the newest one will be pushed.

Positions Channel: Order placement, modification, and cancellation operations for futures contracts will no longer be pushed.
[July 30, 2025] Risk reserve API optimization​

Interface：/api/v3/market/risk-reserve
Changes：

Deprecate totalBalance and type fields; add balance field
[July 30, 2025] New API for setting deposit accounts​

Interface：/api/v3/account/deposit-account
Changes：

New API for setting deposit accounts
[July 30, 2025] New API for obtaining reserve certificates​

Interface：/api/v3/market/proof-of-reserves
Changes：

New API for obtaining reserve certificates
[July 24, 2025] Position tier return unit changed to quete coin.​

Interface：/api/v3/market/position-tier Changes：

Position tier return unit changed to quete coin.
[July 16, 2025] Add New Account Mode Switching API​

Interface：/api/v3/account/switch, /api/v3/account/upgrade Adjustment:

Add New Account Mode Switching API
[July 9, 2025] The Get Risk Reserve interface has deprecated the totalBalance field.​

Interface：/api/v3/market/risk-reserve Adjustment:

The totalBalance field is deprecated in the response.
[July 9, 2025] Unified Account Response/Push: New tradeSide Parameter Enumeration​

APIs：/api/v3/trade/fills;/api/v3/trade/order-info
Channels: fill，order Changes：

Unified Account Response/Push: New tradeSide Parameter Enumeration
[July 8, 2025] Add: Get sub-account unified account assets​

API: /api/v3/account/sub-unified-assets
Changes:

Add function to get sub-account unified account assets
[July 8, 2025] Batch cancel orders supports partial success/failure​

APIs: RestAPI batch cancel orders & WebSocket batch cancel channel
Changes:
Batch cancel verification logic updated

Current: If one order fails verification, all fail. Only success if all pass.
Optimized: Each order verified separately. Supports partial success and failure.
[July 8, 2025] REST Get Order Info API & WebSocket Order Channel add cancelReason enum​

APIs: RestAPI Get Order Info & WebSocket Order Channel
Changes:


Add cancelReason enum to the above API and channel
[July 8, 2025] Add: Get trading fee API​

API: /api/v3/account/fee-rate
Changes:

Add function to get trading fees
[July 2, 2025] Get the transfer records of Main-Sub account. API adjustment.​

Interface：/api/v3/account/sub-transfer-record Adjustment:

Response parameters now include oldTransferId.
[July 02, 2025] WebSocket order, cancel, batch order, batch cancel channels launched​

Change: WebSocket order, cancel, batch order, batch cancel channels launched

[July 1, 2025] Add New deposit and withdrawal APIs，add BGB deduction API.​

Interface：/api/v3/account/deposit-address, /api/v3/account/deposit-records, etc Adjustment:

Add New deposit and withdrawal APIs
Add BGB deduction API.
[June 25, 2025] Add CountDown Cancel All Interface​

Interface：/api/v3/trade/countdown-cancel-all
Adjustment:

Add set CountDown Cancel All interface
[Jun 25, 2025] The order status will add the "new" status​

API Interface：Get Open Orders, Get Order History
Websocket: Private Channel - Order Channel
Change: "orderStatus" field will add new status "new", that means the order has been accepted by match engine

[June 23,2025] Add affiliate-related APIs​

Interface：

/api/broker/v1/agent/commission-distribution
/api/broker/v1/agent/customerAccountAssetsList
/api/broker/v1/agent/customerDepositList
/api/broker/v1/agent/customer-kyc-result
/api/broker/v1/agent/customerList
/api/broker/v1/agent/customerTradeVolumnList
/api/broker/v1/agent/customer-commissions

Changes：Add affiliate-related APIs

[June 20,2025] New API: Fund Account Asset Query.​

Interface：/api/v3/account/funding-assets

Changes：New API: Fund Account Asset Query.

[June 18,2025] Order Modification API & Batch Order Modification API Launched.​

Interface：/api/v3/trade/modify-order , /api/v3/trade/batch-modify-order

Changes：Order Modification API & Batch Order Modification API Launched.

[June 17, 2025] Get transaction details and financial records. API adjustment.​

Interface：/api/v3/trade/fills

Changes：Add the execPnl field for trading profit and loss to the return values.

Interface：/api/v3/account/financial-records

Changes：Add the other type to the category enumeration in request parameters, and add a new request parameter type for account transaction types.

[June 11, 2025] New Take-Profit and Stop-Loss Fields Added to Place Order Interface​

Interface：/api/v3/trade/place-order
Adjustment:

New take-profit and stop-loss fields added to request parameters.
[June 09, 2025] Get Contract Information Adds Maximum Order Quantity Fields​

Interface：/api/v3/market/instruments
Adjustment:

Added maxMarketOrderQty field for the maximum quantity of a single market order.
[June 05,2025] Added stpMode Field to Order Endpoints (Get Order Info, Get Open Orders, Get Order History)​

Interface: /api/v3/trade/order-info;/api/v3/trade/unfilled-orders;/api/v3/trade/history-orders;

Adjustment:The stpMode field has been added to the API response payloads for the following endpoints: Get Order Info; Get Open Orders; Get Order History;

[May 14,2025] Adding new interface: Get Margin Loan​

Interface: /api/v3/market/margin-loans

Adjustment: Adding new interface to query interest rates for margin loans

[May 14,2025] Adding new interface: Get Open Interest​

Interface: /api/v3/market/open-interest

Adjustment: Adding new interface to query the total number of unsettled or open futures

[May 14,2025] Adjustment for Websocket Depth Channel​

Channel: Depth Channel

Adjustment: Adding seq in push data. It increments when the order book is updated and can be used to determine whether there is out-of-order packets.

How was your Reading Experience with us?
★
★
★
★
★
Feedback
Previous
Quick Start
Next
Get Instruments
March 12, 2026 Retail Price Improvement (RPI) orders are now available on Unified Trading Account (UTA).
March 12, 2026 Support querying basic/advanced account mode information
March 11, 2026 Fee Sign Adjustment for the “Get Trade Fills” API
March 3, 2026 Launch of Market Maker Fee Rate API Query
Feb 8, 2026 API supports borrowing for transfers & Trading product information adds launchTime field
Feb 5, 2026 Unified Account Staking & Lending API is now live.
Feb 5, 2026 Adjustment to the response of institution loan Get Margin Coin Info endpiont
Feb 4, 2026 WebSocket sends error message before disconnection during service upgrade
Jan 27, 2026 The unit for public trade volume in UTA Coin-M futures has been changed to the quote coin
Jan 23, 2026 Added an API for switching account modes
Jan 22, 2026 Adjustment to the books1 depth channel push frequency for WebSocket Unified Account (v3).
Jan 6, 2026 Agent Broker API endpoints migrated to v2:
Jan 6, 2026 New Broker API endpoints added:
January 6, 2026 Add Index Component Interface & Direct Client Commission and Direct Client Authentication Interface Optimization & Perpetual Current/Historical Open Orders and Order Channel Optimization
December 29, 2025Place order interface request parameters: added new Coin-Margined enum for product type (Currently supports demo trading only)
December 11, 2025Get trade symbols endpoint adds field for maximum allowable borrowable leverage for spot margin
November 28, 2025The maximum number of returned entries for the candlestick API has been increased to 1,000.
November 28, 2025 New API for Get Open Interest Limit.
November 26, 2025 Add instructions for switching to Advanced Mode when creating a new sub-account.
November 26, 2025 Websocket Added new ADL notification channel
November 21, 2025 The return value of the get instruments API has added a new enumeration for status.
November 21, 2025 Add new tax API
November 12, 2025 WebSocket Order Modification Channel Adds Request Parameters
November 8, 2025 WebSocket Supports Broker API Code
October 29, 2025 Added API for retrieving the maximum transferable amount.
October 9, 2025 Notice: Optimization of Idempotency Rule for clientOid in Unified Account
September 26, 2025 New API for a sub-account initiates a transfer to the master account
September 25, 2025 Candlestick and Historical Candlestick APIs Add Premium Index; Get Trading Product Information API Adds RWA Identifier Field
September 23, 2025 Launch of WebSocket Order Modification and Batch Order Modification Channels
September 2, 2025 Add reason field for Get Switch Status
August 28, 2025 Notice: Optimization of Push Frequency for Websocket Order Book Channel (books1) in Unified Account (v3)
August 26, 2025 Announcement: New Scheduled Push Mechanism for WebSocket Account and Position Channels
August 12, 2025 WebSocket futures market data channel adds nextFundingTime field.
August 12, 2025 WebSocket order channel response adds "amount".
August 12, 2025 The unified account execution API has added the Execution Correlation ID.
August 8, 2025 Transaction details API adds category input and clientOid response.
August 8, 2025 Account settings API adds UID and account mode response.
August 7, 2025 The depth channel push parameters have newly added the pseq parameter.
August 1, 2025 Add a new API for retrieving position ADL ranking
July 31, 2025 Account Channel, Positions Channel Push Logic Optimization
July 30, 2025 Risk reserve API optimization
July 30, 2025 New API for setting deposit accounts
July 30, 2025 New API for obtaining reserve certificates
July 24, 2025 Position tier return unit changed to quete coin.
July 16, 2025 Add New Account Mode Switching API
July 9, 2025 The Get Risk Reserve interface has deprecated the totalBalance field.
July 9, 2025 Unified Account Response/Push: New tradeSide Parameter Enumeration
July 8, 2025 Add: Get sub-account unified account assets
July 8, 2025 Batch cancel orders supports partial success/failure
July 8, 2025 REST Get Order Info API & WebSocket Order Channel add cancelReason enum
July 8, 2025 Add: Get trading fee API
July 2, 2025 Get the transfer records of Main-Sub account. API adjustment.
July 02, 2025 WebSocket order, cancel, batch order, batch cancel channels launched
July 1, 2025 Add New deposit and withdrawal APIs，add BGB deduction API.
June 25, 2025 Add CountDown Cancel All Interface
Jun 25, 2025 The order status will add the "new" status
June 23,2025 Add affiliate-related APIs
June 20,2025 New API: Fund Account Asset Query.
June 18,2025 Order Modification API & Batch Order Modification API Launched.
June 17, 2025 Get transaction details and financial records. API adjustment.
June 11, 2025 New Take-Profit and Stop-Loss Fields Added to Place Order Interface
June 09, 2025 Get Contract Information Adds Maximum Order Quantity Fields
June 05,2025 Added stpMode Field to Order Endpoints (Get Order Info, Get Open Orders, Get Order History)
May 14,2025 Adding new interface: Get Margin Loan
May 14,2025 Adding new interface: Get Open Interest
May 14,2025 Adjustment for Websocket Depth Channel