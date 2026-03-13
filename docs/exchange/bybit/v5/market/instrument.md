---
title: "Get Instruments Info"
url: "https://bybit-exchange.github.io/docs/v5/market/instrument"
source: "https://bybit-exchange.github.io/docs/"
fetched: "2026-03-10T08:56:01+00:00"
---

# Get Instruments Info

Source: [https://bybit-exchange.github.io/docs/v5/market/instrument](https://bybit-exchange.github.io/docs/v5/market/instrument)


[Skip to main content](#){.skipToContent_fXgn}




![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdib3g9IjAgMCAzMCAzMCIgYXJpYS1oaWRkZW49InRydWUiPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMiIgLz48L3N2Zz4=)

[](/docs/){.navbar__brand}


![Bybit Logo](/docs/img/logo_lightmode.png){.themedImage_ToTc .themedImage--light_HNdA}![Bybit Logo](/docs/img/logo_darkmode.png){.themedImage_ToTc .themedImage--dark_i4oU}


[V5 API](/docs/v5/guide){.navbar__item .navbar__link .navbar__link--active aria-current="page"}[P2P Trading](/docs/p2p/guide){.navbar__item .navbar__link}[Bybit Pay![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://bybit-exchange.github.io/pay-docs){.navbar__item .navbar__link target="_blank" rel="noopener noreferrer" docid="bybit_pay"}[Tax API V3](/docs/v3/intro){.navbar__item .navbar__link}




[Extras](#){.navbar__link aria-haspopup="true" aria-expanded="false" role="button"}

-   [Pilot Features](/docs/pilot-feature){.dropdown__link}
-   [Changelog](/docs/changelog/v5){.dropdown__link}
-   [API Explorer](/docs/api-explorer/v5/category){.dropdown__link}
-   [FAQ](/docs/faq){.dropdown__link}



[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJpY29uTGFuZ3VhZ2VfbmxYayI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTIuODcgMTUuMDdsLTIuNTQtMi41MS4wMy0uMDNjMS43NC0xLjk0IDIuOTgtNC4xNyAzLjcxLTYuNTNIMTdWNGgtN1YySDh2MkgxdjEuOTloMTEuMTdDMTEuNSA3LjkyIDEwLjQ0IDkuNzUgOSAxMS4zNSA4LjA3IDEwLjMyIDcuMyA5LjE5IDYuNjkgOGgtMmMuNzMgMS42MyAxLjczIDMuMTcgMi45OCA0LjU2bC01LjA5IDUuMDJMNCAxOWw1LTUgMy4xMSAzLjExLjc2LTIuMDR6TTE4LjUgMTBoLTJMMTIgMjJoMmwxLjEyLTNoNC43NUwyMSAyMmgybC00LjUtMTJ6bS0yLjYyIDdsMS42Mi00LjMzTDE5LjEyIDE3aC0zLjI0eiIgLz48L3N2Zz4=){.iconLanguage_nlXk}English](#){.navbar__link aria-haspopup="true" aria-expanded="false" role="button"}

-   [English](/docs/v5/market/instrument){.dropdown__link .dropdown__link--active target="_self" rel="noopener noreferrer" lang="en"}
-   [中文（台灣）](/docs/zh-TW/v5/market/instrument){.dropdown__link target="_self" rel="noopener noreferrer" lang="zh-TW"}



![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgY2xhc3M9ImxpZ2h0VG9nZ2xlSWNvbl9weWhSIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiw5YzEuNjUsMCwzLDEuMzUsMywzcy0xLjM1LDMtMywzcy0zLTEuMzUtMy0zUzEwLjM1LDksMTIsOSBNMTIsN2MtMi43NiwwLTUsMi4yNC01LDVzMi4yNCw1LDUsNXM1LTIuMjQsNS01IFMxNC43Niw3LDEyLDdMMTIsN3ogTTIsMTNsMiwwYzAuNTUsMCwxLTAuNDUsMS0xcy0wLjQ1LTEtMS0xbC0yLDBjLTAuNTUsMC0xLDAuNDUtMSwxUzEuNDUsMTMsMiwxM3ogTTIwLDEzbDIsMGMwLjU1LDAsMS0wLjQ1LDEtMSBzLTAuNDUtMS0xLTFsLTIsMGMtMC41NSwwLTEsMC40NS0xLDFTMTkuNDUsMTMsMjAsMTN6IE0xMSwydjJjMCwwLjU1LDAuNDUsMSwxLDFzMS0wLjQ1LDEtMVYyYzAtMC41NS0wLjQ1LTEtMS0xUzExLDEuNDUsMTEsMnogTTExLDIwdjJjMCwwLjU1LDAuNDUsMSwxLDFzMS0wLjQ1LDEtMXYtMmMwLTAuNTUtMC40NS0xLTEtMUMxMS40NSwxOSwxMSwxOS40NSwxMSwyMHogTTUuOTksNC41OGMtMC4zOS0wLjM5LTEuMDMtMC4zOS0xLjQxLDAgYy0wLjM5LDAuMzktMC4zOSwxLjAzLDAsMS40MWwxLjA2LDEuMDZjMC4zOSwwLjM5LDEuMDMsMC4zOSwxLjQxLDBzMC4zOS0xLjAzLDAtMS40MUw1Ljk5LDQuNTh6IE0xOC4zNiwxNi45NSBjLTAuMzktMC4zOS0xLjAzLTAuMzktMS40MSwwYy0wLjM5LDAuMzktMC4zOSwxLjAzLDAsMS40MWwxLjA2LDEuMDZjMC4zOSwwLjM5LDEuMDMsMC4zOSwxLjQxLDBjMC4zOS0wLjM5LDAuMzktMS4wMywwLTEuNDEgTDE4LjM2LDE2Ljk1eiBNMTkuNDIsNS45OWMwLjM5LTAuMzksMC4zOS0xLjAzLDAtMS40MWMtMC4zOS0wLjM5LTEuMDMtMC4zOS0xLjQxLDBsLTEuMDYsMS4wNmMtMC4zOSwwLjM5LTAuMzksMS4wMywwLDEuNDEgczEuMDMsMC4zOSwxLjQxLDBMMTkuNDIsNS45OXogTTcuMDUsMTguMzZjMC4zOS0wLjM5LDAuMzktMS4wMywwLTEuNDFjLTAuMzktMC4zOS0xLjAzLTAuMzktMS40MSwwbC0xLjA2LDEuMDYgYy0wLjM5LDAuMzktMC4zOSwxLjAzLDAsMS40MXMxLjAzLDAuMzksMS40MSwwTDcuMDUsMTguMzZ6IiAvPjwvc3ZnPg==){.lightToggleIcon_pyhR}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgY2xhc3M9ImRhcmtUb2dnbGVJY29uX3dmZ1IiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTkuMzcsNS41MUM5LjE5LDYuMTUsOS4xLDYuODIsOS4xLDcuNWMwLDQuMDgsMy4zMiw3LjQsNy40LDcuNGMwLjY4LDAsMS4zNS0wLjA5LDEuOTktMC4yN0MxNy40NSwxNy4xOSwxNC45MywxOSwxMiwxOSBjLTMuODYsMC03LTMuMTQtNy03QzUsOS4wNyw2LjgxLDYuNTUsOS4zNyw1LjUxeiBNMTIsM2MtNC45NywwLTksNC4wMy05LDlzNC4wMyw5LDksOXM5LTQuMDMsOS05YzAtMC40Ni0wLjA0LTAuOTItMC4xLTEuMzYgYy0wLjk4LDEuMzctMi41OCwyLjI2LTQuNCwyLjI2Yy0yLjk4LDAtNS40LTIuNDItNS40LTUuNGMwLTEuODEsMC44OS0zLjQyLDIuMjYtNC40QzEyLjkyLDMuMDQsMTIuNDYsMywxMiwzTDEyLDN6IiAvPjwvc3ZnPg==){.darkToggleIcon_wfgR}



[![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGNsYXNzPSJEb2NTZWFyY2gtU2VhcmNoLUljb24iIHZpZXdib3g9IjAgMCAyMCAyMCI+PHBhdGggZD0iTTE0LjM4NiAxNC4zODZsNC4wODc3IDQuMDg3Ny00LjA4NzctNC4wODc3Yy0yLjk0MTggMi45NDE5LTcuNzExNSAyLjk0MTktMTAuNjUzMyAwLTIuOTQxOS0yLjk0MTgtMi45NDE5LTcuNzExNSAwLTEwLjY1MzMgMi45NDE4LTIuOTQxOSA3LjcxMTUtMi45NDE5IDEwLjY1MzMgMCAyLjk0MTkgMi45NDE4IDIuOTQxOSA3LjcxMTUgMCAxMC42NTMzeiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPjwvc3ZnPg==){.DocSearch-Search-Icon}[Search]{.DocSearch-Button-Placeholder}]{.DocSearch-Button-Container}[]{.DocSearch-Button-Keys}










-   [Integration Guidance](/docs/v5/guide){.menu__link}

-   [Get Announcement](/docs/v5/announcement){.menu__link}

-   [Self Match Prevention](/docs/v5/smp){.menu__link}

-   [How To Start Copy Trading](/docs/v5/copytrade){.menu__link}

-   [Demo Trading Service](/docs/v5/demo){.menu__link}

-   [Get System Status](/docs/v5/system-status){.menu__link}

-   
    [Market](/docs/v5/market/time){.menu__link .menu__link--sublist .menu__link--sublist-caret .menu__link--active aria-expanded="true"}
    

    -   [Get Bybit Server Time](/docs/v5/market/time){.menu__link tabindex="0"}
    -   [Get Kline](/docs/v5/market/kline){.menu__link tabindex="0"}
    -   [Get Mark Price Kline](/docs/v5/market/mark-kline){.menu__link tabindex="0"}
    -   [Get Index Price Kline](/docs/v5/market/index-kline){.menu__link tabindex="0"}
    -   [Get Premium Index Price Kline](/docs/v5/market/premium-index-kline){.menu__link tabindex="0"}
    -   [Get Instruments Info](/docs/v5/market/instrument){.menu__link .menu__link--active aria-current="page" tabindex="0"}
    -   [Get Orderbook](/docs/v5/market/orderbook){.menu__link tabindex="0"}
    -   [Get RPI Orderbook](/docs/v5/market/rpi-orderbook){.menu__link tabindex="0"}
    -   [Get Tickers](/docs/v5/market/tickers){.menu__link tabindex="0"}
    -   [Get Funding Rate History](/docs/v5/market/history-fund-rate){.menu__link tabindex="0"}
    -   [Get Recent Public Trades](/docs/v5/market/recent-trade){.menu__link tabindex="0"}
    -   [Get Open Interest](/docs/v5/market/open-interest){.menu__link tabindex="0"}
    -   [Get Historical Volatility](/docs/v5/market/iv){.menu__link tabindex="0"}
    -   [Get Insurance Pool](/docs/v5/market/insurance){.menu__link tabindex="0"}
    -   [Get Risk Limit](/docs/v5/market/risk-limit){.menu__link tabindex="0"}
    -   [Get Delivery Price](/docs/v5/market/delivery-price){.menu__link tabindex="0"}
    -   [Get New Delivery Price](/docs/v5/market/new-delivery-price){.menu__link tabindex="0"}
    -   [Get Long Short Ratio](/docs/v5/market/long-short-ratio){.menu__link tabindex="0"}
    -   [Get Index Price Components](/docs/v5/market/index-components){.menu__link tabindex="0"}
    -   [Get Order Price Limit](/docs/v5/market/order-price-limit){.menu__link tabindex="0"}
    -   [Get ADL Alert](/docs/v5/market/adl-alert){.menu__link tabindex="0"}
    -   [Get Fee Group Structure](/docs/v5/market/fee-group-info){.menu__link tabindex="0"}

-   
    [Trade](/docs/v5/order/create-order){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false"}
    

-   
    [Position](/docs/v5/position){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false"}
    

-   
    [Pre-upgrade](/docs/v5/pre-upgrade/order-list){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false"}
    

-   
    [Account](/docs/v5/account/wallet-balance){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false"}
    

-   
    [Asset](/docs/v5/asset/fund-history){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false"}
    

-   
    [User](/docs/v5/user/sign-agreement){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false"}
    

-   
    [Spread Trading](/docs/v5/spread/market/instrument){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false"}
    

-   
    [RFQ Trading](/docs/v5/rfq/basic-workflow){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false"}
    

-   
    [Affiliate](/docs/v5/affiliate/affiliate-user-list){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false"}
    

-   
    [Spot Margin Trade (UTA)](/docs/v5/spot-margin-uta/vip-margin){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false"}
    

-   
    [Crypto Loan (New)](/docs/v5/new-crypto-loan/loan-coin){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false"}
    

-   
    [Crypto Loan (legacy)](/docs/v5/crypto-loan/collateral-coin){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false"}
    

-   
    [Institutional Loan](/docs/v5/otc/margin-product-info){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false"}
    

-   
    [Broker](/docs/v5/broker/api-broker/guidance){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false"}
    

-   
    [Earn](/docs/v5/earn/product-info){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false"}
    

-   
    [SBE](/docs/v5/sbe/sbe-basic-info){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false"}
    

-   
    [WebSocket Stream](/docs/v5/ws/connect){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false"}
    

-   
    [Rate Limit](/docs/v5/rate-limit){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false"}
    

-   [Enums Definitions](/docs/v5/enum){.menu__link}

-   [Error Codes](/docs/v5/error){.menu__link}

-   
    [Abandoned Endpoints](/docs/v5/abandon/asset-info){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false"}
    

![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0iY29sbGFwc2VTaWRlYmFyQnV0dG9uSWNvbl9rdjBfIj48ZyBmaWxsPSIjN2E3YTdhIj48cGF0aCBkPSJNOS45OTIgMTAuMDIzYzAgLjItLjA2Mi4zOTktLjE3Mi41NDdsLTQuOTk2IDcuNDkyYS45ODIuOTgyIDAgMDEtLjgyOC40NTRIMWMtLjU1IDAtMS0uNDUzLTEtMSAwLS4yLjA1OS0uNDAzLjE2OC0uNTUxbDQuNjI5LTYuOTQyTC4xNjggMy4wNzhBLjkzOS45MzkgMCAwMTAgMi41MjhjMC0uNTQ4LjQ1LS45OTcgMS0uOTk3aDIuOTk2Yy4zNTIgMCAuNjQ5LjE4LjgyOC40NUw5LjgyIDkuNDcyYy4xMS4xNDguMTcyLjM0Ny4xNzIuNTV6bTAgMCIgLz48cGF0aCBkPSJNMTkuOTggMTAuMDIzYzAgLjItLjA1OC4zOTktLjE2OC41NDdsLTQuOTk2IDcuNDkyYS45ODcuOTg3IDAgMDEtLjgyOC40NTRoLTNjLS41NDcgMC0uOTk2LS40NTMtLjk5Ni0xIDAtLjIuMDU5LS40MDMuMTY4LS41NTFsNC42MjUtNi45NDItNC42MjUtNi45NDVhLjkzOS45MzkgMCAwMS0uMTY4LS41NSAxIDEgMCAwMS45OTYtLjk5N2gzYy4zNDggMCAuNjQ5LjE4LjgyOC40NWw0Ljk5NiA3LjQ5MmMuMTEuMTQ4LjE2OC4zNDcuMTY4LjU1em0wIDAiIC8+PC9nPjwvc3ZnPg==){.collapseSidebarButtonIcon_kv0_}







-   [![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJicmVhZGNydW1iSG9tZUljb25fT1ZndCI+PHBhdGggZD0iTTEwIDE5di01aDR2NWMwIC41NS40NSAxIDEgMWgzYy41NSAwIDEtLjQ1IDEtMXYtN2gxLjdjLjQ2IDAgLjY4LS41Ny4zMy0uODdMMTIuNjcgMy42Yy0uMzgtLjM0LS45Ni0uMzQtMS4zNCAwbC04LjM2IDcuNTNjLS4zNC4zLS4xMy44Ny4zMy44N0g1djdjMCAuNTUuNDUgMSAxIDFoM2MuNTUgMCAxLS40NSAxLTF6IiBmaWxsPSJjdXJyZW50Q29sb3IiIC8+PC9zdmc+){.breadcrumbHomeIcon_OVgt}](/docs/){.breadcrumbs__link aria-label="Home page"}
-   [Market]{.breadcrumbs__link}
-   [Get Instruments Info]{.breadcrumbs__link itemprop="name"}


On this page



<div>

# Get Instruments Info

</div>



Query for the instrument specification of online trading pairs.

> **Covers: Spot / USDT contract / USDC contract / Inverse contract / Option**



[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTQgMTYiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcgMi4zYzMuMTQgMCA1LjcgMi41NiA1LjcgNS43cy0yLjU2IDUuNy01LjcgNS43QTUuNzEgNS43MSAwIDAgMSAxLjMgOGMwLTMuMTQgMi41Ni01LjcgNS43LTUuN3pNNyAxQzMuMTQgMSAwIDQuMTQgMCA4czMuMTQgNyA3IDcgNy0zLjE0IDctNy0zLjE0LTctNy03em0xIDNINnY1aDJWNHptMCA2SDZ2Mmgydi0yeiIgLz48L3N2Zz4=)]{.admonitionIcon_kALy}info



-   Spot does not support pagination, so `limit`, `cursor` are invalid.
-   When querying by `baseCoin`, regardless of if category=`linear` or `inverse`, the result will contain USDT contract, USDC contract and Inverse contract symbols.





[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTYgMTYiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTguODkzIDEuNWMtLjE4My0uMzEtLjUyLS41LS44ODctLjVzLS43MDMuMTktLjg4Ni41TC4xMzggMTMuNDk5YS45OC45OCAwIDAgMCAwIDEuMDAxYy4xOTMuMzEuNTMuNTAxLjg4Ni41MDFoMTMuOTY0Yy4zNjcgMCAuNzA0LS4xOS44NzctLjVhMS4wMyAxLjAzIDAgMCAwIC4wMS0xLjAwMkw4Ljg5MyAxLjV6bS4xMzMgMTEuNDk3SDYuOTg3di0yLjAwM2gyLjAzOXYyLjAwM3ptMC0zLjAwNEg2Ljk4N1Y1Ljk4N2gyLjAzOXY0LjAwNnoiIC8+PC9zdmc+)]{.admonitionIcon_kALy}caution



-   This endpoint returns 500 entries by default. There are now more than 500 `linear` symbols on the platform. As a result, you will need to use `cursor` for pagination or `limit` to get all entries.
-   During periods of extreme market volatility, this interface may experience increased latency or temporary delays in data delivery
-   The fields `maxLimitOrderQty`, `maxMarketOrderQty`, and `postOnlyMaxLimitOrderSize` are adjusted bi-monthly (3rd and 17th, 08:00 UTC+8). Developers should not assume these values remain constant.



### HTTP Request[​](#http-request "Direct link to heading"){.hash-link} 

GET `/v5/market/instruments-info`

### Request Parameters[​](#request-parameters "Direct link to heading"){.hash-link} 

+----------------------------------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Parameter                              | Required        | Type            | Comments                                                                                                                                                                                                      |
+:=======================================+:================+:================+===============================================================================================================================================================================================================+
| [category](/docs/v5/enum#category)     | **true**        | string          | Product type. `spot`,`linear`,`inverse`,`option`                                                                                                                                                              |
+----------------------------------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| [symbol](/docs/v5/enum#symbol)         | false           | string          | Symbol name, like `BTCUSDT`, uppercase only                                                                                                                                                                   |
+----------------------------------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| [symbolType](/docs/v5/enum#symboltype) | false           | string          | SymbolType:The region to which the trading pair belongs,only for`linear`,`inverse`,`spot`                                                                                                                     |
+----------------------------------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| [status](/docs/v5/enum#status)         | false           | string          | Symbol status filter                                                                                                                                                                                          |
|                                        |                 |                 |                                                                                                                                                                                                               |
|                                        |                 |                 | -   `linear` & `inverse` & `spot `By default returns only `Trading` symbols                                                                                                                                   |
|                                        |                 |                 | -   `option` By default returns `PreLaunch`, `Trading`, and `Delivering`                                                                                                                                      |
|                                        |                 |                 | -   Spot has `Trading` only                                                                                                                                                                                   |
|                                        |                 |                 | -   `linear` & `inverse`: when status=PreLaunch, it returns [Pre-Market contracts](https://www.bybit.com/help-center/article/Introduction-to-Pre-Market-Perpetual){target="_blank" rel="noopener noreferrer"} |
+----------------------------------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| baseCoin                               | false           | string          | Base coin, uppercase only                                                                                                                                                                                     |
|                                        |                 |                 |                                                                                                                                                                                                               |
|                                        |                 |                 | -   Applies to `linear`,`inverse`,`option` **only**                                                                                                                                                           |
|                                        |                 |                 | -   `option`: returns BTC by default                                                                                                                                                                          |
+----------------------------------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| limit                                  | false           | integer         | Limit for data size per page. \[`1`, `1000`\]. Default: `500`                                                                                                                                                 |
+----------------------------------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| cursor                                 | false           | string          | Cursor. Use the `nextPageCursor` token from the response to retrieve the next page of the result set                                                                                                          |
+----------------------------------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

### Response Parameters[​](#response-parameters "Direct link to heading"){.hash-link} 


-   Linear/Inverse
-   Option
-   Spot



Parameter














Type

Comments

category

string

Product type

nextPageCursor

string

Cursor. Used to pagination

list

array

Object

\> symbol

string

Symbol name

\> [contractType](/docs/v5/enum#contracttype)

string

Contract type

\> [status](/docs/v5/enum#status)

string

Instrument status

\> baseCoin

string

Base coin

\> quoteCoin

string

Quote coin

\> [symbolType](/docs/v5/enum#symboltype)

string

the region to which the trading pair belongs

\> launchTime

string

Launch timestamp (ms)

\> deliveryTime

string

Delivery timestamp (ms)

-   Expired futures delivery time
-   Perpetual delisting time

\> deliveryFeeRate

string

Delivery fee rate

\> priceScale

string

Price scale

\> leverageFilter

Object

Leverage attributes

\>\> minLeverage

string

Minimum leverage

\>\> maxLeverage

string

Maximum leverage

\>\> leverageStep

string

The step to increase/reduce leverage

\> priceFilter

Object

Price attributes

\>\> minPrice

string

Minimum order price

\>\> maxPrice

string

Maximum order price

\>\> tickSize

string

The step to increase/reduce order price

\> lotSizeFilter

Object

Size attributes

\>\> minNotionalValue

string

Minimum notional value

\>\> maxOrderQty

string

Maximum quantity for Limit and PostOnly order

\>\> maxMktOrderQty

string

Maximum quantity for Market order

\>\> minOrderQty

string

Minimum order quantity

\>\> qtyStep

string

The step to increase/reduce order quantity

\>\> postOnlyMaxOrderQty

string

deprecated, please use `maxOrderQty`

\> unifiedMarginTrade

boolean

Whether to support unified margin trade

\> fundingInterval

integer

Funding interval (minute)

\> settleCoin

string

Settle coin

\> [copyTrading](/docs/v5/enum#copytrading)

string

Copy trade symbol or not

\> upperFundingRate

string

Upper limit of funding date

\> lowerFundingRate

string

Lower limit of funding date

\> displayName

string

The USDC futures & perpetual name displayed in the Web or App

\> forbidUplWithdrawal

boolean

Whether to prohibit unrealised profit withdrawal

\> riskParameters

object

Risk parameters for limit order price. Note that the [formula changed](https://announcements.bybit.com/en/article/adjustments-to-bybit-s-derivative-trading-limit-order-mechanism-blt469228de1902fff6/){target="_blank" rel="noopener noreferrer"} in Jan 2025

\>\> priceLimitRatioX

string

Ratio X

\>\> priceLimitRatioY

string

Ratio Y

\> isPreListing

boolean

-   Whether the contract is a pre-market contract
-   When the pre-market contract is converted to official contract, it will be false

\> preListingInfo

object

-   If isPreListing=false, preListingInfo=null
-   If isPreListing=true, preListingInfo is an object

\>\> [curAuctionPhase](/docs/v5/enum#curauctionphase)

string

The current auction phase

\>\> phases

array\<object\>

Each phase time info

\>\>\> [phase](/docs/v5/enum#curauctionphase)

string

pre-market trading phase

\>\>\> startTime

string

The start time of the phase, timestamp(ms)

\>\>\> endTime

string

The end time of the phase, timestamp(ms)

\>\> auctionFeeInfo

object

Action fee info

\>\>\> auctionFeeRate

string

The trading fee rate during auction phase

-   There is no trading fee until entering continues trading phase

\>\>\> takerFeeRate

string

The taker fee rate during continues trading phase

\>\>\> makerFeeRate

string

The maker fee rate during continues trading phase

\>\> skipCallAuction

boolean

`false`, `true` Whether the pre-market contract skips the call auction phase


  Parameter                           Type     Comments
  ----------------------------------- -------- ---------------------------------------------
  category                            string   Product type
  nextPageCursor                      string   Cursor. Used to pagination
  list                                array    Object
  \> symbol                           string   Symbol name
  \> optionsType                      string   Option type. `Call`, `Put`
  \> [status](/docs/v5/enum#status)   string   Instrument status
  \> baseCoin                         string   Base coin
  \> quoteCoin                        string   Quote coin
  \> settleCoin                       string   Settle coin
  \> launchTime                       string   Launch timestamp (ms)
  \> deliveryTime                     string   Delivery timestamp (ms)
  \> deliveryFeeRate                  string   Delivery fee rate
  \> priceFilter                      Object   Price attributes
  \>\> minPrice                       string   Minimum order price
  \>\> maxPrice                       string   Maximum order price
  \>\> tickSize                       string   The step to increase/reduce order price
  \> lotSizeFilter                    Object   Size attributes
  \>\> maxOrderQty                    string   Maximum order quantity
  \>\> minOrderQty                    string   Minimum order quantity
  \>\> qtyStep                        string   The step to increase/reduce order quantity
  \> displayName                      string   The option name displayed in the Web or App



+-------------------------------------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Parameter                                       | Type                  | Comments                                                                                                                                                                                                                                   |
+=================================================+=======================+============================================================================================================================================================================================================================================+
| category                                        | string                | Product type                                                                                                                                                                                                                               |
+-------------------------------------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| list                                            | array                 | Object                                                                                                                                                                                                                                     |
+-------------------------------------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> symbol                                       | string                | Symbol name                                                                                                                                                                                                                                |
+-------------------------------------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> baseCoin                                     | string                | Base coin                                                                                                                                                                                                                                  |
+-------------------------------------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> quoteCoin                                    | string                | Quote coin                                                                                                                                                                                                                                 |
+-------------------------------------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> innovation                                   | string                | deprecated, please use `symbolType`                                                                                                                                                                                                        |
+-------------------------------------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> [symbolType](/docs/v5/enum#symboltype)       | string                | the region to which the trading pair belongs                                                                                                                                                                                               |
+-------------------------------------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> [status](/docs/v5/enum#status)               | string                | Instrument status                                                                                                                                                                                                                          |
+-------------------------------------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> [marginTrading](/docs/v5/enum#margintrading) | string                | Whether or not this symbol supports margin trading                                                                                                                                                                                         |
|                                                 |                       |                                                                                                                                                                                                                                            |
|                                                 |                       | -   This is to identify if the symbol supports margin trading under different account modes                                                                                                                                                |
|                                                 |                       | -   You may find some symbols do not support margin buy or margin sell, so you need to go to [Collateral Info (UTA)](/docs/v5/account/collateral-info) to check if that coin is borrowable                                                 |
|                                                 |                       | -   When the lending pool has insufficient balance to lend out funds (can happen during big market movements) then this will switch to `none` until there is sufficient balance to re-enable margin trading                                |
+-------------------------------------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> stTag                                        | string                | Whether or not it has an [special treatment label](https://www.bybit.com/en/help-center/article/Bybit-Special-Treatment-ST-Label-Management-Rules){target="_blank" rel="noopener noreferrer"}. `0`: false, `1`: true                       |
+-------------------------------------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> lotSizeFilter                                | Object                | Size attributes                                                                                                                                                                                                                            |
+-------------------------------------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \>\> basePrecision                              | string                | The precision of base coin                                                                                                                                                                                                                 |
+-------------------------------------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \>\> quotePrecision                             | string                | The precision of quote coin                                                                                                                                                                                                                |
+-------------------------------------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \>\> minOrderQty                                | string                | Minimum order quantity, deprecated, no longer check `minOrderQty`, check `minOrderAmt` instead                                                                                                                                             |
+-------------------------------------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \>\> maxOrderQty                                | string                | Maximum order quantity, deprecated, please refer to `maxLimitOrderQty`, `maxMarketOrderQty` based on order type                                                                                                                            |
+-------------------------------------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \>\> minOrderAmt                                | string                | Minimum order amount                                                                                                                                                                                                                       |
+-------------------------------------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \>\> maxOrderAmt                                | string                | Maximum order amount, deprecated, no longer check `maxOrderAmt`, check `maxLimitOrderQty` and `maxMarketOrderQty` instead                                                                                                                  |
+-------------------------------------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \>\> maxLimitOrderQty                           | string                | Maximum Limit order quantity                                                                                                                                                                                                               |
|                                                 |                       |                                                                                                                                                                                                                                            |
|                                                 |                       | -   For post-only and retail price improvement (RPI) orders, the maximum limit order quantity is 5x `maxLimitOrderQty`                                                                                                                     |
+-------------------------------------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \>\> maxMarketOrderQty                          | string                | Maximum Market order quantity                                                                                                                                                                                                              |
+-------------------------------------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \>\> postOnlyMaxLimitOrderSize                  | string                | Maximum limit order size for Post-only and RPI orders                                                                                                                                                                                      |
+-------------------------------------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> priceFilter                                  | Object                | Price attributes                                                                                                                                                                                                                           |
+-------------------------------------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \>\> tickSize                                   | string                | The step to increase/reduce order price                                                                                                                                                                                                    |
+-------------------------------------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> riskParameters                               | Object                | Risk parameters for limit order price, refer to [announcement](https://announcements.bybit.com/en/article/title-adjustments-to-bybit-s-spot-trading-limit-order-mechanism-blt786c0c5abf865983/){target="_blank" rel="noopener noreferrer"} |
+-------------------------------------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \>\> priceLimitRatioX                           | string                | Ratio X                                                                                                                                                                                                                                    |
+-------------------------------------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \>\> priceLimitRatioY                           | string                | Ratio Y                                                                                                                                                                                                                                    |
+-------------------------------------------------+-----------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+


RUN \>\>

------------------------------------------------------------------------

### Request Example[​](#request-example "Direct link to heading"){.hash-link} 


-   Linear
-   Option
-   Spot




-   HTTP
-   Python
-   Go
-   Java
-   Node.js





``` {.prism-code .language-http .codeBlock_bY9V .thin-scrollbar tabindex="0"}
GET /v5/market/instruments-info?category=linear&symbol=BTCUSDT HTTP/1.1
Host: api-testnet.bybit.com
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}








``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
from pybit.unified_trading import HTTP
session = HTTP(testnet=True)
print(session.get_instruments_info(
    category="linear",
    symbol="BTCUSDT",
))
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}








``` {.prism-code .language-go .codeBlock_bY9V .thin-scrollbar tabindex="0"}
import (
    "context"
    "fmt"
    bybit "github.com/bybit-exchange/bybit.go.api"
)
client := bybit.NewBybitHttpClient("", "", bybit.WithBaseURL(bybit.TESTNET))
params := map[string]interface{}{"category": "linear", "symbol": "BTCUSDT"}
client.NewUtaBybitServiceWithParams(params).GetInstrumentInfo(context.Background())
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}








``` {.prism-code .language-java .codeBlock_bY9V .thin-scrollbar tabindex="0"}
import com.bybit.api.client.domain.CategoryType;
import com.bybit.api.client.domain.market.*;
import com.bybit.api.client.domain.market.request.MarketDataRequest;
import com.bybit.api.client.service.BybitApiClientFactory;
var client = BybitApiClientFactory.newInstance().newAsyncMarketDataRestClient();
var instrumentInfoRequest = MarketDataRequest.builder().category(CategoryType.LINEAR).symbol("BTCUSDT").instrumentStatus(InstrumentStatus.TRADING).limit(500).build();
client.getInstrumentsInfo(instrumentInfoRequest,System.out::println);
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}








``` {.prism-code .language-n4js .codeBlock_bY9V .thin-scrollbar tabindex="0"}
const { RestClientV5 } = require('bybit-api');

const client = new RestClientV5({
    testnet: true,
});

client
    .getInstrumentsInfo({
        category: 'linear',
        symbol: 'BTCUSDT',
    })
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    });
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}










-   HTTP
-   Python
-   Go
-   Java
-   Node.js





``` {.prism-code .language-http .codeBlock_bY9V .thin-scrollbar tabindex="0"}
GET /v5/market/instruments-info?category=option&symbol=ETH-3JAN23-1250-P HTTP/1.1
Host: api-testnet.bybit.com
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}








``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
from pybit.unified_trading import HTTP
session = HTTP(testnet=True)
print(session.get_instruments_info(
    category="option",
    symbol="ETH-3JAN23-1250-P",
))
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}








``` {.prism-code .language-go .codeBlock_bY9V .thin-scrollbar tabindex="0"}
import (
    "context"
    "fmt"
    bybit "github.com/bybit-exchange/bybit.go.api"
)
client := bybit.NewBybitHttpClient("", "", bybit.WithBaseURL(bybit.TESTNET))
params := map[string]interface{}{"category": "option", "symbol": "ETH-3JAN23-1250-P"}
client.NewUtaBybitServiceWithParams(params).GetInstrumentInfo(context.Background())
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}








``` {.prism-code .language-java .codeBlock_bY9V .thin-scrollbar tabindex="0"}
import com.bybit.api.client.domain.CategoryType;
import com.bybit.api.client.domain.market.*;
import com.bybit.api.client.domain.market.request.MarketDataRequest;
import com.bybit.api.client.service.BybitApiClientFactory;
var client = BybitApiClientFactory.newInstance().newAsyncMarketDataRestClient();
var instrumentInfoRequest = MarketDataRequest.builder().category(CategoryType.OPTION).symbol("ETH-3JAN23-1250-P").instrumentStatus(InstrumentStatus.TRADING).limit(500).build();
client.getInstrumentsInfo(instrumentInfoRequest,System.out::println);
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}








``` {.prism-code .language-n4js .codeBlock_bY9V .thin-scrollbar tabindex="0"}
const { RestClientV5 } = require('bybit-api');

const client = new RestClientV5({
    testnet: true,
});

client
  .getInstrumentsInfo({
    category: 'option',
    symbol: 'ETH-3JAN23-1250-P',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}










-   HTTP
-   Python
-   Go
-   Java
-   Node.js





``` {.prism-code .language-http .codeBlock_bY9V .thin-scrollbar tabindex="0"}
GET /v5/market/instruments-info?category=spot&symbol=BTCUSDT HTTP/1.1
Host: api-testnet.bybit.com
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}








``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
from pybit.unified_trading import HTTP
session = HTTP(testnet=True)
print(session.get_instruments_info(
    category="spot",
    symbol="BTCUSDT",
))
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}








``` {.prism-code .language-go .codeBlock_bY9V .thin-scrollbar tabindex="0"}
import (
    "context"
    "fmt"
    bybit "github.com/bybit-exchange/bybit.go.api"
)
client := bybit.NewBybitHttpClient("", "", bybit.WithBaseURL(bybit.TESTNET))
params := map[string]interface{}{"category": "spot", "symbol": "BTCUSDT"}
client.NewUtaBybitServiceWithParams(params).GetInstrumentInfo(context.Background())
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}








``` {.prism-code .language-java .codeBlock_bY9V .thin-scrollbar tabindex="0"}
import com.bybit.api.client.domain.*;
import com.bybit.api.client.domain.market.*;
import com.bybit.api.client.domain.market.request.*;
import com.bybit.api.client.service.BybitApiClientFactory;
var client = BybitApiClientFactory.newInstance().newAsyncMarketDataRestClient();
var instrumentInfoRequest = MarketDataRequest.builder().category(CategoryType.SPOT).symbol("BTCUSDT").instrumentStatus(InstrumentStatus.TRADING).limit(500).build();
client.getInstrumentsInfo(instrumentInfoRequest,System.out::println);
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}








``` {.prism-code .language-n4js .codeBlock_bY9V .thin-scrollbar tabindex="0"}
const { RestClientV5 } = require('bybit-api');

const client = new RestClientV5({
    testnet: true,
});

client
  .getInstrumentsInfo({
    category: 'spot',
    symbol: 'BTCUSDT',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}










### Response Example[​](#response-example "Direct link to heading"){.hash-link} 


-   Linear
-   Option
-   Spot





``` {.prism-code .language-json .codeBlock_bY9V .thin-scrollbar tabindex="0"}
// official USDT Perpetual instrument structure
{
    "retCode": 0,
    "retMsg": "OK",
    "result": {
        "category": "linear",
        "list": [
            {
                "symbol": "BTCUSDT",
                "contractType": "LinearPerpetual",
                "status": "Trading",
                "baseCoin": "BTC",
                "quoteCoin": "USDT",
                "launchTime": "1585526400000",
                "deliveryTime": "0",
                "deliveryFeeRate": "",
                "priceScale": "2",
                "leverageFilter": {
                    "minLeverage": "1",
                    "maxLeverage": "100.00",
                    "leverageStep": "0.01"
                },
                "priceFilter": {
                    "minPrice": "0.10",
                    "maxPrice": "1999999.80",
                    "tickSize": "0.10"
                },
                "lotSizeFilter": {
                    "maxOrderQty": "1190.000",
                    "minOrderQty": "0.001",
                    "qtyStep": "0.001",
                    "postOnlyMaxOrderQty": "1190.000",
                    "maxMktOrderQty": "500.000",
                    "minNotionalValue": "5"
                },
                "unifiedMarginTrade": true,
                "fundingInterval": 480,
                "settleCoin": "USDT",
                "copyTrading": "both",
                "upperFundingRate": "0.00375",
                "lowerFundingRate": "-0.00375",
                "isPreListing": false,
                "preListingInfo": null,
                "riskParameters": {
                    "priceLimitRatioX": "0.01",
                    "priceLimitRatioY": "0.02"
                },
                "symbolType": ""
            }
        ],
        "nextPageCursor": ""
    },
    "retExtInfo": {},
    "time": 1735809771618
}

// Pre-market Perpetual instrument structure
{
    "retCode": 0,
    "retMsg": "OK",
    "result": {
        "category": "linear",
        "list": [
            {
                "symbol": "BIOUSDT",
                "contractType": "LinearPerpetual",
                "status": "PreLaunch",
                "baseCoin": "BIO",
                "quoteCoin": "USDT",
                "launchTime": "1735032510000",
                "deliveryTime": "0",
                "deliveryFeeRate": "",
                "priceScale": "4",
                "leverageFilter": {
                    "minLeverage": "1",
                    "maxLeverage": "5.00",
                    "leverageStep": "0.01"
                },
                "priceFilter": {
                    "minPrice": "0.0001",
                    "maxPrice": "1999.9998",
                    "tickSize": "0.0001"
                },
                "lotSizeFilter": {
                    "maxOrderQty": "70000",
                    "minOrderQty": "1",
                    "qtyStep": "1",
                    "postOnlyMaxOrderQty": "70000",
                    "maxMktOrderQty": "14000",
                    "minNotionalValue": "5"
                },
                "unifiedMarginTrade": true,
                "fundingInterval": 480,
                "settleCoin": "USDT",
                "copyTrading": "none",
                "upperFundingRate": "0.05",
                "lowerFundingRate": "-0.05",
                "isPreListing": true,
                "preListingInfo": {
                    "curAuctionPhase": "ContinuousTrading",
                    "phases": [
                        {
                            "phase": "CallAuction",
                            "startTime": "1735113600000",
                            "endTime": "1735116600000"
                        },
                        {
                            "phase": "CallAuctionNoCancel",
                            "startTime": "1735116600000",
                            "endTime": "1735116900000"
                        },
                        {
                            "phase": "CrossMatching",
                            "startTime": "1735116900000",
                            "endTime": "1735117200000"
                        },
                        {
                            "phase": "ContinuousTrading",
                            "startTime": "1735117200000",
                            "endTime": ""
                        }
                    ],
                    "auctionFeeInfo": {
                        "auctionFeeRate": "0",
                        "takerFeeRate": "0.001",
                        "makerFeeRate": "0.0004"
                    }
                },
                "riskParameters": {
                    "priceLimitRatioX": "0.05",
                    "priceLimitRatioY": "0.1"
                },
                "symbolType": ""
            }
        ],
        "nextPageCursor": "first%3DBIOUSDT%26last%3DBIOUSDT"
    },
    "retExtInfo": {},
    "time": 1735810114435
}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}








``` {.prism-code .language-json .codeBlock_bY9V .thin-scrollbar tabindex="0"}
{
    "retCode": 0,
    "retMsg": "OK",
    "result": {
        "category": "option",
        "nextPageCursor": "",
        "list": [
            {
                "symbol": "BTC-27MAR26-70000-P-USDT",
                "status": "Trading",
                "baseCoin": "BTC",
                "quoteCoin": "USDT",
                "settleCoin": "USDT",
                "optionsType": "Put",
                "launchTime": "1743669649256",
                "deliveryTime": "1774598400000",
                "deliveryFeeRate": "0.00015",
                "priceFilter": {
                    "minPrice": "5",
                    "maxPrice": "1110000",
                    "tickSize": "5"
                },
                "lotSizeFilter": {
                    "maxOrderQty": "500",
                    "minOrderQty": "0.01",
                    "qtyStep": "0.01"
                },
                "displayName": "BTCUSDT-27MAR26-70000-P"
            }
        ]
    },
    "retExtInfo": {},
    "time": 1672712537130
}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}








``` {.prism-code .language-json .codeBlock_bY9V .thin-scrollbar tabindex="0"}
{
    "retCode": 0,
    "retMsg": "OK",
    "result": {
        "category": "spot",
        "list": [
            {
                "symbol": "BTCUSDT",
                "baseCoin": "BTC",
                "quoteCoin": "USDT",
                "innovation": "0",
                "status": "Trading",
                "marginTrading": "utaOnly",
                "stTag": "0",
                "lotSizeFilter": {
                    "basePrecision": "0.000001",
                    "quotePrecision": "0.0000001",
                    "minOrderQty": "0.000011",
                    "maxOrderQty": "83",
                    "minOrderAmt": "5",
                    "maxOrderAmt": "8000000",
                    "maxLimitOrderQty": "83",
                    "maxMarketOrderQty": "41.5",
                    "postOnlyMaxLimitOrderSize":"60000"

                },
                "priceFilter": {
                    "tickSize": "0.1"
                },
                "riskParameters": {
                    "priceLimitRatioX": "0.005",
                    "priceLimitRatioY": "0.01"
                },
                "symbolType": ""
            }
        ]
    },
    "retExtInfo": {},
    "time": 1760027412300
}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}











[](/docs/v5/market/premium-index-kline){.pagination-nav__link .pagination-nav__link--prev}


Previous



Get Premium Index Price Kline


[](/docs/v5/market/orderbook){.pagination-nav__link .pagination-nav__link--next}


Next



Get Orderbook





-   [HTTP Request](#http-request){.table-of-contents__link .toc-highlight}
-   [Request Parameters](#request-parameters){.table-of-contents__link .toc-highlight}
-   [Response Parameters](#response-parameters){.table-of-contents__link .toc-highlight}
-   [Request Example](#request-example){.table-of-contents__link .toc-highlight}
-   [Response Example](#response-example){.table-of-contents__link .toc-highlight}







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



