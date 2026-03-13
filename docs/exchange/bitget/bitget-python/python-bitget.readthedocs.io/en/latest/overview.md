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
-   [Getting Started](overview.html#){.current .reference .internal}
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
-   Getting Started
-   [Edit on
    GitHub](https://github.com/cuongitl/python-bitget/blob/development/docs/overview.rst){.fa
    .fa-github}

------------------------------------------------------------------------
:::

::: {.document role="main" itemscope="itemscope" itemtype="http://schema.org/Article"}
::: {itemprop="articleBody"}
::: {#getting-started .section}
# Getting Started[](overview.html#getting-started "Permalink to this heading"){.headerlink}

::: {#installation .section}
## Installation[](overview.html#installation "Permalink to this heading"){.headerlink}

[`python-bitget`{.docutils .literal .notranslate}]{.pre} is available on
[PYPI](https://pypi.python.org/pypi/python-bitget/){.reference
.external}. Install with [`pip`{.docutils .literal .notranslate}]{.pre}:

::: {.highlight-bash .notranslate}
::: highlight
    pip install python-bitget
:::
:::
:::

::: {#register-on-bitget .section}
## Register on bitget[](overview.html#register-on-bitget "Permalink to this heading"){.headerlink}

Firstly register an account with bitget [save 10% on all of your trade
fee, and can get rewards up to
\$5005](https://partner.bitget.com/bg/e55g05831674816745836){.reference
.external}.
:::

::: {#generate-an-api-key .section}
## Generate an API Key[](overview.html#generate-an-api-key "Permalink to this heading"){.headerlink}

To use signed account methods you are required to [create an API
Key](https://www.bitget.com/en/support/articles/360038968251-API%20Creation%20Guide){.reference
.external}.
:::

::: {#initialise-the-client .section}
## Initialise the client[](overview.html#initialise-the-client "Permalink to this heading"){.headerlink}

Pass your API Key and Secret

::: {.highlight-python .notranslate}
::: highlight
    api_key = "your-api-key"
    api_secret = "your-secret-key"
    api_passphrase = "your-api-passphrase"
    client = Client(api_key, api_secret, api_passphrase, use_server_time=False)
:::
:::
:::

::: {#making-api-calls .section}
## Making API Calls[](overview.html#making-api-calls "Permalink to this heading"){.headerlink}

Every method supports the passing of arbitrary parameters via keyword
matching those in the [bitget API
documentation](https://bitgetlimited.github.io/apidoc/en/mix/#welcome){.reference
.external}. These keyword arguments will be sent directly to the
relevant endpoint.

Each API method returns a dictionary of the JSON response as per the
[bitget API
documentation](https://bitgetlimited.github.io/apidoc/en/mix/#welcome){.reference
.external}. The docstring of each method in the code references the
endpoint it implements.

The bitget API documentation references a timestamp parameter, this is
generated for you where required.

API Endpoints are rate limited by bitget, it's diff on per endpoint, ask
them if you require more.
:::

::: {#api-rate-limit .section}
## API Rate Limit[](overview.html#api-rate-limit "Permalink to this heading"){.headerlink}

The Sub Account and Main Account have their own UIDs. Because the Limit
Rules are based on each UID, every sub account has the same limit rate
as main account. It's not necessary to worry about the limit rate for
main account when you are trading with sub accounts Or their API Keys.
And the limit rate is same for every user including VIP account. You may
contact your Bitget business manager for more information.

Some calls have a higher weight than others especially if a call returns
information about all symbols. Read the [official bitget
documentation](https://bitgetlimited.github.io/apidoc/en/mix/#welcome){.reference
.external} for specific information.
:::

::: {#examples .section}
## Examples[](overview.html#examples "Permalink to this heading"){.headerlink}

Here are examples to access these

restAPI example

::: {.highlight-python .notranslate}
::: highlight
    from bitget import Client

    api_key = "your-api-key"
    api_secret = "your-secret-key"
    api_passphrase = "your-api-passphrase"

    client = Client(api_key, api_secret, passphrase=api_passphrase)
    result = client.mix_get_accounts(productType='UMCBL')
    print(result)
:::
:::

websocketAPI example

::: {.highlight-python .notranslate}
::: highlight
    from pybitget.stream import BitgetWsClient, SubscribeReq, handel_error

    from pybitget.enums import *
    from pybitget import logger


    def on_message(message):
        logger.info(message)


    api_key = "your-api-key"
    api_secret = "your-secret-key"
    api_passphrase = "your-api-passphrase"

    if __name__ == '__main__':
        # Un-auth subscribe
        # client = BitgetWsClient() \
        #     .error_listener(handel_error) \
        #     .build()

        # Auth subscribe
        client = BitgetWsClient(api_key=api_key,
                                api_secret=api_secret,
                                passphrase=api_passphrase,
                                verbose=True) \
            .error_listener(handel_error) \
            .build()

        # multi subscribe  - Public Channels
        channels = [SubscribeReq("mc", "ticker", "BTCUSD"), SubscribeReq("SP", "candle1W", "BTCUSDT")]
        client.subscribe(channels, on_message)

        # single subscribe -     # multi subscribe  Public Channels
        # channels = [SubscribeReq("mc", "ticker", "BTCUSD")]
        # client.subscribe(channels, on_message)

        # single subscribe - Order Channel - Private Channels
        channels = [SubscribeReq(WS_CHANNEL_INSTTYPE, WS_PRIVATE_ORDERS_CHANNEL, WS_CHANNEL_INSTID)]
        client.subscribe(channels, on_message)
:::
:::
:::
:::
:::
:::

::: {.rst-footer-buttons role="navigation" aria-label="Footer"}
[[]{.fa .fa-arrow-circle-left aria-hidden="true"}
Previous](index.html "Welcome to Python-bitget’s documentation!"){.btn
.btn-neutral .float-left accesskey="p" rel="prev"} [Next []{.fa
.fa-arrow-circle-right aria-hidden="true"}](spot.html "Spot"){.btn
.btn-neutral .float-right accesskey="n" rel="next"}
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
