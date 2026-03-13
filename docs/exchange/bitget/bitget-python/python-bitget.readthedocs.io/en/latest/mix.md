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
-   [Spot](spot.html){.reference .internal}
-   [FuturesⓂ(USDT/Coin)](mix.html#){.current .reference .internal}
    -   [Market](mix.html#market){.reference .internal}
        -   [Get All Symbols](mix.html#id1){.reference .internal}
        -   [Get Depth](mix.html#id2){.reference .internal}
        -   [Get Single Symbol Ticker](mix.html#id3){.reference
            .internal}
        -   [Get All Symbol Ticker](mix.html#id4){.reference .internal}
        -   [Get Fills](mix.html#id5){.reference .internal}
        -   [Get Candle Data](mix.html#id6){.reference .internal}
        -   [Get Symbol Index Price](mix.html#id7){.reference .internal}
        -   [Get Symbol Next Funding Time](mix.html#id8){.reference
            .internal}
        -   [Get History Funding Rate](mix.html#id9){.reference
            .internal}
        -   [Get Current Funding Rate](mix.html#id10){.reference
            .internal}
        -   [Get Open Interest](mix.html#id11){.reference .internal}
        -   [Get Symbol Mark Price](mix.html#id12){.reference .internal}
        -   [Get Symbol Leverage](mix.html#id13){.reference .internal}
    -   [Account](mix.html#account){.reference .internal}
        -   [Get Single Account](mix.html#id14){.reference .internal}
        -   [Get Account List](mix.html#id15){.reference .internal}
        -   [Get sub Account Contract Assets](mix.html#id16){.reference
            .internal}
        -   [Get Open Count](mix.html#id17){.reference .internal}
        -   [Change Leverage](mix.html#id18){.reference .internal}
        -   [Change Margin](mix.html#id19){.reference .internal}
        -   [Change Margin Mode](mix.html#id20){.reference .internal}
        -   [Change Hold Mode](mix.html#id21){.reference .internal}
        -   [Get Symbol Position](mix.html#id22){.reference .internal}
        -   [Get All Position](mix.html#id23){.reference .internal}
        -   [Get Account Bill](mix.html#id24){.reference .internal}
        -   [Get Business Account Bill](mix.html#id25){.reference
            .internal}
    -   [Trade](mix.html#trade){.reference .internal}
        -   [Place Order](mix.html#id26){.reference .internal}
        -   [Reversal](mix.html#id27){.reference .internal}
        -   [Batch Order](mix.html#id28){.reference .internal}
        -   [Cancel Order](mix.html#id29){.reference .internal}
        -   [Batch Cancel Order](mix.html#id30){.reference .internal}
        -   [Cancel All Order](mix.html#id31){.reference .internal}
        -   [Get Open Order](mix.html#id32){.reference .internal}
        -   [Get All Open Order](mix.html#id33){.reference .internal}
        -   [Get History Orders](mix.html#id34){.reference .internal}
        -   [Get ProductType History Orders](mix.html#id35){.reference
            .internal}
        -   [Get Order Details](mix.html#id36){.reference .internal}
        -   [Get Order fill detail](mix.html#id37){.reference .internal}
        -   [Get ProductType Order fill
            detail](mix.html#id38){.reference .internal}
        -   [Place Plan order](mix.html#id39){.reference .internal}
        -   [Modify Plan Order](mix.html#id40){.reference .internal}
        -   [Modify Plan Order TPSL](mix.html#id41){.reference
            .internal}
        -   [Place Stop Order](mix.html#id42){.reference .internal}
        -   [Place Trailing Stop Order](mix.html#id43){.reference
            .internal}
        -   [Place Position TPSL](mix.html#id44){.reference .internal}
        -   [Modify Stop Order](mix.html#id45){.reference .internal}
        -   [Cancel Plan Order (TPSL)](mix.html#id46){.reference
            .internal}
        -   [Cancel All trigger Order (TPSL)](mix.html#id47){.reference
            .internal}
        -   [Get Plan Order (TPSL) List](mix.html#id48){.reference
            .internal}
        -   [Get History Plan Orders (TPSL)](mix.html#id49){.reference
            .internal}
    -   [CopyTrade](mix.html#copytrade){.reference .internal}
        -   [Get Trader Open order](mix.html#id50){.reference .internal}
        -   [Get Follower Open Orders](mix.html#id51){.reference
            .internal}
        -   [Trader Close Position](mix.html#id52){.reference .internal}
        -   [Trader Modify TPSL](mix.html#id53){.reference .internal}
        -   [Get Traders History Orders](mix.html#id54){.reference
            .internal}
        -   [Get Trader Profit Summary](mix.html#id55){.reference
            .internal}
        -   [Get Trader History Profit Summary (according to settlement
            currency)](mix.html#id56){.reference .internal}
        -   [Get Trader History Profit Summary (according to settlement
            currency and date)](mix.html#id57){.reference .internal}
        -   [Get Trader History Profit Detail](mix.html#id58){.reference
            .internal}
        -   [Get Trader Profits Details](mix.html#id59){.reference
            .internal}
        -   [Get CopyTrade Symbols](mix.html#id60){.reference .internal}
        -   [Trader Change CopyTrade symbol](mix.html#id61){.reference
            .internal}
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
-   FuturesⓂ(USDT/Coin)
-   [Edit on
    GitHub](https://github.com/cuongitl/python-bitget/blob/development/docs/mix.rst){.fa
    .fa-github}

------------------------------------------------------------------------
:::

::: {.document role="main" itemscope="itemscope" itemtype="http://schema.org/Article"}
::: {itemprop="articleBody"}
::: {#futuresm-usdt-coin .section}
# FuturesⓂ(USDT/Coin)[](mix.html#futuresm-usdt-coin "Permalink to this heading"){.headerlink}

::: {#market .section}
## Market[](mix.html#market "Permalink to this heading"){.headerlink}

::: {#id1 .section}
### [Get All Symbols](mix.html#){.reference .external}[](mix.html#id1 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_symbols_info(productType)
:::
:::
:::

::: {#id2 .section}
### [Get Depth](mix.html#){.reference .external}[](mix.html#id2 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_depth(symbol, limit=100)
:::
:::
:::

::: {#id3 .section}
### [Get Single Symbol Ticker](mix.html#){.reference .external}[](mix.html#id3 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_single_symbol_ticker(symbol)
:::
:::
:::

::: {#id4 .section}
### [Get All Symbol Ticker](mix.html#){.reference .external}[](mix.html#id4 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_all_symbol_ticker(productType)
:::
:::
:::

::: {#id5 .section}
### [Get Fills](mix.html#){.reference .external}[](mix.html#id5 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    # Get recent trades.
    data = client.mix_get_fills(symbol, limit=100)
:::
:::
:::

::: {#id6 .section}
### [Get Candle Data](mix.html#){.reference .external}[](mix.html#id6 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_candles(symbol, granularity, startTime, endTime)
:::
:::
:::

::: {#id7 .section}
### [Get Symbol Index Price](mix.html#){.reference .external}[](mix.html#id7 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_symbol_index_price(symbol)
:::
:::
:::

::: {#id8 .section}
### [Get Symbol Next Funding Time](mix.html#){.reference .external}[](mix.html#id8 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_symbol_next_funding(symbol)
:::
:::
:::

::: {#id9 .section}
### [Get History Funding Rate](mix.html#){.reference .external}[](mix.html#id9 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_history_fund_rate(symbol, pageSize=20, pageNo=1, nextPage=False)
:::
:::
:::

::: {#id10 .section}
### [Get Current Funding Rate](mix.html#){.reference .external}[](mix.html#id10 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_current_fund_rate(symbol)
:::
:::
:::

::: {#id11 .section}
### [Get Open Interest](mix.html#){.reference .external}[](mix.html#id11 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_open_interest(symbol)
:::
:::
:::

::: {#id12 .section}
### [Get Symbol Mark Price](mix.html#){.reference .external}[](mix.html#id12 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_market_price(symbol)
:::
:::
:::

::: {#id13 .section}
### [Get Symbol Leverage](mix.html#){.reference .external}[](mix.html#id13 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_leverage(symbol)
:::
:::
:::
:::

::: {#account .section}
## Account[](mix.html#account "Permalink to this heading"){.headerlink}

::: {#id14 .section}
### [Get Single Account](mix.html#){.reference .external}[](mix.html#id14 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_account(symbol, marginCoin)
:::
:::
:::

::: {#id15 .section}
### [Get Account List](mix.html#){.reference .external}[](mix.html#id15 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_accounts(productType)
:::
:::
:::

::: {#id16 .section}
### [Get sub Account Contract Assets](mix.html#){.reference .external}[](mix.html#id16 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_sub_account_contract_assets(productType)
:::
:::
:::

::: {#id17 .section}
### [Get Open Count](mix.html#){.reference .external}[](mix.html#id17 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_open_count(symbol, marginCoin, openPrice, openAmount, leverage=20)
:::
:::
:::

::: {#id18 .section}
### [Change Leverage](mix.html#){.reference .external}[](mix.html#id18 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_adjust_leverage(symbol, marginCoin, leverage, holdSide=None)
:::
:::
:::

::: {#id19 .section}
### [Change Margin](mix.html#){.reference .external}[](mix.html#id19 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_adjust_margin(symbol, marginCoin, amount, holdSide=None)
:::
:::
:::

::: {#id20 .section}
### [Change Margin Mode](mix.html#){.reference .external}[](mix.html#id20 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_adjust_margintype(symbol, marginCoin, marginMode)
:::
:::
:::

::: {#id21 .section}
### [Change Hold Mode](mix.html#){.reference .external}[](mix.html#id21 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_adjust_hold_mode(productType, holdMode)
:::
:::
:::

::: {#id22 .section}
### [Get Symbol Position](mix.html#){.reference .external}[](mix.html#id22 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_single_position(symbol, marginCoin=None)
:::
:::
:::

::: {#id23 .section}
### [Get All Position](mix.html#){.reference .external}[](mix.html#id23 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_all_positions(productType, marginCoin=None)
:::
:::
:::

::: {#id24 .section}
### [Get Account Bill](mix.html#){.reference .external}[](mix.html#id24 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_accountBill(symbol, marginCoin, startTime, endTime, lastEndId='', pageSize=20, next=False)
:::
:::
:::

::: {#id25 .section}
### [Get Business Account Bill](mix.html#){.reference .external}[](mix.html#id25 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_accountBusinessBill(productType, startTime, endTime, lastEndId='', pageSize=20, next=False)
:::
:::
:::
:::

::: {#trade .section}
## Trade[](mix.html#trade "Permalink to this heading"){.headerlink}

::: {#id26 .section}
### [Place Order](mix.html#){.reference .external}[](mix.html#id26 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_place_order(symbol, marginCoin, size, side, orderType,
                        price='', clientOrderId=None, reduceOnly=False,
                        timeInForceValue='normal', presetTakeProfitPrice='', presetStopLossPrice='')
:::
:::
:::

::: {#id27 .section}
### [Reversal](mix.html#){.reference .external}[](mix.html#id27 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_reversal(symbol, marginCoin, side, orderType,
                     size=None, clientOrderId=None, timeInForceValue='normal', reverse=False)
:::
:::
:::

::: {#id28 .section}
### [Batch Order](mix.html#){.reference .external}[](mix.html#id28 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_batch_orders(symbol, marginCoin, orderDataList)
:::
:::
:::

::: {#id29 .section}
### [Cancel Order](mix.html#){.reference .external}[](mix.html#id29 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_cancel_order(symbol, marginCoin, orderId)
:::
:::
:::

::: {#id30 .section}
### [Batch Cancel Order](mix.html#){.reference .external}[](mix.html#id30 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_batch_cancel_orders(symbol, marginCoin, orderIds)
:::
:::
:::

::: {#id31 .section}
### [Cancel All Order](mix.html#){.reference .external}[](mix.html#id31 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_cancel_all_orders(productType, marginCoin)
:::
:::
:::

::: {#id32 .section}
### [Get Open Order](mix.html#){.reference .external}[](mix.html#id32 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_open_order(symbol)
:::
:::
:::

::: {#id33 .section}
### [Get All Open Order](mix.html#){.reference .external}[](mix.html#id33 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_all_open_orders(productType, marginCoin=None)
:::
:::
:::

::: {#id34 .section}
### [Get History Orders](mix.html#){.reference .external}[](mix.html#id34 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_history_orders(symbol, startTime, endTime, pageSize, lastEndId='', isPre=False)
:::
:::
:::

::: {#id35 .section}
### [Get ProductType History Orders](mix.html#){.reference .external}[](mix.html#id35 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_productType_history_orders(productType, startTime, endTime, pageSize, lastEndId='', isPre=False)
:::
:::
:::

::: {#id36 .section}
### [Get Order Details](mix.html#){.reference .external}[](mix.html#id36 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_order_details(symbol, orderId=None, clientOrderId=None)
:::
:::
:::

::: {#id37 .section}
### [Get Order fill detail](mix.html#){.reference .external}[](mix.html#id37 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_order_fill_detail(symbol, orderId=None, startTime=None, endTime=None, lastEndId=None)
:::
:::
:::

::: {#id38 .section}
### [Get ProductType Order fill detail](mix.html#){.reference .external}[](mix.html#id38 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_productType_order_fill_detail(productType, startTime=None, endTime=None, lastEndId=None)
:::
:::
:::

::: {#id39 .section}
### [Place Plan order](mix.html#){.reference .external}[](mix.html#id39 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_place_plan_order(symbol, marginCoin, size, side, orderType, triggerPrice, triggerType
                             , executePrice=None, clientOrderId=None, presetTakeProfitPrice=None, presetStopLossPrice=None, reduceOnly=False)
:::
:::
:::

::: {#id40 .section}
### [Modify Plan Order](mix.html#){.reference .external}[](mix.html#id40 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_modify_plan_order(symbol, marginCoin, orderId, orderType, triggerPrice, triggerType
                              , executePrice=None)
:::
:::
:::

::: {#id41 .section}
### [Modify Plan Order TPSL](mix.html#){.reference .external}[](mix.html#id41 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_modify_plan_order_tpsl(symbol, marginCoin, orderId
                                   , presetTakeProfitPrice=None, presetStopLossPrice=None)
:::
:::
:::

::: {#id42 .section}
### [Place Stop Order](mix.html#){.reference .external}[](mix.html#id42 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_place_stop_order(symbol, marginCoin, triggerPrice, planType, holdSide,
                             triggerType='fill_price', size=None, rangeRate=None)
:::
:::
:::

::: {#id43 .section}
### [Place Trailing Stop Order](mix.html#){.reference .external}[](mix.html#id43 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_place_trailing_stop_order(symbol, marginCoin, triggerPrice, side,
                                      triggerType=None, size=None, rangeRate=None)
:::
:::
:::

::: {#id44 .section}
### [Place Position TPSL](mix.html#){.reference .external}[](mix.html#id44 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_place_PositionsTPSL(symbol, marginCoin, planType, triggerPrice, triggerType, holdSide=None)
:::
:::
:::

::: {#id45 .section}
### [Modify Stop Order](mix.html#){.reference .external}[](mix.html#id45 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_modify_stop_order(symbol, marginCoin, orderId, triggerPrice, planType)
:::
:::
:::

::: {#id46 .section}
### [Cancel Plan Order (TPSL)](mix.html#){.reference .external}[](mix.html#id46 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_cancel_plan_order(symbol, marginCoin, orderId, planType)
:::
:::
:::

::: {#id47 .section}
### [Cancel All trigger Order (TPSL)](mix.html#){.reference .external}[](mix.html#id47 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_cancel_all_trigger_orders(productType, planType)
:::
:::
:::

::: {#id48 .section}
### [Get Plan Order (TPSL) List](mix.html#){.reference .external}[](mix.html#id48 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_plan_order_tpsl(symbol=None, productType=None, isPlan=None)
:::
:::
:::

::: {#id49 .section}
### [Get History Plan Orders (TPSL)](mix.html#){.reference .external}[](mix.html#id49 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_history_plan_orders(symbol, startTime, endTime, pageSize=100, lastEndId=None, isPre=False, isPlan=None)
:::
:::
:::
:::

::: {#copytrade .section}
## CopyTrade[](mix.html#copytrade "Permalink to this heading"){.headerlink}

::: {#id50 .section}
### [Get Trader Open order](mix.html#){.reference .external}[](mix.html#id50 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_cp_open_order(symbol, productType, pageSize=20, pageNo=1)
:::
:::
:::

::: {#id51 .section}
### [Get Follower Open Orders](mix.html#){.reference .external}[](mix.html#id51 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_cp_follower_open_orders(symbol, productType, pageSize=20, pageNo=1)
:::
:::
:::

::: {#id52 .section}
### [Trader Close Position](mix.html#){.reference .external}[](mix.html#id52 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_cp_close_position(symbol, trackingNo)
:::
:::
:::

::: {#id53 .section}
### [Trader Modify TPSL](mix.html#){.reference .external}[](mix.html#id53 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_cp_modify_tpsl(symbol, trackingNo, stopProfitPrice=None, stopLossPrice=None)
:::
:::
:::

::: {#id54 .section}
### [Get Traders History Orders](mix.html#){.reference .external}[](mix.html#id54 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_cp_history_orders(startTime, endTime, pageSize=20, pageNo=1)
:::
:::
:::

::: {#id55 .section}
### [Get Trader Profit Summary](mix.html#){.reference .external}[](mix.html#id55 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_cp_profit_summary()
:::
:::
:::

::: {#id56 .section}
### [Get Trader History Profit Summary (according to settlement currency)](mix.html#){.reference .external}[](mix.html#id56 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_cp_profit_settle_margin_coin()
:::
:::
:::

::: {#id57 .section}
### [Get Trader History Profit Summary (according to settlement currency and date)](mix.html#){.reference .external}[](mix.html#id57 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_cp_profit_date_group(pageSize=20, pageNo=1)
:::
:::
:::

::: {#id58 .section}
### [Get Trader History Profit Detail](mix.html#){.reference .external}[](mix.html#id58 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_cp_profit_date_detail(marginCoin, date, pageSize=20, pageNo=1)
:::
:::
:::

::: {#id59 .section}
### [Get Trader Profits Details](mix.html#){.reference .external}[](mix.html#id59 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_cp_wait_profit_detail(pageSize=20, pageNo=1)
:::
:::
:::

::: {#id60 .section}
### [Get CopyTrade Symbols](mix.html#){.reference .external}[](mix.html#id60 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_get_cp_symbols()
:::
:::
:::

::: {#id61 .section}
### [Trader Change CopyTrade symbol](mix.html#){.reference .external}[](mix.html#id61 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.mix_cp_change_symbol(symbol, operation)
:::
:::
:::
:::
:::
:::
:::

::: {.rst-footer-buttons role="navigation" aria-label="Footer"}
[[]{.fa .fa-arrow-circle-left aria-hidden="true"}
Previous](spot.html "Spot"){.btn .btn-neutral .float-left accesskey="p"
rel="prev"} [Next []{.fa .fa-arrow-circle-right
aria-hidden="true"}](broker.html "Broker"){.btn .btn-neutral
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
