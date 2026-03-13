---
title: "Data Explanation"
url: "https://bybit-exchange.github.io/docs/tax/explain"
source: "https://bybit-exchange.github.io/docs/"
fetched: "2026-03-10T08:54:15+00:00"
---

# Data Explanation

Source: [https://bybit-exchange.github.io/docs/tax/explain](https://bybit-exchange.github.io/docs/tax/explain)


[Skip to main content](#){.skipToContent_fXgn}




![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdib3g9IjAgMCAzMCAzMCIgYXJpYS1oaWRkZW49InRydWUiPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMiIgLz48L3N2Zz4=)

[](/docs/){.navbar__brand}


![Bybit Logo](/docs/img/logo_lightmode.png){.themedImage_ToTc .themedImage--light_HNdA}![Bybit Logo](/docs/img/logo_darkmode.png){.themedImage_ToTc .themedImage--dark_i4oU}


[V5 API](/docs/v5/guide){.navbar__item .navbar__link}[P2P Trading](/docs/p2p/guide){.navbar__item .navbar__link}[Bybit Pay![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://bybit-exchange.github.io/pay-docs){.navbar__item .navbar__link target="_blank" rel="noopener noreferrer" docid="bybit_pay"}[Tax API V3](/docs/v3/intro){.navbar__item .navbar__link .navbar__link--active aria-current="page"}




[Extras](#){.navbar__link aria-haspopup="true" aria-expanded="false" role="button"}

-   [Pilot Features](/docs/pilot-feature){.dropdown__link}
-   [Changelog](/docs/changelog/v5){.dropdown__link}
-   [API Explorer](/docs/api-explorer/v5/category){.dropdown__link}
-   [FAQ](/docs/faq){.dropdown__link}



[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJpY29uTGFuZ3VhZ2VfbmxYayI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTIuODcgMTUuMDdsLTIuNTQtMi41MS4wMy0uMDNjMS43NC0xLjk0IDIuOTgtNC4xNyAzLjcxLTYuNTNIMTdWNGgtN1YySDh2MkgxdjEuOTloMTEuMTdDMTEuNSA3LjkyIDEwLjQ0IDkuNzUgOSAxMS4zNSA4LjA3IDEwLjMyIDcuMyA5LjE5IDYuNjkgOGgtMmMuNzMgMS42MyAxLjczIDMuMTcgMi45OCA0LjU2bC01LjA5IDUuMDJMNCAxOWw1LTUgMy4xMSAzLjExLjc2LTIuMDR6TTE4LjUgMTBoLTJMMTIgMjJoMmwxLjEyLTNoNC43NUwyMSAyMmgybC00LjUtMTJ6bS0yLjYyIDdsMS42Mi00LjMzTDE5LjEyIDE3aC0zLjI0eiIgLz48L3N2Zz4=){.iconLanguage_nlXk}English](#){.navbar__link aria-haspopup="true" aria-expanded="false" role="button"}

-   [English](/docs/tax/explain){.dropdown__link .dropdown__link--active target="_self" rel="noopener noreferrer" lang="en"}
-   [中文（台灣）](/docs/zh-TW/tax/explain){.dropdown__link target="_self" rel="noopener noreferrer" lang="zh-TW"}



![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgY2xhc3M9ImxpZ2h0VG9nZ2xlSWNvbl9weWhSIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiw5YzEuNjUsMCwzLDEuMzUsMywzcy0xLjM1LDMtMywzcy0zLTEuMzUtMy0zUzEwLjM1LDksMTIsOSBNMTIsN2MtMi43NiwwLTUsMi4yNC01LDVzMi4yNCw1LDUsNXM1LTIuMjQsNS01IFMxNC43Niw3LDEyLDdMMTIsN3ogTTIsMTNsMiwwYzAuNTUsMCwxLTAuNDUsMS0xcy0wLjQ1LTEtMS0xbC0yLDBjLTAuNTUsMC0xLDAuNDUtMSwxUzEuNDUsMTMsMiwxM3ogTTIwLDEzbDIsMGMwLjU1LDAsMS0wLjQ1LDEtMSBzLTAuNDUtMS0xLTFsLTIsMGMtMC41NSwwLTEsMC40NS0xLDFTMTkuNDUsMTMsMjAsMTN6IE0xMSwydjJjMCwwLjU1LDAuNDUsMSwxLDFzMS0wLjQ1LDEtMVYyYzAtMC41NS0wLjQ1LTEtMS0xUzExLDEuNDUsMTEsMnogTTExLDIwdjJjMCwwLjU1LDAuNDUsMSwxLDFzMS0wLjQ1LDEtMXYtMmMwLTAuNTUtMC40NS0xLTEtMUMxMS40NSwxOSwxMSwxOS40NSwxMSwyMHogTTUuOTksNC41OGMtMC4zOS0wLjM5LTEuMDMtMC4zOS0xLjQxLDAgYy0wLjM5LDAuMzktMC4zOSwxLjAzLDAsMS40MWwxLjA2LDEuMDZjMC4zOSwwLjM5LDEuMDMsMC4zOSwxLjQxLDBzMC4zOS0xLjAzLDAtMS40MUw1Ljk5LDQuNTh6IE0xOC4zNiwxNi45NSBjLTAuMzktMC4zOS0xLjAzLTAuMzktMS40MSwwYy0wLjM5LDAuMzktMC4zOSwxLjAzLDAsMS40MWwxLjA2LDEuMDZjMC4zOSwwLjM5LDEuMDMsMC4zOSwxLjQxLDBjMC4zOS0wLjM5LDAuMzktMS4wMywwLTEuNDEgTDE4LjM2LDE2Ljk1eiBNMTkuNDIsNS45OWMwLjM5LTAuMzksMC4zOS0xLjAzLDAtMS40MWMtMC4zOS0wLjM5LTEuMDMtMC4zOS0xLjQxLDBsLTEuMDYsMS4wNmMtMC4zOSwwLjM5LTAuMzksMS4wMywwLDEuNDEgczEuMDMsMC4zOSwxLjQxLDBMMTkuNDIsNS45OXogTTcuMDUsMTguMzZjMC4zOS0wLjM5LDAuMzktMS4wMywwLTEuNDFjLTAuMzktMC4zOS0xLjAzLTAuMzktMS40MSwwbC0xLjA2LDEuMDYgYy0wLjM5LDAuMzktMC4zOSwxLjAzLDAsMS40MXMxLjAzLDAuMzksMS40MSwwTDcuMDUsMTguMzZ6IiAvPjwvc3ZnPg==){.lightToggleIcon_pyhR}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgY2xhc3M9ImRhcmtUb2dnbGVJY29uX3dmZ1IiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTkuMzcsNS41MUM5LjE5LDYuMTUsOS4xLDYuODIsOS4xLDcuNWMwLDQuMDgsMy4zMiw3LjQsNy40LDcuNGMwLjY4LDAsMS4zNS0wLjA5LDEuOTktMC4yN0MxNy40NSwxNy4xOSwxNC45MywxOSwxMiwxOSBjLTMuODYsMC03LTMuMTQtNy03QzUsOS4wNyw2LjgxLDYuNTUsOS4zNyw1LjUxeiBNMTIsM2MtNC45NywwLTksNC4wMy05LDlzNC4wMyw5LDksOXM5LTQuMDMsOS05YzAtMC40Ni0wLjA0LTAuOTItMC4xLTEuMzYgYy0wLjk4LDEuMzctMi41OCwyLjI2LTQuNCwyLjI2Yy0yLjk4LDAtNS40LTIuNDItNS40LTUuNGMwLTEuODEsMC44OS0zLjQyLDIuMjYtNC40QzEyLjkyLDMuMDQsMTIuNDYsMywxMiwzTDEyLDN6IiAvPjwvc3ZnPg==){.darkToggleIcon_wfgR}



[![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGNsYXNzPSJEb2NTZWFyY2gtU2VhcmNoLUljb24iIHZpZXdib3g9IjAgMCAyMCAyMCI+PHBhdGggZD0iTTE0LjM4NiAxNC4zODZsNC4wODc3IDQuMDg3Ny00LjA4NzctNC4wODc3Yy0yLjk0MTggMi45NDE5LTcuNzExNSAyLjk0MTktMTAuNjUzMyAwLTIuOTQxOS0yLjk0MTgtMi45NDE5LTcuNzExNSAwLTEwLjY1MzMgMi45NDE4LTIuOTQxOSA3LjcxMTUtMi45NDE5IDEwLjY1MzMgMCAyLjk0MTkgMi45NDE4IDIuOTQxOSA3LjcxMTUgMCAxMC42NTMzeiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPjwvc3ZnPg==){.DocSearch-Search-Icon}[Search]{.DocSearch-Button-Placeholder}]{.DocSearch-Button-Container}[]{.DocSearch-Button-Keys}










-   [Introduction](/docs/v3/intro){.menu__link}

-   
    [Tax](/docs/tax/time){.menu__link .menu__link--sublist .menu__link--sublist-caret .menu__link--active aria-expanded="true"}
    

    -   [Get User Register Date](/docs/tax/time){.menu__link tabindex="0"}
    -   [Request Export Report](/docs/tax/report){.menu__link tabindex="0"}
    -   [Get Export Report Status](/docs/tax/status){.menu__link tabindex="0"}
    -   [Retrieve Data Export](/docs/tax/data-export){.menu__link tabindex="0"}
    -   [Data Explanation](/docs/tax/explain){.menu__link .menu__link--active aria-current="page" tabindex="0"}
    -   [Enums Definitions](/docs/tax/enum){.menu__link tabindex="0"}

![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0iY29sbGFwc2VTaWRlYmFyQnV0dG9uSWNvbl9rdjBfIj48ZyBmaWxsPSIjN2E3YTdhIj48cGF0aCBkPSJNOS45OTIgMTAuMDIzYzAgLjItLjA2Mi4zOTktLjE3Mi41NDdsLTQuOTk2IDcuNDkyYS45ODIuOTgyIDAgMDEtLjgyOC40NTRIMWMtLjU1IDAtMS0uNDUzLTEtMSAwLS4yLjA1OS0uNDAzLjE2OC0uNTUxbDQuNjI5LTYuOTQyTC4xNjggMy4wNzhBLjkzOS45MzkgMCAwMTAgMi41MjhjMC0uNTQ4LjQ1LS45OTcgMS0uOTk3aDIuOTk2Yy4zNTIgMCAuNjQ5LjE4LjgyOC40NUw5LjgyIDkuNDcyYy4xMS4xNDguMTcyLjM0Ny4xNzIuNTV6bTAgMCIgLz48cGF0aCBkPSJNMTkuOTggMTAuMDIzYzAgLjItLjA1OC4zOTktLjE2OC41NDdsLTQuOTk2IDcuNDkyYS45ODcuOTg3IDAgMDEtLjgyOC40NTRoLTNjLS41NDcgMC0uOTk2LS40NTMtLjk5Ni0xIDAtLjIuMDU5LS40MDMuMTY4LS41NTFsNC42MjUtNi45NDItNC42MjUtNi45NDVhLjkzOS45MzkgMCAwMS0uMTY4LS41NSAxIDEgMCAwMS45OTYtLjk5N2gzYy4zNDggMCAuNjQ5LjE4LjgyOC40NWw0Ljk5NiA3LjQ5MmMuMTEuMTQ4LjE2OC4zNDcuMTY4LjU1em0wIDAiIC8+PC9nPjwvc3ZnPg==){.collapseSidebarButtonIcon_kv0_}







-   [![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJicmVhZGNydW1iSG9tZUljb25fT1ZndCI+PHBhdGggZD0iTTEwIDE5di01aDR2NWMwIC41NS40NSAxIDEgMWgzYy41NSAwIDEtLjQ1IDEtMXYtN2gxLjdjLjQ2IDAgLjY4LS41Ny4zMy0uODdMMTIuNjcgMy42Yy0uMzgtLjM0LS45Ni0uMzQtMS4zNCAwbC04LjM2IDcuNTNjLS4zNC4zLS4xMy44Ny4zMy44N0g1djdjMCAuNTUuNDUgMSAxIDFoM2MuNTUgMCAxLS40NSAxLTF6IiBmaWxsPSJjdXJyZW50Q29sb3IiIC8+PC9zdmc+){.breadcrumbHomeIcon_OVgt}](/docs/){.breadcrumbs__link aria-label="Home page"}
-   [Tax]{.breadcrumbs__link}
-   [Data Explanation]{.breadcrumbs__link itemprop="name"}


On this page



<div>

# Data Explanation

</div>



## Trade History[​](#trade-history "Direct link to heading"){.hash-link} 

### 1. Spot Trade History[​](#1-spot-trade-history "Direct link to heading"){.hash-link} 

#### Response Parameters[​](#response-parameters "Direct link to heading"){.hash-link} 

  Parameter    Type     Comments
  ------------ -------- ----------------------------------------------------------------------
  OrderID      string   Order ID of the closing order
  TradeID      string   Trade ID of the closing order
  Symbol       string   Name of the trading pair in the form of
  Side         string   Side. Either Buy or Sell direction
  QuoteCoin    string   Symbol of the Quote Coin
  BaseCoin     string   Symbol of the Executed Coin
  ExecPrice    string   Execution Price
  ExecValue    string   Transacted volume
  TradingFee   string   Trading fee for a single fill
  FeeToken     string   Token of the Trading Fee
  TradeTime    string   UNIX Time. This is in milliseconds. Time when the trade was executed

### 2. Contract Trade History[​](#2-contract-trade-history "Direct link to heading"){.hash-link} 

#### Response Parameters[​](#response-parameters-1 "Direct link to heading"){.hash-link} 

  Parameter      Type     Comments
  -------------- -------- --------------------------------------------------------------------------
  OrderID        string   Order ID of the closing order.
  TradeID        string   Trade ID of the closing order.
  ContractType   string   Types of Contract. Inverse Contracts, Linear Contracts, Future Contracts
  Symbol         string   Name of the trading pair in the form of
  Side           string   Side. Either Buy or Sell direction
  QuoteCoin      string   Symbol of the Quote Coin
  BaseCoin       string   Symbol of the Executed Coin
  ExecPrice      string   Execution Price
  ExecQty        string   Transaction Quantity
  ExecType       string   Execution Types. Trade, ADL, BustTrade
  ExecValue      string   Transacted volume
  FeeRate        string   Rates for Maker or taker fee
  FeeToken       string   Token of the Trading Fee
  TradingFee     string   Trading fee for a single fill
  TradeTime      string   UNIX Time. This is in milliseconds. Time when the trade was executed
  ClosedSize     string   Closed postion size
  OrderType      string   Order type

### 3. USDT/USDC Options Trade History[​](#3-usdtusdc-options-trade-history "Direct link to heading"){.hash-link} 

#### Response Parameters[​](#response-parameters-2 "Direct link to heading"){.hash-link} 

  Parameter      Type     Comments
  -------------- -------- --------------------------------------------------------------------------
  OrderID        string   Order ID of the closing order.
  TradeID        string   Trade ID of the closing order.
  ContractType   string   Types of Contract. Inverse Contracts, Linear Contracts, Future Contracts
  Symbol         string   Name of the trading pair in the form of
  Side           string   Side. Either Buy or Sell direction
  QuoteCoin      string   Symbol of the Quote Coin
  BaseCoin       string   Symbol of the Executed Coin
  ExecPrice      string   Execution Price
  ExecQty        string   Transaction Quantity
  ExecType       string   Execution Types. Trade, ADL, BustTrade
  ExecValue      string   Transacted volume
  FeeRate        string   Rates for Maker or taker fee
  FeeToken       string   Token of the Trading Fee
  TradingFee     string   Trading fee for a single fill
  TradeTime      string   UNIX Time. This is in milliseconds. Time when the trade was executed

### 4. NFT Trade History[​](#4-nft-trade-history "Direct link to heading"){.hash-link} 

#### Response Parameters[​](#response-parameters-3 "Direct link to heading"){.hash-link} 

  Parameter     Type     Comments
  ------------- -------- ----------------------------------------------------------------------
  OrderID       string   Order ID of the closing order.
  Network       string   Name of Network.
  Side          string   Side. Either Buy or Sell direction
  NftId         string   ID of the NFT collection
  ExecValue     string   Transacted volume
  BaseCoin      string   Symbol of the Executed Coin
  PlatformFee   string   Fees for Platform, Fee is as per Base coin
  ShareFee      string   Fees for Sharing, Fee is as per Base coin
  TradeTime     string   UNIX Time. This is in milliseconds. Time when the trade was executed

## P&L History[​](#pl-history "Direct link to heading"){.hash-link} 

### Response Parameters[​](#response-parameters-4 "Direct link to heading"){.hash-link} 

  Parameter       Type     Comments
  --------------- -------- --------------------------------------------------------------------------
  OrderID         string   Order ID of the closing order.
  ContractType    string   Types of Contract. Inverse Contracts, Linear Contracts, Future Contracts
  Symbol          string   Name of the trading pair in the form of
  Side            string   Side. Either Buy or Sell direction
  ClosedSize      string   Closed Size
  CumEntryValue   string   Cumulative entry value
  AvgEntryPrice   string   Average entry price
  CumExitValue    string   Cumulative exit value
  AvgExitPrice    string   Average exit price
  SettleCoin      string   Settle Coin. Coin for Profit and Loss
  ClosedPNL       string   Closed Profit and Loss
  FillCount       string   The number of fills in a single order
  TradeTime       string   UNIX Time. This is in milliseconds. Time when the trade was executed

## Earn History[​](#earn-history "Direct link to heading"){.hash-link} 

### 1. BybitSavings Yield History[​](#1-bybitsavings-yield-history "Direct link to heading"){.hash-link} 

#### Response Parameters[​](#response-parameters-5 "Direct link to heading"){.hash-link} 

  Parameter                Type     Comments
  ------------------------ -------- ----------------------------------------------------------------------
  AssetStakedCoin          string   Coin that was used to staked in the Bybit Savings Product
  StakingType              string   Type of Staking. Flexible and Fixed Term
  AssetEarnedCoin          string   Coin that the Interest is given out in
  EffectiveStakingAmount   string   Total amount staked with the Asset Staked coin
  Yield                    string   Amount of the Interest coin that was given out based on
  TradeTime                string   UNIX Time. This is in milliseconds. Time when the trade was executed

### 2. LiquidityMining Liquidity History[​](#2-liquiditymining-liquidity-history "Direct link to heading"){.hash-link} 

#### Response Parameters[​](#response-parameters-6 "Direct link to heading"){.hash-link} 

  Parameter    Type     Comments
  ------------ -------- ------------------------------------------------------------------------------------------
  OrderID      string   Order ID of the closing order.
  Symbol       string   Name of the trading pair in the form of
  OrderType    string   Includes the different types of liquidity mining. Add, Remove, Reduce Leverage, Reinvest
  EntryPrice   string   Entry price of principal coin pair at time of order
  Leverage     string   Leverage Multiples
  Slippage     string   Difference between price of an order and the price when the order actually executes
  Liquidity    string   Liquidity = Principal Change multiplied by Leverage
  TradeTime    string   UNIX Time. This is in milliseconds. Time when the trade was executed

### 3. LiquidityMining Yield History[​](#3-liquiditymining-yield-history "Direct link to heading"){.hash-link} 

#### Response Parameters[​](#response-parameters-7 "Direct link to heading"){.hash-link} 

  Parameter         Type     Comments
  ----------------- -------- ----------------------------------------------------------------------
  AssetEarnedCoin   string   Coin that the Interest is given out in
  Yield             string   Amount of the Interest coin that was given out based on
  TradeTime         string   UNIX Time. This is in milliseconds. Time when the trade was executed

### 4. LiquidityMining Swap History[​](#4-liquiditymining-swap-history "Direct link to heading"){.hash-link} 

#### Response Parameters[​](#response-parameters-8 "Direct link to heading"){.hash-link} 

  Parameter       Type     Comments
  --------------- -------- --------------------------------------------------------------------------------------
  OrderId         string   translation missing: en.taxOrderID
  InitialCoin     string   The coin in the pair that you are trying to swap from.
  DepositAmount   string   Quantity of the selected coin in the pair that you are trying to swap from
  SwapCoin        string   The coin in the pair that you are trying to swap into.
  SwapAmount      string   Quantity of the selected coin in the pair that you are trying to swap to
  SwapFeeToken    string   Fee will be in the swap coin.
  SwapFee         string   Fee incurred after the swap was successfully performed. Fee will be in the swap coin
  Slippage        string   Difference between price of an order and the price when the order actually executes
  TradeTime       string   UNIX Time. This is in milliseconds. Time when the trade was executed

### 5. DualAsset Swap History[​](#5-dualasset-swap-history "Direct link to heading"){.hash-link} 

#### Response Parameters[​](#response-parameters-9 "Direct link to heading"){.hash-link} 

  Parameter       Type     Comments
  --------------- -------- ----------------------------------------------------------------------------
  OrderId         string   Order ID
  InitialCoin     string   The coin in the pair that you are trying to swap from.
  DepositAmount   string   Quantity of the selected coin in the pair that you are trying to swap from
  SwapCoin        string   The coin in the pair that you are trying to swap into.
  SwapAmount      string   Quantity of the selected coin in the pair that you are trying to swap to
  OrderTime       number   UNIX Time. This is in milliseconds. Time which the order was ordered
  TradeTime       number   UNIX Time. This is in milliseconds. Time when the trade was executed

### 6. DeFiMining Yield History[​](#6-defimining-yield-history "Direct link to heading"){.hash-link} 

#### Response Parameters[​](#response-parameters-10 "Direct link to heading"){.hash-link} 

  Parameter         Type     Comments
  ----------------- -------- ----------------------------------------------------------------------
  OrderId           string   translation missing: en.taxOrderID
  AssetStakedCoin   string   Coin that was used to staked in the Bybit Savings Product
  Yield             string   Amount of the Interest coin that was given out based on
  OrderTime         number   UNIX Time. This is in milliseconds. Time which the order was ordered
  TradeTime         number   UNIX Time. This is in milliseconds. Time when the trade was executed

### 7. Launchpool Yield History[​](#7-launchpool-yield-history "Direct link to heading"){.hash-link} 

#### Response Parameters[​](#response-parameters-11 "Direct link to heading"){.hash-link} 

  Parameter                Type     Comments
  ------------------------ -------- ----------------------------------------------------------------------
  AssetEarnedCoin          string   Coin that the Interest is given out in
  EffectiveStakingAmount   string   Total amount staked with the Asset Staked coin
  Yield                    string   Amount of the Interest coin that was given out based on
  TradeTime                number   UNIX Time. This is in milliseconds. Time when the trade was executed

### 8. Sharkfin Yield History[​](#8-sharkfin-yield-history "Direct link to heading"){.hash-link} 

#### Response Parameters[​](#response-parameters-12 "Direct link to heading"){.hash-link} 

  Parameter         Type     Comments
  ----------------- -------- ----------------------------------------------------------------------
  AssetEarnedCoin   string   Coin that the Interest is given out in
  Yield             string   Amount of the Interest coin that was given out based on
  TradeTime         number   UNIX Time. This is in milliseconds. Time when the trade was executed

## Deposit And Withdraw History[​](#deposit-and-withdraw-history "Direct link to heading"){.hash-link} 

### 1. Crypto Deposit History[​](#1-crypto-deposit-history "Direct link to heading"){.hash-link} 

#### Response Parameters[​](#response-parameters-13 "Direct link to heading"){.hash-link} 

  Parameter       Type     Comments
  --------------- -------- ----------------------------------------------------------------------
  Txid            string   TransactionID
  DepositType     string   Type of Deposit. On-chain Deposit
  ChainType       string   Chain name
  Symbol          string   Name of the trading pair in the form of
  FinalAmount     string   Quantity of Crypto
  OrderTime       number   UNIX Time. This is in milliseconds. Time which the order was ordered
  CompletedTime   number   Complete timestamp (ms)

### 2. P2P Deposit History[​](#2-p2p-deposit-history "Direct link to heading"){.hash-link} 

#### Response Parameters[​](#response-parameters-14 "Direct link to heading"){.hash-link} 

  Parameter       Type     Comments
  --------------- -------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  OrderID         string   Order ID
  OrderType       string   Includes the different types of liquidity mining. Add, Remove, Reduce Leverage, Reinvest
  P2pSide         string   For P2P Buyer, this represents the buyer bought the respective Coin and using Fiat currency. For P2P Seller, this represents the buyer sold the respective Coin and receive Fiat currency in return.
  Fiat            string   Fiat type
  FiatAmount      string   Fiat deposited
  Coin            string   Symbol of coin purchased
  CoinPrice       string   Price of coin purchased
  CoinAmount      string   Quantity of coin that is purchased
  OrderTime       number   UNIX Time. This is in milliseconds. Time which the order was ordered
  CompletedTime   number   Complete timestamp (ms)

### 3. Fiat Deposit and Withdraw History[​](#3-fiat-deposit-and-withdraw-history "Direct link to heading"){.hash-link} 

#### Response Parameters[​](#response-parameters-15 "Direct link to heading"){.hash-link} 

  Parameter        Type     Comments
  ---------------- -------- ----------------------------------------------------------------------------
  OrderID          string   Order ID
  Type             string   Type. DEPOSIT, WITHDRAW
  Fiat             string   Fiat type
  DepositAmount    string   Quantity of the selected coin in the pair that you are trying to swap from
  FinalAmount      string   Quantity of Crypto
  Fee              string   Fee for Fiat Deposit
  PaymentMethods   string   Different payment methods
  OrderTime        number   UNIX Time. This is in milliseconds. Time which the order was ordered
  CompletedTime    number   Complete timestamp (ms)

### 4. Express Order Deposit History[​](#4-express-order-deposit-history "Direct link to heading"){.hash-link} 

#### Response Parameters[​](#response-parameters-16 "Direct link to heading"){.hash-link} 

  Parameter         Type     Comments
  ----------------- -------- ----------------------------------------------------------------------
  OrderID           string   Order ID
  Side              string   Type of Order. Buy
  Fiat              string   Fiat type
  DepositAmount     string   Fiat deposited via Credit card.
  DestinationCoin   string   Symbol of coin purchased
  CoinPrice         string   Price of coin purchased
  FinalAmount       string   Quantity of Crypto
  Fee               string   Any fees in fiat involved when depositing via Credit card
  OrderTime         number   UNIX Time. This is in milliseconds. Time which the order was ordered
  CompletedTime     number   Complete timestamp (ms)

### 5. Third Party Deposit History[​](#5-third-party-deposit-history "Direct link to heading"){.hash-link} 

#### Response Parameters[​](#response-parameters-17 "Direct link to heading"){.hash-link} 

  Parameter         Type     Comments
  ----------------- -------- ----------------------------------------------------------------------------
  OrderID           string   Order ID
  Txid              string   TransactionID
  Platform          string   Payment Platform methods
  Fiat              string   Fiat type
  DepositAmount     string   Quantity of the selected coin in the pair that you are trying to swap from
  DestinationCoin   string   Symbol of coin purchased
  CoinPrice         string   Price of coin purchased
  FinalAmount       string   Quantity of Crypto
  OrderTime         number   UNIX Time. This is in milliseconds. Time which the order was ordered
  CompletedTime     number   Complete timestamp (ms)

### 6. Crypto Withdraw History[​](#6-crypto-withdraw-history "Direct link to heading"){.hash-link} 

#### Response Parameters[​](#response-parameters-18 "Direct link to heading"){.hash-link} 

  Parameter       Type     Comments
  --------------- -------- ----------------------------------------------------------------------
  Txid            string   TransactionID
  ChainType       string   Chain name
  Coin            string   Symbol of coin purchased
  FinalAmount     string   Quantity of Crypto
  Fee             string   Withdrawal fee as per the withdrawal coin
  OrderTime       number   UNIX Time. This is in milliseconds. Time which the order was ordered
  CompletedTime   number   Complete timestamp (ms)

### 7. NFT Deposit and Withdrawal History[​](#7-nft-deposit-and-withdrawal-history "Direct link to heading"){.hash-link} 

#### Response Parameters[​](#response-parameters-19 "Direct link to heading"){.hash-link} 

  Parameter       Type     Comments
  --------------- -------- ----------------------------------------------------------------------
  OrderId         string   translation missing: en.taxOrderID
  TxHash          string   Unique IDs recording each NFT transaction
  TokenId         string   All NFTs have a uint256 variable that identifies different NFT
  TransferType    string   Type. Deposit, Withdrawal
  Network         string   Name of Network.
  FeeToken        string   Token of the Trading Fee
  Fee             string   Any fee incurred using the transaction of the NFT
  OrderTime       number   UNIX Time. This is in milliseconds. Time which the order was ordered
  CompletedTime   number   Complete timestamp (ms)

## Bonus History[​](#bonus-history "Direct link to heading"){.hash-link} 



[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTIgMTYiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuNSAwQzMuNDggMCAxIDIuMTkgMSA1YzAgLjkyLjU1IDIuMjUgMSAzIDEuMzQgMi4yNSAxLjc4IDIuNzggMiA0djFoNXYtMWMuMjItMS4yMi42Ni0xLjc1IDItNCAuNDUtLjc1IDEtMi4wOCAxLTMgMC0yLjgxLTIuNDgtNS01LjUtNXptMy42NCA3LjQ4Yy0uMjUuNDQtLjQ3LjgtLjY3IDEuMTEtLjg2IDEuNDEtMS4yNSAyLjA2LTEuNDUgMy4yMy0uMDIuMDUtLjAyLjExLS4wMi4xN0g1YzAtLjA2IDAtLjEzLS4wMi0uMTctLjItMS4xNy0uNTktMS44My0xLjQ1LTMuMjMtLjItLjMxLS40Mi0uNjctLjY3LTEuMTFDMi40NCA2Ljc4IDIgNS42NSAyIDVjMC0yLjIgMi4wMi00IDQuNS00IDEuMjIgMCAyLjM2LjQyIDMuMjIgMS4xOUMxMC41NSAyLjk0IDExIDMuOTQgMTEgNWMwIC42Ni0uNDQgMS43OC0uODYgMi40OHpNNCAxNGg1Yy0uMjMgMS4xNC0xLjMgMi0yLjUgMnMtMi4yNy0uODYtMi41LTJ6IiAvPjwvc3ZnPg==)]{.admonitionIcon_kALy}tip



-   **Bonus** - The experience bonus can be used to open a position and deduct the handling fee and the funding rate fee because it is paid directly to the user\'s asset account. All bonuses shown are already applied by the users.

<!-- -->
```
-   **Coupon** - Money from coupons are deductible will only be used to offset the handling fee. It will not be added to the user\'s asset account. It will be refunded to the user\'s asset account following the deduction. All coupons shown are already applied by the users.



### 1. Coupon History[​](#1-coupon-history "Direct link to heading"){.hash-link} 

#### Response Parameters[​](#response-parameters-20 "Direct link to heading"){.hash-link} 

  Parameter       Type     Comments
  --------------- -------- --------------------------------------
  Coin            string   Coin that is given to user as coupon
  FinalAmount     string   Amount of the coin given to user
  CompletedTime   number   Complete timestamp (ms)

### 2. Bonus History[​](#2-bonus-history "Direct link to heading"){.hash-link} 

#### Response Parameters[​](#response-parameters-21 "Direct link to heading"){.hash-link} 

  Parameter       Type     Comments
  --------------- -------- --------------------------------------
  Coin            string   Coin that is given to user as coupon
  FinalAmount     string   Amount of the coin given to user
  CompletedTime   number   Complete timestamp (ms)

## Airdrop History[​](#airdrop-history "Direct link to heading"){.hash-link} 

### Response Parameters[​](#response-parameters-22 "Direct link to heading"){.hash-link} 

  Parameter             Type     Comments
  --------------------- -------- ------------------------------------------------------
  Coin                  string   Coin that is airdropped to user
  FinalAmount           string   Amount of the airdrop given to user
  TransferType          string   Type of Airdrop. Airdrop Deposit, Airdrop Withdrawal
  TransferDescription   string   Description of the Transfer
  CompletedTime         number   Complete timestamp (ms)








[](/docs/tax/data-export){.pagination-nav__link .pagination-nav__link--prev}


Previous



Retrieve Data Export


[](/docs/tax/enum){.pagination-nav__link .pagination-nav__link--next}


Next



Enums Definitions







-   [Trade History](#trade-history){.table-of-contents__link .toc-highlight}
    -   [1. Spot Trade History](#1-spot-trade-history){.table-of-contents__link .toc-highlight}
        -   [Response Parameters](#response-parameters){.table-of-contents__link .toc-highlight}
    -   [2. Contract Trade History](#2-contract-trade-history){.table-of-contents__link .toc-highlight}
        -   [Response Parameters](#response-parameters-1){.table-of-contents__link .toc-highlight}
    -   [3. USDT/USDC Options Trade History](#3-usdtusdc-options-trade-history){.table-of-contents__link .toc-highlight}
        -   [Response Parameters](#response-parameters-2){.table-of-contents__link .toc-highlight}
    -   [4. NFT Trade History](#4-nft-trade-history){.table-of-contents__link .toc-highlight}
        -   [Response Parameters](#response-parameters-3){.table-of-contents__link .toc-highlight}
-   [P&L History](#pl-history){.table-of-contents__link .toc-highlight}
    -   [Response Parameters](#response-parameters-4){.table-of-contents__link .toc-highlight}
-   [Earn History](#earn-history){.table-of-contents__link .toc-highlight}
    -   [1. BybitSavings Yield History](#1-bybitsavings-yield-history){.table-of-contents__link .toc-highlight}
        -   [Response Parameters](#response-parameters-5){.table-of-contents__link .toc-highlight}
    -   [2. LiquidityMining Liquidity History](#2-liquiditymining-liquidity-history){.table-of-contents__link .toc-highlight}
        -   [Response Parameters](#response-parameters-6){.table-of-contents__link .toc-highlight}
    -   [3. LiquidityMining Yield History](#3-liquiditymining-yield-history){.table-of-contents__link .toc-highlight}
        -   [Response Parameters](#response-parameters-7){.table-of-contents__link .toc-highlight}
    -   [4. LiquidityMining Swap History](#4-liquiditymining-swap-history){.table-of-contents__link .toc-highlight}
        -   [Response Parameters](#response-parameters-8){.table-of-contents__link .toc-highlight}
    -   [5. DualAsset Swap History](#5-dualasset-swap-history){.table-of-contents__link .toc-highlight}
        -   [Response Parameters](#response-parameters-9){.table-of-contents__link .toc-highlight}
    -   [6. DeFiMining Yield History](#6-defimining-yield-history){.table-of-contents__link .toc-highlight}
        -   [Response Parameters](#response-parameters-10){.table-of-contents__link .toc-highlight}
    -   [7. Launchpool Yield History](#7-launchpool-yield-history){.table-of-contents__link .toc-highlight}
        -   [Response Parameters](#response-parameters-11){.table-of-contents__link .toc-highlight}
    -   [8. Sharkfin Yield History](#8-sharkfin-yield-history){.table-of-contents__link .toc-highlight}
        -   [Response Parameters](#response-parameters-12){.table-of-contents__link .toc-highlight}
-   [Deposit And Withdraw History](#deposit-and-withdraw-history){.table-of-contents__link .toc-highlight}
    -   [1. Crypto Deposit History](#1-crypto-deposit-history){.table-of-contents__link .toc-highlight}
        -   [Response Parameters](#response-parameters-13){.table-of-contents__link .toc-highlight}
    -   [2. P2P Deposit History](#2-p2p-deposit-history){.table-of-contents__link .toc-highlight}
        -   [Response Parameters](#response-parameters-14){.table-of-contents__link .toc-highlight}
    -   [3. Fiat Deposit and Withdraw History](#3-fiat-deposit-and-withdraw-history){.table-of-contents__link .toc-highlight}
        -   [Response Parameters](#response-parameters-15){.table-of-contents__link .toc-highlight}
    -   [4. Express Order Deposit History](#4-express-order-deposit-history){.table-of-contents__link .toc-highlight}
        -   [Response Parameters](#response-parameters-16){.table-of-contents__link .toc-highlight}
    -   [5. Third Party Deposit History](#5-third-party-deposit-history){.table-of-contents__link .toc-highlight}
        -   [Response Parameters](#response-parameters-17){.table-of-contents__link .toc-highlight}
    -   [6. Crypto Withdraw History](#6-crypto-withdraw-history){.table-of-contents__link .toc-highlight}
        -   [Response Parameters](#response-parameters-18){.table-of-contents__link .toc-highlight}
    -   [7. NFT Deposit and Withdrawal History](#7-nft-deposit-and-withdrawal-history){.table-of-contents__link .toc-highlight}
        -   [Response Parameters](#response-parameters-19){.table-of-contents__link .toc-highlight}
-   [Bonus History](#bonus-history){.table-of-contents__link .toc-highlight}
    -   [1. Coupon History](#1-coupon-history){.table-of-contents__link .toc-highlight}
        -   [Response Parameters](#response-parameters-20){.table-of-contents__link .toc-highlight}
    -   [2. Bonus History](#2-bonus-history){.table-of-contents__link .toc-highlight}
        -   [Response Parameters](#response-parameters-21){.table-of-contents__link .toc-highlight}
-   [Airdrop History](#airdrop-history){.table-of-contents__link .toc-highlight}
    -   [Response Parameters](#response-parameters-22){.table-of-contents__link .toc-highlight}












Community


-   [Telegram -- English![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://t.me/BybitAPI){.footer__link-item target="_blank" rel="noopener noreferrer"}
-   [Telegram -- Chinese![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://t.me/BybitChineseAPI){.footer__link-item target="_blank" rel="noopener noreferrer"}
-   [Discord![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://discord.gg/VBwVwS2HUs){.footer__link-item target="_blank" rel="noopener noreferrer"}




GitHub


-   [API usage examples![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://github.com/bybit-exchange/api-usage-examples){.footer__link-item target="_blank" rel="noopener noreferrer"}
-   [Postman collection![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://github.com/bybit-exchange/QuickStartWithPostman){.footer__link-item target="_blank" rel="noopener noreferrer"}
-   [Official Python SDK -- pybit![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://github.com/bybit-exchange/pybit){.footer__link-item target="_blank" rel="noopener noreferrer"}
-   [Community Node.js SDK -- bybit-api![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://www.npmjs.com/package/bybit-api){.footer__link-item target="_blank" rel="noopener noreferrer"}
-   [Official Go SDK -- bybit-go-api![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://github.com/bybit-exchange/bybit.go.api){.footer__link-item target="_blank" rel="noopener noreferrer"}
-   [Official Java SDK -- bybit-java-api![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://github.com/bybit-exchange/bybit-java-api){.footer__link-item target="_blank" rel="noopener noreferrer"}
-   [Official .Net SDK -- bybit.net.api![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://github.com/bybit-exchange/bybit.net.api){.footer__link-item target="_blank" rel="noopener noreferrer"}



