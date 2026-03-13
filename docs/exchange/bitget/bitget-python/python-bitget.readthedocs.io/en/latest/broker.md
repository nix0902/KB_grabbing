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
-   [Broker](broker.html#){.current .reference .internal}
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
:::
:::

::: {.section .wy-nav-content-wrap toggle="wy-nav-shift"}
[python-bitget](index.html)

::: wy-nav-content
::: rst-content
::: {role="navigation" aria-label="Page navigation"}
-   [](index.html){.icon .icon-home aria-label="Home"}
-   Broker
-   [Edit on
    GitHub](https://github.com/cuongitl/python-bitget/blob/development/docs/broker.rst){.fa
    .fa-github}

------------------------------------------------------------------------
:::

::: {.document role="main" itemscope="itemscope" itemtype="http://schema.org/Article"}
::: {itemprop="articleBody"}
::: {#broker .section}
# Broker[](broker.html#broker "Permalink to this heading"){.headerlink}

::: {#sub-account-interface .section}
## Sub Account Interface[](broker.html#sub-account-interface "Permalink to this heading"){.headerlink}

::: {#id1 .section}
### [Get Broker Info](broker.html#){.reference .external}[](broker.html#id1 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.broker_get_info()
:::
:::
:::

::: {#id2 .section}
### [Create Sub Account](broker.html#){.reference .external}[](broker.html#id2 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.broker_sub_create(subName, remark=None)
:::
:::
:::

::: {#id3 .section}
### [Get Sub List](broker.html#){.reference .external}[](broker.html#id3 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.broker_get_sub_list(pageSize=10, lastEndId=None, status=None)
:::
:::
:::

::: {#id4 .section}
### [Modify Sub Account](broker.html#){.reference .external}[](broker.html#id4 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.broker_sub_modify_account(subUid, perm, status)
:::
:::
:::

::: {#id5 .section}
### [Modify Sub Email](broker.html#){.reference .external}[](broker.html#id5 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.broker_sub_modify_email(subUid, subEmail):
:::
:::
:::

::: {#id6 .section}
### [GET Sub Email](broker.html#){.reference .external}[](broker.html#id6 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.broker_get_sub_email(subUid)
:::
:::
:::

::: {#id7 .section}
### [Get Sub Spot Assets](broker.html#){.reference .external}[](broker.html#id7 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.broker_get_sub_spot_assets(subUid)
:::
:::
:::

::: {#id8 .section}
### [Get Sub Future Assets](broker.html#){.reference .external}[](broker.html#id8 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.broker_get_sub_future_assets(subUid, productType)
:::
:::
:::

::: {#id9 .section}
### [Get Sub Deposit Address (Only Broker)](broker.html#){.reference .external}[](broker.html#id9 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.broker_get_sub_deposit_address(subUid, coin, chain=None)
:::
:::
:::

::: {#id10 .section}
### [Sub Withdrawal (Only Broker)](broker.html#){.reference .external}[](broker.html#id10 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.broker_sub_withdrawal(subUid, coin, address, chain, amount,
                              tag=None, clientOrderId=None, remark=None)
:::
:::
:::

::: {#id11 .section}
### [Sub Deposit Auto Transfer (Only Broker)](broker.html#){.reference .external}[](broker.html#id11 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.broker_sub_auto_transfer(subUid, coin, toAccountType)
:::
:::
:::
:::

::: {#sub-api-interface .section}
## Sub API Interface[](broker.html#sub-api-interface "Permalink to this heading"){.headerlink}

::: {#id12 .section}
### [Create Sub ApiKey (Only Broker)](broker.html#){.reference .external}[](broker.html#id12 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.broker_sub_create_api(subUid, passphrase, remark, ip, perm)
:::
:::
:::

::: {#id13 .section}
### [Get Sub ApiKey List](broker.html#){.reference .external}[](broker.html#id13 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.broker_get_sub_api_list(subUid)
:::
:::
:::

::: {#id14 .section}
### [Modify Sub ApiKey (Only Broker)](broker.html#){.reference .external}[](broker.html#id14 "Permalink to this heading"){.headerlink}

::: {.highlight-python .notranslate}
::: highlight
    data = client.broker_sub_modify_api(subUid, apikey, remark=None, ip=None, perm=None)
:::
:::
:::
:::
:::
:::
:::

::: {.rst-footer-buttons role="navigation" aria-label="Footer"}
[[]{.fa .fa-arrow-circle-left aria-hidden="true"}
Previous](mix.html "FuturesⓂ(USDT/Coin)"){.btn .btn-neutral .float-left
accesskey="p" rel="prev"} [Next []{.fa .fa-arrow-circle-right
aria-hidden="true"}](websockets.html "WebSocketAPI"){.btn .btn-neutral
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
