---
title: "Pilot Features"
url: "https://bybit-exchange.github.io/docs/pilot-feature"
source: "https://bybit-exchange.github.io/docs/"
fetched: "2026-03-10T08:54:13+00:00"
---

# Pilot Features

Source: [https://bybit-exchange.github.io/docs/pilot-feature](https://bybit-exchange.github.io/docs/pilot-feature)


[Skip to main content](#){.skipToContent_fXgn}




![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdib3g9IjAgMCAzMCAzMCIgYXJpYS1oaWRkZW49InRydWUiPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMiIgLz48L3N2Zz4=)

[](/docs/){.navbar__brand}


![Bybit Logo](/docs/img/logo_lightmode.png){.themedImage_ToTc .themedImage--light_HNdA}![Bybit Logo](/docs/img/logo_darkmode.png){.themedImage_ToTc .themedImage--dark_i4oU}


[V5 API](/docs/v5/guide){.navbar__item .navbar__link}[P2P Trading](/docs/p2p/guide){.navbar__item .navbar__link}[Bybit Pay![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://bybit-exchange.github.io/pay-docs){.navbar__item .navbar__link target="_blank" rel="noopener noreferrer" docid="bybit_pay"}[Tax API V3](/docs/v3/intro){.navbar__item .navbar__link}




[Extras](#){.navbar__link aria-haspopup="true" aria-expanded="false" role="button"}

-   [Pilot Features](/docs/pilot-feature){.dropdown__link .dropdown__link--active aria-current="page"}
-   [Changelog](/docs/changelog/v5){.dropdown__link}
-   [API Explorer](/docs/api-explorer/v5/category){.dropdown__link}
-   [FAQ](/docs/faq){.dropdown__link}



[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJpY29uTGFuZ3VhZ2VfbmxYayI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTIuODcgMTUuMDdsLTIuNTQtMi41MS4wMy0uMDNjMS43NC0xLjk0IDIuOTgtNC4xNyAzLjcxLTYuNTNIMTdWNGgtN1YySDh2MkgxdjEuOTloMTEuMTdDMTEuNSA3LjkyIDEwLjQ0IDkuNzUgOSAxMS4zNSA4LjA3IDEwLjMyIDcuMyA5LjE5IDYuNjkgOGgtMmMuNzMgMS42MyAxLjczIDMuMTcgMi45OCA0LjU2bC01LjA5IDUuMDJMNCAxOWw1LTUgMy4xMSAzLjExLjc2LTIuMDR6TTE4LjUgMTBoLTJMMTIgMjJoMmwxLjEyLTNoNC43NUwyMSAyMmgybC00LjUtMTJ6bS0yLjYyIDdsMS42Mi00LjMzTDE5LjEyIDE3aC0zLjI0eiIgLz48L3N2Zz4=){.iconLanguage_nlXk}English](#){.navbar__link aria-haspopup="true" aria-expanded="false" role="button"}

-   [English](/docs/pilot-feature){.dropdown__link .dropdown__link--active target="_self" rel="noopener noreferrer" lang="en"}
-   [中文（台灣）](/docs/zh-TW/pilot-feature){.dropdown__link target="_self" rel="noopener noreferrer" lang="zh-TW"}



![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgY2xhc3M9ImxpZ2h0VG9nZ2xlSWNvbl9weWhSIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiw5YzEuNjUsMCwzLDEuMzUsMywzcy0xLjM1LDMtMywzcy0zLTEuMzUtMy0zUzEwLjM1LDksMTIsOSBNMTIsN2MtMi43NiwwLTUsMi4yNC01LDVzMi4yNCw1LDUsNXM1LTIuMjQsNS01IFMxNC43Niw3LDEyLDdMMTIsN3ogTTIsMTNsMiwwYzAuNTUsMCwxLTAuNDUsMS0xcy0wLjQ1LTEtMS0xbC0yLDBjLTAuNTUsMC0xLDAuNDUtMSwxUzEuNDUsMTMsMiwxM3ogTTIwLDEzbDIsMGMwLjU1LDAsMS0wLjQ1LDEtMSBzLTAuNDUtMS0xLTFsLTIsMGMtMC41NSwwLTEsMC40NS0xLDFTMTkuNDUsMTMsMjAsMTN6IE0xMSwydjJjMCwwLjU1LDAuNDUsMSwxLDFzMS0wLjQ1LDEtMVYyYzAtMC41NS0wLjQ1LTEtMS0xUzExLDEuNDUsMTEsMnogTTExLDIwdjJjMCwwLjU1LDAuNDUsMSwxLDFzMS0wLjQ1LDEtMXYtMmMwLTAuNTUtMC40NS0xLTEtMUMxMS40NSwxOSwxMSwxOS40NSwxMSwyMHogTTUuOTksNC41OGMtMC4zOS0wLjM5LTEuMDMtMC4zOS0xLjQxLDAgYy0wLjM5LDAuMzktMC4zOSwxLjAzLDAsMS40MWwxLjA2LDEuMDZjMC4zOSwwLjM5LDEuMDMsMC4zOSwxLjQxLDBzMC4zOS0xLjAzLDAtMS40MUw1Ljk5LDQuNTh6IE0xOC4zNiwxNi45NSBjLTAuMzktMC4zOS0xLjAzLTAuMzktMS40MSwwYy0wLjM5LDAuMzktMC4zOSwxLjAzLDAsMS40MWwxLjA2LDEuMDZjMC4zOSwwLjM5LDEuMDMsMC4zOSwxLjQxLDBjMC4zOS0wLjM5LDAuMzktMS4wMywwLTEuNDEgTDE4LjM2LDE2Ljk1eiBNMTkuNDIsNS45OWMwLjM5LTAuMzksMC4zOS0xLjAzLDAtMS40MWMtMC4zOS0wLjM5LTEuMDMtMC4zOS0xLjQxLDBsLTEuMDYsMS4wNmMtMC4zOSwwLjM5LTAuMzksMS4wMywwLDEuNDEgczEuMDMsMC4zOSwxLjQxLDBMMTkuNDIsNS45OXogTTcuMDUsMTguMzZjMC4zOS0wLjM5LDAuMzktMS4wMywwLTEuNDFjLTAuMzktMC4zOS0xLjAzLTAuMzktMS40MSwwbC0xLjA2LDEuMDYgYy0wLjM5LDAuMzktMC4zOSwxLjAzLDAsMS40MXMxLjAzLDAuMzksMS40MSwwTDcuMDUsMTguMzZ6IiAvPjwvc3ZnPg==){.lightToggleIcon_pyhR}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgY2xhc3M9ImRhcmtUb2dnbGVJY29uX3dmZ1IiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTkuMzcsNS41MUM5LjE5LDYuMTUsOS4xLDYuODIsOS4xLDcuNWMwLDQuMDgsMy4zMiw3LjQsNy40LDcuNGMwLjY4LDAsMS4zNS0wLjA5LDEuOTktMC4yN0MxNy40NSwxNy4xOSwxNC45MywxOSwxMiwxOSBjLTMuODYsMC03LTMuMTQtNy03QzUsOS4wNyw2LjgxLDYuNTUsOS4zNyw1LjUxeiBNMTIsM2MtNC45NywwLTksNC4wMy05LDlzNC4wMyw5LDksOXM5LTQuMDMsOS05YzAtMC40Ni0wLjA0LTAuOTItMC4xLTEuMzYgYy0wLjk4LDEuMzctMi41OCwyLjI2LTQuNCwyLjI2Yy0yLjk4LDAtNS40LTIuNDItNS40LTUuNGMwLTEuODEsMC44OS0zLjQyLDIuMjYtNC40QzEyLjkyLDMuMDQsMTIuNDYsMywxMiwzTDEyLDN6IiAvPjwvc3ZnPg==){.darkToggleIcon_wfgR}



[![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGNsYXNzPSJEb2NTZWFyY2gtU2VhcmNoLUljb24iIHZpZXdib3g9IjAgMCAyMCAyMCI+PHBhdGggZD0iTTE0LjM4NiAxNC4zODZsNC4wODc3IDQuMDg3Ny00LjA4NzctNC4wODc3Yy0yLjk0MTggMi45NDE5LTcuNzExNSAyLjk0MTktMTAuNjUzMyAwLTIuOTQxOS0yLjk0MTgtMi45NDE5LTcuNzExNSAwLTEwLjY1MzMgMi45NDE4LTIuOTQxOSA3LjcxMTUtMi45NDE5IDEwLjY1MzMgMCAyLjk0MTkgMi45NDE4IDIuOTQxOSA3LjcxMTUgMCAxMC42NTMzeiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPjwvc3ZnPg==){.DocSearch-Search-Icon}[Search]{.DocSearch-Button-Placeholder}]{.DocSearch-Button-Container}[]{.DocSearch-Button-Keys}















On this page



<div>

# Pilot Features

</div>



## Launch USDT Futures and USDT settled Options[​](#launch-usdt-futures-and-usdt-settled-options "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 11 Feb & 12 Feb 2025*
-   Cover: *Unified Trading Account*
-   Details: *Gradully change the settlement currency from USDC to USDT for linear Futures and Options, refer to [announcement](https://announcements.bybit.com/article/upcoming-changes-to-settlement-currencies-for-bybit-s-options-and-linear-expiry-futures-contracts-blt7a38862820dfad8b/){target="_blank" rel="noopener noreferrer"}*

------------------------------------------------------------------------

## Inverse Contract Upgrade[​](#inverse-contract-upgrade "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 13 Sep 2024 (gradully released)*
-   Cover: *Unified Trading Account*
-   Details: *1. Upgrade inverse derivatives account to Unified Trading.\
    2. Refer to [Different Account Modes](/docs/v5/acct-mode)*

------------------------------------------------------------------------

## Open API Supports Demo Trading[​](#open-api-supports-demo-trading "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 3 Apr 2024*
-   Cover: *demo trading account*
-   Details: *You can refer to this [page](/docs/v5/demo) to start demo trading API*

------------------------------------------------------------------------

## Websocket Place Order Feature[​](#websocket-place-order-feature "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - TBD*
-   Cover: *UTA Spot/Linear/Option*
-   Details: *You can use [websocket](/docs/v5/websocket/trade/guideline) to place/amend/cancel the order*

------------------------------------------------------------------------

## Batch APIs are ready for Spot[​](#batch-apis-are-ready-for-spot "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 5 Mar 2024*
-   Cover: *UTA Spot*
-   Details: *You can use batch API to start Spot trading*

------------------------------------------------------------------------

## Spot supports bidirectional Tp/Sl[​](#spot-supports-bidirectional-tpsl "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 15 Jan 2024*
-   Cover: *UTA Spot*
-   Details: *You can set takeProfit, stopLoss when creating Spot order*

------------------------------------------------------------------------

## Spot Hedging Feature Is Available[​](#spot-hedging-feature-is-available "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 16 Nov 2023*
-   Cover: *Unified account - Portfolio Margin mode*
-   Details: *You can enable Spot Hedging function for Portfolio Margin via [Set Spot Hedging](/docs/v5/account/set-spot-hedge)*

------------------------------------------------------------------------

## Spot Supports Amend Order[​](#spot-supports-amend-order "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 1 Nov 2023*
-   Cover: *Classic & Unified account Spot*
-   Details: *You can amend your spot orders via [Amend Order](/docs/v5/order/amend-order)*

------------------------------------------------------------------------

## Unified Account Spot Stop Orders logic is changed[​](#unified-account-spot-stop-orders-logic-is-changed "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 26 Oct 2023 (grey scale period, all are effective est. 2th Nov 2023)*
-   Cover: *Unified account Spot Stop Orders*
-   Details: *Once the TP/SL order or Conditional order is triggered, the order ID will be kept the same*

------------------------------------------------------------------------

## UTA Pro Batch Feature[​](#uta-pro-batch-feature "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 31 Aug 2023*
-   Cover: *UTA Pro, USDT Perpetual, USDC Perpetual & USDC Futures (linear)*
-   Details: *UTA Pro user can batch create/amend/cancel linear orders*

Sample code

<div>



-   Batch Create
-   Batch Amend
-   Batch Cancel





``` {.prism-code .language-http .codeBlock_bY9V .thin-scrollbar tabindex="0"}
POST https://api-testnet.bybit.com/v5/order/create-batch

> Request Body
{
    "category": "linear",
    "request": [
        {

            "symbol": "BTCUSDT",
            "orderType": "Limit",
            "side": "Buy",
            "qty": "0.1",
            "price": "25500",
            "timeInForce": "GTC",
            "orderLinkId": "test-03",
            "reduceOnly": false,
            "tpslMode": "Full",
            "takeProfit": "26300",
            "stopLoss": "24800",
            "triggerDirection": null,
            "triggerPrice": null,
            "triggerBy": null,
            "positioIdx": 0,
            "smpType": null,
            "tpLimitPrice": null,
            "slLimitPrice": null,
            "slOrderType": null,
            "tpOrderType": null

        },
        {

            "symbol": "ETHUSDT",
            "orderType": "Limit",
            "side": "Buy",
            "qty": "0.1",
            "price": "1550",
            "timeInForce": "GTC",
            "orderLinkId": "test-04",
            "reduceOnly": false,
            "tpslMode": "Full",
            "takeProfit": "1680",
            "stopLoss": "1490",
            "triggerDirection": null,
            "triggerPrice": null,
            "triggerBy": null,
            "positioIdx": 0,
            "smpType": null,
            "tpLimitPrice": null,
            "slLimitPrice": null,
            "slOrderType": null,
            "tpOrderType": null
        }
    ]
}
> Response
{
    "retCode": 0,
    "retMsg": "OK",
    "result": {
        "list": [
            {
                "category": "linear",
                "symbol": "BTCUSDT",
                "orderId": "6afd7e83-7176-4f73-93e0-44a8f2babd14",
                "orderLinkId": "test-03",
                "createAt": "1693212677410"
            },
            {
                "category": "linear",
                "symbol": "ETHUSDT",
                "orderId": "9eeef30c-c682-42b2-a4a7-7e403db8506c",
                "orderLinkId": "test-04",
                "createAt": "1693212677410"
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
    "time": 1693212677411
}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}








``` {.prism-code .language-http .codeBlock_bY9V .thin-scrollbar tabindex="0"}
POST https://api-testnet.bybit.com/v5/order/amend-batch

> Request Body
{
    "category": "linear",
    "request": [
        {
            "symbol": "BTCUSDT",
            "orderType": "Limit",
            "qty": "0.05",
            "price": "25800",
            "orderId": "6afd7e83-7176-4f73-93e0-44a8f2babd14"
        },
        {
            "symbol": "ETHUSDT",
            "orderType": "Limit",
            "qty": "0.05",
            "price": "1495",
            "orderId": "9eeef30c-c682-42b2-a4a7-7e403db8506c"
        }
    ]
}
> Response
{
    "retCode": 0,
    "retMsg": "OK",
    "result": {
        "list": [
            {
                "category": "linear",
                "symbol": "BTCUSDT",
                "orderId": "6afd7e83-7176-4f73-93e0-44a8f2babd14",
                "orderLinkId": "test-03"
            },
            {
                "category": "linear",
                "symbol": "ETHUSDT",
                "orderId": "9eeef30c-c682-42b2-a4a7-7e403db8506c",
                "orderLinkId": "test-04"
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
    "time": 1693212802143
}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}








``` {.prism-code .language-http .codeBlock_bY9V .thin-scrollbar tabindex="0"}
POST https://api-testnet.bybit.com/v5/order/cancel-batch

> Request Body
{
    "category": "linear",
    "request": [
        {
            "symbol": "BTCUSDT",
            "orderId": "6afd7e83-7176-4f73-93e0-44a8f2babd14"
        },
        {
            "symbol": "ETHUSDT",
            "orderId": "9eeef30c-c682-42b2-a4a7-7e403db8506c"
        }
    ]
}
> Response
{
    "retCode": 0,
    "retMsg": "OK",
    "result": {
        "list": [
            {
                "category": "linear",
                "symbol": "BTCUSDT",
                "orderId": "6afd7e83-7176-4f73-93e0-44a8f2babd14",
                "orderLinkId": "test-03"
            },
            {
                "category": "linear",
                "symbol": "ETHUSDT",
                "orderId": "9eeef30c-c682-42b2-a4a7-7e403db8506c",
                "orderLinkId": "test-04"
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
    "time": 1693212965773
}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}








</div>

------------------------------------------------------------------------

## Add Customised Disconnection Configuration[​](#add-customised-disconnection-configuration "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 16 Aug 2023*
-   Cover: *All kinds of accounts - V5 Websocket Private Connection*
-   Details: *Set `/v5/private?max_active_time=`, supported range is from `30s` to `600s`. For more info, please check [here](/docs/v5/ws/connect)*

------------------------------------------------------------------------

## Adjust error code[​](#adjust-error-code "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 14 Aug 2023*
-   Cover: [Toggle Margin Trade](/docs/v5/spot-margin-uta/switch-mode), [Set Leverage](/docs/v5/spot-margin-uta/set-leverage), [Set Margin Mode](/docs/v5/account/set-margin-mode)[Set Margin Mode](https://bybit-exchange.github.io/docs-legacy/usdc/option/#t-assetinfo){target="_blank" rel="noopener noreferrer"}
-   Details: If ins loan account has a liquidation, the error while calling relative API is changed.

  Old error code   New error code   Msg
  ---------------- ---------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------
  ~~3400128~~      3200320          Operations Restriction: The current LTV ratio of your Institutional Loan has hit the liquidation threshold. Assets in your account are being liquidated.
  ~~176036~~       3200320          Operations Restriction: The current LTV ratio of your Institutional Loan has hit the liquidation threshold. Assets in your account are being liquidated.

------------------------------------------------------------------------

## UTA borrow quota is shared across main-sub uids[​](#uta-borrow-quota-is-shared-across-main-sub-uids "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 11 Aug 2023*
-   Cover: *UTA account*
-   Details: *Before each uid has an independent borrow quota, but now, main-sub uids share the same borrow quota*

------------------------------------------------------------------------

## UTA user can set collateral coin[​](#uta-user-can-set-collateral-coin "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 10 Aug 2023*
-   Cover: *UTA account*
-   Details: *User can set collateral coin via [API](/docs/v5/account/set-collateral)*

------------------------------------------------------------------------

## User can upgrade account to UTA Pro manually[​](#user-can-upgrade-account-to-uta-pro-manually "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 08 Aug 2023*
-   Cover: *Normal account, UTA account*
-   Details: *User can upgrade account to UTA Pro via [API](/docs/v5/account/upgrade-unified-account)*

------------------------------------------------------------------------

## OpenAPI supports Spot Conditional Order[​](#openapi-supports-spot-conditional-order "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 07 Aug 2023*
-   Cover: *Normal account, UTA account*
-   Details: *User can place Spot conditional order*

------------------------------------------------------------------------

## UTA Supports Institutional Lending[​](#uta-supports-institutional-lending "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 24 July 2023*
-   Cover: *UTA*
-   Details: *UTA can have OTC loan*

------------------------------------------------------------------------

## Support Funding For USDC Perp[​](#support-funding-for-usdc-perp "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 13 July 2023*
-   Cover: *UTA USDC Perpetual*
-   Details: *There was no `execType=Funding` in [Get Trade History](/docs/v5/order/execution) and websocket `execution` [stream](/docs/v5/websocket/private/execution) update. Now you will it.*

------------------------------------------------------------------------

## New Copy Trading[​](#new-copy-trading "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 24 June 2023*
-   Cover: *Copy trading*
-   Details: *Bybit will release uids that allow upgrades in batches starting from 23 June, and if you select to upgrade it, you can only use [V5](/docs/v5/order/create-order) to copy trade*

------------------------------------------------------------------------

## Unified Account Supports Isolated Margin And Hedge Mode[​](#unified-account-supports-isolated-margin-and-hedge-mode "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 1 June 2023*
-   Cover: *Unified trading account only*
-   Details: *Isolated margin mode for UTA is account level. Hedge mode supports USDT perpetual only*

------------------------------------------------------------------------

## New TP/SL[​](#new-tpsl "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 23 May 2023*
-   Cover: *[V5 API](/docs/v5/order/create-order)*
-   Details: ***UTA account**: USDT Perpetual, USDC Perpetual and Futures, Inverse contract, Inverse contract\
    **Normal account**: USDT Perpetual, Inverse contract*

------------------------------------------------------------------------

## [Query Pre-upgrade Records](/docs/v5/pre-upgrade/order-list)[​](#query-pre-upgrade-records "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 27 Apr 2023*
-   Cover: *UTA account*
-   Details: *After upgraded to UTA, you can get those order information before upgraded.*

------------------------------------------------------------------------

## C2C Lending (Abandoned)[​](#c2c-lending-abandoned "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 22 Apr 2023*
-   Cover: *All users (grey scale in the progress right now)*
-   Details: *You can lend your available assets to platform to earn yield*

------------------------------------------------------------------------

## Self Match Prevention[​](#self-match-prevention "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 20 Apr 2023*
-   Cover: read [here](/docs/v5/smp#supported-openapi-versions-and-product-lines)
-   Details: *Support spot, futures and options*

------------------------------------------------------------------------

## Upgrade to UTA without closing positions[​](#upgrade-to-uta-without-closing-positions "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 04 Apr 2023*
-   Cover: *Normal account is upgraded to Unified account*
-   Details: *Do not need to close positions when upgrade. For more details. please refer to [upgrade API information](/docs/v5/account/upgrade-unified-account)*

------------------------------------------------------------------------

## UTA can trade USDC Futures via V5[​](#uta-can-trade-usdc-futures-via-v5 "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 20 Mar 2023*
-   Cover: *Unified trading account users only*
-   Details: *Add USDC Futures trading pair*

------------------------------------------------------------------------

## Institutional Lending V5 API[​](#institutional-lending-v5-api "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 13 Mar 2023*
-   Cover: *Institutional clients who applied OTC*
-   Details: *Clients can get LTV, lends and repayment information*

------------------------------------------------------------------------

## Normal account can trade Spot via V5[​](#normal-account-can-trade-spot-via-v5 "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 10 Mar 2023*
-   Cover: *Normal account*
-   Details: *Use V5 API to trade Spot for normal account*

------------------------------------------------------------------------

## Unify symbol status enums[​](#unify-symbol-status-enums "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 10 Mar 2023*
-   Cover: */v5/market/instruments-info `status` field*
-   Details: *Use `Trading`, `Closed`, `Settling`, `PreLaunch`, `Deliverying`*

------------------------------------------------------------------------

## Release V5 Margin trade (normal account) API[​](#release-v5-margin-trade-normal-account-api "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 3 Mar 2023*
-   Cover: *Normal account can operate margin trade via V5*
-   Details: *able to loan, repay margins with V5*

------------------------------------------------------------------------

## UTA can trade Inverse Contract[​](#uta-can-trade-inverse-contract "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 21 Feb 2023*
-   Cover: *UTA has ability to trade inverse contract via V5 API*
-   Details: *Please note that inverse contract trade is conducted though the CONTRACT wallet*

------------------------------------------------------------------------

## Merge SPOT account into UNIFIED account(IMPORTANT)[​](#merge-spot-account-into-unified-accountimportant "Direct link to heading"){.hash-link} 

-   Available date: *est. March 3rd, 2023*
-   Cover: ***UTA** users only*
-   Details: *You need to adjust withdrawal logic by transfer funds to `FUND` account first, then call withdraw API*

------------------------------------------------------------------------

## Use RSA keys to authenticate[​](#use-rsa-keys-to-authenticate "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 21 Feb 2023*
-   Cover: *All V3 & V5 the endpoints need authentication*
-   Details: *Please refer to this [guideline](/docs/v5/intro#select-your-api-key-type) to have a quick start*

------------------------------------------------------------------------

## Add a new enum type for `execType`[​](#add-a-new-enum-type-for-exectype "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 20 Feb 2023*
-   Cover: *Contract V3 - Websocket private channel - execution topic*
-   Details: *Funding execution stream will be pushed depending on the funding interval of the symbol.*

------------------------------------------------------------------------

## Normal account is supported by V5 API[​](#normal-account-is-supported-by-v5-api "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 9 Feb 2023*
-   Cover: *non-unified account can trade **USDT perpetual** and **Inverse contract***
-   Details: After this release, you may get some **401 errors** or **404 errors** if you have following actions:

**401**: You are using v1/v2 way to pass authentication params:



``` {.prism-code .language-shell .codeBlock_bY9V .thin-scrollbar tabindex="0"}
GET https://api.bybit.com/v5/position/list?api_key=xxx&category=linear&recv_window=5000&symbol=ETHUSDT&timestamp=1675929695887&sign=xxx
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}




> You should pass them in the request header:



``` {.prism-code .language-http .codeBlock_bY9V .thin-scrollbar tabindex="0"}
Host: api-testnet.bybit.com
-H 'X-BAPI-SIGN: XXXXXXXXXX' \
-H 'X-BAPI-API-KEY: xxxxxxxxxxxxxxxxxx' \
-H 'X-BAPI-TIMESTAMP: 1658384431891' \
-H 'X-BAPI-RECV-WINDOW: 5000'
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}




**404**: For below APIs, if you use unsuitable category, i.e., you use Normal account to access `category=option/spot`

-   [Get Open Orders](/docs/v5/order/open-order)
-   [Get Order History](/docs/v5/order/order-list)
-   [Get Position Info](/docs/v5/position)
-   [Get Trade History](/docs/v5/order/execution)

------------------------------------------------------------------------

## Adjust error code[​](#adjust-error-code-1 "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - alive, Mainnet - 19 JAN 2023*
-   Cover: [V5 Set Margin Mode](/docs/v5/account/set-margin-mode) and [V1-USDC Set Margin Mode](https://bybit-exchange.github.io/docs/usdc/option/#t-setmarginmode){target="_blank" rel="noopener noreferrer"}
-   Details:

  Old error code   New error code   Msg
  ---------------- ---------------- ------------------------
  ~~3400045~~      110073           Set margin mode failed
  ~~340099~~       10016            Server error

------------------------------------------------------------------------

## Add level 500 depth[​](#add-level-500-depth "Direct link to heading"){.hash-link} 

-   Available date: *Testnet - 13 JAN 2023, Mainnet - 16 JAN 2023*
-   Cover: *[V5 orderbook](/docs/v5/websocket/public/orderbook)*
-   Details: *Linear contract and inverse contract supports 500 depth, and the push frequency is 100ms.*














-   [Launch USDT Futures and USDT settled Options](#launch-usdt-futures-and-usdt-settled-options){.table-of-contents__link .toc-highlight}
-   [Inverse Contract Upgrade](#inverse-contract-upgrade){.table-of-contents__link .toc-highlight}
-   [Open API Supports Demo Trading](#open-api-supports-demo-trading){.table-of-contents__link .toc-highlight}
-   [Websocket Place Order Feature](#websocket-place-order-feature){.table-of-contents__link .toc-highlight}
-   [Batch APIs are ready for Spot](#batch-apis-are-ready-for-spot){.table-of-contents__link .toc-highlight}
-   [Spot supports bidirectional Tp/Sl](#spot-supports-bidirectional-tpsl){.table-of-contents__link .toc-highlight}
-   [Spot Hedging Feature Is Available](#spot-hedging-feature-is-available){.table-of-contents__link .toc-highlight}
-   [Spot Supports Amend Order](#spot-supports-amend-order){.table-of-contents__link .toc-highlight}
-   [Unified Account Spot Stop Orders logic is changed](#unified-account-spot-stop-orders-logic-is-changed){.table-of-contents__link .toc-highlight}
-   [UTA Pro Batch Feature](#uta-pro-batch-feature){.table-of-contents__link .toc-highlight}
-   [Add Customised Disconnection Configuration](#add-customised-disconnection-configuration){.table-of-contents__link .toc-highlight}
-   [Adjust error code](#adjust-error-code){.table-of-contents__link .toc-highlight}
-   [UTA borrow quota is shared across main-sub uids](#uta-borrow-quota-is-shared-across-main-sub-uids){.table-of-contents__link .toc-highlight}
-   [UTA user can set collateral coin](#uta-user-can-set-collateral-coin){.table-of-contents__link .toc-highlight}
-   [User can upgrade account to UTA Pro manually](#user-can-upgrade-account-to-uta-pro-manually){.table-of-contents__link .toc-highlight}
-   [OpenAPI supports Spot Conditional Order](#openapi-supports-spot-conditional-order){.table-of-contents__link .toc-highlight}
-   [UTA Supports Institutional Lending](#uta-supports-institutional-lending){.table-of-contents__link .toc-highlight}
-   [Support Funding For USDC Perp](#support-funding-for-usdc-perp){.table-of-contents__link .toc-highlight}
-   [New Copy Trading](#new-copy-trading){.table-of-contents__link .toc-highlight}
-   [Unified Account Supports Isolated Margin And Hedge Mode](#unified-account-supports-isolated-margin-and-hedge-mode){.table-of-contents__link .toc-highlight}
-   [New TP/SL](#new-tpsl){.table-of-contents__link .toc-highlight}
-   [Query Pre-upgrade Records](#query-pre-upgrade-records){.table-of-contents__link .toc-highlight}
-   [C2C Lending (Abandoned)](#c2c-lending-abandoned){.table-of-contents__link .toc-highlight}
-   [Self Match Prevention](#self-match-prevention){.table-of-contents__link .toc-highlight}
-   [Upgrade to UTA without closing positions](#upgrade-to-uta-without-closing-positions){.table-of-contents__link .toc-highlight}
-   [UTA can trade USDC Futures via V5](#uta-can-trade-usdc-futures-via-v5){.table-of-contents__link .toc-highlight}
-   [Institutional Lending V5 API](#institutional-lending-v5-api){.table-of-contents__link .toc-highlight}
-   [Normal account can trade Spot via V5](#normal-account-can-trade-spot-via-v5){.table-of-contents__link .toc-highlight}
-   [Unify symbol status enums](#unify-symbol-status-enums){.table-of-contents__link .toc-highlight}
-   [Release V5 Margin trade (normal account) API](#release-v5-margin-trade-normal-account-api){.table-of-contents__link .toc-highlight}
-   [UTA can trade Inverse Contract](#uta-can-trade-inverse-contract){.table-of-contents__link .toc-highlight}
-   [Merge SPOT account into UNIFIED account(IMPORTANT)](#merge-spot-account-into-unified-accountimportant){.table-of-contents__link .toc-highlight}
-   [Use RSA keys to authenticate](#use-rsa-keys-to-authenticate){.table-of-contents__link .toc-highlight}
-   [Add a new enum type for `execType`](#add-a-new-enum-type-for-exectype){.table-of-contents__link .toc-highlight}
-   [Normal account is supported by V5 API](#normal-account-is-supported-by-v5-api){.table-of-contents__link .toc-highlight}
-   [Adjust error code](#adjust-error-code-1){.table-of-contents__link .toc-highlight}
-   [Add level 500 depth](#add-level-500-depth){.table-of-contents__link .toc-highlight}












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



