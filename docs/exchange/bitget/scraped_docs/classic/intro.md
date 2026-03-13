# Classic Account | Bitget API

**URL:** https://www.bitget.com/api-doc/classic/intro

---

Skip to main content
Classic
UTA
English
Classic Trading Account
Quick Start
Changelog
FAQ
Demo Trading
Common
Spot
Futures
Margin
Copy Trading
Earn
Tax
P2P
Affiliate
Broker
Inst Loan
Classic Trading Account
Classic Account
Copy Page
API Introduction​

Welcome to Bitget Developer document!

This document is the only official document of Bitget API. We will constantly update the functionalities of Bitget API here. Please pay attention to it regularly.

You can switch to APIs for different account types by clicking the top menu, and you can change the documentation language by clicking the language button in the upper-right corner.

On the right side of the document usually displays example of request parameters and response results.

Updates​

Regarding API additions, updates, and offline information, Bitget will issue announcements in advance to notify you. It is recommended that you follow and subscribe to our announcements to obtain relevant information in time.

You can click Latest News to subscribe to announcements.

Further more, an API to get notification could be found here

Contact Us​

If you have any questions or suggestions, you can contact us by:

Telegram Join
Classic Account Introduction​

Requires holding specific assets in separate accounts (e.g., USDT in derivatives).
Accounts needed:

Fiat account
Spot account
Margin account
Futures account
Supported trading products​
Spot
Margin
USDT-M perpetual
USDC-M perpetual
Coin-M perpetua
Supported margin assets​

Margin modes

Isolated margin
Cross margin

Position modes

One-way mode
Hedging mode
Supports different leverage settings for long and short positions.
HODL mode and auto-margin features​
Manual borrowing and repayment required
Cross and isolated modes
Risk management and liquidation​
Triggered when mark price hits liquidation threshold。
Key Features​
Interface Optimization​

We have optimized interface design to reduce redundancy and improve clarity in business scenarios. Interfaces are now more intuitive and easier to use, with consistent naming conventions across all business lines.

Simplified Symbol Request Rules​

We use a single parameter—symbol—for all trading pair requests, making API calls more straightforward and consistent across different products.

Advanced Query Capabilities​

Our query interfaces now support cursor-based pagination with idLessThan and limit parameters, providing more efficient data retrieval. Most query interfaces also support time range filtering with startTime and endTime parameters.

Query Priority Rules: When querying data, the verification order for returned results is: id > startTime + endTime > idLessThan. This means:

First, it prioritizes precise queries using the id
Then narrows down the data range with startTime and endTime
Finally uses the cursor idLessThan to retrieve a specified number of data entries based on the limit
Standardized Naming Conventions​

We have standardized parameter naming and formats across all business lines (spot, futures, margin) and interface types (REST/WebSocket), ensuring consistency and ease of use.

Improved Documentation Structure​

Interface catalogs are now more detailed and intuitive, making documentation easier to navigate and improving the overall user experience.

Enhanced Market Depth​

For futures and spot trading pairs, we significantly increased the trading pair depth accessible through our interfaces and standardized the tiers across different business lines.

Business Line	Tier
Spot	1/5/15/50/max; default: 100. The max is determined by the highest tier available for the designated trading pair.
Future	1/5/15/50/max; default: 100. The max is determined by the highest tier available for the designated trading pair.
Unified Futures Order Types​

Trigger orders and trailing stop-loss orders are combined into one unified system, using the planType field to differentiate order types.

Important Fields:

callbackRatio: Sets the order-triggering percentage for trailing stop-loss
stopSurplusTriggerPrice and stopLossTriggerPrice: Determine the trail variance percentage that triggers trailing stop-loss and take-profit orders
Flexible Position Management​

Our futures order placement system supports both one-way and hedging modes with intuitive parameter combinations.

Field Enumeration Values:

Field name	Enumeration value	Description
side	buy	Buying
side	sell	Selling
tradeSide	open	Opening a position
tradeSide	close	Closing a position

Position Mode Operations:

Position mode	Parameter entries	Operation	Description
One-way mode	side: buy	Buying	In one-way mode, only side is needed to indicate whether it is a buying or selling order
One-way mode	side: sell	Selling	In one-way mode, only side is needed to indicate whether it is a buying or selling order
Hedging mode	side: buy; tradeSide: open	Opening a long position	In hedging mode, both side and tradeSide are needed to determine whether it is opening long/short or closing long/short
Hedging mode	side: sell; tradeSide: open	Opening a short position	In hedging mode, both side and tradeSide are needed to determine whether it is opening long/short or closing long/short
Hedging mode	side: buy; tradeSide: close	Closing a long position	In hedging mode, both side and tradeSide are needed to determine whether it is opening long/short or closing long/short
Hedging mode	side: sell; tradeSide: close	Closing a short position	In hedging mode, both side and tradeSide are needed to determine whether it is opening long/short or closing long/short
Delivery Futures Symbol Format​

For Coin-M delivery futures, the symbol format is: trading pair + month code + year

Examples:

Symbol	Description
BTCUSDH23	H means March (Q1) and 23 means the year 2023
BTCUSDM23	M means June (Q2) and 23 means the year 2023
BTCUSDU23	U means September (Q3) and 23 means the year 2023
BTCUSDZ23	Z means December (Q4) and 23 means the year 2023

Month Codes:

Month code	Month	Month code	Month
F	January	N	July
G	February	Q	August
H	March	U	September
J	April	V	October
K	May	X	November
M	June	Z	December
Comprehensive Trading Pair Information​

Our interfaces provide detailed information about trading pairs, including:

Minimum and maximum trading volumes
Maximum number of open orders (per trading pair and product)
Price precision
Amount precision
Other essential trading parameters
Earn Products Support​

We offer comprehensive interfaces for crypto Earn products, including:

Savings: Both fixed and flexible options
Shark Fin: Structured products
Features include information retrieval, PnL statistics, asset analysis, subscription, and redemption
Crypto Loan Services​

Our Crypto Loan API provides a complete solution for users seeking flexible borrowing options:

Stake crypto assets as collateral
Borrow fiat currency or cryptocurrencies
Manage collateral (add/withdraw)
Handle interest payments and loan repayment
Automatic liquidation protection

The API covers the entire loan lifecycle: staking collateral, obtaining loans, managing collateral, handling liquidation, paying interest, repaying loans, and redeeming collateral.

Note: Due to the volatile nature of the cryptocurrency market, coin price fluctuations may impact overall returns. Users should carefully consider market risks when using loan services.

How was your Reading Experience with us?
★
★
★
★
★
Feedback
Next
Rest API
API Introduction
Updates
Contact Us
Classic Account Introduction
Supported trading products
Supported margin assets
HODL mode and auto-margin features
Risk management and liquidation
Key Features
Interface Optimization
Simplified Symbol Request Rules
Advanced Query Capabilities
Standardized Naming Conventions
Improved Documentation Structure
Enhanced Market Depth
Unified Futures Order Types
Flexible Position Management
Delivery Futures Symbol Format
Comprehensive Trading Pair Information
Earn Products Support
Crypto Loan Services