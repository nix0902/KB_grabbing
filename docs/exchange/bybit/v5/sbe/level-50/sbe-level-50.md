---
title: "SBE Level 50 Integration"
url: "https://bybit-exchange.github.io/docs/v5/sbe/level-50/sbe-level-50"
source: "https://bybit-exchange.github.io/docs/"
fetched: "2026-03-10T08:57:25+00:00"
---

# SBE Level 50 Integration

Source: [https://bybit-exchange.github.io/docs/v5/sbe/level-50/sbe-level-50](https://bybit-exchange.github.io/docs/v5/sbe/level-50/sbe-level-50)


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

-   [English](/docs/v5/sbe/level-50/sbe-level-50){.dropdown__link .dropdown__link--active target="_self" rel="noopener noreferrer" lang="en"}
-   [中文（台灣）](/docs/zh-TW/v5/sbe/level-50/sbe-level-50){.dropdown__link target="_self" rel="noopener noreferrer" lang="zh-TW"}



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
        [Level 50](/docs/v5/sbe/level-50/sbe-level-50){.menu__link .menu__link--sublist .menu__link--sublist-caret .menu__link--active aria-expanded="true" tabindex="0"}
        

        -   [SBE Level 50 Integration](/docs/v5/sbe/level-50/sbe-level-50){.menu__link .menu__link--active aria-current="page" tabindex="0"}

    -   
        [Public Trade](/docs/v5/sbe/sbe-public-trade){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false" tabindex="0"}
        

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
-   [Level 50]{.breadcrumbs__link}
-   [SBE Level 50 Integration]{.breadcrumbs__link itemprop="name"}


On this page



<div>

# SBE Level 50 Integration

</div>



## Overview[​](#overview "Direct link to heading"){.hash-link} 

-   **Channel:** private MMWS only (not available on public WS).
-   **Topic:** `ob.50.sbe.{symbol}` (snapshot or delta, every 20 ms).
-   **Format:** SBE binary frames (`opcode = 2`), little-endian.
-   **Depth:** 50 levels per side (no RPI in this stream).
-   **Units:** timestamps in microseconds (µs); price/size are mantissas with exponents.

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

-   Topic format: `ob.50.sbe.<symbol>`

**Subscribe request**



``` {.prism-code .language-json .codeBlock_bY9V .thin-scrollbar tabindex="0"}
{"op": "subscribe", "args": ["ob.50.sbe.BTCUSDT"]}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}




**Subscription confirmation**



``` {.prism-code .language-json .codeBlock_bY9V .thin-scrollbar tabindex="0"}
{"success": true,"ret_msg": "","conn_id": "d30fdpbboasp1pjbe7r0","req_id": "xxx","op": "subscribe"}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}




## SBE XML Template (L50 OB)[​](#sbe-xml-template-l50-ob "Direct link to heading"){.hash-link} 

[sbe xml template](/docs/v5/sbe/sbe-basic-info#sbe-xml-template)

## Field Reference[​](#field-reference "Direct link to heading"){.hash-link} 

**Message:** `OBL50Event` (id = 20001)

  Field Name      ID   SBE Type                       Unit / Format   Notes
  --------------- ---- ------------------------------ --------------- --------------------------------------------------------------------------------------------
  ts              1    int64                          µs              System generation time at push side (dispatcher).
  seq             2    int64                          integer         Cross-sequence id (monotonic per feed; not guaranteed continuous).
  cts             3    int64                          µs              Matching-engine creation time of this OB snapshot or delta; used for latency measurements.
  u               4    int64                          integer         Update id (monotonic per symbol). Useful to check continuity.
  priceExponent   5    int8                           exponent        Decimal places for price. Display price = mantissa × 10\^`priceExponent`.
  sizeExponent    6    int8                           exponent        Decimal places for size. Display size = mantissa × 10\^`sizeExponent`.
  pkgType         7    uint8 (`pkgTypeEnum`)          integer         Package type (0 = snapshot, 1 = delta).
  asks            40   group(`groupSize16Encoding`)   ---             Sell side updates (up to 50 levels).
  bids            41   group(`groupSize16Encoding`)   ---             Buy side updates (up to 50 levels).
  symbol          55   varString8                     UTF-8           1-byte length + bytes, e.g., `0x07 "BTCUSDT"`.

### Asks Group[​](#asks-group "Direct link to heading"){.hash-link} 

  Field (id)   Type    Description
  ------------ ------- ---------------------------------------------------------------------
  price (1)    int64   Ask price mantissa. Display ask price = `price × 10^priceExponent`.
  size (2)     int64   Ask size mantissa. Display ask size = `size × 10^sizeExponent`.

### Bids Group[​](#bids-group "Direct link to heading"){.hash-link} 

  Field (id)   Type    Description
  ------------ ------- ---------------------------------------------------------------------
  price (1)    int64   Bid price mantissa. Display bid price = `price × 10^priceExponent`.
  size (2)     int64   Bid size mantissa. Display bid size = `size × 10^sizeExponent`.

## Order Book Update Logic[​](#order-book-update-logic "Direct link to heading"){.hash-link} 

### Rules for the u (Update ID) Field[​](#rules-for-the-u-update-id-field "Direct link to heading"){.hash-link} 

#### Behavior of `u`[​](#behavior-of-u "Direct link to heading"){.hash-link} 

-   Field `u` increases **monotonically** for all snapshots and deltas.
-   Field `u` **does not reset**, unless there is a system restart or precision change.
-   Field `u = 1` always indicates a **snapshot**, and continuity checks must stop.

#### Continuity Validation[​](#continuity-validation "Direct link to heading"){.hash-link} 

Continuity must be checked **only when `u != 1`**.

  Condition   Action
  ----------- ----------------------------------------------------------------------------------------------
  `u != 1`    Validate continuity: next `u` should follow previous `u + 1`.
  `u == 1`    Special snapshot (service restart / precision change). **Do not** perform continuity checks.

### Rules for Order Book Maintenance[​](#rules-for-order-book-maintenance "Direct link to heading"){.hash-link} 

#### First Message of connection and reconnection[​](#first-message-of-connection-and-reconnection "Direct link to heading"){.hash-link} 

After subscribing, the **first message is always a snapshot**, clients must initialize the local book with it.

#### Snapshot Handling[​](#snapshot-handling "Direct link to heading"){.hash-link} 

A snapshot must always **replace the entire local order book**

Snapshots may appear:

-   after initial subscription
-   when the number of changed levels \> 100 (extreme market condition auto-fallback)
-   after internal service restart
-   after exponent / precision changes

#### Delta Handling[​](#delta-handling "Direct link to heading"){.hash-link} 

A delta applies **incrementally**:

-   Insert/update levels with `size > 0`,remove levels when `size == 0`,continue continuity checks using the `u` field.

**Extreme Market Condition Handling**

-   When a delta contains **more than 100 combined bid+ask updates** (buy + sell), the system automatically sends a **full snapshot** instead of a delta.
-   Ensures client books resync cleanly.
-   Prevents explosion of delta packets during high churn.
-   Keeps snapshot size fixed length for predictable decoding.

### Example Push Update[​](#example-push-update "Direct link to heading"){.hash-link} 

Below is a real case where the connection stays healthy and messages arrive in order:

  u       Type       Notes
  ------- ---------- -----------------------------------------------------------------------------------
  10000   snapshot   First message after subscription.
  10001   delta      Incremental updates. Must **apply changes** to the existing book.
  10002   delta      Normal incremental update.
  10003   snapshot   Large market move (\> 100 level changes). Use snapshot to **replace** local book.
  10004   delta      Continue delta from the new snapshot.
  1       snapshot   Service restarted / precision changed --- reset `u` to 1.
  2       delta      New continuity sequence.
  3       delta      ---
  4       delta      ---

## Integration Script[​](#integration-script "Direct link to heading"){.hash-link} 

### Python[​](#python "Direct link to heading"){.hash-link} 



``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
import json
import logging
import struct
import threading
import time
from datetime import datetime
from typing import Dict, Any, List, Tuple

import websocket

logging.basicConfig(
    filename='logfile_ob50.log',
    level=logging.INFO,
    format='%(asctime)s %(levelname)s %(message)s'
)

# -------------------------------------------------------------------
# Config
# -------------------------------------------------------------------

# L50 SBE order book topic
TOPIC = "ob.50.sbe.BTCUSDT"

# Adjust URL for spot / contract environment as needed:
WS_URL = "wss://stream-testnet.bybits.org/v5/public-sbe/spot"

# -------------------------------------------------------------------
# SBE Parser for OBL50Event (template_id = 20001)
#
# XML schema:
#   ts(int64), seq(int64), cts(int64), u(int64),
#   priceExponent(int8), sizeExponent(int8),
#   pkgType(uint8)   # 0 = SNAPSHOT, 1 = DELTA
#   group asks: blockLen(uint16), numInGroup(uint16),
#               then numInGroup * [ price(int64), size(int64) ]
#   group bids: same as asks
#   symbol(varString8)
# -------------------------------------------------------------------

class SBEOBL50Parser:
    def __init__(self):
        # message header: blockLength, templateId, schemaId, version
        self.header_fmt = "<HHHH"
        self.header_sz = struct.calcsize(self.header_fmt)

        # fixed body fields:
        # ts, seq, cts, u   -> 4 x int64
        # priceExponent, sizeExponent -> 2 x int8
        # pkgType -> uint8
        self.body_fmt = "<qqqqbbB"   # 4*q + 2*b + B
        self.body_sz = struct.calcsize(self.body_fmt)

        # group header for repeating groups: blockLength(uint16), numInGroup(uint16)
        self.group_hdr_fmt = "<HH"
        self.group_hdr_sz = struct.calcsize(self.group_hdr_fmt)

        # each group entry: price(int64), size(int64)
        self.level_fmt = "<qq"
        self.level_sz = struct.calcsize(self.level_fmt)

        self.target_template_id = 20001

    # ---------------- core small helpers ----------------

    def _parse_header(self, data: bytes) -> Dict[str, Any]:
        if len(data) < self.header_sz:
            raise ValueError("insufficient data for SBE header")
        block_length, template_id, schema_id, version = struct.unpack_from(
            self.header_fmt, data, 0
        )
        return {
            "block_length": block_length,
            "template_id": template_id,
            "schema_id": schema_id,
            "version": version,
        }

    @staticmethod
    def _parse_varstring8(data: bytes, offset: int) -> Tuple[str, int]:
        if offset + 1 > len(data):
            raise ValueError("insufficient data for varString8 length")
        (length,) = struct.unpack_from("<B", data, offset)
        offset += 1
        if length == 0:
            return "", offset
        if offset + length > len(data):
            raise ValueError("insufficient data for varString8 bytes")
        s = data[offset: offset + length].decode("utf-8")
        offset += length
        return s, offset

    @staticmethod
    def _apply_exponent(value: int, exponent: int) -> float:
        return value / (10 ** exponent) if exponent >= 0 else value * (10 ** (-exponent))

    def _parse_levels(self, data: bytes, offset: int) -> Tuple[List[Dict[str, float]], int]:
        """
        Parse one repeating group (asks or bids).
        Layout:
           uint16 blockLength
           uint16 numInGroup
           numInGroup * [ price(int64), size(int64) ] (within blockLength)
        """
        if offset + self.group_hdr_sz > len(data):
            raise ValueError("insufficient data for group header")
        block_len, num_in_group = struct.unpack_from(self.group_hdr_fmt, data, offset)
        offset += self.group_hdr_sz

        if block_len < self.level_sz:
            raise ValueError(f"blockLength({block_len}) < level_sz({self.level_sz})")

        levels = []
        for _ in range(num_in_group):
            if offset + block_len > len(data):
                raise ValueError("insufficient data for group entry")
            # we only care about first 16 bytes (price, size)
            price_m, size_m = struct.unpack_from(self.level_fmt, data, offset)
            offset += block_len  # skip the whole block (safe if future adds extra fields)

            levels.append({
                "price_m": price_m,
                "size_m": size_m,
            })
        return levels, offset

    # ---------------- public parse ----------------

    def parse(self, data: bytes) -> Dict[str, Any]:
        hdr = self._parse_header(data)
        if hdr["template_id"] != self.target_template_id:
            raise NotImplementedError(f"unsupported template_id={hdr['template_id']}")

        if len(data) < self.header_sz + self.body_sz:
            raise ValueError("insufficient data for OBL50Event body")

        # parse fixed body
        (ts, seq, cts, u,
         price_exp, size_exp, pkg_type) = struct.unpack_from(
            self.body_fmt, data, self.header_sz
        )

        offset = self.header_sz + self.body_sz

        # asks group
        asks_raw, offset = self._parse_levels(data, offset)
        # bids group
        bids_raw, offset = self._parse_levels(data, offset)
        # symbol
        symbol, offset = self._parse_varstring8(data, offset)

        # apply exponents
        asks = [
            {
                "price": self._apply_exponent(l["price_m"], price_exp),
                "size": self._apply_exponent(l["size_m"], size_exp),
            }
            for l in asks_raw
        ]
        bids = [
            {
                "price": self._apply_exponent(l["price_m"], price_exp),
                "size": self._apply_exponent(l["size_m"], size_exp),
            }
            for l in bids_raw
        ]

        return {
            "header": hdr,
            "ts": ts,
            "seq": seq,
            "cts": cts,
            "u": u,
            "price_exponent": price_exp,
            "size_exponent": size_exp,
            "pkg_type": pkg_type,   # 0 = SNAPSHOT, 1 = DELTA
            "symbol": symbol,
            "asks": asks,
            "bids": bids,
            "parsed_length": offset,
        }


parser = SBEOBL50Parser()

# -------------------------------------------------------------------
# WebSocket handlers
# -------------------------------------------------------------------

def on_message(ws, message):
    try:
        if isinstance(message, (bytes, bytearray)):
            decoded = parser.parse(message)

            pkg_type = decoded["pkg_type"]
            pkg_str = "SNAPSHOT" if pkg_type == 0 else "DELTA" if pkg_type == 1 else f"UNKNOWN({pkg_type})"

            asks = decoded["asks"]
            bids = decoded["bids"]

            best_ask = asks[0] if asks else {"price": 0.0, "size": 0.0}
            best_bid = bids[0] if bids else {"price": 0.0, "size": 0.0}

            logging.info(
                "SBE %s u=%s seq=%s type=%s asks=%d bids=%d "
                "BEST bid=%.8f@%.8f ask=%.8f@%.8f ts=%s",
                decoded["symbol"], decoded["u"], decoded["seq"], pkg_str,
                len(asks), len(bids),
                best_bid["price"], best_bid["size"],
                best_ask["price"], best_ask["size"],
                decoded["ts"],
            )

            print(
                f"{decoded['symbol']}  u={decoded['u']}  seq={decoded['seq']}  {pkg_str}  "
                f"levels: asks={len(asks)} bids={len(bids)}  "
                f"BEST: bid {best_bid['price']:.8f} x {best_bid['size']:.8f}  |  "
                f"ask {best_ask['price']:.8f} x {best_ask['size']:.8f}"
            )

        else:
            # text frame: control / errors / ping-pong
            try:
                obj = json.loads(message)
                logging.info("TEXT %s", obj)
                print("TEXT:", obj)
            except json.JSONDecodeError:
                logging.warning("non-JSON text frame: %r", message)
                print("TEXT(non-json):", message)
    except Exception as e:
        logging.exception("decode error: %s", e)
        print("decode error:", e)


def on_error(ws, error):
    print("WS error:", error)
    logging.error("WS error: %s", error)


def on_close(ws, *_):
    print("### connection closed ###")
    logging.info("connection closed")


def ping_per(ws):
    while True:
        try:
            ws.send(json.dumps({"op": "ping"}))
        except Exception:
            return
        time.sleep(10)


def on_open(ws):
    print("opened")
    sub = {"op": "subscribe", "args": [TOPIC]}
    ws.send(json.dumps(sub))
    print("subscribed:", TOPIC)

    # background ping thread
    threading.Thread(target=ping_per, args=(ws,), daemon=True).start()


def on_pong(ws, *_):
    print("pong received")


def on_ping(ws, *_):
    print("ping received @", datetime.now().strftime("%Y-%m-%d %H:%M:%S"))


def connWS():
    ws = websocket.WebSocketApp(
        WS_URL,
        on_open=on_open,
        on_message=on_message,
        on_error=on_error,
        on_close=on_close,
        on_ping=on_ping,
        on_pong=on_pong,
    )
    ws.run_forever(ping_interval=20, ping_timeout=10)


if __name__ == "__main__":
    websocket.enableTrace(False)
    connWS()
    
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}




### Golang[​](#golang "Direct link to heading"){.hash-link} 



``` {.prism-code .language-go .codeBlock_bY9V .thin-scrollbar tabindex="0"}
// sbe_ob50_client.go
package main

import (
    "bytes"
    "compress/flate"
    "encoding/binary"
    "encoding/json"
    "fmt"
    "log"
    "math"
    "time"

    "github.com/gorilla/websocket"
    "yourmodule/quote" // generated SBE package
)

const (
    WSURL   = "wss://stream.bybit.com/v5/market/sbe"
    CHANNEL = "ob.50.sbe.BTCUSDT"
)

func toReal(mantissa int64, exponent int8) float64 {
    return float64(mantissa) * math.Pow10(int(exponent))
}

func decodeOBL50(buf []byte) (*quote.OBL50Event, error) {
    var hdr quote.MessageHeader
    reader := bytes.NewReader(buf)

    // decode messageHeader (little endian)
    if err := binary.Read(reader, binary.LittleEndian, &hdr); err != nil {
        return nil, fmt.Errorf("read header: %w", err)
    }

    if hdr.TemplateId != 20001 {
        return nil, fmt.Errorf("unexpected templateId: %d", hdr.TemplateId)
    }

    var msg quote.OBL50Event
    // many generators provide WrapForDecode; here assume we can read the fixed block then groups
    if err := msg.Decode(reader, int(hdr.BlockLength), int(hdr.Version)); err != nil {
        return nil, fmt.Errorf("decode OBL50: %w", err)
    }

    return &msg, nil
}

func main() {
    book := NewOrderBook()

    dialer := websocket.Dialer{
        HandshakeTimeout: 10 * time.Second,
        EnableCompression: false,
    }

    conn, _, err := dialer.Dial(WSURL, nil)
    if err != nil {
        log.Fatalf("dial: %v", err)
    }
    defer conn.Close()

    // subscribe
    sub := map[string]interface{}{
        "op":   "subscribe",
        "args": []string{CHANNEL},
    }
    if err := conn.WriteJSON(sub); err != nil {
        log.Fatalf("subscribe: %v", err)
    }

    for {
        mt, data, err := conn.ReadMessage()
        if err != nil {
            log.Fatalf("read: %v", err)
        }

        if mt == websocket.TextMessage {
            // control JSON or pong etc
            var m map[string]interface{}
            _ = json.Unmarshal(data, &m)
            continue
        }

        // if server wraps SBE in per-message deflate, you may need to decompress:
        if isDeflatedFrame(data) {
            data, err = inflate(data)
            if err != nil {
                log.Printf("inflate error: %v", err)
                continue
            }
        }

        msg, err := decodeOBL50(data)
        if err != nil {
            log.Printf("decode error: %v", err)
            continue
        }

        u := msg.U
        pkgType := msg.PkgType // 0 snapshot, 1 delta
        pxExp := msg.PriceExponent
        szExp := msg.SizeExponent

        // extract levels
        var asks, bids [][2]float64
        for _, a := range msg.Asks {
            p := toReal(a.Price, pxExp)
            sz := toReal(a.Size, szExp)
            asks = append(asks, [2]float64{p, sz})
        }
        for _, b := range msg.Bids {
            p := toReal(b.Price, pxExp)
            sz := toReal(b.Size, szExp)
            bids = append(bids, [2]float64{p, sz})
        }

        // continuity logic:
        if u == 1 {
            // service restart / precision change snapshot
            book.Asks.SnapshotFrom(asks)
            book.Bids.SnapshotFrom(bids)
            book.LastU = 1
            fmt.Printf("[RESET SNAPSHOT] u=%d seq=%d symbol=%s\n", u, msg.Seq, msg.Symbol)
            continue
        }

        if book.LastU != 0 && u != book.LastU+1 {
            log.Printf("[WARN] u jump: lastU=%d newU=%d – consider resync", book.LastU, u)
        }

        if pkgType == quote.PkgTypeEnum_SNAPSHOT {
            book.Asks.SnapshotFrom(asks)
            book.Bids.SnapshotFrom(bids)
        } else {
            for _, lv := range asks {
                book.Asks.Apply(lv[0], lv[1])
            }
            for _, lv := range bids {
                book.Bids.Apply(lv[0], lv[1])
            }
        }

        book.LastU = u
        bestBid := book.Bids.BestBid()
        bestAsk := book.Asks.BestAsk()
        fmt.Printf("u=%d pkgType=%d bestBid=%.5f bestAsk=%.5f\n", u, pkgType, bestBid, bestAsk)
    }
}

// helpers (optional, depending on ws framing)
func isDeflatedFrame(data []byte) bool {
    // placeholder: detect by protocol; many setups know from WS sub-protocol
    return false
}

func inflate(data []byte) ([]byte, error) {
    r := flate.NewReader(bytes.NewReader(data))
    defer r.Close()

    var out bytes.Buffer
    if _, err := out.ReadFrom(r); err != nil {
        return nil, err
    }
    return out.Bytes(), nil
}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}











[](/docs/v5/sbe/bbo/sbe-bbo){.pagination-nav__link .pagination-nav__link--prev}


Previous



SBE BBO Integration


[](/docs/v5/sbe/sbe-public-trade){.pagination-nav__link .pagination-nav__link--next}


Next



SBE Public Trade Integration







-   [Overview](#overview){.table-of-contents__link .toc-highlight}
-   [Flow](#flow){.table-of-contents__link .toc-highlight}
    -   [Ping / Pong (JSON control frames)](#ping--pong-json-control-frames){.table-of-contents__link .toc-highlight}
    -   [Subscribe](#subscribe){.table-of-contents__link .toc-highlight}
-   [SBE XML Template (L50 OB)](#sbe-xml-template-l50-ob){.table-of-contents__link .toc-highlight}
-   [Field Reference](#field-reference){.table-of-contents__link .toc-highlight}
    -   [Asks Group](#asks-group){.table-of-contents__link .toc-highlight}
    -   [Bids Group](#bids-group){.table-of-contents__link .toc-highlight}
-   [Order Book Update Logic](#order-book-update-logic){.table-of-contents__link .toc-highlight}
    -   [Rules for the u (Update ID) Field](#rules-for-the-u-update-id-field){.table-of-contents__link .toc-highlight}
        -   [Behavior of `u`](#behavior-of-u){.table-of-contents__link .toc-highlight}
        -   [Continuity Validation](#continuity-validation){.table-of-contents__link .toc-highlight}
    -   [Rules for Order Book Maintenance](#rules-for-order-book-maintenance){.table-of-contents__link .toc-highlight}
        -   [First Message of connection and reconnection](#first-message-of-connection-and-reconnection){.table-of-contents__link .toc-highlight}
        -   [Snapshot Handling](#snapshot-handling){.table-of-contents__link .toc-highlight}
        -   [Delta Handling](#delta-handling){.table-of-contents__link .toc-highlight}
    -   [Example Push Update](#example-push-update){.table-of-contents__link .toc-highlight}
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



