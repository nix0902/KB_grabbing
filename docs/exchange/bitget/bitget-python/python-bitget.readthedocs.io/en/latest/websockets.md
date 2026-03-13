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
-   [FuturesⓂ(USDT/Coin)](mix.html){.reference .internal}
-   [Broker](broker.html){.reference .internal}
-   [WebSocketAPI](websockets.html#){.current .reference .internal}
    -   [Overview](websockets.html#overview){.reference .internal}
    -   [Example connect](websockets.html#example-connect){.reference
        .internal}
:::
:::

::: {.section .wy-nav-content-wrap toggle="wy-nav-shift"}
[python-bitget](index.html)

::: wy-nav-content
::: rst-content
::: {role="navigation" aria-label="Page navigation"}
-   [](index.html){.icon .icon-home aria-label="Home"}
-   WebSocketAPI
-   [Edit on
    GitHub](https://github.com/cuongitl/python-bitget/blob/development/docs/websockets.rst){.fa
    .fa-github}

------------------------------------------------------------------------
:::

::: {.document role="main" itemscope="itemscope" itemtype="http://schema.org/Article"}
::: {itemprop="articleBody"}
::: {#websocketapi .section}
# WebSocketAPI[](websockets.html#websocketapi "Permalink to this heading"){.headerlink}

::: {#overview .section}
## Overview[](websockets.html#overview "Permalink to this heading"){.headerlink}

This is a wrapper around the Bitget API as described on Bitget, so
please read the [official
documents](https://bitgetlimited.github.io/apidoc/en/mix/#overview){.reference
.external} for more details.
:::

::: {#example-connect .section}
## Example connect[](websockets.html#example-connect "Permalink to this heading"){.headerlink}

Pass your API Key and Secret

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
Previous](broker.html "Broker"){.btn .btn-neutral .float-left
accesskey="p" rel="prev"}
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
