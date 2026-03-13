# Unified Trading Account | Bitget API

**URL:** https://www.bitget.com/api-doc/uta/intro

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
Unified Trading Account
Unified Trading Account
Copy Page

The unified account is a next-generation trading system introduced by Bitget, designed to allow users to trade spot and various derivatives using multiple crypto assets within a single account. This system simplifies the trading process by eliminating the need for fund transfers between different accounts. Moreover, profits and losses across different products can be calculated and offset together, enhancing capital efficiency.

Comparison of Account Mode​

The Unified Account provides users with three new account modes to satisfy the trading preferences and needs of different users: Spot Mode (coming soon), Basic Mode, and Advanced Mode.

Account Mode	Tradable Products	Margin Support	Eligibility
Spot Mode (coming soon)	Only spot trading is supported. Margin and futures trading are not available.	No margin usage	Users under regulated entities: Default account mode is applied.
Basic Mode	Spot, USDT Perpetual Futures and USDC Perpetual Futures	In Basic Mode, trading pairs denominated in USDT and USDC share the same margin. Profits and losses can offset each other across these products.	Users registered under global entities: Default account mode is applied. Complete the questionnaire to activate this mode.
Advanced Mode	Spot, Leverage, USDT perpetual, USDC perpetual, Coin-margined	All assets support mutual margin	If account equity ≥ 1,000 USD: Complete the questionnaire to activate this mode.

In Advanced Mode, all assets across product types can be used as shared margin, and PnL can be mutually offset.
Please refer to this document for details.

Asset-related Terminology​
Term	Explanation
Equity	The total equity of a specific coin in the cross margin account.
Coin equity = Balance + Frozen margin + unrealized PnL
Balance	The balance of a specific coin in the account.
Available	The current available balance of a specific coin in the account for opening positions.
Available = Balance + unrealized PnL
Note: Realized PnL in the available balance can be used for opening futures positions but cannot be used to place spot orders.
UnrealisedPnL	The total profits of all futures positions settled in a specific coin in the account.
Unrealized profits = Profits of USDT-M perpetual futures positions in cross margin mode + profits of USDC-M perpetual futures positions in cross margin mode + profits of coin-M perpetual futures positions in cross margin mode
Debt	Debt = ABS(min(balance + unrealized PnL, 0))
Account equity	The net value of all coin assets in the account converted into fiat currency.
Account equity = sum (coin equity × coin in USD price)
Maintenance margin	The total maintenance margin of all cross margin positions in the account.
Maintenance margin = Sum[quantity of coin in cross margin positions × coin price]
Maintenance margin = Position value × maintenance margin rate
Margin rate	A risk measurement indicator for cross margin accounts.
Cross margin account's margin ratio = (maintenance margin + partial liquidation transaction fees)÷Account equity.
Both maintenance margin and partial liquidation transaction fees are calculated by adding the position size and the open order size.
Improved Readability​

The Open API documentation has been revised and proofread, with unclear descriptions from previous versions clarified to reduce customer confusion.

How was your Reading Experience with us?
★
★
★
★
★
Feedback
Next
Quick Start
Comparison of Account Mode
Asset-related Terminology
Improved Readability