---
title: "Websocket Trade Guideline"
url: "https://bybit-exchange.github.io/docs/v5/websocket/trade/guideline"
source: "https://bybit-exchange.github.io/docs/"
fetched: "2026-03-10T08:58:14+00:00"
---

# Websocket Trade Guideline

Source: [https://bybit-exchange.github.io/docs/v5/websocket/trade/guideline](https://bybit-exchange.github.io/docs/v5/websocket/trade/guideline)


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

-   [English](/docs/v5/websocket/trade/guideline){.dropdown__link .dropdown__link--active target="_self" rel="noopener noreferrer" lang="en"}
-   [中文（台灣）](/docs/zh-TW/v5/websocket/trade/guideline){.dropdown__link target="_self" rel="noopener noreferrer" lang="zh-TW"}



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
        [Private](/docs/v5/websocket/private/position){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false" tabindex="0"}
        

    -   
        [Trade](/docs/v5/websocket/trade/guideline){.menu__link .menu__link--sublist .menu__link--sublist-caret .menu__link--active aria-expanded="true" tabindex="0"}
        

        -   [Websocket Trade Guideline](/docs/v5/websocket/trade/guideline){.menu__link .menu__link--active aria-current="page" tabindex="0"}

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
-   [Trade]{.breadcrumbs__link}
-   [Websocket Trade Guideline]{.breadcrumbs__link itemprop="name"}


On this page



<div>

# Websocket Trade Guideline

</div>



## URL[​](#url "Direct link to heading"){.hash-link} 

-   **Mainnet:**\
    `wss://stream.bybit.com/v5/trade`



[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTQgMTYiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcgMi4zYzMuMTQgMCA1LjcgMi41NiA1LjcgNS43cy0yLjU2IDUuNy01LjcgNS43QTUuNzEgNS43MSAwIDAgMSAxLjMgOGMwLTMuMTQgMi41Ni01LjcgNS43LTUuN3pNNyAxQzMuMTQgMSAwIDQuMTQgMCA4czMuMTQgNyA3IDcgNy0zLjE0IDctNy0zLjE0LTctNy03em0xIDNINnY1aDJWNHptMCA2SDZ2Mmgydi0yeiIgLz48L3N2Zz4=)]{.admonitionIcon_kALy}info



-   Turkey users registered from \"[www.bybit-tr.com\"](http://www.bybit-tr.com%22){target="_blank" rel="noopener noreferrer"}, please use `wss://stream.bybit-tr.com/v5/trade`
-   Kazakhstan users registered from \"[www.bybit.kz\"](http://www.bybit.kz%22){target="_blank" rel="noopener noreferrer"}, please use `wss://stream.bybit.kz/v5/trade`



-   **Testnet:**\
    `wss://stream-testnet.bybit.com/v5/trade`

## Scope[​](#scope "Direct link to heading"){.hash-link} 

-   **Support**: USDT Contract, USDC Contract, Spot, Options, Inverse contract
-   **Not support**: demo trading, spread trading

## Authentication[​](#authentication "Direct link to heading"){.hash-link} 

### Request Parameters[​](#request-parameters "Direct link to heading"){.hash-link} 

+-----------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------+
| Parameter       | Required        | Type            | Comments                                                                                                                        |
+:================+:================+:================+=================================================================================================================================+
| reqId           | false           | string          | Optional field, used to match the response                                                                                      |
|                 |                 |                 |                                                                                                                                 |
|                 |                 |                 | -   If not passed, this field will not be returned in response                                                                  |
+-----------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------+
| op              | **true**        | string          | Op type. `auth`                                                                                                                 |
+-----------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------+
| args            | **true**        | string          | \[\"api key\", expiry timestamp, \"signature\"\]. Please click [here](/docs/v5/ws/connect#authentication) to generate signature |
+-----------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------+

### Response Parameters[​](#response-parameters "Direct link to heading"){.hash-link} 

+-----------------------+-----------------------+-------------------------------------------------------------------------+
| Parameter             | Type                  | Comments                                                                |
+:======================+:======================+=========================================================================+
| reqId                 | string                | -   If it is passed on the request, then it is returned in the response |
|                       |                       | -   If it is not passed, then it is not returned in the response        |
+-----------------------+-----------------------+-------------------------------------------------------------------------+
| retCode               | integer               | -   `0`: auth success                                                   |
|                       |                       | -   `20001`: repeat auth                                                |
|                       |                       | -   `10004`: invalid sign                                               |
|                       |                       | -   `10001`: param error                                                |
+-----------------------+-----------------------+-------------------------------------------------------------------------+
| retMsg                | string                | -   `OK`                                                                |
|                       |                       | -   Error message                                                       |
+-----------------------+-----------------------+-------------------------------------------------------------------------+
| op                    | string                | Op type                                                                 |
+-----------------------+-----------------------+-------------------------------------------------------------------------+
| connId                | string                | Connection id, the unique id for the connection                         |
+-----------------------+-----------------------+-------------------------------------------------------------------------+

### Request Example[​](#request-example "Direct link to heading"){.hash-link} 



``` {.prism-code .language-json .codeBlock_bY9V .thin-scrollbar tabindex="0"}
{
    "op": "auth",
    "args": [
        "XXXXXX",
        1711010121452,
        "ec71040eff72b163a36153d770b69d6637bcb29348fbfbb16c269a76595ececf"
    ]
}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}




### Response Example[​](#response-example "Direct link to heading"){.hash-link} 



``` {.prism-code .language-json .codeBlock_bY9V .thin-scrollbar tabindex="0"}
{
    "retCode": 0,
    "retMsg": "OK",
    "op": "auth",
    "connId": "cnt5leec0hvan15eukcg-2t"
}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}




## Create/Amend/Cancel Order[​](#createamendcancel-order "Direct link to heading"){.hash-link} 

### Request Parameters[​](#request-parameters-1 "Direct link to heading"){.hash-link} 

+-----------------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Parameter             | Required        | Type            | Comments                                                                                                                                                            |
+:======================+:================+:================+=====================================================================================================================================================================+
| reqId                 | false           | string          | Used to identify the uniqueness of the request, the response will return it when passed. The length cannot exceed 36 characters.                                    |
|                       |                 |                 |                                                                                                                                                                     |
|                       |                 |                 | -   If passed, it can\'t be duplicated, otherwise you will get \"20006\"                                                                                            |
+-----------------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| header                | **true**        | object          | Request headers                                                                                                                                                     |
+-----------------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> X-BAPI-TIMESTAMP   | **true**        | string          | Current timestamp                                                                                                                                                   |
+-----------------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> X-BAPI-RECV-WINDOW | false           | string          | 5000(ms) by default. Request will be rejected when not satisfy this rule: *Bybit_server_time - X-BAPI-RECV-WINDOW \<= X-BAPI-TIMESTAMP \< Bybit_server_time + 1000* |
+-----------------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> Referer            | false           | string          | The referer identifier for API broker user                                                                                                                          |
+-----------------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| op                    | **true**        | string          | Op type                                                                                                                                                             |
|                       |                 |                 |                                                                                                                                                                     |
|                       |                 |                 | -   `order.create`: create an order                                                                                                                                 |
|                       |                 |                 | -   `order.amend`: amend an order                                                                                                                                   |
|                       |                 |                 | -   `order.cancel`: cancel an order                                                                                                                                 |
+-----------------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| args                  | **true**        | array\<object\> | Args array, support one item only for now                                                                                                                           |
|                       |                 |                 |                                                                                                                                                                     |
|                       |                 |                 | -   `order.create`: refer to [create order request](/docs/v5/order/create-order#request-parameters)                                                                 |
|                       |                 |                 | -   `order.amend`: refer to [amend order request](/docs/v5/order/amend-order#request-parameters)                                                                    |
|                       |                 |                 | -   `order.cancel`: refer to [cancel order request](/docs/v5/order/cancel-order#request-parameters)                                                                 |
+-----------------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------+

### Response Parameters[​](#response-parameters-1 "Direct link to heading"){.hash-link} 

+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Parameter                       | Type                  | Comments                                                                                                                                                                            |
+:================================+:======================+=====================================================================================================================================================================================+
| reqId                           | string                | -   If it is passed on the request, then it is returned in the response                                                                                                             |
|                                 |                       | -   If it is not passed, then it is not returned in the response                                                                                                                    |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| retCode                         | integer               | -   `0`: success                                                                                                                                                                    |
|                                 |                       | -   `10403`: exceed IP rate limit. 3000 requests per second per IP                                                                                                                  |
|                                 |                       | -   `10404`: 1. op type is not found; 2. `category` is not correct/supported                                                                                                        |
|                                 |                       | -   `10429`: System level frequency protection                                                                                                                                      |
|                                 |                       | -   `20006`: reqId is duplicated                                                                                                                                                    |
|                                 |                       | -   `10016`: 1. internal server error; 2. Service is restarting                                                                                                                     |
|                                 |                       | -   `10019`: ws trade service is restarting, do not accept new request, but the request in the process is not affected. You can build new connection to be routed to normal service |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| retMsg                          | string                | -   `OK`                                                                                                                                                                            |
|                                 |                       | -   `""`                                                                                                                                                                            |
|                                 |                       | -   Error message                                                                                                                                                                   |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| op                              | string                | Op type                                                                                                                                                                             |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| data                            | object                | Business data, keep the same as `result` on rest api response                                                                                                                       |
|                                 |                       |                                                                                                                                                                                     |
|                                 |                       | -   `order.create`: refer to [create order response](/docs/v5/order/create-order#response-parameters)                                                                               |
|                                 |                       | -   `order.amend`: refer to [amend order response](/docs/v5/order/amend-order#response-parameters)                                                                                  |
|                                 |                       | -   `order.cancel`: refer to [cancel order response](/docs/v5/order/cancel-order#response-parameters)                                                                               |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| retExtInfo                      | object                | Always empty object                                                                                                                                                                 |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| header                          | object                | Header info                                                                                                                                                                         |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> TraceId                      | string                | Trace ID, used to track the trip of request                                                                                                                                         |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> Timenow                      | string                | Current timestamp                                                                                                                                                                   |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> X-Bapi-Limit                 | string                | The total rate limit of the current account for this op type                                                                                                                        |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> X-Bapi-Limit-Status          | string                | The remaining rate limit of the current account for this op type                                                                                                                    |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> X-Bapi-Limit-Reset-Timestamp | string                | The timestamp indicates when your request limit resets if you have exceeded your rate limit. Otherwise, this is just the current timestamp (it may not exactly match `timeNow`)     |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| connId                          | string                | Connection id, the unique id for the connection                                                                                                                                     |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+



[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTQgMTYiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcgMi4zYzMuMTQgMCA1LjcgMi41NiA1LjcgNS43cy0yLjU2IDUuNy01LjcgNS43QTUuNzEgNS43MSAwIDAgMSAxLjMgOGMwLTMuMTQgMi41Ni01LjcgNS43LTUuN3pNNyAxQzMuMTQgMSAwIDQuMTQgMCA4czMuMTQgNyA3IDcgNy0zLjE0IDctNy0zLjE0LTctNy03em0xIDNINnY1aDJWNHptMCA2SDZ2Mmgydi0yeiIgLz48L3N2Zz4=)]{.admonitionIcon_kALy}info



The ack of create/amend/cancel order request indicates that the request is successfully accepted. Please use websocket order stream to confirm the order status



### Request Example[​](#request-example-1 "Direct link to heading"){.hash-link} 



``` {.prism-code .language-json .codeBlock_bY9V .thin-scrollbar tabindex="0"}
{
    "reqId": "test-005",
    "header": {
        "X-BAPI-TIMESTAMP": "1711001595207",
        "X-BAPI-RECV-WINDOW": "8000",
        "Referer": "bot-001" // for api broker
    },
    "op": "order.create",
    "args": [
        {
            "symbol": "ETHUSDT",
            "side": "Buy",
            "orderType": "Limit",
            "qty": "0.2",
            "price": "2800",
            "category": "linear",
            "timeInForce": "PostOnly"
        }
    ]
}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}




### Response Example[​](#response-example-1 "Direct link to heading"){.hash-link} 



``` {.prism-code .language-json .codeBlock_bY9V .thin-scrollbar tabindex="0"}
{
    "reqId": "test-005",
    "retCode": 0,
    "retMsg": "OK",
    "op": "order.create",
    "data": {
        "orderId": "a4c1718e-fe53-4659-a118-1f6ecce04ad9",
        "orderLinkId": ""
    },
    "retExtInfo": {},
    "header": {
        "X-Bapi-Limit": "10",
        "X-Bapi-Limit-Status": "9",
        "X-Bapi-Limit-Reset-Timestamp": "1711001595208",
        "Traceid": "38b7977b430f9bd228f4b19724794dfd",
        "Timenow": "1711001595209"
    },
    "connId": "cnt5leec0hvan15eukcg-2v"
}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}




## Batch Create/Amend/Cancel Order[​](#batch-createamendcancel-order "Direct link to heading"){.hash-link} 



[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTQgMTYiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcgMi4zYzMuMTQgMCA1LjcgMi41NiA1LjcgNS43cy0yLjU2IDUuNy01LjcgNS43QTUuNzEgNS43MSAwIDAgMSAxLjMgOGMwLTMuMTQgMi41Ni01LjcgNS43LTUuN3pNNyAxQzMuMTQgMSAwIDQuMTQgMCA4czMuMTQgNyA3IDcgNy0zLjE0IDctNy0zLjE0LTctNy03em0xIDNINnY1aDJWNHptMCA2SDZ2Mmgydi0yeiIgLz48L3N2Zz4=)]{.admonitionIcon_kALy}info



-   A maximum of 20 orders (option), 20 orders (inverse), 20 orders (linear), 10 orders (spot) can be placed per request. The returned data list is divided into two lists. The first list indicates whether or not the order creation was successful and the second list details the created order information. The structure of the two lists are completely consistent.

<!-- -->
```
-   **Option rate limt** instruction: its rate limit is count based on the actual number of request sent, e.g., by default, option trading rate limit is 10 reqs per sec, so you can send up to 20 \* 10 = 200 orders in one second.
-   **Perpetual, Futures, Spot rate limit instruction**, please check [here](/docs/v5/rate-limit#api-rate-limit-rules-for-vips)

<!-- -->
```
-   The account rate limit is shared between websocket and http batch orders
-   The acknowledgement of batch create/amend/cancel order requests indicates that the request was sucessfully accepted. The request is asynchronous so please use the websocket to confirm the order status.



### Request Parameters[​](#request-parameters-2 "Direct link to heading"){.hash-link} 

+-----------------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Parameter             | Required        | Type            | Comments                                                                                                                                                            |
+:======================+:================+:================+=====================================================================================================================================================================+
| reqId                 | false           | string          | Used to identify the uniqueness of the request, the response will return it when passed. The length cannot exceed 36 characters.                                    |
|                       |                 |                 |                                                                                                                                                                     |
|                       |                 |                 | -   If passed, it can\'t be duplicated, otherwise you will get \"20006\"                                                                                            |
+-----------------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| header                | **true**        | object          | Request headers                                                                                                                                                     |
+-----------------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> X-BAPI-TIMESTAMP   | **true**        | string          | Current timestamp                                                                                                                                                   |
+-----------------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> X-BAPI-RECV-WINDOW | false           | string          | 5000(ms) by default. Request will be rejected when not satisfy this rule: *Bybit_server_time - X-BAPI-RECV-WINDOW \<= X-BAPI-TIMESTAMP \< Bybit_server_time + 1000* |
+-----------------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> Referer            | false           | string          | The referer identifier for API broker user                                                                                                                          |
+-----------------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| op                    | **true**        | string          | Op type                                                                                                                                                             |
|                       |                 |                 |                                                                                                                                                                     |
|                       |                 |                 | -   `order.create-batch`: batch create orders                                                                                                                       |
|                       |                 |                 | -   `order.amend-batch`: batch amend orders                                                                                                                         |
|                       |                 |                 | -   `order.cancel-batch`: batch cancel orders                                                                                                                       |
+-----------------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| args                  | **true**        | array\<object\> | Args array                                                                                                                                                          |
|                       |                 |                 |                                                                                                                                                                     |
|                       |                 |                 | -   `order.create-batch`: refer to [Batch Place Order request](/docs/v5/order/batch-place#request-parameters)                                                       |
|                       |                 |                 | -   `order.amend-batch`: refer to [Batch Amend Order request](/docs/v5/order/batch-amend#request-parameters)                                                        |
|                       |                 |                 | -   `order.cancel-batch`: refer to [Batch Cancel Order request](/docs/v5/order/batch-cancel#request-parameters)                                                     |
+-----------------------+-----------------+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------+

### Response Parameters[​](#response-parameters-2 "Direct link to heading"){.hash-link} 

+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Parameter                       | Type                  | Comments                                                                                                                                                                            |
+:================================+:======================+=====================================================================================================================================================================================+
| reqId                           | string                | -   If it is passed on the request, then it is returned in the response                                                                                                             |
|                                 |                       | -   If it is not passed, then it is not returned in the response                                                                                                                    |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| retCode                         | integer               | -   `0`: success                                                                                                                                                                    |
|                                 |                       | -   `10403`: exceed IP rate limit. 3000 requests per second per IP                                                                                                                  |
|                                 |                       | -   `10404`: 1. op type is not found; 2. `category` is not correct/supported                                                                                                        |
|                                 |                       | -   `10429`: System level frequency protection                                                                                                                                      |
|                                 |                       | -   `20006`: reqId is duplicated                                                                                                                                                    |
|                                 |                       | -   `10016`: 1. internal server error; 2. Service is restarting                                                                                                                     |
|                                 |                       | -   `10019`: ws trade service is restarting, do not accept new request, but the request in the process is not affected. You can build new connection to be routed to normal service |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| retMsg                          | string                | -   `OK`                                                                                                                                                                            |
|                                 |                       | -   `""`                                                                                                                                                                            |
|                                 |                       | -   Error message                                                                                                                                                                   |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| op                              | string                | Op type                                                                                                                                                                             |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| data                            | object                | Business data, keep the same as `result` on rest api response                                                                                                                       |
|                                 |                       |                                                                                                                                                                                     |
|                                 |                       | -   `order.create-batch`: refer to [Batch Place Order response](/docs/v5/order/batch-place#response-parameters)                                                                     |
|                                 |                       | -   `order.amend-batch`: refer to [Batch Amend Order response](/docs/v5/order/batch-amend#response-parameters)                                                                      |
|                                 |                       | -   `order.cancel-batch`: refer to [Batch Cancel Order response](/docs/v5/order/batch-cancel#response-parameters)                                                                   |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| retExtInfo                      | object                |                                                                                                                                                                                     |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> list                         | array\<object\>       |                                                                                                                                                                                     |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \>\> code                       | number                | Success/error code                                                                                                                                                                  |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \>\> msg                        | string                | Success/error message                                                                                                                                                               |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| header                          | object                | Header info                                                                                                                                                                         |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> TraceId                      | string                | Trace ID, used to track the trip of request                                                                                                                                         |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> Timenow                      | string                | Current timestamp                                                                                                                                                                   |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> X-Bapi-Limit                 | string                | The total rate limit of the current account for this op type                                                                                                                        |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> X-Bapi-Limit-Status          | string                | The remaining rate limit of the current account for this op type                                                                                                                    |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| \> X-Bapi-Limit-Reset-Timestamp | string                | The timestamp indicates when your request limit resets if you have exceeded your rate limit. Otherwise, this is just the current timestamp (it may not exactly match `timeNow`)     |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| connId                          | string                | Connection id, the unique id for the connection                                                                                                                                     |
+---------------------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

### Request Example[​](#request-example-2 "Direct link to heading"){.hash-link} 



``` {.prism-code .language-json .codeBlock_bY9V .thin-scrollbar tabindex="0"}
{
    "op": "order.create-batch",
    "header": {
        "X-BAPI-TIMESTAMP": "1740453381256",
        "X-BAPI-RECV-WINDOW": "1000"
    },
    "args": [
        {
            "category": "linear",
            "request": [
                {
                    "symbol": "SOLUSDT",
                    "qty": "10",
                    "price": "500",
                    "orderType": "Limit",
                    "timeInForce": "GTC",
                    "orderLinkId": "-batch-000",
                    "side": "Buy"
                },
                {
                    "symbol": "SOLUSDT",
                    "qty": "20",
                    "price": "1000",
                    "orderType": "Limit",
                    "timeInForce": "GTC",
                    "orderLinkId": "batch-001",
                    "side": "Buy"
                },
                {
                    "symbol": "SOLUSDT",
                    "qty": "30",
                    "price": "1500",
                    "orderType": "Limit",
                    "timeInForce": "GTC",
                    "orderLinkId": "batch-002",
                    "side": "Buy"
                }
            ]
        }
    ]
}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}




### Response Example[​](#response-example-2 "Direct link to heading"){.hash-link} 



``` {.prism-code .language-json .codeBlock_bY9V .thin-scrollbar tabindex="0"}
{
    "retCode": 0,
    "retMsg": "OK",
    "op": "order.create-batch",
    "data": {
        "list": [
            {
                "category": "linear",
                "symbol": "SOLUSDT",
                "orderId": "",
                "orderLinkId": "batch-000",
                "createAt": ""
            },
            {
                "category": "linear",
                "symbol": "SOLUSDT",
                "orderId": "",
                "orderLinkId": "batch-001",
                "createAt": ""
            },
            {
                "category": "linear",
                "symbol": "SOLUSDT",
                "orderId": "",
                "orderLinkId": "batch-002",
                "createAt": ""
            }
        ]
    },
    "retExtInfo": {
        "list": [
            {
                "code": 10001,
                "msg": "position idx not match position mode"
            },
            {
                "code": 10001,
                "msg": "position idx not match position mode"
            },
            {
                "code": 10001,
                "msg": "position idx not match position mode"
            }
        ]
    },
    "header": {
        "Timenow": "1740453408556",
        "X-Bapi-Limit": "150",
        "X-Bapi-Limit-Status": "147",
        "X-Bapi-Limit-Reset-Timestamp": "1740453408555",
        "Traceid": "0e32b551b3e17aae77651aadf6a5be80"
    },
    "connId": "cupviqn88smf24t2kpb0-536o"
}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}




## Ping[​](#ping "Direct link to heading"){.hash-link} 

### Request Parameters[​](#request-parameters-3 "Direct link to heading"){.hash-link} 

  Parameter   Required   Type     Comments
  ----------- ---------- -------- -----------------
  op          **true**   string   Op type. `ping`

### Response Parameters[​](#response-parameters-3 "Direct link to heading"){.hash-link} 

  Parameter   Type      Comments
  ----------- --------- ---------------------------------------------------
  retCode     integer   Result code
  retMsg      string    Result message
  op          string    Op type `pong`
  data        array     One item in the array, current timestamp (string)
  connId      string    Connection id, the unique id for the connection

### Request Example[​](#request-example-3 "Direct link to heading"){.hash-link} 



``` {.prism-code .language-json .codeBlock_bY9V .thin-scrollbar tabindex="0"}
{
    "op": "ping"
}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}




### Response Example[​](#response-example-3 "Direct link to heading"){.hash-link} 



``` {.prism-code .language-json .codeBlock_bY9V .thin-scrollbar tabindex="0"}
{
    "retCode": 0,
    "retMsg": "OK",
    "op": "pong",
    "data": [
        "1711002002529"
    ],
    "connId": "cnt5leec0hvan15eukcg-2v"
}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}











[](/docs/v5/websocket/private/dcp){.pagination-nav__link .pagination-nav__link--prev}


Previous



Dcp


[](/docs/v5/websocket/system/system-status){.pagination-nav__link .pagination-nav__link--next}


Next



System Status







-   [URL](#url){.table-of-contents__link .toc-highlight}
-   [Scope](#scope){.table-of-contents__link .toc-highlight}
-   [Authentication](#authentication){.table-of-contents__link .toc-highlight}
    -   [Request Parameters](#request-parameters){.table-of-contents__link .toc-highlight}
    -   [Response Parameters](#response-parameters){.table-of-contents__link .toc-highlight}
    -   [Request Example](#request-example){.table-of-contents__link .toc-highlight}
    -   [Response Example](#response-example){.table-of-contents__link .toc-highlight}
-   [Create/Amend/Cancel Order](#createamendcancel-order){.table-of-contents__link .toc-highlight}
    -   [Request Parameters](#request-parameters-1){.table-of-contents__link .toc-highlight}
    -   [Response Parameters](#response-parameters-1){.table-of-contents__link .toc-highlight}
    -   [Request Example](#request-example-1){.table-of-contents__link .toc-highlight}
    -   [Response Example](#response-example-1){.table-of-contents__link .toc-highlight}
-   [Batch Create/Amend/Cancel Order](#batch-createamendcancel-order){.table-of-contents__link .toc-highlight}
    -   [Request Parameters](#request-parameters-2){.table-of-contents__link .toc-highlight}
    -   [Response Parameters](#response-parameters-2){.table-of-contents__link .toc-highlight}
    -   [Request Example](#request-example-2){.table-of-contents__link .toc-highlight}
    -   [Response Example](#response-example-2){.table-of-contents__link .toc-highlight}
-   [Ping](#ping){.table-of-contents__link .toc-highlight}
    -   [Request Parameters](#request-parameters-3){.table-of-contents__link .toc-highlight}
    -   [Response Parameters](#response-parameters-3){.table-of-contents__link .toc-highlight}
    -   [Request Example](#request-example-3){.table-of-contents__link .toc-highlight}
    -   [Response Example](#response-example-3){.table-of-contents__link .toc-highlight}












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



