# RPI Depth Channel | Bitget API

**URL:** https://www.bitget.com/api-doc/uta/websocket/public/RPI-OrderBook-Channel

---

Skip to main content
Classic
UTA
English
Unified Trading Account
Quick Start
Change Log
Market
Account
Trade
Strategy
Tax
Crypto Loans
Inst Loan
Broker
Websocket
Public Channel
Tickers Channel
Candlestick Channel
Depth Channel
Public Trades Channel
RPI Depth Channel
Liquidation Channel
Private Channel
Error Code
Enumeration
WebsocketPublic ChannelRPI Depth Channel
RPI Depth Channel
Copy Page
Description​

Push RPI (Retail Price Improvement) depth data. rpi-books is the full depth channel, rpi-books1 is the 1-level channel, rpi-books5 is the 5-level channel, and rpi-books50 is the 50-level channel:

rpi-books corresponds to full-depth data, the first push is the full data snapshot, subsequent pushes are incremental updates: update
rpi-books1 corresponds to 1-level depth data, every push: snapshot
rpi-books5 corresponds to 5-level depth data, every push: snapshot
rpi-books50 corresponds to 50-level depth data, every push: snapshot
rpi-books1 push frequency: 10ms
rpi-books5 push frequency: 100ms
rpi-books50 push frequency: 100ms
rpi-books push frequency: 100ms

Checksum

The checksum is calculated using the top 25 bids and asks after merging. Bids and asks are combined with alternating entries, each containing price, non-RPI quantity, and RPI quantity joined by colons. Then compute the CRC32 value (signed 32-bit integer).

When both bids and asks exceed 25 levels, truncate each to 25 levels. The checksum string alternates bid and ask entries. e.g.: bid1[price:nonRpiQty:rpiQty]:ask1[price:nonRpiQty:rpiQty]:bid2[price:nonRpiQty:rpiQty]:ask2[price:nonRpiQty:rpiQty]...
When bids or asks are fewer than 25 levels, skip the missing entries. e.g.: bid1[price:nonRpiQty:rpiQty]:ask2[price:nonRpiQty:rpiQty]:ask3[price:nonRpiQty:rpiQty]:ask4[price:nonRpiQty:rpiQty]...
The quantity at each price level must include both non-RPI and RPI quantities.
Use the original value (e.g., 0.5000 not 0.5) when calculating the checksum.

Example:

Full depth data after merging (only 2 levels shown here, actual should use 25 levels):

"a": [["3366.8", "9", "1"], ["3368", "8", "2"]],
"b": [["3366.1", "7", "1"], ["3366", "6", "1"]]


Checksum string: 3366.1:7:1:3366.8:9:1:3366:6:1:3368:8:2

Sequence Number (seq)

The standard orderbook and the RPI orderbook maintain independent seq rules, each calculated separately.
Request
{
    "op": "subscribe",
    "args": [
        {
            "instType": "usdt-futures",
            "topic": "rpi-books5",
            "symbol": "BTCUSDT"
        }
    ]
}

Request Parameters​
Parameters	Type	Required	Description
op	String	Yes	Operation
subscribe Subscribe
unsubscribe Unsubscribe
args	List<Object>	Yes	Subscribed channel
> instType	String	Yes	Product type
spot Spot trading
usdt-futures USDT futures
coin-futures Coin-M futures
usdc-futures USDC futures
> topic	String	Yes	Topic
rpi-books All levels
rpi-books1 1 level
rpi-books5 5 levels
rpi-books50 50 levels
> symbol	String	Yes	Symbol name
e.g., BTCUSDT
Response
{
  "event": "subscribe",
  "arg": {
    "instType": "usdt-futures",
    "topic": "rpi-books5",
    "symbol": "BTCUSDT"
  }
}

Response Parameters​
Parameters	Type	Description
event	String	Event
arg	Object	Subscribed channel
> instType	String	Product type
spot Spot trading
usdt-futures USDT futures
coin-futures Coin-M futures
usdc-futures USDC futures
> topic	String	Topic
> symbol	String	Symbol name
code	String	Error code
msg	String	Error message
Push
{
  "data": [
    {
      "a": [
        [
          "3366.8",
          "9",
          "1"
        ],
        [
          "3367",
          "0",
          "1"
        ],
        [
          "3368",
          "8",
          "2"
        ]
      ],
      "b": [
        [
          "3366.1",
          "7",
          "1"
        ],
        [
          "3366",
          "6",
          "1"
        ]
      ],
      "checksum": 0,
      "pseq": 0,
      "seq": 1304314508780744705,
      "ts": "1730969017964"
    }
  ],
  "arg": {
    "instType": "usdt-futures",
    "symbol": "BTCUSDT",
    "topic": "rpi-books5"
  },
  "action": "snapshot",
  "ts": 1730969017965
}

Push Parameters​
Return Field	Parameter Type	Description
arg	Object	Subscribed channel
> instType	String	Product type
spot Spot trading
usdt-futures USDT futures
coin-futures Coin-M futures
usdc-futures USDC futures
> topic	String	Topic
> symbol	String	Symbol name
action	String	Data push action
snapshot Full push
update Incremental push
ts	String	Data push timestamp
data	List<Object>	Subscribed data
> a	List<String>	Sell Asks. Sort by price in ascending order
> > a[0]	String	Ask price
> > a[1]	String	Ask non-RPI quantity
> > a[2]	String	Ask RPI quantity
> b	List<String>	Buy bids. Sort by price in descending order
> > b[0]	String	Bid price
> > b[1]	String	Bid non-RPI quantity
> > b[2]	String	Bid RPI quantity
> > checksum	String	Checksum
It is used to verify the accuracy of the data.
> > seq	String	Serial number.
It increments when the order book is updated and can be used to determine whether there are out-of-order packets.
> > pseq	String	The serial number of the previous push.
Can be used to determine if there has been packet loss. This field only has a value for the rpi-books channel.
> > ts	String	The timestamp that the system generated data
A Unix timestamp in milliseconds
How was your Reading Experience with us?
★
★
★
★
★
Feedback
Previous
Public Trades Channel
Next
Liquidation Channel