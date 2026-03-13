---
title: "Get Ads"
url: "https://bybit-exchange.github.io/docs/p2p/ad/online-ad-list"
source: "https://bybit-exchange.github.io/docs/"
fetched: "2026-03-10T08:54:00+00:00"
---

# Get Ads

Source: [https://bybit-exchange.github.io/docs/p2p/ad/online-ad-list](https://bybit-exchange.github.io/docs/p2p/ad/online-ad-list)


[Skip to main content](#){.skipToContent_fXgn}




![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdib3g9IjAgMCAzMCAzMCIgYXJpYS1oaWRkZW49InRydWUiPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMiIgLz48L3N2Zz4=)

[](/docs/){.navbar__brand}


![Bybit Logo](/docs/img/logo_lightmode.png){.themedImage_ToTc .themedImage--light_HNdA}![Bybit Logo](/docs/img/logo_darkmode.png){.themedImage_ToTc .themedImage--dark_i4oU}


[V5 API](/docs/v5/guide){.navbar__item .navbar__link}[P2P Trading](/docs/p2p/guide){.navbar__item .navbar__link .navbar__link--active aria-current="page"}[Bybit Pay![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMuNSIgaGVpZ2h0PSIxMy41IiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDI0IDI0IiBjbGFzcz0iaWNvbkV4dGVybmFsTGlua19uUElVIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMSAxM3YxMGgtMjF2LTE5aDEydjJoLTEwdjE1aDE3di04aDJ6bTMtMTJoLTEwLjk4OGw0LjAzNSA0LTYuOTc3IDcuMDcgMi44MjggMi44MjggNi45NzctNy4wNyA0LjEyNSA0LjE3MnYtMTF6IiAvPjwvc3ZnPg==){.iconExternalLink_nPIU}](https://bybit-exchange.github.io/pay-docs){.navbar__item .navbar__link target="_blank" rel="noopener noreferrer" docid="bybit_pay"}[Tax API V3](/docs/v3/intro){.navbar__item .navbar__link}




[Extras](#){.navbar__link aria-haspopup="true" aria-expanded="false" role="button"}

-   [Pilot Features](/docs/pilot-feature){.dropdown__link}
-   [Changelog](/docs/changelog/v5){.dropdown__link}
-   [API Explorer](/docs/api-explorer/v5/category){.dropdown__link}
-   [FAQ](/docs/faq){.dropdown__link}



[![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJpY29uTGFuZ3VhZ2VfbmxYayI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTIuODcgMTUuMDdsLTIuNTQtMi41MS4wMy0uMDNjMS43NC0xLjk0IDIuOTgtNC4xNyAzLjcxLTYuNTNIMTdWNGgtN1YySDh2MkgxdjEuOTloMTEuMTdDMTEuNSA3LjkyIDEwLjQ0IDkuNzUgOSAxMS4zNSA4LjA3IDEwLjMyIDcuMyA5LjE5IDYuNjkgOGgtMmMuNzMgMS42MyAxLjczIDMuMTcgMi45OCA0LjU2bC01LjA5IDUuMDJMNCAxOWw1LTUgMy4xMSAzLjExLjc2LTIuMDR6TTE4LjUgMTBoLTJMMTIgMjJoMmwxLjEyLTNoNC43NUwyMSAyMmgybC00LjUtMTJ6bS0yLjYyIDdsMS42Mi00LjMzTDE5LjEyIDE3aC0zLjI0eiIgLz48L3N2Zz4=){.iconLanguage_nlXk}English](#){.navbar__link aria-haspopup="true" aria-expanded="false" role="button"}

-   [English](/docs/p2p/ad/online-ad-list){.dropdown__link .dropdown__link--active target="_self" rel="noopener noreferrer" lang="en"}
-   [中文（台灣）](/docs/zh-TW/p2p/ad/online-ad-list){.dropdown__link target="_self" rel="noopener noreferrer" lang="zh-TW"}



![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgY2xhc3M9ImxpZ2h0VG9nZ2xlSWNvbl9weWhSIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiw5YzEuNjUsMCwzLDEuMzUsMywzcy0xLjM1LDMtMywzcy0zLTEuMzUtMy0zUzEwLjM1LDksMTIsOSBNMTIsN2MtMi43NiwwLTUsMi4yNC01LDVzMi4yNCw1LDUsNXM1LTIuMjQsNS01IFMxNC43Niw3LDEyLDdMMTIsN3ogTTIsMTNsMiwwYzAuNTUsMCwxLTAuNDUsMS0xcy0wLjQ1LTEtMS0xbC0yLDBjLTAuNTUsMC0xLDAuNDUtMSwxUzEuNDUsMTMsMiwxM3ogTTIwLDEzbDIsMGMwLjU1LDAsMS0wLjQ1LDEtMSBzLTAuNDUtMS0xLTFsLTIsMGMtMC41NSwwLTEsMC40NS0xLDFTMTkuNDUsMTMsMjAsMTN6IE0xMSwydjJjMCwwLjU1LDAuNDUsMSwxLDFzMS0wLjQ1LDEtMVYyYzAtMC41NS0wLjQ1LTEtMS0xUzExLDEuNDUsMTEsMnogTTExLDIwdjJjMCwwLjU1LDAuNDUsMSwxLDFzMS0wLjQ1LDEtMXYtMmMwLTAuNTUtMC40NS0xLTEtMUMxMS40NSwxOSwxMSwxOS40NSwxMSwyMHogTTUuOTksNC41OGMtMC4zOS0wLjM5LTEuMDMtMC4zOS0xLjQxLDAgYy0wLjM5LDAuMzktMC4zOSwxLjAzLDAsMS40MWwxLjA2LDEuMDZjMC4zOSwwLjM5LDEuMDMsMC4zOSwxLjQxLDBzMC4zOS0xLjAzLDAtMS40MUw1Ljk5LDQuNTh6IE0xOC4zNiwxNi45NSBjLTAuMzktMC4zOS0xLjAzLTAuMzktMS40MSwwYy0wLjM5LDAuMzktMC4zOSwxLjAzLDAsMS40MWwxLjA2LDEuMDZjMC4zOSwwLjM5LDEuMDMsMC4zOSwxLjQxLDBjMC4zOS0wLjM5LDAuMzktMS4wMywwLTEuNDEgTDE4LjM2LDE2Ljk1eiBNMTkuNDIsNS45OWMwLjM5LTAuMzksMC4zOS0xLjAzLDAtMS40MWMtMC4zOS0wLjM5LTEuMDMtMC4zOS0xLjQxLDBsLTEuMDYsMS4wNmMtMC4zOSwwLjM5LTAuMzksMS4wMywwLDEuNDEgczEuMDMsMC4zOSwxLjQxLDBMMTkuNDIsNS45OXogTTcuMDUsMTguMzZjMC4zOS0wLjM5LDAuMzktMS4wMywwLTEuNDFjLTAuMzktMC4zOS0xLjAzLTAuMzktMS40MSwwbC0xLjA2LDEuMDYgYy0wLjM5LDAuMzktMC4zOSwxLjAzLDAsMS40MXMxLjAzLDAuMzksMS40MSwwTDcuMDUsMTguMzZ6IiAvPjwvc3ZnPg==){.lightToggleIcon_pyhR}![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgY2xhc3M9ImRhcmtUb2dnbGVJY29uX3dmZ1IiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTkuMzcsNS41MUM5LjE5LDYuMTUsOS4xLDYuODIsOS4xLDcuNWMwLDQuMDgsMy4zMiw3LjQsNy40LDcuNGMwLjY4LDAsMS4zNS0wLjA5LDEuOTktMC4yN0MxNy40NSwxNy4xOSwxNC45MywxOSwxMiwxOSBjLTMuODYsMC03LTMuMTQtNy03QzUsOS4wNyw2LjgxLDYuNTUsOS4zNyw1LjUxeiBNMTIsM2MtNC45NywwLTksNC4wMy05LDlzNC4wMyw5LDksOXM5LTQuMDMsOS05YzAtMC40Ni0wLjA0LTAuOTItMC4xLTEuMzYgYy0wLjk4LDEuMzctMi41OCwyLjI2LTQuNCwyLjI2Yy0yLjk4LDAtNS40LTIuNDItNS40LTUuNGMwLTEuODEsMC44OS0zLjQyLDIuMjYtNC40QzEyLjkyLDMuMDQsMTIuNDYsMywxMiwzTDEyLDN6IiAvPjwvc3ZnPg==){.darkToggleIcon_wfgR}



[![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGNsYXNzPSJEb2NTZWFyY2gtU2VhcmNoLUljb24iIHZpZXdib3g9IjAgMCAyMCAyMCI+PHBhdGggZD0iTTE0LjM4NiAxNC4zODZsNC4wODc3IDQuMDg3Ny00LjA4NzctNC4wODc3Yy0yLjk0MTggMi45NDE5LTcuNzExNSAyLjk0MTktMTAuNjUzMyAwLTIuOTQxOS0yLjk0MTgtMi45NDE5LTcuNzExNSAwLTEwLjY1MzMgMi45NDE4LTIuOTQxOSA3LjcxMTUtMi45NDE5IDEwLjY1MzMgMCAyLjk0MTkgMi45NDE4IDIuOTQxOSA3LjcxMTUgMCAxMC42NTMzeiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPjwvc3ZnPg==){.DocSearch-Search-Icon}[Search]{.DocSearch-Button-Placeholder}]{.DocSearch-Button-Container}[]{.DocSearch-Button-Keys}










-   [P2P Authentication](/docs/p2p/guide){.menu__link}

-   [Get Coin Balance](/docs/p2p/all-balance){.menu__link}

-   [Rate Limit](/docs/p2p/rate-limit){.menu__link}

-   
    [Advertisement](/docs/p2p/ad/online-ad-list){.menu__link .menu__link--sublist .menu__link--sublist-caret .menu__link--active aria-expanded="true"}
    

    -   [Get Ads](/docs/p2p/ad/online-ad-list){.menu__link .menu__link--active aria-current="page" tabindex="0"}
    -   [Post Ad](/docs/p2p/ad/post-new-ad){.menu__link tabindex="0"}
    -   [Remove Ad](/docs/p2p/ad/remove-ad){.menu__link tabindex="0"}
    -   [Update / Relist Ad](/docs/p2p/ad/update-list-ad){.menu__link tabindex="0"}
    -   [Get My Ads](/docs/p2p/ad/ad-list){.menu__link tabindex="0"}
    -   [Get My Ad Details](/docs/p2p/ad/ad-detail){.menu__link tabindex="0"}

-   
    [Orders](/docs/p2p/order/order-list){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false"}
    

-   
    [User](/docs/p2p/user/acct-info){.menu__link .menu__link--sublist .menu__link--sublist-caret aria-expanded="false"}
    

![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0iY29sbGFwc2VTaWRlYmFyQnV0dG9uSWNvbl9rdjBfIj48ZyBmaWxsPSIjN2E3YTdhIj48cGF0aCBkPSJNOS45OTIgMTAuMDIzYzAgLjItLjA2Mi4zOTktLjE3Mi41NDdsLTQuOTk2IDcuNDkyYS45ODIuOTgyIDAgMDEtLjgyOC40NTRIMWMtLjU1IDAtMS0uNDUzLTEtMSAwLS4yLjA1OS0uNDAzLjE2OC0uNTUxbDQuNjI5LTYuOTQyTC4xNjggMy4wNzhBLjkzOS45MzkgMCAwMTAgMi41MjhjMC0uNTQ4LjQ1LS45OTcgMS0uOTk3aDIuOTk2Yy4zNTIgMCAuNjQ5LjE4LjgyOC40NUw5LjgyIDkuNDcyYy4xMS4xNDguMTcyLjM0Ny4xNzIuNTV6bTAgMCIgLz48cGF0aCBkPSJNMTkuOTggMTAuMDIzYzAgLjItLjA1OC4zOTktLjE2OC41NDdsLTQuOTk2IDcuNDkyYS45ODcuOTg3IDAgMDEtLjgyOC40NTRoLTNjLS41NDcgMC0uOTk2LS40NTMtLjk5Ni0xIDAtLjIuMDU5LS40MDMuMTY4LS41NTFsNC42MjUtNi45NDItNC42MjUtNi45NDVhLjkzOS45MzkgMCAwMS0uMTY4LS41NSAxIDEgMCAwMS45OTYtLjk5N2gzYy4zNDggMCAuNjQ5LjE4LjgyOC40NWw0Ljk5NiA3LjQ5MmMuMTEuMTQ4LjE2OC4zNDcuMTY4LjU1em0wIDAiIC8+PC9nPjwvc3ZnPg==){.collapseSidebarButtonIcon_kv0_}







-   [![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMjQgMjQiIGNsYXNzPSJicmVhZGNydW1iSG9tZUljb25fT1ZndCI+PHBhdGggZD0iTTEwIDE5di01aDR2NWMwIC41NS40NSAxIDEgMWgzYy41NSAwIDEtLjQ1IDEtMXYtN2gxLjdjLjQ2IDAgLjY4LS41Ny4zMy0uODdMMTIuNjcgMy42Yy0uMzgtLjM0LS45Ni0uMzQtMS4zNCAwbC04LjM2IDcuNTNjLS4zNC4zLS4xMy44Ny4zMy44N0g1djdjMCAuNTUuNDUgMSAxIDFoM2MuNTUgMCAxLS40NSAxLTF6IiBmaWxsPSJjdXJyZW50Q29sb3IiIC8+PC9zdmc+){.breadcrumbHomeIcon_OVgt}](/docs/){.breadcrumbs__link aria-label="Home page"}
-   [Advertisement]{.breadcrumbs__link}
-   [Get Ads]{.breadcrumbs__link itemprop="name"}


On this page



<div>

# Get Ads

</div>



### HTTP Request[​](#http-request "Direct link to heading"){.hash-link} 

POST `/v5/p2p/item/online`

### Request Parameters[​](#request-parameters "Direct link to heading"){.hash-link} 

  Parameter    Required   Type     Comments
  ------------ ---------- -------- -------------------------------------------
  tokenId      **true**   string   Token ID. E.g. USDT, ETH, BTC
  currencyId   **true**   string   Currency ID. E.g. HKD, USD, EUR
  side         **true**   string   `0`: buy; `1`: sell
  page         false      string   Page number. Default value is 1
  size         false      string   Page size. Default value is 10, max is 30

### Response Parameters[​](#response-parameters "Direct link to heading"){.hash-link} 

  Parameter              Type              Comments
  ---------------------- ----------------- ------------------------------------------------------------------------------------------
  count                  int               Total count
  items                  array\<object\>   
  \> id                  string            Ad ID
  \> userId              int               User ID
  \> nickName            string            Nickname of ad maker
  \> tokenId             string            Token ID
  \> currencyId          string            Currency ID
  \> side                string            `0`: buy; `1`: sell
  \> price               string            Ad price
  \> lastQuantity        string            Tradable quantity of token
  \> minAmount           string            Min transaction amount of currency
  \> maxAmount           string            Max transaction amount of currency
  \> payments            array\[string\]   Payment method type ID
  \> recentOrderNum      string            Recent order number
  \> recentExecuteRate   string            Recent execute rate
  \> isOnline            boolean           Whether or not the user is online
  \> lastLogoutTime      string            User\'s last logout time
  \> authTag             array\[string\]   User tag; GA for General Advertiser, VA for Verified Advertiser, BA for Block Advertiser
  \> paymentPeriod       int               Payment period (unit: minutes)

### Request Example[​](#request-example "Direct link to heading"){.hash-link} 


-   HTTP
-   Python





``` {.prism-code .language-http .codeBlock_bY9V .thin-scrollbar tabindex="0"}
POST /v5/p2p/item/online HTTP/1.1
Host: api-testnet.bybit.com
X-BAPI-SIGN: XXXXX
X-BAPI-API-KEY: xxxxxxxxxxxxxxxxxx
X-BAPI-TIMESTAMP: 1675866354698
X-BAPI-RECV-WINDOW: 5000
Content-Type: application/json

{
    "tokenId":"USDT",
    "currencyId":"EUR",
    "side":"0"
}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}








``` {.prism-code .language-python .codeBlock_bY9V .thin-scrollbar tabindex="0"}
from bybit_p2p import P2P
api = P2P(
    testnet=True,
    api_key="xxxxxxxxxxxxxxxxxx",
    api_secret="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
)
print(api.get_online_ads(
    tokenId="USDT",
    currencyId="EUR",
    side="0"
))
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}







### Response Example[​](#response-example "Direct link to heading"){.hash-link} 



``` {.prism-code .language-json .codeBlock_bY9V .thin-scrollbar tabindex="0"}
{
    "ret_code": 0,
    "ret_msg": "SUCCESS",
    "result": {
        "count": 3,
        "items": [
            {
                "id": "1899658238346616832",
                "accountId": "290120",
                "userId": "290118",
                "nickName": "cjmtest",
                "tokenId": "USDT",
                "tokenName": "",
                "currencyId": "EUR",
                "side": 0,
                "priceType": 0,
                "price": "0.93",
                "premium": "0",
                "lastQuantity": "10000",
                "quantity": "10000",
                "frozenQuantity": "0",
                "executedQuantity": "0",
                "minAmount": "200",
                "maxAmount": "9300",
                "remark": "1111121212",
                "status": 10,
                "createDate": "1741748793000",
                "payments": [
                    "14"
                ],
                "orderNum": 0,
                "finishNum": 0,
                "recentOrderNum": 0,
                "recentExecuteRate": 0,
                "fee": "",
                "isOnline": true,
                "lastLogoutTime": "1741749194",
                "blocked": "N",
                "makerContact": false,
                "symbolInfo": {
                    "id": "13",
                    "exchangeId": "301",
                    "orgId": "9001",
                    "tokenId": "USDT",
                    "currencyId": "EUR",
                    "status": 1,
                    "lowerLimitAlarm": 90,
                    "upperLimitAlarm": 110,
                    "itemDownRange": "70",
                    "itemUpRange": "130",
                    "currencyMinQuote": "2",
                    "currencyMaxQuote": "46500",
                    "currencyLowerMaxQuote": "2",
                    "tokenMinQuote": "1",
                    "tokenMaxQuote": "50000",
                    "kycCurrencyLimit": "900",
                    "itemSideLimit": 3,
                    "buyFeeRate": "0",
                    "sellFeeRate": "0",
                    "orderAutoCancelMinute": 15,
                    "orderFinishMinute": 10,
                    "tradeSide": 9,
                    "currency": {
                        "id": "14",
                        "exchangeId": "0",
                        "orgId": "9001",
                        "currencyId": "EUR",
                        "scale": 3
                    },
                    "token": {
                        "id": "1",
                        "exchangeId": "0",
                        "orgId": "9001",
                        "tokenId": "USDT",
                        "scale": 4,
                        "sequence": 1
                    },
                    "buyAd": null,
                    "sellAd": null
                },
                "tradingPreferenceSet": {
                    "hasUnPostAd": 0,
                    "isKyc": 1,
                    "isEmail": 0,
                    "isMobile": 0,
                    "hasRegisterTime": 0,
                    "registerTimeThreshold": 0,
                    "orderFinishNumberDay30": 0,
                    "completeRateDay30": "0",
                    "nationalLimit": "",
                    "hasOrderFinishNumberDay30": 0,
                    "hasCompleteRateDay30": 0,
                    "hasNationalLimit": 0
                },
                "version": 0,
                "authStatus": 1,
                "recommend": false,
                "recommendTag": "",
                "authTag": [
                    "BA"
                ],
                "userType": "ORG",
                "itemType": "ORIGIN",
                "paymentPeriod": 15
            },
            {
                "id": "1899659847717838848",
                "accountId": "290120",
                "userId": "290118",
                "nickName": "cjmtest",
                "tokenId": "USDT",
                "tokenName": "",
                "currencyId": "EUR",
                "side": 0,
                "priceType": 0,
                "price": "0.92",
                "premium": "0",
                "lastQuantity": "20000",
                "quantity": "20000",
                "frozenQuantity": "0",
                "executedQuantity": "0",
                "minAmount": "20",
                "maxAmount": "18400",
                "remark": "test",
                "status": 10,
                "createDate": "1741749177000",
                "payments": [
                    "377"
                ],
                "orderNum": 0,
                "finishNum": 0,
                "recentOrderNum": 0,
                "recentExecuteRate": 0,
                "fee": "",
                "isOnline": true,
                "lastLogoutTime": "1741749194",
                "blocked": "N",
                "makerContact": false,
                "symbolInfo": {
                    "id": "13",
                    "exchangeId": "301",
                    "orgId": "9001",
                    "tokenId": "USDT",
                    "currencyId": "EUR",
                    "status": 1,
                    "lowerLimitAlarm": 90,
                    "upperLimitAlarm": 110,
                    "itemDownRange": "70",
                    "itemUpRange": "130",
                    "currencyMinQuote": "2",
                    "currencyMaxQuote": "46500",
                    "currencyLowerMaxQuote": "2",
                    "tokenMinQuote": "1",
                    "tokenMaxQuote": "50000",
                    "kycCurrencyLimit": "900",
                    "itemSideLimit": 3,
                    "buyFeeRate": "0",
                    "sellFeeRate": "0",
                    "orderAutoCancelMinute": 15,
                    "orderFinishMinute": 10,
                    "tradeSide": 9,
                    "currency": {
                        "id": "14",
                        "exchangeId": "0",
                        "orgId": "9001",
                        "currencyId": "EUR",
                        "scale": 3
                    },
                    "token": {
                        "id": "1",
                        "exchangeId": "0",
                        "orgId": "9001",
                        "tokenId": "USDT",
                        "scale": 4,
                        "sequence": 1
                    },
                    "buyAd": null,
                    "sellAd": null
                },
                "tradingPreferenceSet": {
                    "hasUnPostAd": 0,
                    "isKyc": 1,
                    "isEmail": 0,
                    "isMobile": 0,
                    "hasRegisterTime": 0,
                    "registerTimeThreshold": 0,
                    "orderFinishNumberDay30": 60,
                    "completeRateDay30": "95",
                    "nationalLimit": "",
                    "hasOrderFinishNumberDay30": 1,
                    "hasCompleteRateDay30": 1,
                    "hasNationalLimit": 0
                },
                "version": 0,
                "authStatus": 1,
                "recommend": false,
                "recommendTag": "",
                "authTag": [
                    "BA"
                ],
                "userType": "ORG",
                "itemType": "ORIGIN",
                "paymentPeriod": 15
            },
            {
                "id": "1898988222063644672",
                "accountId": "1448940",
                "userId": "1448939",
                "nickName": "Saaaul",
                "tokenId": "USDT",
                "tokenName": "",
                "currencyId": "EUR",
                "side": 0,
                "priceType": 0,
                "price": "0.91",
                "premium": "0",
                "lastQuantity": "5000",
                "quantity": "5000",
                "frozenQuantity": "0",
                "executedQuantity": "0",
                "minAmount": "10",
                "maxAmount": "4550",
                "remark": "1. 付款賬號名稱應和 Bybit 賬號名稱一致。\n2. 請確保轉賬留言中不要出現 USDT 等幣種名稱,否則轉賬將會失敗。",
                "status": 10,
                "createDate": "1741589049000",
                "payments": [
                    "377"
                ],
                "orderNum": 0,
                "finishNum": 0,
                "recentOrderNum": 0,
                "recentExecuteRate": 0,
                "fee": "",
                "isOnline": true,
                "lastLogoutTime": "1741751952",
                "blocked": "N",
                "makerContact": false,
                "symbolInfo": {
                    "id": "13",
                    "exchangeId": "301",
                    "orgId": "9001",
                    "tokenId": "USDT",
                    "currencyId": "EUR",
                    "status": 1,
                    "lowerLimitAlarm": 90,
                    "upperLimitAlarm": 110,
                    "itemDownRange": "70",
                    "itemUpRange": "130",
                    "currencyMinQuote": "2",
                    "currencyMaxQuote": "46500",
                    "currencyLowerMaxQuote": "2",
                    "tokenMinQuote": "1",
                    "tokenMaxQuote": "50000",
                    "kycCurrencyLimit": "900",
                    "itemSideLimit": 3,
                    "buyFeeRate": "0",
                    "sellFeeRate": "0",
                    "orderAutoCancelMinute": 15,
                    "orderFinishMinute": 10,
                    "tradeSide": 9,
                    "currency": {
                        "id": "14",
                        "exchangeId": "0",
                        "orgId": "9001",
                        "currencyId": "EUR",
                        "scale": 3
                    },
                    "token": {
                        "id": "1",
                        "exchangeId": "0",
                        "orgId": "9001",
                        "tokenId": "USDT",
                        "scale": 4,
                        "sequence": 1
                    },
                    "buyAd": null,
                    "sellAd": null
                },
                "tradingPreferenceSet": {
                    "hasUnPostAd": 1,
                    "isKyc": 1,
                    "isEmail": 1,
                    "isMobile": 0,
                    "hasRegisterTime": 1,
                    "registerTimeThreshold": 15,
                    "orderFinishNumberDay30": 60,
                    "completeRateDay30": "95",
                    "nationalLimit": "",
                    "hasOrderFinishNumberDay30": 1,
                    "hasCompleteRateDay30": 1,
                    "hasNationalLimit": 0
                },
                "version": 0,
                "authStatus": 1,
                "recommend": false,
                "recommendTag": "",
                "authTag": [
                    "BA"
                ],
                "userType": "PERSONAL",
                "itemType": "ORIGIN",
                "paymentPeriod": 15
            }
        ]
    },
    "ext_code": "",
    "ext_info": {},
    "time_now": "1741761340.014127"
}
```


[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvbkljb25feTk3TiIgdmlld2JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz48L3N2Zz4=){.copyButtonIcon_y97N}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY29weUJ1dHRvblN1Y2Nlc3NJY29uX0xqZFMiIHZpZXdib3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=){.copyButtonSuccessIcon_LjdS}]{.copyButtonIcons_eSgA aria-hidden="true"}











[](/docs/p2p/rate-limit){.pagination-nav__link .pagination-nav__link--prev}


Previous



Rate Limit


[](/docs/p2p/ad/post-new-ad){.pagination-nav__link .pagination-nav__link--next}


Next



Post Ad







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



