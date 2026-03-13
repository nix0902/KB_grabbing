::: wy-grid-for-nav
::: wy-side-scroll
::: wy-side-nav-search
[python-bitget](index.html){.icon .icon-home}

::: version
latest
:::

::: {role="search"}
:::
:::

::: {.wy-menu .wy-menu-vertical spy="affix" role="navigation" aria-label="Navigation menu"}
-   [Getting Started](overview.html){.reference .internal}
-   [Spot](spot.html#){.current .reference .internal}
    -   [Public](spot.html#public){.reference .internal}
        -   [Get Server Time](spot.html#id1){.reference .internal}
        -   [Get Coin List](spot.html#id2){.reference .internal}
        -   [Get Symbols](spot.html#id3){.reference .internal}
        -   [Get Single Symbol](spot.html#id4){.reference .internal}
    -   [Market](spot.html#market){.reference .internal}
        -   [Get Single Ticker](spot.html#id5){.reference .internal}
        -   [Get All Tickers](spot.html#id6){.reference .internal}
        -   [Get Market Trades](spot.html#id7){.reference .internal}
        -   [Get Candle Data](spot.html#id8){.reference .internal}
        -   [Get Depth](spot.html#id9){.reference .internal}
    -   [Wallet](spot.html#wallet){.reference .internal}
        -   [Transfer](spot.html#id10){.reference .internal}
        -   [Sub Transfer](spot.html#id11){.reference .internal}
        -   [Get Coin Address](spot.html#id12){.reference .internal}
        -   [Withdraw](spot.html#id13){.reference .internal}
        -   [Inner Withdraw](spot.html#id14){.reference .internal}
        -   [Get Withdraw list](spot.html#id15){.reference .internal}
        -   [Get Deposit List](spot.html#id16){.reference .internal}
    -   [Account](spot.html#account){.reference .internal}
        -   [Get ApiKey Info](spot.html#id17){.reference .internal}
        -   [Get Account Assets](spot.html#id18){.reference .internal}
        -   [Get sub Account Spot Assets](spot.html#id19){.reference
            .internal}
        -   [Get Bills](spot.html#id20){.reference .internal}
        -   [Get Transfer List](spot.html#id21){.reference .internal}
    -   [Trade](spot.html#trade){.reference .internal}
        -   [Place order](spot.html#id22){.reference .internal}
        -   [Batch order](spot.html#id23){.reference .internal}
        -   [Cancel order](spot.html#id24){.reference .internal}
        -   [Cancel order in batch (single
            instruments)](spot.html#id25){.reference .internal}
        -   [Get order details](spot.html#id26){.reference .internal}
        -   [Get order List](spot.html#id27){.reference .internal}
        -   [Get order history](spot.html#id28){.reference .internal}
        -   [Get transaction details](spot.html#id29){.reference
            .internal}
        -   [Place plan order](spot.html#id30){.reference .internal}
        -   [Modify plan order](spot.html#id31){.reference .internal}
        -   [Cancel plan order](spot.html#id32){.reference .internal}
        -   [Get current plan orders](spot.html#id33){.reference
            .internal}
        -   [Get history plan orders](spot.html#id34){.reference
            .internal}
-   [FuturesⓂ(USDT/Coin)](mix.html){.reference .internal}
-   [Broker](broker.html){.reference .internal}
-   [WebSocketAPI](websockets.html){.reference .internal}
:::
:::

::: {.section .wy-nav-content-wrap toggle="wy-nav-shift"}
[python-bitget](index.html)

::: wy-nav-content
::: rst-content
::: {role="navigation" aria-label="Page navigation"}
-   [](index.html){.icon .icon-home aria-label="Home"}
-   Spot
-   [Edit on
    GitHub](https://github.com/cuongitl/python-bitget/blob/development/docs/spot.rst){.fa
    .fa-github}

------------------------------------------------------------------------
:::

::: {.document role="main" itemscope="itemscope" itemtype="http://schema.org/Article"}
::: {itemprop="articleBody"}
::: {#spot .section}
# Spot[](spot.html#spot "Permalink to this heading"){.headerlink}

::: {#public .section}
## Public[](spot.html#public "Permalink to this heading"){.headerlink}

::: {#id1 .section}
### [Get Server Time](spot.html#){.reference .external}[](spot.html#id1 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_get_server_time()
:::
:::
:::

::: {#id2 .section}
### [Get Coin List](spot.html#){.reference .external}[](spot.html#id2 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_get_coin_list()
:::
:::
:::

::: {#id3 .section}
### [Get Symbols](spot.html#){.reference .external}[](spot.html#id3 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_get_symbols()
:::
:::
:::

::: {#id4 .section}
### [Get Single Symbol](spot.html#){.reference .external}[](spot.html#id4 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_get_symbol()
:::
:::
:::
:::

::: {#market .section}
## Market[](spot.html#market "Permalink to this heading"){.headerlink}

::: {#id5 .section}
### [Get Single Ticker](spot.html#){.reference .external}[](spot.html#id5 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_get_ticker(self, symbol)
:::
:::
:::

::: {#id6 .section}
### [Get All Tickers](spot.html#){.reference .external}[](spot.html#id6 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_get_tickers()
:::
:::
:::

::: {#id7 .section}
### [Get Market Trades](spot.html#){.reference .external}[](spot.html#id7 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.pot_get_market_trades(self, symbol, limit=100)
:::
:::
:::

::: {#id8 .section}
### [Get Candle Data](spot.html#){.reference .external}[](spot.html#id8 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_get_candle_data(self, symbol, period, after='', before='', limit=100)
:::
:::
:::

::: {#id9 .section}
### [Get Depth](spot.html#){.reference .external}[](spot.html#id9 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_get_depth(self, symbol, limit='150', type='step0')
:::
:::
:::
:::

::: {#wallet .section}
## Wallet[](spot.html#wallet "Permalink to this heading"){.headerlink}

::: {#id10 .section}
### [Transfer](spot.html#){.reference .external}[](spot.html#id10 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_transfer(self, fromType, toType, amount, coin, clientOrderId=None)
:::
:::
:::

::: {#id11 .section}
### [Sub Transfer](spot.html#){.reference .external}[](spot.html#id11 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_sub_transfer(self, fromType, toType, amount, coin, clientOrderId, fromUserId, toUserId)
:::
:::
:::

::: {#id12 .section}
### [Get Coin Address](spot.html#){.reference .external}[](spot.html#id12 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_get_depositAddress(self, coin, chain)
:::
:::
:::

::: {#id13 .section}
### [Withdraw](spot.html#){.reference .external}[](spot.html#id13 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_withdrawal(self, coin, address, chain, amount, remark='', clientOrderId=None, tag=None)
:::
:::
:::

::: {#id14 .section}
### [Inner Withdraw](spot.html#){.reference .external}[](spot.html#id14 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_withdrawal_inner(self, coin, toUid, amount, clientOrderId=None)
:::
:::
:::

::: {#id15 .section}
### [Get Withdraw list](spot.html#){.reference .external}[](spot.html#id15 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_get_withdrawalList(self, coin, startTime, endTime, pageSize=20, pageNo=1)
:::
:::
:::

::: {#id16 .section}
### [Get Deposit List](spot.html#){.reference .external}[](spot.html#id16 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_get_depositList(self, coin, startTime, endTime, pageSize=20, pageNo=1)
:::
:::
:::
:::

::: {#account .section}
## Account[](spot.html#account "Permalink to this heading"){.headerlink}

::: {#id17 .section}
### [Get ApiKey Info](spot.html#){.reference .external}[](spot.html#id17 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_get_ApiKeyInfo()
:::
:::
:::

::: {#id18 .section}
### [Get Account Assets](spot.html#){.reference .external}[](spot.html#id18 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_get_account_assets(self, coin=None)
:::
:::
:::

::: {#id19 .section}
### [Get sub Account Spot Assets](spot.html#){.reference .external}[](spot.html#id19 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_get_sub_account_assets()
:::
:::
:::

::: {#id20 .section}
### [Get Bills](spot.html#){.reference .external}[](spot.html#id20 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_get_bills(self, coinId='', groupType='', bizType='', after='', before='', limit=100)
:::
:::
:::

::: {#id21 .section}
### [Get Transfer List](spot.html#){.reference .external}[](spot.html#id21 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_get_transfer_list(self, coinId='', fromType='', after='', before='', limit=100)
:::
:::
:::
:::

::: {#trade .section}
## Trade[](spot.html#trade "Permalink to this heading"){.headerlink}

::: {#id22 .section}
### [Place order](spot.html#){.reference .external}[](spot.html#id22 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_place_order(self, symbol, quantity, side, orderType, force, price='', clientOrderId=None)
:::
:::
:::

::: {#id23 .section}
### [Batch order](spot.html#){.reference .external}[](spot.html#id23 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_place_batch_orders(self, symbol, orderList)
:::
:::
:::

::: {#id24 .section}
### [Cancel order](spot.html#){.reference .external}[](spot.html#id24 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_cance_order(self, symbol, orderId)
:::
:::
:::

::: {#id25 .section}
### [Cancel order in batch (single instruments)](spot.html#){.reference .external}[](spot.html#id25 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_cancel_batch_orders(self, symbol, orderIds)
:::
:::
:::

::: {#id26 .section}
### [Get order details](spot.html#){.reference .external}[](spot.html#id26 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_get_order_details(self, symbol, orderId, clientOrderId=None)
:::
:::
:::

::: {#id27 .section}
### [Get order List](spot.html#){.reference .external}[](spot.html#id27 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_get_open_orders(self, symbol='')
:::
:::
:::

::: {#id28 .section}
### [Get order history](spot.html#){.reference .external}[](spot.html#id28 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_get_order_history(self, symbol, after='', before='', limit=100)
:::
:::
:::

::: {#id29 .section}
### [Get transaction details](spot.html#){.reference .external}[](spot.html#id29 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_get_transaction_details(self, symbol='', orderId='', after='', before='', limit=100)
:::
:::
:::

::: {#id30 .section}
### [Place plan order](spot.html#){.reference .external}[](spot.html#id30 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_place_plan_order(self, symbol, side, triggerPrice, size, triggerType, orderType,
                              executePrice=None, timeInForceValue=None, clientOrderId=None)
:::
:::
:::

::: {#id31 .section}
### [Modify plan order](spot.html#){.reference .external}[](spot.html#id31 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_modify_plan_order(self, orderId, orderType, triggerPrice,
                               size=None, executePrice=None)
:::
:::
:::

::: {#id32 .section}
### [Cancel plan order](spot.html#){.reference .external}[](spot.html#id32 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_cancel_plan_order(self, orderId)
:::
:::
:::

::: {#id33 .section}
### [Get current plan orders](spot.html#){.reference .external}[](spot.html#id33 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_get_plan_orders(self, symbol, pageSize=20, lastEndId='')
:::
:::
:::

::: {#id34 .section}
### [Get history plan orders](spot.html#){.reference .external}[](spot.html#id34 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.spot_get_history_plan_orders(self, symbol, startTime, endTime, pageSize=20, lastEndId=''):
:::
:::
:::
:::
:::
:::
:::

::: {.rst-footer-buttons role="navigation" aria-label="Footer"}
[[]{.fa .fa-arrow-circle-left aria-hidden="true"}
Previous](overview.html "Getting Started"){.btn .btn-neutral .float-left
accesskey="p" rel="prev"} [Next []{.fa .fa-arrow-circle-right
aria-hidden="true"}](mix.html "FuturesⓂ(USDT/Coin)"){.btn .btn-neutral
.float-right accesskey="n" rel="next"}
:::

------------------------------------------------------------------------

::: {role="contentinfo"}
© Copyright ©2023. Built with ❤️by Cuongitl.. [Revision `d1211348`.
]{.commit}
:::

Built with [Sphinx](https://www.sphinx-doc.org/) using a
[theme](https://github.com/readthedocs/sphinx_rtd_theme) provided by
[Read the Docs](https://readthedocs.org).
:::
:::
:::
:::
