---
title: "Batch Place Order"
url: "https://bybit-exchange.github.io/docs/v5/order/batch-place"
source: "https://bybit-exchange.github.io/docs/"
fetched: "2026-03-10T08:56:37+00:00"
---

# Batch Place Order

Source: [https://bybit-exchange.github.io/docs/v5/order/batch-place](https://bybit-exchange.github.io/docs/v5/order/batch-place)


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

-   [English](/docs/v5/order/batch-place){.dropdown__link .dropdown__link--active target="_self" rel="noopener noreferrer" lang="en"}
-   [中文（台灣）](/docs/zh-TW/v5/order/batch-place){.dropdown__link target="_self" rel="noopener noreferrer" lang="zh-TW"}



![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgY2xhc3M9ImxpZ2h0VG9nZ2xlSWNvbl9weWhSIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiw5YzEuNjUsMCwzLDEuMzUsMywzcy0xLjM1LDMtMywzcy0zLTEuMzUtMy0zUzEwLjM1LDksMTIsOSBNMTIsN2MtMi43NiwwLTUsMi4yNC01LDVzMi4yNCw1LDUsNXM1LTIuMjQsNS01IFMxNC43Niw3LDEyLDdMMTIsN3ogTTIsMTNsMiwwYzAuNTUsMCwxLTAuNDUsMS0xcy0wLjQ1LTEtMS0xbC0yLDBjLTAuNTUsMC0xLDAuNDUtMSwxUzEuNDUsMTMsMiwxM3ogTTIwLDEzbDIsMGMwLjU1LDAsMS0wLjQ1LDEtMSBzLTAuNDUtMS0xLTFsLTIsMGMtMC41NSwwLTEsMC40NS0xLDFTMTkuNDUsMTMsMjAsMTN6IE0xMSwydjJjMCwwLjU1LDAuNDUsMSwxLDFzMS0wLjQ1LDEtMVYyYzAtMC41NS0wLjQ1LTEtMS0xUzExLDEuNDUsMTEsMnogTTExLDIwdjJjMCwwLjU1LDAuNDUsMSwxLDFzMS0wLjQ1LDEtMXYtMmMwLTAuNTUtMC40NS0xLTEtMUMxMS40NSwxOSwxMSwxOS40NSwxMSwyMHogTTUuOTksNC41OGMtMC4zOS0wLjM5LTEuMDMtMC4zOS0xLjQxLDAgYy0wLjM5LDAuMzktMC4zOSwxLjAzLDAsMS40MWwxLjA2LDEuMDZjMC4zOSwwLjM5LDEuMDMsMC4zOSwxLjQxLDBzMC4zOS0xLjAzLDAtMS40MUw1Ljk5LDQuNTh6IE0xOC4zNiwxNi45NSBjLTAuMzktMC4zOS0xLjAzLTAuMzktMS40MSwwYy0wLjM5LDAuMzktMC4zOSwxLjAzLDAsMS40MWwxLjA2LDEuMDZjMC4zOSwwLjM5LDEuMDMsMC4zOSwxLjQxLDBjMC4zOS0wLjM5LDAuMzktMS4wMywwLTEuNDEgTDE4LjM2LDE2Ljk1eiBNMTkuNDIsNS45OWMwLjM5LTAuMzksMC4zOS0xLjAzLDAtMS40MWMtMC4zOS0wLjM5LTEuMDMtMC4zOS0xLjQxLDBsLTEuMDYsMS4wNmMtMC4zOSwwLjM5LTAuMzksMS4wMywwLDEuNDEgczEuMDMsMC4zOSwxLjQxLDBMMTkuNDIsNS45OXogTTcuMDUsMTguMzZjMC4zOS0wLjM5LDAuMzktMS4wMywwLTEuNDFjLTAuMzktMC4zOS0xLjAzLTAuMzktMS40MSwwbC0xLjA2LDEuMDYgYy0wLjM5LDAuMzktMC4zOSwxLjAzLDAsMS40MXMxLjAzLDAuMzksMS40MSwwTDcuMDUsMTguMzZ6IiAvPjwvc3ZnPg==){.lightToggleIcon_pyhR}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgY2xhc3M9ImRhcmtUb2dnbGVJY29uX3dmZ1IiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTkuMzcsNS41MUM5LjE5LDYuMTUsOS4xLDYuODIsOS4xLDcuNWMwLDQuMDgsMy4zMiw3LjQsNy40LDcuNGMwLjY4LDAsMS4zNS0wLjA5LDEuOTktMC4yN0MxNy40NSwxNy4xOSwxNC45MywxOSwxMiwxOSBjLTMuODYsMC03LTMuMTQtNy03QzUsOS4wNyw2LjgxLDYuNTUsOS4zNyw1LjUxeiBNMTIsM2MtNC45NywwLTksNC4wMy05LDlzNC4wMyw5LDksOXM5LTQuMDMsOS05YzAtMC40Ni0wLjA0LTAuOTItMC4xLTEuMzYgYy0wLjk4LDEuMzctMi41OCwyLjI2LTQuNCwyLjI2Yy0yLjk4LDAtNS40LTIuNDItNS40LTUuNGMwLTEuODEsMC44OS0zLjQyLDIuMjYtNC40QzEyLjkyLDMuMDQsMTIuNDYsMywxMiwzTDEyLDN6IiAvPjwvc3ZnPg==){.darkToggleIcon_wfgR}



[![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGNsYXNzPSJEb2NTZWFyY2gtU2VhcmNoLUljb24iIHZpZXdib3g9IjAgMCAyMCAyMCI+PHBhdGggZD0iTTE0LjM4NiAxNC4zODZsNC4wODc3IDQuMDg3Ny00LjA4NzctNC4wODc3Yy0yLjk0MTggMi45NDE5LTcuNzExNSAyLjk0MTktMTAuNjUzMyAwLTIuOTQxOS0yLjk0MTgtMi45NDE5LTcuNzExNSAwLTEwLjY1MzMgMi45NDE4LTIuOTQxOSA3LjcxMTUtMi45NDE5IDEwLjY1MzMgMCAyLjk0MTkgMi45NDE4IDIuOTQxOSA3LjcxMTUgMCAxMC42NTMzeiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPjwvc3ZnPg==){.DocSearch-Search-Icon}[Search]{.DocSearch-Button-Placeholder}]{.DocSearch-Button-Container}[]{.DocSearch-Button-Keys}










-   [Integration Guidance](/docs/v5/guide){.menu__link}

-   [Get Announcement](/docs/v5/announcement){.menu__link}

-   [Self Match Prevention](/docs/v5/smp){.menu__link}

-   [How To Start Copy Trading](/docs/v5/copytrade){.menu__link}

-   [Demo Trading Service](/docs/v5/demo){.menu__link}

-   [Get System Status](/docs/v5/system-status){.menu__link}

-   
    [Market](/docs/v5/market/time){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false"}
    

-   
    [Trade](/docs/v5/order/create-order){.menu__link .menu__link--sublist .menu__link--sublist-caret .menu__link--active aria-expanded="true"}
    

    -   [Place Order](/docs/v5/order/create-order){.menu__link tabindex="0"}
    -   [Amend Order](/docs/v5/order/amend-order){.menu__link tabindex="0"}
    -   [Cancel Order](/docs/v5/order/cancel-order){.menu__link tabindex="0"}
    -   [Get Open & Closed Orders](/docs/v5/order/open-order){.menu__link tabindex="0"}
    -   [Cancel All Orders](/docs/v5/order/cancel-all){.menu__link tabindex="0"}
    -   [Get Order History (2 years)](/docs/v5/order/order-list){.menu__link tabindex="0"}
    -   [Get Trade History (2 years)](/docs/v5/order/execution){.menu__link tabindex="0"}
    -   [Batch Place Order](/docs/v5/order/batch-place){.menu__link .menu__link--active aria-current="page" tabindex="0"}
    -   [Batch Amend Order](/docs/v5/order/batch-amend){.menu__link tabindex="0"}
    -   [Batch Cancel Order](/docs/v5/order/batch-cancel){.menu__link tabindex="0"}
    -   [Get Borrow Quota (Spot)](/docs/v5/order/spot-borrow-quota){.menu__link tabindex="0"}
    -   [Set DCP](/docs/v5/order/dcp){.menu__link tabindex="0"}
    -   [Pre Check Order](/docs/v5/order/pre-check-order){.menu__link tabindex="0"}

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
-   [Trade]{.breadcrumbs__link}
-   [Batch Place Order]{.breadcrumbs__link itemprop="name"}


On this page



<div>

# Batch Place Order

</div>





[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTIgMTYiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuNSAwQzMuNDggMCAxIDIuMTkgMSA1YzAgLjkyLjU1IDIuMjUgMSAzIDEuMzQgMi4yNSAxLjc4IDIuNzggMiA0djFoNXYtMWMuMjItMS4yMi42Ni0xLjc1IDItNCAuNDUtLjc1IDEtMi4wOCAxLTMgMC0yLjgxLTIuNDgtNS01LjUtNXptMy42NCA3LjQ4Yy0uMjUuNDQtLjQ3LjgtLjY3IDEuMTEtLjg2IDEuNDEtMS4yNSAyLjA2LTEuNDUgMy4yMy0uMDIuMDUtLjAyLjExLS4wMi4xN0g1YzAtLjA2IDAtLjEzLS4wMi0uMTctLjItMS4xNy0uNTktMS44My0xLjQ1LTMuMjMtLjItLjMxLS40Mi0uNjctLjY3LTEuMTFDMi40NCA2Ljc4IDIgNS42NSAyIDVjMC0yLjIgMi4wMi00IDQuNS00IDEuMjIgMCAyLjM2LjQyIDMuMjIgMS4xOUMxMC41NSAyLjk0IDExIDMuOTQgMTEgNWMwIC42Ni0uNDQgMS43OC0uODYgMi40OHpNNCAxNGg1Yy0uMjMgMS4xNC0xLjMgMi0yLjUgMnMtMi4yNy0uODYtMi41LTJ6IiAvPjwvc3ZnPg==)]{.admonitionIcon_kALy}tip



This endpoint allows you to place more than one order in a single request.

-   Make sure you have sufficient funds in your account when placing an order. Once an order is placed, according to the funds required by the order, the funds in your account will be frozen by the corresponding amount during the life cycle of the order.
-   A maximum of 20 orders (option), 20 orders (inverse), 20 orders (linear), 10 orders (spot) can be placed per request. The returned data list is divided into two lists. The first list indicates whether or not the order creation was successful and the second list details the created order information. The structure of the two lists are completely consistent.





[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTQgMTYiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcgMi4zYzMuMTQgMCA1LjcgMi41NiA1LjcgNS43cy0yLjU2IDUuNy01LjcgNS43QTUuNzEgNS43MSAwIDAgMSAxLjMgOGMwLTMuMTQgMi41Ni01LjcgNS43LTUuN3pNNyAxQzMuMTQgMSAwIDQuMTQgMCA4czMuMTQgNyA3IDcgNy0zLjE0IDctNy0zLjE0LTctNy03em0xIDNINnY1aDJWNHptMCA2SDZ2Mmgydi0yeiIgLz48L3N2Zz4=)]{.admonitionIcon_kALy}info



-   **Option rate limt** instruction: its rate limit is count based on the actual number of request sent, e.g., by default, option trading rate limit is 10 reqs per sec, so you can send up to 20 \* 10 = 200 orders in one second.
-   **Perpetual, Futures, Spot rate limit instruction**, please check [here](/docs/v5/rate-limit#instructions-for-batch-endpoints)
-   **Risk control limit notice:**\
    Bybit will monitor on your API requests. When the total number of orders of a single user (aggregated the number of orders across main account and subaccounts) within a day (UTC 0 - UTC 24) exceeds a certain upper limit, the platform will reserve the right to remind, warn, and impose necessary restrictions. Customers who use API default to acceptance of these terms and have the obligation to cooperate with adjustments.



### HTTP Request[​](#http-request "Direct link to heading"){.hash-link} 

POST `/v5/order/create-batch`

### Request Parameters[​](#request-parameters "Direct link to heading"){.hash-link} 

+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Parameter                                   | Required        | Type            | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
+:============================================+:================+:================+=======================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================+
| [category](/docs/v5/enum#category)          | **true**        | string          | Product type `linear`, `option`, `spot`, `inverse`                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| request                                     | **true**        | array           | Object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> symbol                                   | **true**        | string          | Symbol name, like `BTCUSDT`, uppercase only                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> isLeverage                               | false           | integer         | Whether to borrow, `spot`\*\* only. `0`(default): false then spot trading, `1`: true then margin trading                                                                                                                                                                                                                                                                                                                                                                                              |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> side                                     | **true**        | string          | `Buy`, `Sell`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> [orderType](/docs/v5/enum#ordertype)     | **true**        | string          | `Market`, `Limit`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> qty                                      | **true**        | string          | Order quantity                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                                             |                 |                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                             |                 |                 | -   Spot: set `marketUnit` for market order qty unit, `quoteCoin` for market buy by default, `baseCoin` for market sell by default                                                                                                                                                                                                                                                                                                                                                                    |
|                                             |                 |                 | -   Perps, Futures & Option: always use base coin as unit.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                                             |                 |                 | -   Perps & Futures: If you pass `qty`=\"0\" and specify `reduceOnly`=true&`closeOnTrigger`=true, you can close the position up to `maxMktOrderQty` or `maxOrderQty` shown on [Get Instruments Info](/docs/v5/market/instrument) of current symbol                                                                                                                                                                                                                                                    |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> marketUnit                               | false           | string          | The unit for `qty` when create **Spot market** orders, `orderFilter`=\"tpslOrder\" and \"StopOrder\" are supported as well.                                                                                                                                                                                                                                                                                                                                                                           |
|                                             |                 |                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                             |                 |                 | -   `baseCoin`: for example, buy BTCUSDT, then \"qty\" unit is BTC                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|                                             |                 |                 | -   `quoteCoin`: for example, sell BTCUSDT, then \"qty\" unit is USDT                                                                                                                                                                                                                                                                                                                                                                                                                                 |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> price                                    | false           | string          | Order price                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|                                             |                 |                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                             |                 |                 | -   Market order will ignore this field                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                                             |                 |                 | -   Please check the min price and price precision from [instrument info](/docs/v5/market/instrument#response-parameters) endpoint                                                                                                                                                                                                                                                                                                                                                                    |
|                                             |                 |                 | -   If you have position, price needs to be better than liquidation price                                                                                                                                                                                                                                                                                                                                                                                                                             |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> triggerDirection                         | false           | integer         | Conditional order param. Used to identify the expected direction of the conditional order.                                                                                                                                                                                                                                                                                                                                                                                                            |
|                                             |                 |                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                             |                 |                 | -   `1`: triggered when market price rises to `triggerPrice`                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                             |                 |                 | -   `2`: triggered when market price falls to `triggerPrice`                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                             |                 |                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                             |                 |                 | Valid for `linear`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> orderFilter                              | false           | string          | If it is not passed, `Order` by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                                             |                 |                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                             |                 |                 | -   `Order`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|                                             |                 |                 | -   `tpslOrder`: Spot TP/SL order, the assets are occupied even before the order is triggered                                                                                                                                                                                                                                                                                                                                                                                                         |
|                                             |                 |                 | -   `StopOrder`: Spot conditional order, the assets will not be occupied until the price of the underlying asset reaches the trigger price, and the required assets will be occupied after the Conditional order is triggered                                                                                                                                                                                                                                                                         |
|                                             |                 |                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                             |                 |                 | Valid for `spot` **only**                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> triggerPrice                             | false           | string          | -   For Perps & Futures, it is the conditional order trigger price. If you expect the price to rise to trigger your conditional order, make sure:\                                                                                                                                                                                                                                                                                                                                                    |
|                                             |                 |                 |     *triggerPrice \> market price*\                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|                                             |                 |                 |     Else, *triggerPrice \< market price*                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                                             |                 |                 | -   For spot, it is the `orderFilter`=\"tpslOrder\", or \"StopOrder\" trigger price                                                                                                                                                                                                                                                                                                                                                                                                                   |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> [triggerBy](/docs/v5/enum#triggerby)     | false           | string          | Conditional order param (Perps & Futures). Trigger price type. `LastPrice`, `IndexPrice`, `MarkPrice`                                                                                                                                                                                                                                                                                                                                                                                                 |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> orderIv                                  | false           | string          | Implied volatility. `option` **only**. Pass the real value, e.g for 10%, 0.1 should be passed. `orderIv` has a higher priority when `price` is passed as well                                                                                                                                                                                                                                                                                                                                         |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> [timeInForce](/docs/v5/enum#timeinforce) | false           | string          | [Time in force](https://www.bybit.com/en/help-center/article/What-Are-Time-In-Force-TIF-GTC-IOC-FOK){target="_blank" rel="noopener noreferrer"}                                                                                                                                                                                                                                                                                                                                                       |
|                                             |                 |                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                             |                 |                 | -   Market order will use `IOC` directly                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                                             |                 |                 | -   If not passed, `GTC` is used by default                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> [positionIdx](/docs/v5/enum#positionidx) | false           | integer         | Used to identify positions in different position modes. Under hedge-mode, this param is **required**                                                                                                                                                                                                                                                                                                                                                                                                  |
|                                             |                 |                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                             |                 |                 | -   `0`: one-way mode                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                                             |                 |                 | -   `1`: hedge-mode Buy side                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                             |                 |                 | -   `2`: hedge-mode Sell side                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> orderLinkId                              | false           | string          | User customised order ID. A max of 36 characters. Combinations of numbers, letters (upper and lower cases), dashes, and underscores are supported.\                                                                                                                                                                                                                                                                                                                                                   |
|                                             |                 |                 | *Futures, Perps & Spot: orderLinkId rules:*                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|                                             |                 |                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                             |                 |                 | -   optional param                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|                                             |                 |                 | -   always unique                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                                             |                 |                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                             |                 |                 | *Options orderLinkId rules:*                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                             |                 |                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                             |                 |                 | -   **required** param                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                                             |                 |                 | -   always unique                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> takeProfit                               | false           | string          | Take profit price                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> stopLoss                                 | false           | string          | Stop loss price                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> [tpTriggerBy](/docs/v5/enum#triggerby)   | false           | string          | The price type to trigger take profit. `MarkPrice`, `IndexPrice`, default: `LastPrice`.\                                                                                                                                                                                                                                                                                                                                                                                                              |
|                                             |                 |                 | Valid for `linear`, `inverse`                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> [slTriggerBy](/docs/v5/enum#triggerby)   | false           | string          | The price type to trigger stop loss. `MarkPrice`, `IndexPrice`, default: `LastPrice`\                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                                             |                 |                 | Valid for `linear`, `inverse`                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> reduceOnly                               | false           | boolean         | [What is a reduce-only order?](https://www.bybit.com/en/help-center/article/Reduce-Only-Order){target="_blank" rel="noopener noreferrer"} `true` means your position can only reduce in size if this order is triggered.                                                                                                                                                                                                                                                                              |
|                                             |                 |                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                             |                 |                 | -   You **must** specify it as `true` when you are about to close/reduce the position                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                                             |                 |                 | -   When reduceOnly is true, take profit/stop loss cannot be set                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                                             |                 |                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                             |                 |                 | Valid for `linear`, `inverse` & `option`                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> closeOnTrigger                           | false           | boolean         | [What is a close on trigger order?](https://www.bybit.com/en/help-center/article/Close-On-Trigger-Order){target="_blank" rel="noopener noreferrer"} For a closing order. It can only reduce your position, not increase it. If the account has insufficient available balance when the closing order is triggered, then other active orders of similar contracts will be cancelled or reduced. It can be used to ensure your stop loss reduces your position regardless of current available margin.\ |
|                                             |                 |                 | Valid for `linear`, `inverse`                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> [smpType](/docs/v5/enum#smptype)         | false           | string          | Smp execution type. [What is SMP?](/docs/v5/smp)                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> mmp                                      | false           | boolean         | Market maker protection. `option` **only**. `true` means set the order as a market maker protection order. [What is mmp?](/docs/v5/account/set-mmp)                                                                                                                                                                                                                                                                                                                                                   |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> tpslMode                                 | false           | string          | TP/SL mode                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                                             |                 |                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                             |                 |                 | -   `Full`: entire position for TP/SL. Then, tpOrderType or slOrderType must be `Market`                                                                                                                                                                                                                                                                                                                                                                                                              |
|                                             |                 |                 | -   `Partial`: partial position tp/sl (as there is no size option, so it will create tp/sl orders with the qty you actually fill). Limit TP/SL order are supported. Note: When create limit tp/sl, tpslMode is **required** and it must be `Partial`                                                                                                                                                                                                                                                  |
|                                             |                 |                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                             |                 |                 | Valid for `linear`, `inverse`                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> tpLimitPrice                             | false           | string          | The limit order price when take profit price is triggered                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                                             |                 |                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                             |                 |                 | -   `linear`&`inverse`: only works when tpslMode=Partial and tpOrderType=Limit                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                                             |                 |                 | -   Spot: it is required when the order has `takeProfit` and `tpOrderType=Limit`                                                                                                                                                                                                                                                                                                                                                                                                                      |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> slLimitPrice                             | false           | string          | The limit order price when stop loss price is triggered                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                                             |                 |                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                             |                 |                 | -   `linear`&`inverse`: only works when tpslMode=Partial and slOrderType=Limit                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                                             |                 |                 | -   Spot: it is required when the order has `stopLoss` and `slOrderType=Limit`                                                                                                                                                                                                                                                                                                                                                                                                                        |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> tpOrderType                              | false           | string          | The order type when take profit is triggered                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                             |                 |                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                             |                 |                 | -   `linear`&`inverse`: `Market`(default), `Limit`. For tpslMode=Full, it only supports tpOrderType=Market                                                                                                                                                                                                                                                                                                                                                                                            |
|                                             |                 |                 | -   Spot:\                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                                             |                 |                 |     `Market`: when you set \"takeProfit\",\                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|                                             |                 |                 |     `Limit`: when you set \"takeProfit\" and \"tpLimitPrice\"                                                                                                                                                                                                                                                                                                                                                                                                                                         |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> slOrderType                              | false           | string          | The order type when stop loss is triggered                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                                             |                 |                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                             |                 |                 | -   `linear`&`inverse`: `Market`(default), `Limit`. For tpslMode=Full, it only supports slOrderType=Market                                                                                                                                                                                                                                                                                                                                                                                            |
|                                             |                 |                 | -   Spot:\                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                                             |                 |                 |     `Market`: when you set \"stopLoss\",\                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                                             |                 |                 |     `Limit`: when you set \"stopLoss\" and \"slLimitPrice\"                                                                                                                                                                                                                                                                                                                                                                                                                                           |
+---------------------------------------------+-----------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

### Response Parameters[​](#response-parameters "Direct link to heading"){.hash-link} 

  Parameter          Type     Comments
  ------------------ -------- --------------------------
  result             Object   
  \> list            array    Object
  \>\> category      string   Product type
  \>\> symbol        string   Symbol name
  \>\> orderId       string   Order ID
  \>\> orderLinkId   string   User customised order ID
  \>\> createAt      string   Order created time (ms)
  retExtInfo         Object   
  \> list            array    Object
  \>\> code          number   Success/error code
  \>\> msg           string   Success/error message



[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTQgMTYiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcgMi4zYzMuMTQgMCA1LjcgMi41NiA1LjcgNS43cy0yLjU2IDUuNy01LjcgNS43QTUuNzEgNS43MSAwIDAgMSAxLjMgOGMwLTMuMTQgMi41Ni01LjcgNS43LTUuN3pNNyAxQzMuMTQgMSAwIDQuMTQgMCA4czMuMTQgNyA3IDcgNy0zLjE0IDctNy0zLjE0LTctNy03em0xIDNINnY1aDJWNHptMCA2SDZ2Mmgydi0yeiIgLz48L3N2Zz4=)]{.admonitionIcon_kALy}info



The acknowledgement of an place order request indicates that the request was sucessfully accepted. This request is asynchronous so please use the websocket to confirm the order status.



RUN \>\>

------------------------------------------------------------------------

### Request Example[​](#request-example "Direct link to heading"){.hash-link} 


-   HTTP
-   Python
-   Go
-   Java
-   .Net
-   Node.js





``` {.prism-code .language-http .codeBlock_bY9V .thin-scrollbar tabindex="0"}
POST /v5/order/create-batch HTTP/1.1
Host: api-testnet.bybit.com
X-BAPI-SIGN: XXXXX
X-BAPI-API-KEY: xxxxxxxxxxxxxxxxxx
X-BAPI-TIMESTAMP: 1672222064519
X-BAPI-RECV-WINDOW: 5000
Content-Type: application/json

{
    "category": "spot",
    "request": [
        {
            "symbol": "BTCUSDT",
            "side": "Buy",
            "orderType": "Limit",
            "isLeverage": 0,
            "qty": "0.05",
            "price": "30000",
            "timeInForce": "GTC",
            "orderLinkId": "spot-btc-03"
        },
        {
            "symbol": "ATOMUSDT",
            "side": "Sell",
            "orderType": "Limit",
            "isLeverage": 0,
            "qty": "2",
            "price": "12",
            "timeInForce": "GTC",
            "orderLinkId": "spot-atom-03"
        }
    ]
}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}








``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
from pybit.unified_trading import HTTP
session = HTTP(
    testnet=True,
    api_key="xxxxxxxxxxxxxxxxxx",
    api_secret="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
)
print(session.place_batch_order(
    category="spot",
    request=[
        {
            "symbol": "BTCUSDT",
            "side": "Buy",
            "orderType": "Limit",
            "isLeverage": 0,
            "qty": "0.05",
            "price": "30000",
            "timeInForce": "GTC",
            "orderLinkId": "spot-btc-03"
        },
        {
            "symbol": "ATOMUSDT",
            "side": "Sell",
            "orderType": "Limit",
            "isLeverage": 0,
            "qty": "2",
            "price": "12",
            "timeInForce": "GTC",
            "orderLinkId": "spot-atom-03"
        }
    ]
))
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}








``` {.prism-code .language-go .codeBlock_bY9V .thin-scrollbar tabindex="0"}
import (
    "context"
    "fmt"
    bybit "https://github.com/bybit-exchange/bybit.go.api")
client := bybit.NewBybitHttpClient("YOUR_API_KEY", "YOUR_API_SECRET", bybit.WithBaseURL(bybit.TESTNET))
params := map[string]interface{}{"category": "option",
    "request": []map[string]interface{}{
        {
            "category":    "option",
            "symbol":      "BTC-10FEB23-24000-C",
            "orderType":   "Limit",
            "side":        "Buy",
            "qty":         "0.1",
            "price":       "5",
            "orderIv":     "0.1",
            "timeInForce": "GTC",
            "orderLinkId": "9b381bb1-401",
            "mmp":         false,
            "reduceOnly":  false,
        },
        {
            "category":    "option",
            "symbol":      "BTC-10FEB23-24000-C",
            "orderType":   "Limit",
            "side":        "Buy",
            "qty":         "0.1",
            "price":       "5",
            "orderIv":     "0.1",
            "timeInForce": "GTC",
            "orderLinkId": "82ee86dd-001",
            "mmp":         false,
            "reduceOnly":  false,
        },
    },
}
client.NewUtaBybitServiceWithParams(params).PlaceBatchOrder(context.Background())
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}








``` {.prism-code .language-java .codeBlock_bY9V .thin-scrollbar tabindex="0"}
import com.bybit.api.client.restApi.BybitApiAsyncTradeRestClient;
import com.bybit.api.client.domain.ProductType;
import com.bybit.api.client.domain.TradeOrderType;
import com.bybit.api.client.domain.trade.*;
import com.bybit.api.client.service.BybitApiClientFactory;
import java.util.Arrays;
BybitApiClientFactory factory = BybitApiClientFactory.newInstance("YOUR_API_KEY", "YOUR_API_SECRET");
BybitApiAsyncTradeRestClient client = factory.newAsyncTradeRestClient();
var orderRequests = Arrays.asList(TradeOrderRequest.builder().category(ProductType.OPTION).symbol("BTC-10FEB23-24000-C").side(Side.BUY).orderType(TradeOrderType.LIMIT).qty("0.1")
                        .price("5").orderIv("0.1").timeInForce(TimeInForce.GOOD_TILL_CANCEL).orderLinkId("9b381bb1-401").mmp(false).reduceOnly(false).build(),
                TradeOrderRequest.builder().category(ProductType.OPTION).symbol("BTC-10FEB23-24000-C").side(Side.BUY).orderType(TradeOrderType.LIMIT).qty("0.1")
                        .price("5").orderIv("0.1").timeInForce(TimeInForce.GOOD_TILL_CANCEL).orderLinkId("82ee86dd-001").mmp(false).reduceOnly(false).build());
var createBatchOrders = BatchOrderRequest.builder().category(ProductType.OPTION).request(orderRequests).build();
client.createBatchOrder(createBatchOrders, System.out::println);
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}








``` {.prism-code .language-c# .codeBlock_bY9V .thin-scrollbar tabindex="0"}
using bybit.net.api.ApiServiceImp;
using bybit.net.api.Models.Trade;
var order1 = new OrderRequest { Symbol = "XRPUSDT", OrderType = "Limit", Side = "Buy", Qty = "10", Price = "0.6080", TimeInForce = "GTC" };
var order2 = new OrderRequest { Symbol = "BLZUSDT", OrderType = "Limit", Side = "Buy", Qty = "10", Price = "0.6080", TimeInForce = "GTC" };
List<OrderRequest> request = new() { order1, order2 };
var orderInfoString = await TradeService.PlaceBatchOrder(category: Category.LINEAR, request: request);
Console.WriteLine(orderInfoString);
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}








``` {.prism-code .language-n4js .codeBlock_bY9V .thin-scrollbar tabindex="0"}
const { RestClientV5 } = require('bybit-api');

const client = new RestClientV5({
    testnet: true,
    key: 'xxxxxxxxxxxxxxxxxx',
    secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
});

client
    .batchSubmitOrders('spot', [
        {
            "symbol": "BTCUSDT",
            "side": "Buy",
            "orderType": "Limit",
            "isLeverage": 0,
            "qty": "0.05",
            "price": "30000",
            "timeInForce": "GTC",
            "orderLinkId": "spot-btc-03"
        },
        {
            "symbol": "ATOMUSDT",
            "side": "Sell",
            "orderType": "Limit",
            "isLeverage": 0,
            "qty": "2",
            "price": "12",
            "timeInForce": "GTC",
            "orderLinkId": "spot-atom-03"
        },
    ])
        .then((response) => {
        console.log(response);
    })
        .catch((error) => {
        console.error(error);
    });
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}







### Response Example[​](#response-example "Direct link to heading"){.hash-link} 



``` {.prism-code .language-json .codeBlock_bY9V .thin-scrollbar tabindex="0"}
{
    "retCode": 0,
    "retMsg": "OK",
    "result": {
        "list": [
            {
                "category": "spot",
                "symbol": "BTCUSDT",
                "orderId": "1666800494330512128",
                "orderLinkId": "spot-btc-03",
                "createAt": "1713434102752"
            },
            {
                "category": "spot",
                "symbol": "ATOMUSDT",
                "orderId": "1666800494330512129",
                "orderLinkId": "spot-atom-03",
                "createAt": "1713434102752"
            }
        ]
    },
    "retExtInfo": {
        "list": [
            {
                "code": 0,
                "msg": "OK"
            },
            {
                "code": 0,
                "msg": "OK"
            }
        ]
    },
    "time": 1713434102753
}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}











[](/docs/v5/order/execution){.pagination-nav__link .pagination-nav__link--prev}


Previous



Get Trade History (2 years)


[](/docs/v5/order/batch-amend){.pagination-nav__link .pagination-nav__link--next}


Next



Batch Amend Order







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



