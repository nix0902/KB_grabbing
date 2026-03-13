---
title: "Enums Definitions"
url: "https://bybit-exchange.github.io/docs/v5/enum"
source: "https://bybit-exchange.github.io/docs/"
fetched: "2026-03-10T08:55:50+00:00"
---

# Enums Definitions

Source: [https://bybit-exchange.github.io/docs/v5/enum](https://bybit-exchange.github.io/docs/v5/enum)


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

-   [English](/docs/v5/enum){.dropdown__link .dropdown__link--active target="_self" rel="noopener noreferrer" lang="en"}
-   [中文（台灣）](/docs/zh-TW/v5/enum){.dropdown__link target="_self" rel="noopener noreferrer" lang="zh-TW"}



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
    [WebSocket Stream](/docs/v5/ws/connect){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false"}
    

-   
    [Rate Limit](/docs/v5/rate-limit){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false"}
    

-   [Enums Definitions](/docs/v5/enum){.menu__link .menu__link--active aria-current="page"}

-   [Error Codes](/docs/v5/error){.menu__link}

-   
    [Abandoned Endpoints](/docs/v5/abandon/asset-info){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false"}
    

![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0iY29sbGFwc2VTaWRlYmFyQnV0dG9uSWNvbl9rdjBfIj48ZyBmaWxsPSIjN2E3YTdhIj48cGF0aCBkPSJNOS45OTIgMTAuMDIzYzAgLjItLjA2Mi4zOTktLjE3Mi41NDdsLTQuOTk2IDcuNDkyYS45ODIuOTgyIDAgMDEtLjgyOC40NTRIMWMtLjU1IDAtMS0uNDUzLTEtMSAwLS4yLjA1OS0uNDAzLjE2OC0uNTUxbDQuNjI5LTYuOTQyTC4xNjggMy4wNzhBLjkzOS45MzkgMCAwMTAgMi41MjhjMC0uNTQ4LjQ1LS45OTcgMS0uOTk3aDIuOTk2Yy4zNTIgMCAuNjQ5LjE4LjgyOC40NUw5LjgyIDkuNDcyYy4xMS4xNDguMTcyLjM0Ny4xNzIuNTV6bTAgMCIgLz48cGF0aCBkPSJNMTkuOTggMTAuMDIzYzAgLjItLjA1OC4zOTktLjE2OC41NDdsLTQuOTk2IDcuNDkyYS45ODcuOTg3IDAgMDEtLjgyOC40NTRoLTNjLS41NDcgMC0uOTk2LS40NTMtLjk5Ni0xIDAtLjIuMDU5LS40MDMuMTY4LS41NTFsNC42MjUtNi45NDItNC42MjUtNi45NDVhLjkzOS45MzkgMCAwMS0uMTY4LS41NSAxIDEgMCAwMS45OTYtLjk5N2gzYy4zNDggMCAuNjQ5LjE4LjgyOC40NWw0Ljk5NiA3LjQ5MmMuMTEuMTQ4LjE2OC4zNDcuMTY4LjU1em0wIDAiIC8+PC9nPjwvc3ZnPg==){.collapseSidebarButtonIcon_kv0_}







-   [![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJicmVhZGNydW1iSG9tZUljb25fT1ZndCI+PHBhdGggZD0iTTEwIDE5di01aDR2NWMwIC41NS40NSAxIDEgMWgzYy41NSAwIDEtLjQ1IDEtMXYtN2gxLjdjLjQ2IDAgLjY4LS41Ny4zMy0uODdMMTIuNjcgMy42Yy0uMzgtLjM0LS45Ni0uMzQtMS4zNCAwbC04LjM2IDcuNTNjLS4zNC4zLS4xMy44Ny4zMy44N0g1djdjMCAuNTUuNDUgMSAxIDFoM2MuNTUgMCAxLS40NSAxLTF6IiBmaWxsPSJjdXJyZW50Q29sb3IiIC8+PC9zdmc+){.breadcrumbHomeIcon_OVgt}](/docs/){.breadcrumbs__link aria-label="Home page"}
-   [Enums Definitions]{.breadcrumbs__link itemprop="name"}


On this page



<div>

# Enums Definitions

</div>



### locale[​](#locale "Direct link to heading"){.hash-link} 

-   `de-DE`
-   `en-US`
-   `es-AR`
-   `es-ES`
-   `es-MX`
-   `fr-FR`
-   `kk-KZ`
-   `id-ID`
-   `uk-UA`
-   `ja-JP`
-   `ru-RU`
-   `th-TH`
-   `pt-BR`
-   `tr-TR`
-   `vi-VN`
-   `zh-TW`
-   `ar-SA`
-   `hi-IN`
-   `fil-PH`

### announcementType[​](#announcementtype "Direct link to heading"){.hash-link} 

-   `new_crypto`
-   `latest_bybit_news`
-   `delistings`
-   `latest_activities`
-   `product_updates`
-   `maintenance_updates`
-   `new_fiat_listings`
-   `other`

### announcementTag[​](#announcementtag "Direct link to heading"){.hash-link} 

-   `Spot`
-   `Derivatives`
-   `Spot Listings`
-   `BTC`
-   `ETH`
-   `Trading Bots`
-   `USDC`
-   `Leveraged Tokens`
-   `USDT`
-   `Margin Trading`
-   `Partnerships`
-   `Launchpad`
-   `Upgrades`
-   `ByVotes`
-   `Delistings`
-   `VIP`
-   `Futures`
-   `Institutions`
-   `Options`
-   `WEB3`
-   `Copy Trading`
-   `Earn`
-   `Bybit Savings`
-   `Dual Asset`
-   `Liquidity Mining`
-   `Shark Fin`
-   `Launchpool`
-   `NFT GrabPic`
-   `Buy Crypto`
-   `P2P Trading`
-   `Fiat Deposit`
-   `Crypto Deposit`
-   `Спот`
-   `Спот лістинги`
-   `Торгові боти`
-   `Токени з кредитним плечем`
-   `Маржинальна торгівля`
-   `Партнерство`
-   `Оновлення`
-   `Делістинги`
-   `Ф'ючерси`
-   `Опціони`
-   `Копітрейдинг`
-   `Bybit Накопичення`
-   `Бівалютні інвестиції`
-   `Майнінг ліквідності`
-   `Купівля криптовалюти`
-   `P2P торгівля`
-   `Фіатні депозити`
-   `Криптодепозити`
-   `Копитрейдинг`
-   `Торговые боты`
-   `Деривативы`
-   `P2P`
-   `Спот листинги`
-   `Деривативи`
-   `MT4`
-   `Lucky Draw`
-   `Unified Trading Account`
-   `Єдиний торговий акаунт`
-   `Единый торговый аккаунт`
-   `Институциональный трейдинг`
-   `Інституціональний трейдинг`
-   `Делистинг`

### category[​](#category "Direct link to heading"){.hash-link} 

-   `spot`
-   `linear` USDT perpetual, USDT Futures and USDC contract, including USDC perp, USDC futures
-   `inverse` Inverse contract, including Inverse perp, Inverse futures
-   `option`

### orderStatus[​](#orderstatus "Direct link to heading"){.hash-link} 

*open status*

-   `New` order has been placed successfully
-   `PartiallyFilled`
-   `Untriggered` Conditional orders are created

*closed status*

-   `Rejected`
-   `PartiallyFilledCanceled` Only spot has this order status
-   `Filled`
-   `Cancelled` In derivatives, orders with this status may have an executed qty
-   `Triggered` instantaneous state for conditional orders from Untriggered to New
-   `Deactivated` UTA: Spot tp/sl order, conditional order, OCO order are cancelled before they are triggered

### timeInForce[​](#timeinforce "Direct link to heading"){.hash-link} 

-   `GTC` GoodTillCancel
-   `IOC` ImmediateOrCancel
-   `FOK` FillOrKill
-   [PostOnly](https://www.bybit.com/en/help-center/article/Post-Only-Order){target="_blank" rel="noopener noreferrer"}
-   [RPI](https://www.bybit.com/en/help-center/article/Retail-Price-Improvement-RPI-Order){target="_blank" rel="noopener noreferrer"} features:
    -   **Exclusive Matching**: Only match non-algorithmic users; no execution against orders from Open API.
    -   **Post-Only Mechanism**: Act as maker orders, adding liquidity
    -   **Lower Priority**: Execute after non-RPI orders at the same price level.
    -   **Limited Access**: Initially for select market makers across multiple pairs.
    -   **Order Book Updates**: Excluded from API but displayed on the GUI.

### createType[​](#createtype "Direct link to heading"){.hash-link} 

-   `CreateByUser`
-   `CreateByFutureSpread` Spread order
-   `CreateByAdminClosing`
-   `CreateBySettle` USDC Futures delivery; position closed as a result of the delisting of a contract. This is recorded as a [trade](/docs/v5/order/execution) but not an [order](/docs/v5/order/order-list).
-   `CreateByStopOrder` Futures conditional order
-   `CreateByTakeProfit` Futures take profit order
-   `CreateByPartialTakeProfit` Futures partial take profit order
-   `CreateByStopLoss` Futures stop loss order
-   `CreateByPartialStopLoss` Futures partial stop loss order
-   `CreateByTrailingStop` Futures trailing stop order
-   `CreateByTrailingProfit` Futures trailing take profit order
-   `CreateByLiq` Laddered liquidation to reduce the required maintenance margin
-   `CreateByTakeOver_PassThrough`If the position is still subject to liquidation (i.e., does not meet the required maintenance margin level), the position shall be taken over by the liquidation engine and closed at the bankruptcy price.
-   `CreateByAdl_PassThrough` [Auto-Deleveraging(ADL)](https://www.bybit.com/en/help-center/article/Auto-Deleveraging-ADL){target="_blank" rel="noopener noreferrer"}
-   `CreateByBlock_PassThrough` Order placed via Paradigm
-   `CreateByBlockTradeMovePosition_PassThrough` Order created by move position
-   `CreateByClosing` The close order placed via web or app position area - web/app
-   `CreateByFGridBot` Order created via grid bot - web/app
-   `CloseByFGridBot` Order closed via grid bot - web/app
-   `CreateByTWAP` Order created by TWAP - web/app
-   `CreateByTVSignal` Order created by TV webhook - web/app
-   `CreateByMmRateClose` Order created by Mm rate close function - web/app
-   `CreateByMartingaleBot` Order created by Martingale bot - web/app
-   `CloseByMartingaleBot` Order closed by Martingale bot - web/app
-   `CreateByIceBerg` Order created by Ice berg strategy - web/app
-   `CreateByArbitrage` Order created by arbitrage - web/app
-   `CreateByDdh` Option dynamic delta hedge order - web/app
-   `CreateByBboOrder` BBO order

### execType[​](#exectype "Direct link to heading"){.hash-link} 

-   `Trade`
-   `AdlTrade` [Auto-Deleveraging](https://www.bybit.com/en/help-center/article/Auto-Deleveraging-ADL){target="_blank" rel="noopener noreferrer"}
-   `Funding` [Funding fee](https://www.bybit.com/en/help-center/article/Introduction-to-Funding-Rate){target="_blank" rel="noopener noreferrer"}
-   `BustTrade` Takeover liquidation
-   `Delivery` USDC futures delivery; Position closed by contract delisted
-   `Settle` Inverse futures settlement; Position closed due to delisting
-   `BlockTrade`
-   `MovePosition`
-   `FutureSpread` Spread leg execution
-   `UNKNOWN` May be returned by a classic account. Cannot query by this type

### orderType[​](#ordertype "Direct link to heading"){.hash-link} 

-   `Market`
-   `Limit`
-   `UNKNOWN` is not a valid request parameter value. Is only used in some responses. Mainly, it is used when `execType` is `Funding`.

### stopOrderType[​](#stopordertype "Direct link to heading"){.hash-link} 

-   `TakeProfit`
-   `StopLoss`
-   `TrailingStop`
-   `Stop`
-   `PartialTakeProfit`
-   `PartialStopLoss`
-   `tpslOrder` spot TP/SL order
-   `OcoOrder` spot Oco order
-   `MmRateClose` On web or app can set MMR to close position
-   `BidirectionalTpslOrder` Spot bidirectional tpsl order

### tickDirection[​](#tickdirection "Direct link to heading"){.hash-link} 

-   `PlusTick` price rise
-   `ZeroPlusTick` trade occurs at the same price as the previous trade, which occurred at a price higher than that for the trade preceding it
-   `MinusTick` price drop
-   `ZeroMinusTick` trade occurs at the same price as the previous trade, which occurred at a price lower than that for the trade preceding it

### interval[​](#interval "Direct link to heading"){.hash-link} 

-   `1` `3` `5` `15` `30` `60` `120` `240` `360` `720` minute
-   `D` day
-   `W` week
-   `M` month

### intervalTime[​](#intervaltime "Direct link to heading"){.hash-link} 

-   `5min` `15min` `30min` minute
-   `1h` `4h` hour
-   `1d` day

### positionIdx[​](#positionidx "Direct link to heading"){.hash-link} 

-   `0` one-way mode position
-   `1` Buy side of hedge-mode position
-   `2` Sell side of hedge-mode position

### positionStatus[​](#positionstatus "Direct link to heading"){.hash-link} 

-   `Normal`
-   `Liq` in the liquidation progress
-   `Adl` in the auto-deleverage progress

### rejectReason[​](#rejectreason "Direct link to heading"){.hash-link} 

-   `EC_NoError`
-   `EC_Others`
-   `EC_UnknownMessageType`
-   `EC_MissingClOrdID`
-   `EC_MissingOrigClOrdID`
-   `EC_ClOrdIDOrigClOrdIDAreTheSame`
-   `EC_DuplicatedClOrdID`
-   `EC_OrigClOrdIDDoesNotExist`
-   `EC_TooLateToCancel`
-   `EC_UnknownOrderType`
-   `EC_UnknownSide`
-   `EC_UnknownTimeInForce`
-   `EC_WronglyRouted`
-   `EC_MarketOrderPriceIsNotZero`
-   `EC_LimitOrderInvalidPrice`
-   `EC_NoEnoughQtyToFill`
-   `EC_NoImmediateQtyToFill` a maker could not be found to fill your order
-   `EC_PerCancelRequest`
-   `EC_MarketOrderCannotBePostOnly`
-   `EC_PostOnlyWillTakeLiquidity` your post only order would have executed as a taker, and so was rejected
-   `EC_CancelReplaceOrder`
-   `EC_InvalidSymbolStatus`
-   `EC_CancelForNoFullFill`
-   `EC_BySelfMatch`
-   `EC_InCallAuctionStatus` used for pre-market order operation, e.g., during 2nd phase of call auction, cancel order is not allowed, when the cancel request is failed to be rejected by trading server, the request will be rejected by matching box finally
-   `EC_QtyCannotBeZero`
-   `EC_MarketOrderNoSupportTIF`
-   `EC_ReachMaxTradeNum`
-   `EC_InvalidPriceScale`
-   `EC_BitIndexInvalid`
-   `EC_StopBySelfMatch`
-   `EC_InvalidSmpType`
-   `EC_CancelByMMP`
-   `EC_InvalidUserType`
-   `EC_InvalidMirrorOid`
-   `EC_InvalidMirrorUid`
-   `EC_EcInvalidQty`
-   `EC_InvalidAmount`
-   `EC_LoadOrderCancel`
-   `EC_MarketQuoteNoSuppSell`
-   `EC_DisorderOrderID`
-   `EC_InvalidBaseValue`
-   `EC_LoadOrderCanMatch`
-   `EC_SecurityStatusFail`
-   `EC_ReachRiskPriceLimit`
-   `EC_OrderNotExist`
-   `EC_CancelByOrderValueZero` order cancelled as its remaining value is zero
-   `EC_CancelByMatchValueZero` order cancelled as the order it matched with has a remaining value of zero
-   `EC_ReachMarketPriceLimit`

### accountType[​](#accounttype "Direct link to heading"){.hash-link} 

-   `UNIFIED` Unified Trading Account
-   `FUND` Funding Account

### assetCategory[​](#assetcategory "Direct link to heading"){.hash-link} 

-   `Easy Earn` Earn account sub-category
-   `Futures Grid Bot` Trading Bot account sub-category
-   `Futures Combo Bot` Trading Bot account sub-category
-   `Futures Martingale Bot` Trading Bot account sub-category
-   `Copy Trading Classic` Copy Trading account sub-category
-   `Copy Trading TradFi` Copy Trading account sub-category
-   `Copy Trading Pro` Copy Trading account sub-category

### assetAccountType[​](#assetaccounttype "Direct link to heading"){.hash-link} 

-   `FundingAccount` Funding Account
-   `UnifiedTradingAccount` Unified Trading Account
-   `Earn` Earn Account
-   `TradingBot` Trading Bot Account
-   `CopyTrading` Copy Trading Account
-   `CryptoLoans` Crypto Loans Account
-   `CryptoLoans_legacy` Crypto Loans Account (Legacy)
-   `BybitPayLater` Bybit Pay Later Account
-   `Launchpool` Launchpool Account
-   `TradFi` TradFi Account
-   `MarginStakedSOL` Margin Staked SOL Account
-   `Alpha` Alpha Account

### transferStatus[​](#transferstatus "Direct link to heading"){.hash-link} 

-   `SUCCESS`
-   `PENDING`
-   `FAILED`

### depositStatus[​](#depositstatus "Direct link to heading"){.hash-link} 

-   `0` unknown
-   `1` toBeConfirmed
-   `2` processing
-   `3` success (finalised status of a success deposit)
-   `4` deposit failed
-   `10011` pending to be credited to funding pool
-   `10012` Credited to funding pool successfully

### withdrawStatus[​](#withdrawstatus "Direct link to heading"){.hash-link} 

-   `SecurityCheck`
-   `Pending`
-   `success`
-   `CancelByUser`
-   `Reject`
-   `Fail`
-   `BlockchainConfirmed`
-   `MoreInformationRequired`
-   `Unknown` a rare status

### triggerBy[​](#triggerby "Direct link to heading"){.hash-link} 

-   `LastPrice`
-   `IndexPrice`
-   `MarkPrice`

### cancelType[​](#canceltype "Direct link to heading"){.hash-link} 

-   `CancelByUser`
-   `CancelByReduceOnly` cancelled by [reduceOnly](https://bybit-exchange.github.io/docs/v5/order/create-order){target="_blank" rel="noopener noreferrer"}
-   `CancelByPrepareLiq` `CancelAllBeforeLiq` cancelled in order to attempt [liquidation prevention](https://www.bybit.com/en/help-center/article/Liquidation-Process-Derivatives-Standard-Account){target="_blank" rel="noopener noreferrer"} by freeing up margin
-   `CancelByPrepareAdl` `CancelAllBeforeAdl` cancelled due to [ADL](https://www.bybit.com/en/help-center/article/Auto-Deleveraging-ADL){target="_blank" rel="noopener noreferrer"}
-   `CancelByAdmin`
-   `CancelBySettle` cancelled due to delisting contract
-   `CancelByTpSlTsClear` TP/SL order cancelled when the position is cleared
-   `CancelBySmp` cancelled by [SMP](https://bybit-exchange.github.io/docs/v5/smp){target="_blank" rel="noopener noreferrer"}
-   `CancelByDCP` cancelled by DCP triggering
-   `CancelByRebalance` Spread trading: the order price of a single leg order is outside the limit price range.
-   `CancelByOCOTpCanceledBySlTriggered` The take profit order was canceled due to the triggering of the stop loss
-   `CancelByOCOSlCanceledByTpTriggered` The stop loss order was canceled due to the triggering of the take profit

*Options:*

-   `CancelByUser`
-   `CancelByReduceOnly`
-   `CancelAllBeforeLiq` cancelled due to liquidation
-   `CancelAllBeforeAdl` cancelled due to ADL
-   `CancelBySettle`
-   `CancelByCannotAffordOrderCost`
-   `CancelByPmTrialMmOverEquity`
-   `CancelByAccountBlocking`
-   `CancelByDelivery`
-   `CancelByMmpTriggered`
-   `CancelByCrossSelfMuch`
-   `CancelByCrossReachMaxTradeNum`
-   `CancelByDCP`
-   `CancelBySmp`

### optionPeriod[​](#optionperiod "Direct link to heading"){.hash-link} 

-   BTC: `7`,`14`,`21`,`30`,`60`,`90`,`180`,`270`days
-   ETH: `7`,`14`,`21`,`30`,`60`,`90`,`180`,`270`days
-   SOL: `7`,`14`,`21`,`30`,`60`,`90`days

### dataRecordingPeriod[​](#datarecordingperiod "Direct link to heading"){.hash-link} 

-   `5min` `15min` `30min` minute
-   `1h` `4h` hour
-   `4d` day

### contractType[​](#contracttype "Direct link to heading"){.hash-link} 

-   `InversePerpetual`
-   `LinearPerpetual`
-   `LinearFutures` USDT/USDC Futures
-   `InverseFutures`

### status[​](#status "Direct link to heading"){.hash-link} 

-   `PreLaunch`
-   `Trading`
-   `Delivering`
-   `Closed`

### symbolType[​](#symboltype "Direct link to heading"){.hash-link} 

-   `innovation` linear
-   `adventure` spot
-   `xstocks` spot
-   `commodity` linear

### curAuctionPhase[​](#curauctionphase "Direct link to heading"){.hash-link} 

-   `NotStarted` Pre-market trading is not started
-   `Finished` Pre-market trading is finished
    -   After the auction, if the pre-market contract fails to enter continues trading phase, it will be delisted and phase=\"Finished\"
    -   After the continuous trading, if the pre-market contract fails to be converted to official contract, it will be delisted and phase=\"Finished\"
-   `CallAuction` Auction phase of pre-market trading
    -   only timeInForce=GTC, orderType=Limit order is allowed to submit
    -   TP/SL are not supported; Conditional orders are not supported
    -   cannot **modify** the order at this stage
    -   order price range: \[[preOpenPrice](/docs/v5/market/tickers) x 0.5, [maxPrice](/docs/v5/market/instrument)\]
-   `CallAuctionNoCancel` Auction no cancel phase of pre-market trading
    -   only timeInForce=GTC, orderType=Limit order is allowed to submit
    -   TP/SL are not supported; Conditional orders are not supported
    -   cannot **modify and cancel** the order at this stage
    -   order price range: Buy \[[lastPrice](/docs/v5/market/tickers) x 0.5, [markPrice](/docs/v5/market/tickers) x 1.1\], Sell \[[markPrice](/docs/v5/market/tickers) x 0.9, [maxPrice](/docs/v5/market/instrument)\]
-   `CrossMatching` cross matching phase
    -   cannot **create, modify and cancel** the order at this stage
    -   Candle data is released from this stage
-   `ContinuousTrading` Continuous trading phase
    -   There is no restriction to create, amend, cancel orders
    -   orderbook, public trade data is released from this stage

### marginTrading[​](#margintrading "Direct link to heading"){.hash-link} 

-   `none` Regardless of normal account or UTA account, this trading pair does not support margin trading
-   `both` For both normal account and UTA account, this trading pair supports margin trading
-   `utaOnly` Only for UTA account,this trading pair supports margin trading
-   `normalSpotOnly` Only for normal account, this trading pair supports margin trading

### copyTrading[​](#copytrading "Direct link to heading"){.hash-link} 

-   `none` Regardless of normal account or UTA account, this trading pair does not support copy trading
-   `both` For both normal account and UTA account, this trading pair supports copy trading
-   `utaOnly` Only for UTA account,this trading pair supports copy trading
-   `normalOnly` Only for normal account, this trading pair supports copy trading

### type(uta-translog)[​](#typeuta-translog "Direct link to heading"){.hash-link} 

-   `TRANSFER_IN` Assets that transferred into Unified wallet
-   `TRANSFER_OUT` Assets that transferred out from Unified wallet
-   `TRADE`
-   `SETTLEMENT` USDT Perp funding settlement, and USDC Perp funding settlement + USDC 8-hour session settlement
-   `DELIVERY` USDC Futures, Option delivery
-   `LIQUIDATION`
-   `ADL` Auto-Deleveraging
-   `AIRDROP`
-   `BONUS` Bonus claimed
-   `BONUS_RECOLLECT` Bonus expired
-   `FEE_REFUND` Trading fee refunded
-   `INTEREST` Interest occurred due to borrowing
-   `CURRENCY_BUY` Currency convert, and the liquidation for borrowing asset(UTA loan)
-   `CURRENCY_SELL` Currency convert, and the liquidation for borrowing asset(UTA loan)
-   `BORROWED_AMOUNT_INS_LOAN`
-   `PRINCIPLE_REPAYMENT_INS_LOAN`
-   `INTEREST_REPAYMENT_INS_LOAN`
-   `AUTO_SOLD_COLLATERAL_INS_LOAN` the liquidation for borrowing asset(INS loan)
-   `AUTO_BUY_LIABILITY_INS_LOAN` the liquidation for borrowing asset(INS loan)
-   `AUTO_PRINCIPLE_REPAYMENT_INS_LOAN`
-   `AUTO_INTEREST_REPAYMENT_INS_LOAN`
-   `TRANSFER_IN_INS_LOAN` Transfer In when in the liquidation of OTC loan
-   `TRANSFER_OUT_INS_LOAN` Transfer Out when in the liquidation of OTC loan
-   `SPOT_REPAYMENT_SELL` One-click repayment currency sell
-   `SPOT_REPAYMENT_BUY` One-click repayment currency buy
-   `TOKENS_SUBSCRIPTION` Spot leverage token subscription
-   `TOKENS_REDEMPTION` Spot leverage token redemption
-   `AUTO_DEDUCTION` Asset auto deducted by system (roll back)
-   `FLEXIBLE_STAKING_SUBSCRIPTION` Byfi flexible stake subscription
-   `FLEXIBLE_STAKING_REDEMPTION` Byfi flexible stake redemption
-   `FIXED_STAKING_SUBSCRIPTION` Byfi fixed stake subscription
-   `FLEXIBLE_STAKING_REFUND` Byfi flexiable stake refund
-   `FIXED_STAKING_REFUND` Byfi fixed stake refund
-   `PREMARKET_TRANSFER_OUT`
-   `PREMARKET_DELIVERY_SELL_NEW_COIN`
-   `PREMARKET_DELIVERY_BUY_NEW_COIN`
-   `PREMARKET_DELIVERY_PLEDGE_PAY_SELLER`
-   `PREMARKET_DELIVERY_PLEDGE_BACK`
-   `PREMARKET_ROLLBACK_PLEDGE_BACK`
-   `PREMARKET_ROLLBACK_PLEDGE_PENALTY_TO_BUYER`
-   `CUSTODY_NETWORK_FEE` fireblocks business
-   `CUSTODY_SETTLE_FEE` fireblocks business
-   `CUSTODY_LOCK` fireblocks / copper business
-   `CUSTODY_UNLOCK` fireblocks business
-   `CUSTODY_UNLOCK_REFUND` fireblocks business
-   `LOANS_BORROW_FUNDS` crypto loan
-   `LOANS_PLEDGE_ASSET` crypto loan repayment
-   `BONUS_TRANSFER_IN`
-   `BONUS_TRANSFER_OUT`
-   `PEF_TRANSFER_IN`
-   `PEF_TRANSFER_OUT`
-   `PEF_PROFIT_SHARE`
-   `ONCHAINEARN_SUBSCRIPTION` tranfer out for on chain earn
-   `ONCHAINEARN_REDEMPTION` tranfer in for on chain earn
-   `ONCHAINEARN_REFUND` tranfer in for on chain earn failed
-   `STRUCTURE_PRODUCT_SUBSCRIPTION` tranfer out for structure product
-   `STRUCTURE_PRODUCT_REFUND` tranfer in for structure product
-   `CLASSIC_WEALTH_MANAGEMENT_SUBSCRIPTION` tranfer out for classic wealth management
-   `PREMIMUM_WEALTH_MANAGEMENT_SUBSCRIPTION` tranfer in for classic wealth management
-   `PREMIMUM_WEALTH_MANAGEMENT_REFUND` tranfer in for classic wealth management refund
-   `LIQUIDITY_MINING_SUBSCRIPTION` tranfer out for liquidity mining
-   `LIQUIDITY_MINING_REFUND` tranfer in for liquidity mining
-   `PWM_SUBSCRIPTION` tranfer out for PWM
-   `PWM_REFUND` tranfer in for PWM
-   `DEFI_INVESTMENT_SUBSCRIPTION` tranfer out for DEFI subscription
-   `DEFI_INVESTMENT_REFUND` transfer in for DEFI refund
-   `DEFI_INVESTMENT_REDEMPTION` tranfer in for DEFI redemption
-   `INSTITUTION_LOAN_IN` Borrowed Amount (INS Loan)
-   `INSTITUTION_PAYBACK_PRINCIPAL_OUT` Principal repayment (INS Loan)
-   `INSTITUTION_PAYBACK_INTEREST_OUT` Interest repayment (INS Loan)
-   `INSTITUTION_EXCHANGE_SELL` Auto sold collateral (INS Loan)
-   `INSTITUTION_EXCHANGE_BUY` Auto buy liability (INS Loan)
-   `INSTITUTION_LIQ_PRINCIPAL_OUT` Forced principal repayment, i.e. liquidation (INS Loan)
-   `INSTITUTION_LIQ_INTEREST_OUT` Forced interest repayment, i.e. liquidation (INS Loan)
-   `INSTITUTION_LOAN_TRANSFER_IN` Transfer in (INS Loan)
-   `INSTITUTION_LOAN_TRANSFER_OUT` Transfer out (INS Loan)
-   `INSTITUTION_LOAN_WITHOUT_WITHDRAW` Transfer out (INS Loan)
-   `INSTITUTION_LOAN_RESERVE_IN` Reserve fund in (INS Loan)
-   `INSTITUTION_LOAN_RESERVE_OUT` Reserve fund out (INS Loan)
-   `SPREAD_FEE_OUT` Spread fee for EU Broker
-   `PLATFORM_TOKEN_MNT_LIQRECALLEDMMNT` Recall MNT
-   `PLATFORM_TOKEN_MNT_LIQRETURNEDMNT` Return MNT
-   `BORROW` Manual loan borrow and auto loan borrow
-   `REPAY` Manual loan repay and auto loan repay
-   `CONVERT` Currency convert repayment
-   `BROKER_ABACCOUNT_FEE` Borker AB fee deduction
-   `EARNING_REDEMPTION_SELL`
-   `EARNING_REDEMPTION_BUY`
-   `DBS_CASH_OUT`
-   `DBS_CASH_IN`
-   `DBS_CASH_OUT_TR`
-   `DBS_CASH_IN_TR`
-   `CUSTODY_CASH_RECOVER_TR`
-   `ALPHA_SMALL_TOKEN_REFUND`
-   `TWAP_BUDGET_AIRDROP`
-   `TWAP_BUDGET_RECALL`
-   `FLOATING_TO_FIXED_BORROW`
-   `FLOATING_TO_FIXED_REPAY`
-   `IDN_CONVERT_IN`
-   `IDN_CONVERT_OUT`

### type(contract-translog)[​](#typecontract-translog "Direct link to heading"){.hash-link} 

-   `TRANSFER_IN` Assets that transferred into (inverse) derivatives wallet
-   `TRANSFER_OUT` Assets that transferred out from (inverse) derivatives wallet
-   `TRADE`
-   `SETTLEMENT` USDT / Inverse Perp funding settlement
-   `DELIVERY` Inverse Futures delivery
-   `LIQUIDATION`
-   `ADL` Auto-Deleveraging
-   `AIRDROP`
-   `BONUS` Bonus claimed
-   `BONUS_RECOLLECT` Bonus expired
-   `FEE_REFUND` Trading fee refunded
-   `CURRENCY_BUY` Currency convert
-   `CURRENCY_SELL` Currency convert
-   `AUTO_DEDUCTION` Asset auto deducted by system (roll back)
-   `Others`

### unifiedMarginStatus[​](#unifiedmarginstatus "Direct link to heading"){.hash-link} 

-   `1` Classic account
-   `3` Unified trading account 1.0
-   `4` Unified trading account 1.0 (pro version)
-   `5` Unified trading account 2.0
-   `6` Unified trading account 2.0 (pro version)

### convertAccountType[​](#convertaccounttype "Direct link to heading"){.hash-link} 

-   `eb_convert_uta` Unified Trading Account
-   `eb_convert_funding` Funding Account

### symbol[​](#symbol "Direct link to heading"){.hash-link} 

*USDT Perpetual*:

-   `BTCUSDT`
-   `ETHUSDT`

*USDT Futures*:

-   `BTCUSDT-21FEB25`
-   `ETHUSDT-14FEB25`\
    The types of USDT Futures contracts offered by Bybit include: Weekly, Bi-Weekly, Tri-Weekly, Monthly, Bi-Monthly, Quarterly, Bi-Quarterly, Tri-Quarterly

*USDC Perpetual*:

-   `BTCPERP`
-   `ETHPERP`

*USDC Futures*:

-   `BTC-24MAR23`

*Inverse Perpetual*:

-   `BTCUSD`
-   `ETHUSD`

*Inverse Futures*:

-   `BTCUSDH23` H: First quarter; 23: 2023
-   `BTCUSDM23` M: Second quarter; 23: 2023
-   `BTCUSDU23` U: Third quarter; 23: 2023
-   `BTCUSDZ23` Z: Fourth quarter; 23: 2023

*Spot*:

-   `BTCUSDT`
-   `ETHUSDC`

*Option*:

-   `BTC-13FEB25-89000-P-USDT` USDT Option
-   `ETH-28FEB25-2800-C` USDC Option

### vipLevel[​](#viplevel "Direct link to heading"){.hash-link} 

-   No VIP
-   VIP-1
-   VIP-2
-   VIP-3
-   VIP-4
-   VIP-5
-   VIP-Supreme
-   PRO-1
-   PRO-2
-   PRO-3
-   PRO-4
-   PRO-5
-   PRO-6

### adlRankIndicator[​](#adlrankindicator "Direct link to heading"){.hash-link} 

-   `0` default value of empty position
-   `1`
-   `2`
-   `3`
-   `4`
-   `5`

### smpType[​](#smptype "Direct link to heading"){.hash-link} 

-   default: `None`
-   `CancelMaker`
-   `CancelTaker`
-   `CancelBoth`

### extraFees.feeType[​](#extrafeesfeetype "Direct link to heading"){.hash-link} 

-   `UNKNOWN`
-   `TAX` Government tax. Only for Indonesian site
-   `CFX` Indonesian foreign exchange tax. Only for Indonesian site
-   `WHT` EU withholding tax. Only for EU site
-   `GST` Indian GST tax. Only for kyc=Indian users
-   `VAT` ARE VAT tax. Only for kyc=ARE users

### extraFees.subFeeType[​](#extrafeessubfeetype "Direct link to heading"){.hash-link} 

-   `UNKNOWN`
-   `TAX_PNN` Tax fee, fiat currency to digital currency. Only for Indonesian site
-   `TAX_PPH` Tax fee, digital currency to fiat currency. Only for Indonesian site
-   `CFX_FIEE` CFX fee, fiat currency to digital currency. Only for Indonesian site
-   `AUT_WITHHOLDING_TAX` EU site withholding tax. Only for EU site
-   `IND_GST` Indian GST tax. Only for kyc=Indian users
-   `ARE_VAT` ARE VAT tax. Only for kyc=ARE users

### state[​](#state "Direct link to heading"){.hash-link} 

-   `scheduled`
-   `ongoing`
-   `completed`
-   `canceled`

### serviceTypes[​](#servicetypes "Direct link to heading"){.hash-link} 

-   `1` Trading service
-   `2` Trading service via http request
-   `3` Trading service via websocket
-   `4` Private websocket stream
-   `5` Market data service

### product[​](#product "Direct link to heading"){.hash-link} 

-   `1` Futures
-   `2` Spot
-   `3` Option
-   `4` Spread

### maintainType[​](#maintaintype "Direct link to heading"){.hash-link} 

-   `1` Planned maintenance
-   `2` Temporary maintenance
-   `3` Incident

### env[​](#env "Direct link to heading"){.hash-link} 

-   `1` Production
-   `2` Production Demo service

### bizType[​](#biztype "Direct link to heading"){.hash-link} 

-   `SPOT`
-   `DERIVATIVES`
-   `OPTIONS`

### msg[​](#msg "Direct link to heading"){.hash-link} 

-   `API limit updated successfully`
-   `Requested limit exceeds maximum allowed per user`
-   `No permission to operate these UIDs`
-   `API cap configuration not found`
-   `API cap configuration not found for bizType`
-   `Requested limit would exceed institutional quota`

### groupId[​](#groupid "Direct link to heading"){.hash-link} 

-   `1` Major Coins
-   `2` High Growth
-   `3` Mid-Tier Liquidity
-   `4` Mid-Tier Activation
-   `5` Long Tail
-   `6` Innovation Zone
-   `7` Pre-Listing
-   `8` USDC contracts

### groupName[​](#groupname "Direct link to heading"){.hash-link} 

-   `G1(Major Coins)` Major Coins
-   `G2(High Growth)` High Growth
-   `G3(Mid-Tier Liquidity)` Mid-Tier Liquidity
-   `G4(Mid-Tier Activation)` Mid-Tier Activation
-   `G5(Long Tail)` Long Tail
-   `Innovation-Zone` Innovation Zone
-   `Pre-listing` Pre-listing
-   `USDC` USDC group

### Spot Fee Currency Instruction[​](#spot-fee-currency-instruction "Direct link to heading"){.hash-link} 

with the example of BTCUSDT:

-   Is makerFeeRate positive?
    -   TRUE
        -   Side = Buy -\> base currency (BTC)
        -   Side = Sell -\> quote currency (USDT)
    -   FALSE
        -   IsMakerOrder = TRUE
            -   Side = Buy -\> quote currency (USDT)
            -   Side = Sell -\> base currency (BTC)
        -   IsMakerOrder = FALSE
            -   Side = Buy -\> base currency (BTC)
            -   Side = Sell -\> quote currency (USDT)

### sbe-orderStatus[​](#sbe-orderstatus "Direct link to heading"){.hash-link} 

-   `5` Rejected
-   `6` New
-   `7` Cancelled
-   `8` PartiallyFilled
-   `9` Filled
-   `0` Others

### sbe-rejectReason[​](#sbe-rejectreason "Direct link to heading"){.hash-link} 

-   `0` EC_NoError
-   `1` EC_Others
-   `2` EC_UnknownMessageType
-   `3` EC_MissingClOrdID
-   `4` EC_OrderNotExist
-   `5` EC_MissingOrigClOrdID
-   `6` EC_ClOrdIDOrigClOrdIDAreTheSame
-   `7` EC_OrigClOrdIDDoesNotExist
-   `8` EC_TooLateToCancel
-   `9` EC_UnknownOrderType
-   `10` EC_UnknownSide
-   `11` EC_UnknownTimeInForce
-   `12` EC_WronglyRouted
-   `13` EC_MarketOrderPriceIsNotZero
-   `14` EC_LimitOrderInvalidPrice
-   `15` EC_NoEnoughQtyToFill
-   `16` EC_NoImmediateQtyToFill
-   `17` EC_QtyCannotBeZero
-   `18` EC_PerCancelRequest
-   `19` EC_MarketOrderCannotBePostOnly
-   `20` EC_PostOnlyWillTakeLiquidity
-   `21` EC_CancelReplaceOrder
-   `22` EC_InvalidSymbolStatus
-   `23` EC_MarketOrderNoSupportTIF
-   `24` EC_ReachMaxTradeNum
-   `25` EC_InvalidPriceScale
-   `28` EC_BySelfMatch
-   `29` EC_InvalidSmpType
-   `30` EC_CancelByMMP
-   `31` EC_InCallAuctionStatus
-   `34` EC_InvalidUserType
-   `35` EC_InvalidMirrorOid
-   `36` EC_InvalidMirrorUid
-   `100` EC_EcInvalidQty
-   `101` EC_InvalidAmount
-   `102` EC_LoadOrderCancel
-   `103` EC_CancelForNoFullFill
-   `104` EC_MarketQuoteNoSuppSell
-   `105` EC_DisorderOrderID
-   `106` EC_InvalidBaseValue
-   `107` EC_LoadOrderCanMatch
-   `108` EC_SecurityStatusFail
-   `110` EC_ReachRiskPriceLimit
-   `111` EC_CancelByOrderValueZero
-   `112` EC_CancelByMatchValueZero
-   `113` EC_CancelByMatchValueZero
-   `200` EC_ReachMarketPriceLimit








[](/docs/v5/rate-limit/rules-for-pros/apilimit-query-all){.pagination-nav__link .pagination-nav__link--prev}


Previous



Get All Rate Limits


[](/docs/v5/error){.pagination-nav__link .pagination-nav__link--next}


Next



Error Codes







-   [locale](#locale){.table-of-contents__link .toc-highlight}
-   [announcementType](#announcementtype){.table-of-contents__link .toc-highlight}
-   [announcementTag](#announcementtag){.table-of-contents__link .toc-highlight}
-   [category](#category){.table-of-contents__link .toc-highlight}
-   [orderStatus](#orderstatus){.table-of-contents__link .toc-highlight}
-   [timeInForce](#timeinforce){.table-of-contents__link .toc-highlight}
-   [createType](#createtype){.table-of-contents__link .toc-highlight}
-   [execType](#exectype){.table-of-contents__link .toc-highlight}
-   [orderType](#ordertype){.table-of-contents__link .toc-highlight}
-   [stopOrderType](#stopordertype){.table-of-contents__link .toc-highlight}
-   [tickDirection](#tickdirection){.table-of-contents__link .toc-highlight}
-   [interval](#interval){.table-of-contents__link .toc-highlight}
-   [intervalTime](#intervaltime){.table-of-contents__link .toc-highlight}
-   [positionIdx](#positionidx){.table-of-contents__link .toc-highlight}
-   [positionStatus](#positionstatus){.table-of-contents__link .toc-highlight}
-   [rejectReason](#rejectreason){.table-of-contents__link .toc-highlight}
-   [accountType](#accounttype){.table-of-contents__link .toc-highlight}
-   [assetCategory](#assetcategory){.table-of-contents__link .toc-highlight}
-   [assetAccountType](#assetaccounttype){.table-of-contents__link .toc-highlight}
-   [transferStatus](#transferstatus){.table-of-contents__link .toc-highlight}
-   [depositStatus](#depositstatus){.table-of-contents__link .toc-highlight}
-   [withdrawStatus](#withdrawstatus){.table-of-contents__link .toc-highlight}
-   [triggerBy](#triggerby){.table-of-contents__link .toc-highlight}
-   [cancelType](#canceltype){.table-of-contents__link .toc-highlight}
-   [optionPeriod](#optionperiod){.table-of-contents__link .toc-highlight}
-   [dataRecordingPeriod](#datarecordingperiod){.table-of-contents__link .toc-highlight}
-   [contractType](#contracttype){.table-of-contents__link .toc-highlight}
-   [status](#status){.table-of-contents__link .toc-highlight}
-   [symbolType](#symboltype){.table-of-contents__link .toc-highlight}
-   [curAuctionPhase](#curauctionphase){.table-of-contents__link .toc-highlight}
-   [marginTrading](#margintrading){.table-of-contents__link .toc-highlight}
-   [copyTrading](#copytrading){.table-of-contents__link .toc-highlight}
-   [type(uta-translog)](#typeuta-translog){.table-of-contents__link .toc-highlight}
-   [type(contract-translog)](#typecontract-translog){.table-of-contents__link .toc-highlight}
-   [unifiedMarginStatus](#unifiedmarginstatus){.table-of-contents__link .toc-highlight}
-   [convertAccountType](#convertaccounttype){.table-of-contents__link .toc-highlight}
-   [symbol](#symbol){.table-of-contents__link .toc-highlight}
-   [vipLevel](#viplevel){.table-of-contents__link .toc-highlight}
-   [adlRankIndicator](#adlrankindicator){.table-of-contents__link .toc-highlight}
-   [smpType](#smptype){.table-of-contents__link .toc-highlight}
-   [extraFees.feeType](#extrafeesfeetype){.table-of-contents__link .toc-highlight}
-   [extraFees.subFeeType](#extrafeessubfeetype){.table-of-contents__link .toc-highlight}
-   [state](#state){.table-of-contents__link .toc-highlight}
-   [serviceTypes](#servicetypes){.table-of-contents__link .toc-highlight}
-   [product](#product){.table-of-contents__link .toc-highlight}
-   [maintainType](#maintaintype){.table-of-contents__link .toc-highlight}
-   [env](#env){.table-of-contents__link .toc-highlight}
-   [bizType](#biztype){.table-of-contents__link .toc-highlight}
-   [msg](#msg){.table-of-contents__link .toc-highlight}
-   [groupId](#groupid){.table-of-contents__link .toc-highlight}
-   [groupName](#groupname){.table-of-contents__link .toc-highlight}
-   [Spot Fee Currency Instruction](#spot-fee-currency-instruction){.table-of-contents__link .toc-highlight}
-   [sbe-orderStatus](#sbe-orderstatus){.table-of-contents__link .toc-highlight}
-   [sbe-rejectReason](#sbe-rejectreason){.table-of-contents__link .toc-highlight}












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



