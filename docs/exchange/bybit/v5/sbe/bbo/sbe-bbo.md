---
title: "SBE BBO Integration"
url: "https://bybit-exchange.github.io/docs/v5/sbe/bbo/sbe-bbo"
source: "https://bybit-exchange.github.io/docs/"
fetched: "2026-03-10T08:57:24+00:00"
---

# SBE BBO Integration

Source: [https://bybit-exchange.github.io/docs/v5/sbe/bbo/sbe-bbo](https://bybit-exchange.github.io/docs/v5/sbe/bbo/sbe-bbo)


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

-   [English](/docs/v5/sbe/bbo/sbe-bbo){.dropdown__link .dropdown__link--active target="_self" rel="noopener noreferrer" lang="en"}
-   [中文（台灣）](/docs/zh-TW/v5/sbe/bbo/sbe-bbo){.dropdown__link target="_self" rel="noopener noreferrer" lang="zh-TW"}



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
        [BBO](/docs/v5/sbe/bbo/sbe-bbo){.menu__link .menu__link--sublist .menu__link--sublist-caret .menu__link--active aria-expanded="true" tabindex="0"}
        

        -   [SBE BBO Integration](/docs/v5/sbe/bbo/sbe-bbo){.menu__link .menu__link--active aria-current="page" tabindex="0"}

    -   
        [Level 50](/docs/v5/sbe/level-50/sbe-level-50){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false" tabindex="0"}
        

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
-   [BBO]{.breadcrumbs__link}
-   [SBE BBO Integration]{.breadcrumbs__link itemprop="name"}


On this page



<div>

# SBE BBO Integration

</div>



## Overview[​](#overview "Direct link to heading"){.hash-link} 

-   **Channel:** private MMWS only (not available on public WS).
-   **Topic:** `ob.rpi.1.sbe.{symbol}`.
-   **Format:** SBE binary frames (`opcode = 2`), little-endian.
-   **Depth:** Real-time Level 1 Orderbook data.
-   **Units:** timestamps in microseconds (µs); price/size are mantissas with exponents.

------------------------------------------------------------------------

## Connection[​](#connection "Direct link to heading"){.hash-link} 

-   Field `u` increases **monotonically**.
-   Field `u` **does not reset**, unless there is a system restart or precision change, `u` would be reset to **1**.
-   If BBO does not change within **3 seconds**, the system will push a **snapshot** again, and the field `u` will be **the same as** in the previous message.
-   Under extreme market conditions, both the producer and the publisher may apply **merge and drop** strategies; therefore, continuity of `u` is **not guaranteed**.

## Subscription Flow[​](#subscription-flow "Direct link to heading"){.hash-link} 

### Send subscription request[​](#send-subscription-request "Direct link to heading"){.hash-link} 



``` {.prism-code .language-json .codeBlock_bY9V .thin-scrollbar tabindex="0"}
{
  "op": "subscribe",
  "args": ["ob.rpi.1.sbe.BTCUSDT"]
}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}




-   Topic format: `ob.rpi.1.sbe.<symbol>`
-   Example symbols: `BTCUSDT`, `ETHUSDT`, etc.

### Subscription confirmation[​](#subscription-confirmation "Direct link to heading"){.hash-link} 



``` {.prism-code .language-json .codeBlock_bY9V .thin-scrollbar tabindex="0"}
{
  "success": true,
  "ret_msg": "",
  "conn_id": "d30fdpbboasp1pjbe7r0",
  "req_id": "xxx",
  "op": "subscribe"
}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}




### Receive data[​](#receive-data "Direct link to heading"){.hash-link} 



``` {.prism-code .language-text .codeBlock_bY9V .thin-scrollbar tabindex="0"}
b"R\x00 N\x01\x00\x00\x00\xdb\x84\xd0k\x00\x00\x00\x00f\xb7\x003\x99\x01\x00\x00\x02\x06\xa1\xcb\xa1\x00\x00\x00\x00\x00\xe7\xda\x0b\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\xc8\xa1\x00\x00\x00\x00\x00 N\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x008\x01\x00\x00\x00\x00\x00\x00v\xba\x003\x99\x01\x00\x00\x07BTCUSDT"
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}




### Decode example[​](#decode-example "Direct link to heading"){.hash-link} 



``` {.prism-code .language-json .codeBlock_bY9V .thin-scrollbar tabindex="0"}
{
  "header": {
    "block_length": 82,
    "template_id": 20000,
    "schema_id": 1,
    "version": 0
  },
  "seq": 1808827611,
  "cts": 1757497309030,
  "price_exponent": 2,
  "size_exponent": 6,
  "ask_price": 1060342500,
  "ask_normal_size": 776935000000,
  "ask_rpi_size": 0,
  "bid_price": 1060250000,
  "bid_normal_size": 20000000000,
  "bid_rpi_size": 0,
  "u": 312,
  "ts": 1757497309814,
  "symbol": "BTCUSDT",
  "parsed_length": 98
}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}




------------------------------------------------------------------------

## SBE Message Structure[​](#sbe-message-structure "Direct link to heading"){.hash-link} 

### SBE XML Schema[​](#sbe-xml-schema "Direct link to heading"){.hash-link} 

-   The `templateId = 20000` identifies the message type.
-   Validate that `templateId = 20000` to confirm it is a Level 1 Orderbook event.
-   [sbe xml template](/docs/v5/sbe/sbe-basic-info#sbe-xml-template)

### Message Structure Details[​](#message-structure-details "Direct link to heading"){.hash-link} 

#### Message Header (8 bytes)[​](#message-header-8-bytes "Direct link to heading"){.hash-link} 

  Field         Type     Size (bytes)   Description
  ------------- -------- -------------- ---------------------
  blockLength   uint16   2              Message body length
  templateId    uint16   2              Fixed = 20000
  schemaId      uint16   2              Fixed = 1
  version       uint16   2              Fixed = 0

#### Message Body (`BestOBRpiEvent`)[​](#message-body-bestobrpievent "Direct link to heading"){.hash-link} 

  ID   Field            Type     Description
  ---- ---------------- -------- ---------------------------------
  1    ts               int64    Snapshot timestamp (µs)
  2    seq              int64    Unique message sequence number
  3    cts              int64    Trade timestamp (µs)
  4    u                int64    Update ID
  5    askNormalPrice   int64    Best ask price mantissa
  6    askNormalSize    int64    Best ask size (normal) mantissa
  7    askRpiPrice      int64    Best RPI ask price mantissa
  8    askRpiSize       int64    Best RPI ask size mantissa
  9    bidNormalPrice   int64    Best bid price mantissa
  10   bidNormalSize    int64    Best bid size (normal) mantissa
  11   bidRpiPrice      int64    Best bid price (RPI) mantissa
  12   bidRpiSize       int64    Best bid size (RPI) mantissa
  13   priceExponent    int8     Price exponent
  14   sizeExponent     int8     Size exponent
  55   symbol           varStr   Trading pair (e.g., `BTCUSDT`)

------------------------------------------------------------------------

## Optimisation[​](#optimisation "Direct link to heading"){.hash-link} 

New field definitions (sell side as example; buy side is analogous):

  Field            Definition
  ---------------- -----------------------------
  askNormalPrice   No RPI order best ask price
  askNormalSize    No RPI order best ask size
  askRpiPrice      RPI order best ask price
  askRpiSize       RPI order best ask size

The current logic might result in:

  Price   normalQty   rpiQty
  ------- ----------- --------
  1000    0           100

This means that users without RPI permissions won\'t know at what price they can take their orders, making this message useless. To address this, we adjust the message content as follows.

#### Case 1: `askNormalSize != 0 && askRpiSize != 0`[​](#case-1-asknormalsize--0--askrpisize--0 "Direct link to heading"){.hash-link} 

This is a normal response based on the actual situation. This case conveys the same meaning as the original message.

Example:

  Field            Definition                    Example
  ---------------- ----------------------------- ---------
  askNormalPrice   No RPI order best ask price   1000
  askNormalSize    No RPI order best ask size    200
  askRpiPrice      RPI order best ask price      1000
  askRpiSize       RPI order best ask size       300

#### Case 2: `askNormalSize != 0 && askRpiSize == 0`[​](#case-2-asknormalsize--0--askrpisize--0 "Direct link to heading"){.hash-link} 

`askRpiPrice` is assigned the value `askNormalPrice`, and `askRpiSize = 0`.\
In this case, the `askRpiPrice` value will not be searched further.

Example:

  Field            Definition                    Example   Note
  ---------------- ----------------------------- --------- -------------------------------------------------------------------------------
  askNormalPrice   No RPI order best ask price   1000      
  askNormalSize    No RPI order best ask size    200       
  askRpiPrice      RPI order best ask price      1000      This itself has no meaning. The price field is assigned a non-RPI sell price.
  askRpiSize       RPI order best ask size       0         

#### Case 3: `askNormalSize == 0 && askRpiSize != 0`[​](#case-3-asknormalsize--0--askrpisize--0 "Direct link to heading"){.hash-link} 

`askNormalPrice =` the actual non-RPI asking price.\
In this case, `askNormalPrice` is retrieved and returned.

Example:

  Field            Definition                    Example
  ---------------- ----------------------------- ---------
  askNormalPrice   No RPI order best ask price   1200
  askNormalSize    No RPI order best ask size    100
  askRpiPrice      RPI order best ask price      1000
  askRpiSize       RPI order best ask size       20

#### Case 4[​](#case-4 "Direct link to heading"){.hash-link} 

When the market is so bad that there is no liquidity, **no message is pushed**.

------------------------------------------------------------------------

## Integration Example[​](#integration-example "Direct link to heading"){.hash-link} 



``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
import json
import logging
import struct
import threading
import time
from datetime import datetime
from typing import Dict, Any

import websocket

logging.basicConfig(
    filename="logfile_wrapper.log",
    level=logging.INFO,
    format="%(asctime)s %(levelname)s %(message)s",
)

# Change symbol/topic as you wish
TOPIC = "ob.rpi.1.sbe.BTCUSDT"
WS_URL = "wss://stream-testnet.bybits.org/v5/public-sbe/spot"


class SBEBestOBRpiParser:
    """
    Parser for BestOBRpiEvent (template_id = 20000) per XML schema:

    ts(int64), seq(int64), cts(int64), u(int64),
    askNormalPrice(int64), askNormalSize(int64),
    askRpiPrice(int64), askRpiSize(int64),
    bidNormalPrice(int64), bidNormalSize(int64),
    bidRpiPrice(int64), bidRpiSize(int64),
    priceExponent(int8), sizeExponent(int8),
    symbol(varString8)

    All values are little-endian.
    """

    def __init__(self) -> None:
        # Header: blockLength, templateId, schemaId, version
        self.header_fmt = "<HHHH"
        self.header_sz = struct.calcsize(self.header_fmt)

        # 12 x int64 + 2 x int8:
        # ts, seq, cts, u,
        # askNormalPrice, askNormalSize, askRpiPrice, askRpiSize,
        # bidNormalPrice, bidNormalSize, bidRpiPrice, bidRpiSize,
        # priceExponent, sizeExponent
        self.body_fmt = "<" + ("q" * 12) + "bb"
        self.body_sz = struct.calcsize(self.body_fmt)

        self.target_template_id = 20000

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
    def _parse_varstring8(data: bytes, offset: int) -> tuple[str, int]:
        if offset + 1 > len(data):
            raise ValueError("insufficient data for varString8 length")

        (length,) = struct.unpack_from("<B", data, offset)
        offset += 1

        if offset + length > len(data):
            raise ValueError("insufficient data for varString8 bytes")

        s = data[offset : offset + length].decode("utf-8")
        offset += length
        return s, offset

    @staticmethod
    def _apply_exponent(value: int, exponent: int) -> float:
        # Exponent is for decimal point positioning.
        # If exponent = 2 and value=1060342500 -> 10603425.00
        return value / (10 ** exponent) if exponent >= 0 else value * (
            10 ** (-exponent)
        )

    def parse(self, data: bytes) -> Dict[str, Any]:
        hdr = self._parse_header(data)
        if hdr["template_id"] != self.target_template_id:
            raise NotImplementedError(
                f"unsupported template_id={hdr['template_id']}"
            )

        if len(data) < self.header_sz + self.body_sz:
            raise ValueError("insufficient data for BestOBRpiEvent body")

        fields = struct.unpack_from(self.body_fmt, data, self.header_sz)
        (
            ts,
            seq,
            cts,
            u,
            ask_np_m,
            ask_ns_m,
            ask_rp_m,
            ask_rs_m,
            bid_np_m,
            bid_ns_m,
            bid_rp_m,
            bid_rs_m,
            price_exp,
            size_exp,
        ) = fields

        offset = self.header_sz + self.body_sz
        symbol, offset = self._parse_varstring8(data, offset)

        # Apply exponents
        ask_np = self._apply_exponent(ask_np_m, price_exp)
        ask_ns = self._apply_exponent(ask_ns_m, size_exp)
        ask_rp = self._apply_exponent(ask_rp_m, price_exp)
        ask_rs = self._apply_exponent(ask_rs_m, size_exp)
        bid_np = self._apply_exponent(bid_np_m, price_exp)
        bid_ns = self._apply_exponent(bid_ns_m, size_exp)
        bid_rp = self._apply_exponent(bid_rp_m, price_exp)
        bid_rs = self._apply_exponent(bid_rs_m, size_exp)

        return {
            "header": hdr,
            "ts": ts,
            "seq": seq,
            "cts": cts,
            "u": u,
            "price_exponent": price_exp,
            "size_exponent": size_exp,
            "symbol": symbol,
            # Normal book (best)
            "ask_normal_price": ask_np,
            "ask_normal_size": ask_ns,
            "bid_normal_price": bid_np,
            "bid_normal_size": bid_ns,
            # RPI book (best)
            "ask_rpi_price": ask_rp,
            "ask_rpi_size": ask_rs,
            "bid_rpi_price": bid_rp,
            "bid_rpi_size": bid_rs,
            "parsed_length": offset,
        }


parser = SBEBestOBRpiParser()


# --------------------------- WebSocket handlers ---------------------------

def on_message(ws, message):
    try:
        # Binary SBE frames; text frames for control/acks/errors
        if isinstance(message, (bytes, bytearray)):
            decoded = parser.parse(message)
            logging.info(
                "SBE %s seq=%s u=%s "
                "NORM bid=%.8f@%.8f ask=%.8f@%.8f "
                "RPI bid=%.8f@%.8f ask=%.8f@%.8f ts=%s",
                decoded["symbol"],
                decoded["seq"],
                decoded["u"],
                decoded["bid_normal_price"],
                decoded["bid_normal_size"],
                decoded["ask_normal_price"],
                decoded["ask_normal_size"],
                decoded["bid_rpi_price"],
                decoded["bid_rpi_size"],
                decoded["ask_rpi_price"],
                decoded["ask_rpi_size"],
                decoded["ts"],
            )
            print(
                f"{decoded['symbol']} u={decoded['u']} "
                f"NORM: {decoded['bid_normal_price']:.8f} x {decoded['bid_normal_size']:.8f} "
                f"| {decoded['ask_normal_price']:.8f} x {decoded['ask_normal_size']:.8f} "
                f"RPI: {decoded['bid_rpi_price']:.8f} x {decoded['bid_rpi_size']:.8f} "
                f"| {decoded['ask_rpi_price']:.8f} x {decoded['ask_rpi_size']:.8f} "
                f"(seq={decoded['seq']} ts={decoded['ts']})"
            )
        else:
            try:
                obj = json.loads(message)
                logging.info("TEXT %s", obj)
                print(obj)
            except json.JSONDecodeError:
                logging.warning("non-JSON text frame: %r", message)
    except Exception as e:
        logging.exception("decode error: %s", e)
        print("decode error:", e)


def on_error(ws, error):
    print("WS error:", error)
    logging.error("WS error: %s", error)


def on_close(ws, *_):
    print("### connection closed ###")
    logging.info("connection closed")


def on_open(ws):
    print("opened")
    sub = {"op": "subscribe", "args": [TOPIC]}
    ws.send(json.dumps(sub))
    print("subscribed:", TOPIC)

    threading.Thread(target=ping_per, args=(ws,), daemon=True).start()
    threading.Thread(target=manage_subscription, args=(ws,), daemon=True).start()


def manage_subscription(ws):
    # demo: unsubscribe/resubscribe once
    time.sleep(20)
    ws.send(json.dumps({"op": "unsubscribe", "args": [TOPIC]}))
    print("unsubscribed:", TOPIC)
    time.sleep(5)
    ws.send(json.dumps({"op": "subscribe", "args": [TOPIC]}))
    print("resubscribed:", TOPIC)


def ping_per(ws):
    while True:
        try:
            ws.send(json.dumps({"op": "ping"}))
        except Exception:
            return
        time.sleep(10)


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











[](/docs/v5/sbe/sbe-basic-info){.pagination-nav__link .pagination-nav__link--prev}


Previous



SBE Basic Information


[](/docs/v5/sbe/level-50/sbe-level-50){.pagination-nav__link .pagination-nav__link--next}


Next



SBE Level 50 Integration







-   [Overview](#overview){.table-of-contents__link .toc-highlight}
-   [Connection](#connection){.table-of-contents__link .toc-highlight}
-   [Subscription Flow](#subscription-flow){.table-of-contents__link .toc-highlight}
    -   [Send subscription request](#send-subscription-request){.table-of-contents__link .toc-highlight}
    -   [Subscription confirmation](#subscription-confirmation){.table-of-contents__link .toc-highlight}
    -   [Receive data](#receive-data){.table-of-contents__link .toc-highlight}
    -   [Decode example](#decode-example){.table-of-contents__link .toc-highlight}
-   [SBE Message Structure](#sbe-message-structure){.table-of-contents__link .toc-highlight}
    -   [SBE XML Schema](#sbe-xml-schema){.table-of-contents__link .toc-highlight}
    -   [Message Structure Details](#message-structure-details){.table-of-contents__link .toc-highlight}
        -   [Message Header (8 bytes)](#message-header-8-bytes){.table-of-contents__link .toc-highlight}
        -   [Message Body (`BestOBRpiEvent`)](#message-body-bestobrpievent){.table-of-contents__link .toc-highlight}
-   [Optimisation](#optimisation){.table-of-contents__link .toc-highlight}
    -   [Case 1: `askNormalSize != 0 && askRpiSize != 0`](#case-1-asknormalsize--0--askrpisize--0){.table-of-contents__link .toc-highlight}
    -   [Case 2: `askNormalSize != 0 && askRpiSize == 0`](#case-2-asknormalsize--0--askrpisize--0){.table-of-contents__link .toc-highlight}
    -   [Case 3: `askNormalSize == 0 && askRpiSize != 0`](#case-3-asknormalsize--0--askrpisize--0){.table-of-contents__link .toc-highlight}
    -   [Case 4](#case-4){.table-of-contents__link .toc-highlight}
-   [Integration Example](#integration-example){.table-of-contents__link .toc-highlight}












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



