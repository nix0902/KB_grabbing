---
title: "SBE Public Trade Integration"
url: "https://bybit-exchange.github.io/docs/v5/sbe/sbe-public-trade"
source: "https://bybit-exchange.github.io/docs/"
fetched: "2026-03-10T08:57:27+00:00"
---

# SBE Public Trade Integration

Source: [https://bybit-exchange.github.io/docs/v5/sbe/sbe-public-trade](https://bybit-exchange.github.io/docs/v5/sbe/sbe-public-trade)


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

-   [English](/docs/v5/sbe/sbe-public-trade){.dropdown__link .dropdown__link--active target="_self" rel="noopener noreferrer" lang="en"}
-   [中文（台灣）](/docs/zh-TW/v5/sbe/sbe-public-trade){.dropdown__link target="_self" rel="noopener noreferrer" lang="zh-TW"}



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
    [SBE](/docs/v5/sbe/sbe-basic-info){.menu__link .menu__link--sublist .menu__link--sublist-caret .menu__link--active aria-expanded="true"}
    

    -   [SBE Basic Information](/docs/v5/sbe/sbe-basic-info){.menu__link tabindex="0"}

    -   
        [BBO](/docs/v5/sbe/bbo/sbe-bbo){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false" tabindex="0"}
        

    -   
        [Level 50](/docs/v5/sbe/level-50/sbe-level-50){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false" tabindex="0"}
        

    -   
        [Public Trade](/docs/v5/sbe/sbe-public-trade){.menu__link .menu__link--sublist .menu__link--sublist-caret .menu__link--active aria-expanded="true" tabindex="0"}
        

        -   [SBE Public Trade Integration](/docs/v5/sbe/sbe-public-trade){.menu__link .menu__link--active aria-current="page" tabindex="0"}

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
-   [SBE]{.breadcrumbs__link}
-   [Public Trade]{.breadcrumbs__link}
-   [SBE Public Trade Integration]{.breadcrumbs__link itemprop="name"}


On this page



<div>

# SBE Public Trade Integration

</div>



## Overview[​](#overview "Direct link to heading"){.hash-link} 

-   **Channel:** private MMWS only (not available on public WS).
-   **WSURL:** `wss://<your-public-stream-host>.bybit-aws.com/v5/public-sbe/<category>`.
-   **Topic:** `publicTrade.sbe.<symbol>`.
-   **Format:** SBE binary frames (`opcode = 2`), little-endian.
-   **Push frequency**: real-time
-   Messages are delivered in-order per symbol group. A single packet may contain 1--1024 trades

## Flow[​](#flow "Direct link to heading"){.hash-link} 

### Ping / Pong (JSON control frames)[​](#ping--pong-json-control-frames "Direct link to heading"){.hash-link} 

**Send Ping**



``` {.prism-code .language-json .codeBlock_bY9V .thin-scrollbar tabindex="0"}
{"req_id": "100001", "op": "ping"}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}




**Receive Pong**



``` {.prism-code .language-json .codeBlock_bY9V .thin-scrollbar tabindex="0"}
{"success": true,"ret_msg": "pong","conn_id": "xxxxx-xx","req_id": "","op": "ping"}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}




### Subscribe[​](#subscribe "Direct link to heading"){.hash-link} 

-   Topic format: `publicTrade.sbe.<symbol>`

**Subscribe request**



``` {.prism-code .language-json .codeBlock_bY9V .thin-scrollbar tabindex="0"}
{"op": "subscribe","req_id":"100001","args": ["publicTrade.sbe.BTCUSDT"]}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}




**Subscription confirmation**



``` {.prism-code .language-json .codeBlock_bY9V .thin-scrollbar tabindex="0"}
{"success":true,"ret_msg":"","conn_id":"d5phu6rboasumi7uds7g-223s","req_id":"100001","op":"subscribe"}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}




## SBE XML Template (Public Trade)[​](#sbe-xml-template-public-trade "Direct link to heading"){.hash-link} 

[sbe xml template](/docs/v5/sbe/sbe-basic-info#sbe-xml-template)

## Field Reference[​](#field-reference "Direct link to heading"){.hash-link} 

**Message:** `PublicTradeEvent` (id = 20002)

  Field Name      ID   SBE Type                       Unit / Format   Notes
  --------------- ---- ------------------------------ --------------- --------------------------------------------------------------------------------
  ts              1    int64                          µs              System generation time at market data service.
  priceExponent   2    int8                           exponent        Decimal places for price. Display price = priceMantissa × 10\^`priceExponent`.
  sizeExponent    3    int8                           exponent        Decimal places for size. Display size = sizeMantissa × 10\^`sizeExponent`.
  tradeItems      40   group(`groupSize16Encoding`)   \-              Repeating trade items
  symbol          55   varString8                     UTF-8           1-byte length + bytes, e.g., `0x07 "BTCUSDT"`.

### Each tradeItems\[i\] entry[​](#each-tradeitemsi-entry "Direct link to heading"){.hash-link} 

  Field (id)         Type                           Description
  ------------------ ------------------------------ -------------------------------------------------------------------
  fillTime (1)       int64                          Trade fill timestamp(µs)
  price (2)          int64                          Apply priceExponent. Display ask size = `size × 10^sizeExponent`.
  size (3)           int64                          Apply sizeExponent. Display ask size = `size × 10^sizeExponent`.
  seq (4)            int64                          Cross sequence id
  side (5)           [SideType](#sidetype)(uint8)   Side of taker
  isBlockTrade (6)   [BoolEnum](#boolenum)(uint8)   IsBlockTrade(0 = not blockTrade, 1 = blockTrade)
  isRPI (7)          [BoolEnum](#boolenum)(uint8)   IsRPI (0 = not RPI, 1 = RPI)
  execId (100)       varString8                     Trade ID

#### SideType[​](#sidetype "Direct link to heading"){.hash-link} 

-   `0`: UNKOWN
-   `1`: BUY
-   `2`: SELL
-   `254`: NON_REPRESENTABLE

#### BoolEnum[​](#boolenum "Direct link to heading"){.hash-link} 

-   `0`: FALSE
-   `1`: TRUE
-   `254`: NON_REPRESENTABLE

## Integration Script[​](#integration-script "Direct link to heading"){.hash-link} 

### Python[​](#python "Direct link to heading"){.hash-link} 



``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
import json
import struct
import websocket
from typing import Tuple

WS_URL = "wss://stream-testnet.bybits.org/v5/public-sbe/spot"
SYMBOL = "BTCUSDT"
TOPIC = f"publicTrade.sbe.{SYMBOL}"


# ---------------- SBE helpers ----------------
def apply_exp(mantissa: int, exp: int) -> float:
    # display = mantissa * 10^exp
    # exp can be negative
    return mantissa * (10.0**exp)


def read_varstring8(buf: bytes, off: int) -> Tuple[str, int]:
    if off + 1 > len(buf):
        raise ValueError("varString8: missing length")

    ln = buf[off]
    off += 1

    if off + ln > len(buf):
        raise ValueError("varString8: out of range")

    s = buf[off : off + ln].decode("utf-8", errors="replace")
    off += ln
    return s, off


def parse_public_trade_event(buf: bytes) -> dict:
    # messageHeader: <HHHH
    if len(buf) < 8:
        raise ValueError("too short for header")

    block_len, template_id, schema_id, version = struct.unpack_from("<HHHH", buf, 0)
    off = 8

    if template_id != 20002:
        raise ValueError(f"unexpected templateId={template_id}")

    # fixed fields: ts(int64), priceExp(int8), sizeExp(int8)
    if len(buf) < off + 8 + 1 + 1:
        raise ValueError("too short for fixed fields")

    ts = struct.unpack_from("<q", buf, off)[0]
    off += 8

    price_exp = struct.unpack_from("<b", buf, off)[0]
    off += 1

    size_exp = struct.unpack_from("<b", buf, off)[0]
    off += 1

    # group header: blockLength(uint16), numInGroup(uint16)
    if len(buf) < off + 4:
        raise ValueError("too short for group header")

    grp_block_len, num_in_group = struct.unpack_from("<HH", buf, off)
    off += 4

    trades = []
    for _ in range(num_in_group):
        entry_start = off

        # Parse fields in-order (don’t assume padding; only skip remaining bytes up to grp_block_len)
        fill_time = struct.unpack_from("<q", buf, off)[0]
        off += 8

        price_m = struct.unpack_from("<q", buf, off)[0]
        off += 8

        size_m = struct.unpack_from("<q", buf, off)[0]
        off += 8

        seq = struct.unpack_from("<q", buf, off)[0]
        off += 8

        side = struct.unpack_from("<B", buf, off)[0]
        off += 1

        is_block = struct.unpack_from("<B", buf, off)[0]
        off += 1

        is_rpi = struct.unpack_from("<B", buf, off)[0]
        off += 1

        # Skip any future extension bytes in fixed part
        fixed_consumed = off - entry_start
        if fixed_consumed < grp_block_len:
            off += grp_block_len - fixed_consumed
        elif fixed_consumed > grp_block_len:
            # schema mismatch vs blockLength
            raise ValueError(
                f"group blockLength too small: {grp_block_len} < {fixed_consumed}"
            )
        exec_id, off = read_varstring8(buf, off)
        trades.append(
            {
                "fillTime": fill_time,
                "priceMantissa": price_m,
                "sizeMantissa": size_m,
                "price": apply_exp(price_m, price_exp),
                "size": apply_exp(size_m, size_exp),
                "seq": seq,
                "side": side,
                "isBlockTrade": bool(is_block),
                "isRPI": bool(is_rpi),
                "execId": exec_id,
            }
        )

    symbol, off = read_varstring8(buf, off)

    return {
        "header": {
            "blockLength": block_len,
            "templateId": template_id,
            "schemaId": schema_id,
            "version": version,
        },
        "ts": ts,
        "priceExponent": price_exp,
        "sizeExponent": size_exp,
        "symbol": symbol,
        "tradeItems": trades,
        "parsed_length": off,
    }


# ---------------- WS handlers ----------------
def on_open(ws):
    ws.send(json.dumps({"op": "subscribe", "args": [TOPIC]}))
    print("subscribed:", TOPIC)


def on_message(ws, message):
    if isinstance(message, (bytes, bytearray)):
        evt = parse_public_trade_event(message)

        # print first trade only (example)
        if evt["tradeItems"]:
            t0 = evt["tradeItems"][0]
            print(
                evt["symbol"],
                "trades=",
                len(evt["tradeItems"]),
                "first:",
                t0["price"],
                "@",
                t0["size"],
                "seq=",
                t0["seq"],
            )
    else:
        print("TEXT:", message)


def on_error(ws, err):
    print("WS error:", err)


def on_close(ws, *_):
    print("closed")


if __name__ == "__main__":
    websocket.enableTrace(False)
    ws = websocket.WebSocketApp(
        WS_URL,
        on_open=on_open,
        on_message=on_message,
        on_error=on_error,
        on_close=on_close,
    )
    ws.run_forever(ping_interval=20, ping_timeout=10)
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}




### Golang[​](#golang "Direct link to heading"){.hash-link} 



``` {.prism-code .language-go .codeBlock_bY9V .thin-scrollbar tabindex="0"}
package main

import (
        "encoding/binary"
        "encoding/json"
        "fmt"
        "log"
        "math"
        "time"

        "github.com/gorilla/websocket"
)

const (
        WSURL  = "wss://stream-testnet.bybits.org/v5/public-sbe/spot"
        Symbol = "BTCUSDT"
        Topic  = "publicTrade.sbe." + Symbol
)

func applyExp(mantissa int64, exp int8) float64 {
        return float64(mantissa) * math.Pow10(int(exp))
}

func readVarString8(buf []byte, off int) (string, int, error) {
        if off+1 > len(buf) {
                return "", off, fmt.Errorf("varString8: missing length")
        }
        ln := int(buf[off])
        off++
        if off+ln > len(buf) {
                return "", off, fmt.Errorf("varString8: out of range")
        }
        s := string(buf[off : off+ln])
        off += ln
        return s, off, nil
}

type TradeItem struct {
        FillTime     int64   `json:"fillTime"`
        PriceMant    int64   `json:"priceMantissa"`
        SizeMant     int64   `json:"sizeMantissa"`
        Price        float64 `json:"price"`
        Size         float64 `json:"size"`
        Seq          int64   `json:"seq"`
        Side         uint8   `json:"side"`
        IsBlockTrade bool    `json:"isBlockTrade"`
        IsRPI        bool    `json:"isRPI"`
        ExecID       string   `json:"execId"`
}

type PublicTradeEvent struct {
        Header struct {
                BlockLength uint16 `json:"blockLength"`
                TemplateID  uint16 `json:"templateId"`
                SchemaID    uint16 `json:"schemaId"`
                Version     uint16 `json:"version"`
        } `json:"header"`

        Ts            int64       `json:"ts"`
        PriceExponent int8        `json:"priceExponent"`
        SizeExponent  int8        `json:"sizeExponent"`
        TradeItems    []TradeItem `json:"tradeItems"`
        Symbol        string      `json:"symbol"`
        ParsedLength  int         `json:"parsed_length"`
}

func parsePublicTradeEvent(buf []byte) (*PublicTradeEvent, error) {
        if len(buf) < 8 {
                return nil, fmt.Errorf("too short for header")
        }
        off := 0
        blk := binary.LittleEndian.Uint16(buf[off : off+2])
        tid := binary.LittleEndian.Uint16(buf[off+2 : off+4])
        sid := binary.LittleEndian.Uint16(buf[off+4 : off+6])
        ver := binary.LittleEndian.Uint16(buf[off+6 : off+8])
        off += 8

        if tid != 20002 {
                return nil, fmt.Errorf("unexpected templateId=%d", tid)
        }
        if off+8+1+1 > len(buf) {
                return nil, fmt.Errorf("too short for fixed fields")
        }
        ts := int64(binary.LittleEndian.Uint64(buf[off : off+8]))
        off += 8
        priceExp := int8(buf[off])
        off++
        sizeExp := int8(buf[off])
        off++

        // group header
        if off+4 > len(buf) {
                return nil, fmt.Errorf("too short for group header")
        }
        grpBlockLen := binary.LittleEndian.Uint16(buf[off : off+2])
        numInGroup := binary.LittleEndian.Uint16(buf[off+2 : off+4])
        off += 4

        items := make([]TradeItem, 0, int(numInGroup))
        for i := 0; i < int(numInGroup); i++ {
                entryStart := off

                needMin := 8 + 8 + 8 + 8 + 1 + 1 + 1 + 8
                if off+needMin > len(buf) {
                        return nil, fmt.Errorf("too short for trade entry %d", i)
                }

                fillTime := int64(binary.LittleEndian.Uint64(buf[off : off+8])); off += 8
                priceM := int64(binary.LittleEndian.Uint64(buf[off : off+8])); off += 8
                sizeM := int64(binary.LittleEndian.Uint64(buf[off : off+8])); off += 8
                seq := int64(binary.LittleEndian.Uint64(buf[off : off+8])); off += 8

                side := uint8(buf[off]); off++
                isBlock := uint8(buf[off]); off++
                isRpi := uint8(buf[off]); off++

                fixedConsumed := off - entryStart
                if fixedConsumed < int(grpBlockLen) {
                        off += int(grpBlockLen) - fixedConsumed
                } else if fixedConsumed > int(grpBlockLen) {
                        return nil, fmt.Errorf("group blockLength too small: %d < %d", grpBlockLen, fixedConsumed)
                }

                 execID, off2, err := readVarString8(buf, off)
                if err != nil {
                        return nil, err
                }
                off = off2


                items = append(items, TradeItem{
                        FillTime:     fillTime,
                        PriceMant:    priceM,
                        SizeMant:     sizeM,
                        Price:        applyExp(priceM, priceExp),
                        Size:         applyExp(sizeM, sizeExp),
                        Seq:          seq,
                        Side:         side,
                        IsBlockTrade: isBlock != 0,
                        IsRPI:        isRpi != 0,
                        ExecID:       execID,
                })
        }

        symbol, off2, err := readVarString8(buf, off)
        if err != nil {
                return nil, err
        }
        off = off2

        evt := &PublicTradeEvent{
                Ts:            ts,
                PriceExponent: priceExp,
                SizeExponent:  sizeExp,
                TradeItems:    items,
                Symbol:        symbol,
                ParsedLength:  off,
        }
        evt.Header.BlockLength = blk
        evt.Header.TemplateID = tid
        evt.Header.SchemaID = sid
        evt.Header.Version = ver
        return evt, nil
}

func main() {
        d := websocket.Dialer{HandshakeTimeout: 10 * time.Second}
        c, _, err := d.Dial(WSURL, nil)
        if err != nil {
                log.Fatal(err)
        }
        defer c.Close()

        sub, _ := json.Marshal(map[string]any{"op": "subscribe", "args": []string{Topic}})
        if err := c.WriteMessage(websocket.TextMessage, sub); err != nil {
                log.Fatal(err)
        }
        log.Println("subscribed:", Topic)

        for {
                mt, msg, err := c.ReadMessage()
                if err != nil {
                        log.Fatal(err)
                }
                if mt == websocket.BinaryMessage {
                        evt, err := parsePublicTradeEvent(msg)
                        if err != nil {
                                log.Println("decode error:", err)
                                continue
                        }
                        if len(evt.TradeItems) > 0 {
                                t0 := evt.TradeItems[0]
                                log.Printf("%s trades=%d first=%.8f@%.8f seq=%d",
                                        evt.Symbol, len(evt.TradeItems), t0.Price, t0.Size, t0.Seq)
                        }
                } else {
                        log.Println("TEXT:", string(msg))
                }
        }
}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}











[](/docs/v5/sbe/level-50/sbe-level-50){.pagination-nav__link .pagination-nav__link--prev}


Previous



SBE Level 50 Integration


[](/docs/v5/ws/connect){.pagination-nav__link .pagination-nav__link--next}


Next



Connect







-   [Overview](#overview){.table-of-contents__link .toc-highlight}
-   [Flow](#flow){.table-of-contents__link .toc-highlight}
    -   [Ping / Pong (JSON control frames)](#ping--pong-json-control-frames){.table-of-contents__link .toc-highlight}
    -   [Subscribe](#subscribe){.table-of-contents__link .toc-highlight}
-   [SBE XML Template (Public Trade)](#sbe-xml-template-public-trade){.table-of-contents__link .toc-highlight}
-   [Field Reference](#field-reference){.table-of-contents__link .toc-highlight}
    -   [Each tradeItemsi entry](#each-tradeitemsi-entry){.table-of-contents__link .toc-highlight}
        -   [SideType](#sidetype){.table-of-contents__link .toc-highlight}
        -   [BoolEnum](#boolenum){.table-of-contents__link .toc-highlight}
-   [Integration Script](#integration-script){.table-of-contents__link .toc-highlight}
    -   [Python](#python){.table-of-contents__link .toc-highlight}
    -   [Golang](#golang){.table-of-contents__link .toc-highlight}












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



