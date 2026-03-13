# Signature | Bitget API

**URL:** https://www.bitget.com/api-doc/common/signature

---

Skip to main content
Common
Spot
Futures
Broker
Affiliate
Margin
Copy Trading
Earn
Inst Loan
UTA
English
Bitget API Introduction
V2 API Update Guide
Changelog
Quick Start
FAQ
SDK
Signature
Signature Sample
Websocket API
Notice
API Domain
Public
Tax
Demo Trading
P2P
Trading Insights
Virtual Subaccount
Assets
Convert
BGB-Convert
Signature
Signature
API Verification​
Initiate a request​

The header of all REST requests must contain the following http headers：

ACCESS-KEY：API KEY as a string
ACCESS-SIGN：Sign with base64 encoding (see HMAC and RSA sample code).
ACCESS-TIMESTAMP：Timestamp of your request. Value equals to milliseconds since Epoch.
ACCESS-PASSPHRASE：The password you set when created the API KEY.
Content-Type：Please set to application/json for all POST request
locale: Support language such as: Chinese (zh-CN), English (en-US)
How to get ACCESS-TIMESTAMP​
Java
Python
Go
JS
PHP
Long timestamp = System.currentTimeMillis();
Generate Signature​

The request header of ACCESS-SIGN is to encrypt timestamp + method.toUpperCase() + requestPath + "?" + queryString + body string (+ means string concat) by HMAC SHA256 algorithm with secretKey. and encode the encrypted result through BASE64.

Description of each parameter in the signature​
timestamp：Same as ACCESS-TIMESTAMP request header. Value equals to milliseconds since Epoch.
method：Request method (POST/GET), all uppercase.
requestPath：Request interface path.
queryString：The query string in the request URL (the request parameter after the ?).
body：The request body in string format. If the request body is empty (usually a GET request), the body can be omitted.

If the queryString is empty, signature content

timestamp + method.toUpperCase() + requestPath + body

If the queryString not empty, signature content

timestamp + method.toUpperCase() + requestPath + "?" + queryString + body

Sample Code​

Get contract depth information, let's take BTCUSDT as an example:

timestamp = 16273667805456
method = "GET"
requestPath = "/api/mix/v2/market/depth"
queryString= "?limit=20&symbol=BTCUSDT"

Generate the content to be signed:

16273667805456GET/api/mix/v2/market/depth?limit=20&symbol=BTCUSDT

Contract order, take BTCUSDT as an example:

timestamp = 16273667805456
method = "POST"
requestPath = "/api/v2/mix/order/place-order"
body = {"productType":"usdt-futures","symbol":"BTCUSDT","size":"8","marginMode":"crossed","side":"buy","orderType":"limit","clientOid":"channel#123456"}

Generate the content to be signed:

16273667805456POST/api/v2/mix/order/place-order{"productType":"usdt-futures","symbol":"BTCUSDT","size":"8","marginMode":"crossed","side":"buy","orderType":"limit","clientOid":"channel#123456"}

Steps to generate the final signature​

HMAC

HMAC sample code
Step 1. Use the private key **secretkey** to encrypt the string to be signed with hmac sha256
String payload = hmac_sha256(secretkey, Message);

Step 2. Base64 encoding for Signature.
String signature = base64.encode(payload);


RSA

RSA sample code

Step 1. Use the RSA privateKey privateKey to encrypt the string to be signed with SHA-256

Step 2. Base64 encoding for Signature.

How was your Reading Experience with us?
★
★
★
★
★
Feedback
Previous
SDK
Next
HMAC
API Verification
Initiate a request
How to get ACCESS-TIMESTAMP
Generate Signature
Description of each parameter in the signature
Sample Code
Steps to generate the final signature