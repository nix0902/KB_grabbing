---
title: "Get Crypto Loan Position"
url: "https://bybit-exchange.github.io/docs/v5/new-crypto-loan/crypto-loan-position"
source: "https://bybit-exchange.github.io/docs/"
fetched: "2026-03-10T08:56:15+00:00"
---

# Get Crypto Loan Position

Source: [https://bybit-exchange.github.io/docs/v5/new-crypto-loan/crypto-loan-position](https://bybit-exchange.github.io/docs/v5/new-crypto-loan/crypto-loan-position)


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

-   [English](/docs/v5/new-crypto-loan/crypto-loan-position){.dropdown__link .dropdown__link--active target="_self" rel="noopener noreferrer" lang="en"}
-   [中文（台灣）](/docs/zh-TW/v5/new-crypto-loan/crypto-loan-position){.dropdown__link target="_self" rel="noopener noreferrer" lang="zh-TW"}



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
    [Crypto Loan (New)](/docs/v5/new-crypto-loan/loan-coin){.menu__link .menu__link--sublist .menu__link--sublist-caret .menu__link--active aria-expanded="true"}
    

    -   [Get Borrowable Coins](/docs/v5/new-crypto-loan/loan-coin){.menu__link tabindex="0"}

    -   [Get Collateral Coins](/docs/v5/new-crypto-loan/collateral-coin){.menu__link tabindex="0"}

    -   [Get Max. Allowed Collateral Reduction Amount](/docs/v5/new-crypto-loan/reduce-max-collateral-amt){.menu__link tabindex="0"}

    -   [Adjust Collateral Amount](/docs/v5/new-crypto-loan/adjust-collateral){.menu__link tabindex="0"}

    -   [Get Collateral Adjustment History](/docs/v5/new-crypto-loan/ltv-adjust-history){.menu__link tabindex="0"}

    -   [Get Crypto Loan Position](/docs/v5/new-crypto-loan/crypto-loan-position){.menu__link .menu__link--active aria-current="page" tabindex="0"}

    -   [Obtain Max Loan Amount](/docs/v5/new-crypto-loan/max-loan-amt){.menu__link tabindex="0"}

    -   
        [Flexible Loan](/docs/v5/new-crypto-loan/flexible/borrow){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false" tabindex="0"}
        

    -   
        [Fixed Loan](/docs/v5/new-crypto-loan/fixed/supply-market){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false" tabindex="0"}
        

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
-   [Crypto Loan (New)]{.breadcrumbs__link}
-   [Get Crypto Loan Position]{.breadcrumbs__link itemprop="name"}


On this page



<div>

# Get Crypto Loan Position

</div>



> Permission: \"Spot trade\"\
> UID rate limit: 5 req / second

### HTTP Request[​](#http-request "Direct link to heading"){.hash-link} 

GET `/v5/crypto-loan-common/position`

### Request Parameters[​](#request-parameters "Direct link to heading"){.hash-link} 

None

### Response Parameters[​](#response-parameters "Direct link to heading"){.hash-link} 

  Parameter                       Type     Comments
  ------------------------------- -------- ---------------------------------------------------------------------
  borrowList                      array    Object
  \> fixedTotalDebt               string   Total debt of fixed loan (coin)
  \> fixedTotalDebtUSD            string   Total debt of fixed loan (USD)
  \> flexibleHourlyInterestRate   string   Flebible loan hourly interest rate
  \> flexibleTotalDebt            string   Total debt of flexible loan (coin)
  \> flexibleTotalDebtUSD         string   Total debt of flexible loan (USD)
  \> loanCurrency                 string   Loan coin
  collateralList                  array    Object
  \> amount                       string   Collateral amount in coin
  \> amountUSD                    string   Collateral amount in USD (after tierd collateral ratio calculation)
  \> currency                     string   Collateral coin
  ltv                             string   LTV
  supplyList                      array    Object
  \> amount                       string   Supply amount in coin
  \> amountUSD                    string   Supply amount in USD
  \> currency                     string   Supply coin
  totalCollateral                 string   Total collateral amount (USD)
  totalDebt                       string   Total debt (fixed + flexible, in USD)
  totalSupply                     string   Total supply amount (USD)

### Request Example[​](#request-example "Direct link to heading"){.hash-link} 


-   HTTP
-   Python
-   Node.js





``` {.prism-code .language-http .codeBlock_bY9V .thin-scrollbar tabindex="0"}
GET /v5/crypto-loan-common/position HTTP/1.1
Host: api-testnet.bybit.com
X-BAPI-SIGN: XXXXXX
X-BAPI-API-KEY: XXXXXX
X-BAPI-TIMESTAMP: 1752628288472
X-BAPI-RECV-WINDOW: 5000
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}








``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
from pybit.unified_trading import HTTP
session = HTTP(
    testnet=True,
    api_key="xxxxxxxxxxxxxxxxxx",
    api_secret="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
)
print(session.get_position_new_crypto_loan())
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}








``` {.prism-code .language-n4js .codeBlock_bY9V .thin-scrollbar tabindex="0"}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}







### Response Example[​](#response-example "Direct link to heading"){.hash-link} 



``` {.prism-code .language-json .codeBlock_bY9V .thin-scrollbar tabindex="0"}
{
    "retCode": 0,
    "retMsg": "ok",
    "result": {
        "borrowList": [
            {
                "fixedTotalDebt": "0",
                "fixedTotalDebtUSD": "0",
                "flexibleHourlyInterestRate": "0.0000001361462",
                "flexibleTotalDebt": "0.08800022",
                "flexibleTotalDebtUSD": "9355.37",
                "loanCurrency": "BTC"
            },
            {
                "fixedTotalDebt": "0.1",
                "fixedTotalDebtUSD": "282.8",
                "flexibleHourlyInterestRate": "0.00000188498892",
                "flexibleTotalDebt": "0",
                "flexibleTotalDebtUSD": "0",
                "loanCurrency": "ETH"
            }
        ],
        "collateralList": [
            {
                "amount": "0.12",
                "amountUSD": "9930.11",
                "currency": "BTC"
            },
            {
                "amount": "2",
                "amountUSD": "4524.81",
                "currency": "ETH"
            },
            {
                "amount": "4002.12",
                "amountUSD": "3201.69",
                "currency": "USDT"
            },
            {
                "amount": "1000",
                "amountUSD": "724.8",
                "currency": "USDC"
            }
        ],
        "ltv": "0.524344",
        "supplyList": [
            {
                "amount": "800.13041095890410959",
                "amountUSD": "800.13",
                "currency": "USDT"
            }
        ],
        "totalCollateral": "18381.41",
        "totalDebt": "9638.17",
        "totalSupply": "800.13"
    },
    "retExtInfo": {},
    "time": 1752627962000
}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}











[](/docs/v5/new-crypto-loan/ltv-adjust-history){.pagination-nav__link .pagination-nav__link--prev}


Previous



Get Collateral Adjustment History


[](/docs/v5/new-crypto-loan/max-loan-amt){.pagination-nav__link .pagination-nav__link--next}


Next



Obtain Max Loan Amount







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



