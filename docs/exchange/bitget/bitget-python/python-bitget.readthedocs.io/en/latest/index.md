::: wy-grid-for-nav
::: wy-side-scroll
::: wy-side-nav-search
[python-bitget](index.html#){.icon .icon-home}

::: version
latest
:::

::: {role="search"}
:::
:::

::: {.wy-menu .wy-menu-vertical spy="affix" role="navigation" aria-label="Navigation menu"}
-   [Getting Started](overview.html){.reference .internal}
-   [Spot](spot.html){.reference .internal}
-   [FuturesⓂ(USDT/Coin)](mix.html){.reference .internal}
-   [Broker](broker.html){.reference .internal}
-   [WebSocketAPI](websockets.html){.reference .internal}
:::
:::

::: {.section .wy-nav-content-wrap toggle="wy-nav-shift"}
[python-bitget](index.html#)

::: wy-nav-content
::: rst-content
::: {role="navigation" aria-label="Page navigation"}
-   [](index.html#){.icon .icon-home aria-label="Home"}
-   Welcome to Python-bitget's documentation!
-   [Edit on
    GitHub](https://github.com/cuongitl/python-bitget/blob/development/docs/index.rst){.fa
    .fa-github}

------------------------------------------------------------------------
:::

::: {.document role="main" itemscope="itemscope" itemtype="http://schema.org/Article"}
::: {itemprop="articleBody"}
::: {#welcome-to-python-bitget-s-documentation .section}
# Welcome to Python-bitget's documentation\![](index.html#welcome-to-python-bitget-s-documentation "Permalink to this heading"){.headerlink}

bitget is a cryptocurrency derivatives exchange.

If you're new to Bitget, use the following link to [save 10% on all of
your trade fees, and can get rewards up to
\$5005.](https://partner.bitget.com/bg/e55g05831674816745836){.reference
.external}

This is a wrapper around the Bitget API as described on Bitget,
including all features the API provides using clear and readable
objects, both for the REST as the websocket API.

Contents:

::: {.toctree-wrapper .compound}
-   [Getting Started](overview.html){.reference .internal}
    -   [Installation](overview.html#installation){.reference .internal}
    -   [Register on
        bitget](overview.html#register-on-bitget){.reference .internal}
    -   [Generate an API
        Key](overview.html#generate-an-api-key){.reference .internal}
    -   [Initialise the
        client](overview.html#initialise-the-client){.reference
        .internal}
    -   [Making API Calls](overview.html#making-api-calls){.reference
        .internal}
    -   [API Rate Limit](overview.html#api-rate-limit){.reference
        .internal}
    -   [Examples](overview.html#examples){.reference .internal}
-   [Spot](spot.html){.reference .internal}
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
    -   [Sub Account
        Interface](broker.html#sub-account-interface){.reference
        .internal}
        -   [Get Broker Info](broker.html#id1){.reference .internal}
        -   [Create Sub Account](broker.html#id2){.reference .internal}
        -   [Get Sub List](broker.html#id3){.reference .internal}
        -   [Modify Sub Account](broker.html#id4){.reference .internal}
        -   [Modify Sub Email](broker.html#id5){.reference .internal}
        -   [GET Sub Email](broker.html#id6){.reference .internal}
        -   [Get Sub Spot Assets](broker.html#id7){.reference .internal}
        -   [Get Sub Future Assets](broker.html#id8){.reference
            .internal}
        -   [Get Sub Deposit Address (Only
            Broker)](broker.html#id9){.reference .internal}
        -   [Sub Withdrawal (Only Broker)](broker.html#id10){.reference
            .internal}
        -   [Sub Deposit Auto Transfer (Only
            Broker)](broker.html#id11){.reference .internal}
    -   [Sub API Interface](broker.html#sub-api-interface){.reference
        .internal}
        -   [Create Sub ApiKey (Only
            Broker)](broker.html#id12){.reference .internal}
        -   [Get Sub ApiKey List](broker.html#id13){.reference
            .internal}
        -   [Modify Sub ApiKey (Only
            Broker)](broker.html#id14){.reference .internal}
-   [WebSocketAPI](websockets.html){.reference .internal}
    -   [Overview](websockets.html#overview){.reference .internal}
    -   [Example connect](websockets.html#example-connect){.reference
        .internal}
:::
:::

::: {#index .section}
# Index[](index.html#index "Permalink to this heading"){.headerlink}

-   [[Index]{.std .std-ref}](genindex.html){.reference .internal}
:::
:::
:::

::: {.rst-footer-buttons role="navigation" aria-label="Footer"}
[Next []{.fa .fa-arrow-circle-right
aria-hidden="true"}](overview.html "Getting Started"){.btn .btn-neutral
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
