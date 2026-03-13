---
title: "Position"
url: "https://bybit-exchange.github.io/docs/v5/websocket/private/position"
source: "https://bybit-exchange.github.io/docs/"
fetched: "2026-03-10T08:58:05+00:00"
---

# Position

Source: [https://bybit-exchange.github.io/docs/v5/websocket/private/position](https://bybit-exchange.github.io/docs/v5/websocket/private/position)


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

-   [English](/docs/v5/websocket/private/position){.dropdown__link .dropdown__link--active target="_self" rel="noopener noreferrer" lang="en"}
-   [中文（台灣）](/docs/zh-TW/v5/websocket/private/position){.dropdown__link target="_self" rel="noopener noreferrer" lang="zh-TW"}



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
    [WebSocket Stream](/docs/v5/ws/connect){.menu__link .menu__link--sublist .menu__link--sublist-caret .menu__link--active aria-expanded="true"}
    

    -   [Connect](/docs/v5/ws/connect){.menu__link tabindex="0"}

    -   
        [Public](/docs/v5/websocket/public/orderbook){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false" tabindex="0"}
        

    -   
        [Private](/docs/v5/websocket/private/position){.menu__link .menu__link--sublist .menu__link--sublist-caret .menu__link--active aria-expanded="true" tabindex="0"}
        

        -   [Position](/docs/v5/websocket/private/position){.menu__link .menu__link--active aria-current="page" tabindex="0"}
        -   [Execution](/docs/v5/websocket/private/execution){.menu__link tabindex="0"}
        -   [Fast Execution](/docs/v5/websocket/private/fast-execution){.menu__link tabindex="0"}
        -   [Order](/docs/v5/websocket/private/order){.menu__link tabindex="0"}
        -   [Wallet](/docs/v5/websocket/private/wallet){.menu__link tabindex="0"}
        -   [Greek](/docs/v5/websocket/private/greek){.menu__link tabindex="0"}
        -   [Dcp](/docs/v5/websocket/private/dcp){.menu__link tabindex="0"}

    -   
        [Trade](/docs/v5/websocket/trade/guideline){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false" tabindex="0"}
        

    -   
        [System](/docs/v5/websocket/system/system-status){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false" tabindex="0"}
        

-   
    [Rate Limit](/docs/v5/rate-limit){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false"}
    

-   [Enums Definitions](/docs/v5/enum){.menu__link}

-   [Error Codes](/docs/v5/error){.menu__link}

-   
    [Abandoned Endpoints](/docs/v5/abandon/asset-info){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false"}
    

![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0iY29sbGFwc2VTaWRlYmFyQnV0dG9uSWNvbl9rdjBfIj48ZyBmaWxsPSIjN2E3YTdhIj48cGF0aCBkPSJNOS45OTIgMTAuMDIzYzAgLjItLjA2Mi4zOTktLjE3Mi41NDdsLTQuOTk2IDcuNDkyYS45ODIuOTgyIDAgMDEtLjgyOC40NTRIMWMtLjU1IDAtMS0uNDUzLTEtMSAwLS4yLjA1OS0uNDAzLjE2OC0uNTUxbDQuNjI5LTYuOTQyTC4xNjggMy4wNzhBLjkzOS45MzkgMCAwMTAgMi41MjhjMC0uNTQ4LjQ1LS45OTcgMS0uOTk3aDIuOTk2Yy4zNTIgMCAuNjQ5LjE4LjgyOC40NUw5LjgyIDkuNDcyYy4xMS4xNDguMTcyLjM0Ny4xNzIuNTV6bTAgMCIgLz48cGF0aCBkPSJNMTkuOTggMTAuMDIzYzAgLjItLjA1OC4zOTktLjE2OC41NDdsLTQuOTk2IDcuNDkyYS45ODcuOTg3IDAgMDEtLjgyOC40NTRoLTNjLS41NDcgMC0uOTk2LS40NTMtLjk5Ni0xIDAtLjIuMDU5LS40MDMuMTY4LS41NTFsNC42MjUtNi45NDItNC42MjUtNi45NDVhLjkzOS45MzkgMCAwMS0uMTY4LS41NSAxIDEgMCAwMS45OTYtLjk5N2gzYy4zNDggMCAuNjQ5LjE4LjgyOC40NWw0Ljk5NiA3LjQ5MmMuMTEuMTQ4LjE2OC4zNDcuMTY4LjU1em0wIDAiIC8+PC9nPjwvc3ZnPg==){.collapseSidebarButtonIcon_kv0_}







-   [![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJicmVhZGNydW1iSG9tZUljb25fT1ZndCI+PHBhdGggZD0iTTEwIDE5di01aDR2NWMwIC41NS40NSAxIDEgMWgzYy41NSAwIDEtLjQ1IDEtMXYtN2gxLjdjLjQ2IDAgLjY4LS41Ny4zMy0uODdMMTIuNjcgMy42Yy0uMzgtLjM0LS45Ni0uMzQtMS4zNCAwbC04LjM2IDcuNTNjLS4zNC4zLS4xMy44Ny4zMy44N0g1djdjMCAuNTUuNDUgMSAxIDFoM2MuNTUgMCAxLS40NSAxLTF6IiBmaWxsPSJjdXJyZW50Q29sb3IiIC8+PC9zdmc+){.breadcrumbHomeIcon_OVgt}](/docs/){.breadcrumbs__link aria-label="Home page"}
-   [WebSocket Stream]{.breadcrumbs__link}
-   [Private]{.breadcrumbs__link}
-   [Position]{.breadcrumbs__link itemprop="name"}


On this page



<div>

# Position

</div>



Subscribe to the position stream to see changes to your position data in **real-time**.

**All-In-One Topic:** `position`\
**Categorised Topic:** `position.linear`, `position.inverse`, `position.option`



[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTQgMTYiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcgMi4zYzMuMTQgMCA1LjcgMi41NiA1LjcgNS43cy0yLjU2IDUuNy01LjcgNS43QTUuNzEgNS43MSAwIDAgMSAxLjMgOGMwLTMuMTQgMi41Ni01LjcgNS43LTUuN3pNNyAxQzMuMTQgMSAwIDQuMTQgMCA4czMuMTQgNyA3IDcgNy0zLjE0IDctNy0zLjE0LTctNy03em0xIDNINnY1aDJWNHptMCA2SDZ2Mmgydi0yeiIgLz48L3N2Zz4=)]{.admonitionIcon_kALy}info



-   All-In-One topic and Categorised topic **cannot** be in the same subscription request
-   All-In-One topic: Allow you to listen to all categories (linear, inverse, option) websocket updates
-   Categorised Topic: Allow you to listen only to specific category websocket updates





[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTIgMTYiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuNSAwQzMuNDggMCAxIDIuMTkgMSA1YzAgLjkyLjU1IDIuMjUgMSAzIDEuMzQgMi4yNSAxLjc4IDIuNzggMiA0djFoNXYtMWMuMjItMS4yMi42Ni0xLjc1IDItNCAuNDUtLjc1IDEtMi4wOCAxLTMgMC0yLjgxLTIuNDgtNS01LjUtNXptMy42NCA3LjQ4Yy0uMjUuNDQtLjQ3LjgtLjY3IDEuMTEtLjg2IDEuNDEtMS4yNSAyLjA2LTEuNDUgMy4yMy0uMDIuMDUtLjAyLjExLS4wMi4xN0g1YzAtLjA2IDAtLjEzLS4wMi0uMTctLjItMS4xNy0uNTktMS44My0xLjQ1LTMuMjMtLjItLjMxLS40Mi0uNjctLjY3LTEuMTFDMi40NCA2Ljc4IDIgNS42NSAyIDVjMC0yLjIgMi4wMi00IDQuNS00IDEuMjIgMCAyLjM2LjQyIDMuMjIgMS4xOUMxMC41NSAyLjk0IDExIDMuOTQgMTEgNWMwIC42Ni0uNDQgMS43OC0uODYgMi40OHpNNCAxNGg1Yy0uMjMgMS4xNC0xLjMgMi0yLjUgMnMtMi4yNy0uODYtMi41LTJ6IiAvPjwvc3ZnPg==)]{.admonitionIcon_kALy}tip



Every time when you create/amend/cancel an order, the position topic will generate a new message (regardless if there\'s any actual change)



### Response Parameters[​](#response-parameters "Direct link to heading"){.hash-link} 

+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Parameter                                             | Type                  | Comments                                                                                                                                                                                                                                                                                                                                                       |
+:======================================================+:======================+================================================================================================================================================================================================================================================================================================================================================================+
| id                                                    | string                | Message ID                                                                                                                                                                                                                                                                                                                                                     |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| topic                                                 | string                | Topic name                                                                                                                                                                                                                                                                                                                                                     |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| creationTime                                          | number                | Data created timestamp (ms)                                                                                                                                                                                                                                                                                                                                    |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| data                                                  | array                 | Object                                                                                                                                                                                                                                                                                                                                                         |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> [category](/docs/v5/enum#category)                 | string                | Product type `linear`, `inverse`, `option`                                                                                                                                                                                                                                                                                                                     |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> symbol                                             | string                | Symbol name                                                                                                                                                                                                                                                                                                                                                    |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> side                                               | string                | Position side. `Buy`: long, `Sell`: short\                                                                                                                                                                                                                                                                                                                     |
|                                                       |                       | return an empty string `""` for an empty position                                                                                                                                                                                                                                                                                                              |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> size                                               | string                | Position size                                                                                                                                                                                                                                                                                                                                                  |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> [positionIdx](/docs/v5/enum#positionidx)           | integer               | Used to identify positions in different position modes                                                                                                                                                                                                                                                                                                         |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> positionValue                                      | string                | Position value                                                                                                                                                                                                                                                                                                                                                 |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> riskId                                             | integer               | Risk tier ID\                                                                                                                                                                                                                                                                                                                                                  |
|                                                       |                       | *for portfolio margin mode, this field returns 0, which means risk limit rules are invalid*                                                                                                                                                                                                                                                                    |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> riskLimitValue                                     | string                | Risk limit value, become meaningless when auto risk-limit tier is applied\                                                                                                                                                                                                                                                                                     |
|                                                       |                       | *for portfolio margin mode, this field returns 0, which means risk limit rules are invalid*                                                                                                                                                                                                                                                                    |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> entryPrice                                         | string                | Average entry price                                                                                                                                                                                                                                                                                                                                            |
|                                                       |                       |                                                                                                                                                                                                                                                                                                                                                                |
|                                                       |                       | -   For USDC Perp & Futures, it indicates average entry price, and it will not be changed with 8-hour session settlement                                                                                                                                                                                                                                       |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> markPrice                                          | string                | Mark price                                                                                                                                                                                                                                                                                                                                                     |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> leverage                                           | string                | Position leverage\                                                                                                                                                                                                                                                                                                                                             |
|                                                       |                       | *for portfolio margin mode, this field returns \"\", which means leverage rules are invalid*                                                                                                                                                                                                                                                                   |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> breakEvenPrice                                     | string                | Break even price, only for `linear`,`inverse`.                                                                                                                                                                                                                                                                                                                 |
|                                                       |                       |                                                                                                                                                                                                                                                                                                                                                                |
|                                                       |                       | -   breakeven_price = (entry_price *qty - realized_pnl) / (qty - abs(qty)* max(taker fee rate, 0.00055))                                                                                                                                                                                                                                                       |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> autoAddMargin                                      | integer               | Whether to add margin automatically when using isolated margin mode                                                                                                                                                                                                                                                                                            |
|                                                       |                       |                                                                                                                                                                                                                                                                                                                                                                |
|                                                       |                       | -   `0`: false                                                                                                                                                                                                                                                                                                                                                 |
|                                                       |                       | -   `1`: true                                                                                                                                                                                                                                                                                                                                                  |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> positionIM                                         | string                | Initial margin, the same value as `positionIMByMp`, please note this change [The New Margin Calculation: Adjustments and Implications](https://www.bybit.com/en/help-center/article/Understanding-the-Adjustment-and-Impact-of-the-New-Margin-Calculation){target="_blank" rel="noopener noreferrer"}                                                          |
|                                                       |                       |                                                                                                                                                                                                                                                                                                                                                                |
|                                                       |                       | -   Portfolio margin mode: returns \"\"                                                                                                                                                                                                                                                                                                                        |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> positionMM                                         | string                | Maintenance margin, the same value as `positionMMByMp`                                                                                                                                                                                                                                                                                                         |
|                                                       |                       |                                                                                                                                                                                                                                                                                                                                                                |
|                                                       |                       | -   Portfolio margin mode: returns \"\"                                                                                                                                                                                                                                                                                                                        |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> liqPrice                                           | string                | Position liquidation price                                                                                                                                                                                                                                                                                                                                     |
|                                                       |                       |                                                                                                                                                                                                                                                                                                                                                                |
|                                                       |                       | -   Isolated margin:\                                                                                                                                                                                                                                                                                                                                          |
|                                                       |                       |     it is the real price for isolated and cross positions, and keeps `""` when liqPrice \<= minPrice or liqPrice \>= maxPrice                                                                                                                                                                                                                                  |
|                                                       |                       | -   Cross margin:\                                                                                                                                                                                                                                                                                                                                             |
|                                                       |                       |     it is an **estimated** price for cross positions(because the unified mode controls the risk rate according to the account), and keeps `""` when liqPrice \<= minPrice or liqPrice \>= maxPrice                                                                                                                                                             |
|                                                       |                       |                                                                                                                                                                                                                                                                                                                                                                |
|                                                       |                       | *this field is empty for Portfolio Margin Mode, and no liquidation price will be provided*                                                                                                                                                                                                                                                                     |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> takeProfit                                         | string                | Take profit price                                                                                                                                                                                                                                                                                                                                              |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> stopLoss                                           | string                | Stop loss price                                                                                                                                                                                                                                                                                                                                                |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> trailingStop                                       | string                | Trailing stop                                                                                                                                                                                                                                                                                                                                                  |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> unrealisedPnl                                      | string                | Unrealised profit and loss                                                                                                                                                                                                                                                                                                                                     |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> curRealisedPnl                                     | string                | The realised PnL for the current holding position                                                                                                                                                                                                                                                                                                              |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> sessionAvgPrice                                    | string                | USDC contract session avg price, it is the same figure as avg entry price shown in the web UI                                                                                                                                                                                                                                                                  |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> delta                                              | string                | Delta. It is only pushed when you subscribe to the option position.                                                                                                                                                                                                                                                                                            |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> gamma                                              | string                | Gamma. It is only pushed when you subscribe to the option position.                                                                                                                                                                                                                                                                                            |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> vega                                               | string                | Vega. It is only pushed when you subscribe to the option position.                                                                                                                                                                                                                                                                                             |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> theta                                              | string                | Theta. It is only pushed when you subscribe to the option position.                                                                                                                                                                                                                                                                                            |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> cumRealisedPnl                                     | string                | Cumulative realised pnl                                                                                                                                                                                                                                                                                                                                        |
|                                                       |                       |                                                                                                                                                                                                                                                                                                                                                                |
|                                                       |                       | -   Futures & Perp: it is the all time cumulative realised P&L                                                                                                                                                                                                                                                                                                 |
|                                                       |                       | -   Option: it is the realised P&L when you hold that position                                                                                                                                                                                                                                                                                                 |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> [positionStatus](/docs/v5/enum#positionstatus)     | string                | Position status. `Normal`, `Liq`, `Adl`                                                                                                                                                                                                                                                                                                                        |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> [adlRankIndicator](/docs/v5/enum#adlrankindicator) | integer               | Auto-deleverage rank indicator. [What is Auto-Deleveraging?](https://www.bybit.com/en-US/help-center/s/article/What-is-Auto-Deleveraging-ADL){target="_blank" rel="noopener noreferrer"}                                                                                                                                                                       |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> isReduceOnly                                       | boolean               | Useful when Bybit lower the risk limit                                                                                                                                                                                                                                                                                                                         |
|                                                       |                       |                                                                                                                                                                                                                                                                                                                                                                |
|                                                       |                       | -   `true`: Only allowed to reduce the position. You can consider a series of measures, e.g., lower the risk limit, decrease leverage or reduce the position, add margin, or cancel orders, after these operations, you can call [confirm new risk limit](/docs/v5/position/confirm-mmr) endpoint to check if your position can be removed the reduceOnly mark |
|                                                       |                       | -   `false`: There is no restriction, and it means your position is under the risk when the risk limit is systematically adjusted                                                                                                                                                                                                                              |
|                                                       |                       | -   Only meaningful for isolated margin & cross margin of USDT Perp, USDC Perp, USDC Futures, Inverse Perp and Inverse Futures, meaningless for others                                                                                                                                                                                                         |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> createdTime                                        | string                | Timestamp of the first time a position was created on this symbol (ms)                                                                                                                                                                                                                                                                                         |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> updatedTime                                        | string                | Position data updated timestamp (ms)                                                                                                                                                                                                                                                                                                                           |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> seq                                                | long                  | Cross sequence, used to associate each fill and each position update                                                                                                                                                                                                                                                                                           |
|                                                       |                       |                                                                                                                                                                                                                                                                                                                                                                |
|                                                       |                       | -   Different symbols may have the same seq, please use seq + symbol to check unique                                                                                                                                                                                                                                                                           |
|                                                       |                       | -   Returns `"-1"` if the symbol has never been traded                                                                                                                                                                                                                                                                                                         |
|                                                       |                       | -   Returns the seq updated by the last transaction when there are setting like leverage, risk limit                                                                                                                                                                                                                                                           |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> mmrSysUpdatedTime                                  | string                | Useful when Bybit lower the risk limit                                                                                                                                                                                                                                                                                                                         |
|                                                       |                       |                                                                                                                                                                                                                                                                                                                                                                |
|                                                       |                       | -   When isReduceOnly=`true`: the timestamp (ms) when the MMR will be forcibly adjusted by the system                                                                                                                                                                                                                                                          |
|                                                       |                       |     -   It returns the timestamp when the system operates, and if you manually operate, there is no timestamp                                                                                                                                                                                                                                                  |
|                                                       |                       |     -   Keeps `""` by default, if there was a lower risk limit system adjustment previously, it shows that system operation timestamp                                                                                                                                                                                                                          |
|                                                       |                       |     -   Only meaningful for isolated margin & cross margin of USDT Perp, USDC Perp, USDC Futures, Inverse Perp and Inverse Futures, meaningless for others                                                                                                                                                                                                     |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> leverageSysUpdatedTime                             | string                | Useful when Bybit lower the risk limit                                                                                                                                                                                                                                                                                                                         |
|                                                       |                       |                                                                                                                                                                                                                                                                                                                                                                |
|                                                       |                       | -   When isReduceOnly=`true`: the timestamp (ms) when the leverage will be forcibly adjusted by the system                                                                                                                                                                                                                                                     |
|                                                       |                       |     -   It returns the timestamp when the system operates, and if you manually operate, there is no timestamp                                                                                                                                                                                                                                                  |
|                                                       |                       |     -   Keeps `""` by default, if there was a lower risk limit system adjustment previously, it shows that system operation timestamp                                                                                                                                                                                                                          |
|                                                       |                       |     -   Only meaningful for isolated margin & cross margin of USDT Perp, USDC Perp, USDC Futures, Inverse Perp and Inverse Futures, meaningless for others                                                                                                                                                                                                     |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> positionIMByMp                                     | string                | Initial margin calculated by mark price, the same value as `positionIM`                                                                                                                                                                                                                                                                                        |
|                                                       |                       |                                                                                                                                                                                                                                                                                                                                                                |
|                                                       |                       | -   Portfolio margin mode: returns \"\"                                                                                                                                                                                                                                                                                                                        |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> positionMMByMp                                     | string                | Maintenance margin calculated by mark price, the same value as `positionMM`                                                                                                                                                                                                                                                                                    |
|                                                       |                       |                                                                                                                                                                                                                                                                                                                                                                |
|                                                       |                       | -   Portfolio margin mode: returns \"\"                                                                                                                                                                                                                                                                                                                        |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> tpslMode                                           | string                | **Deprecated**, always \"Full\"                                                                                                                                                                                                                                                                                                                                |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> bustPrice                                          | string                | **Deprecated**, always `""`                                                                                                                                                                                                                                                                                                                                    |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> positionBalance                                    | string                | **Deprecated**, can refer to `positionIM` or `positionIMByMp` field                                                                                                                                                                                                                                                                                            |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> tradeMode                                          | integer               | **Deprecated**, always `0`, check [Get Account Info](/docs/v5/account/account-info) to know the margin mode                                                                                                                                                                                                                                                    |
+-------------------------------------------------------+-----------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

### Subscribe Example[​](#subscribe-example "Direct link to heading"){.hash-link} 



``` {.prism-code .language-json .codeBlock_bY9V .thin-scrollbar tabindex="0"}
{
    "op": "subscribe",
    "args": [
        "position"
    ]
}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}






``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
from pybit.unified_trading import WebSocket
from time import sleep
ws = WebSocket(
    testnet=True,
    channel_type="private",
    api_key="xxxxxxxxxxxxxxxxxx",
    api_secret="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
)
def handle_message(message):
    print(message)
ws.position_stream(callback=handle_message)
while True:
    sleep(1)
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}




### Stream Example[​](#stream-example "Direct link to heading"){.hash-link} 



``` {.prism-code .language-json .codeBlock_bY9V .thin-scrollbar tabindex="0"}
{
    "id": "1003076014fb7eedb-c7e6-45d6-a8c1-270f0169171a",
    "topic": "position",
    "creationTime": 1697682317044,
    "data": [
        {
            "positionIdx": 2,
            "tradeMode": 0,
            "riskId": 1,
            "riskLimitValue": "2000000",
            "symbol": "BTCUSDT",
            "side": "",
            "size": "0",
            "entryPrice": "0",
            "leverage": "10",
            "breakEvenPrice":"93556.73034991",
            "positionValue": "0",
            "positionBalance": "0",
            "markPrice": "28184.5",
            "positionIM": "0",
            "positionIMByMp": "0",
            "positionMM": "0",
            "positionMMByMp": "0",
            "takeProfit": "0",
            "stopLoss": "0",
            "trailingStop": "0",
            "unrealisedPnl": "0",
            "curRealisedPnl": "1.26",
            "cumRealisedPnl": "-25.06579337",
            "sessionAvgPrice": "0",
            "createdTime": "1694402496913",
            "updatedTime": "1697682317038",
            "tpslMode": "Full",
            "liqPrice": "0",
            "bustPrice": "",
            "category": "linear",
            "positionStatus": "Normal",
            "adlRankIndicator": 0,
            "autoAddMargin": 0,
            "leverageSysUpdatedTime": "",
            "mmrSysUpdatedTime": "",
            "seq": 8327597863,
            "isReduceOnly": false
        }
    ]
}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}











[](/docs/v5/websocket/public/adl-alert){.pagination-nav__link .pagination-nav__link--prev}


Previous



ADL Alert


[](/docs/v5/websocket/private/execution){.pagination-nav__link .pagination-nav__link--next}


Next



Execution







-   [Response Parameters](#response-parameters){.table-of-contents__link .toc-highlight}
-   [Subscribe Example](#subscribe-example){.table-of-contents__link .toc-highlight}
-   [Stream Example](#stream-example){.table-of-contents__link .toc-highlight}












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



