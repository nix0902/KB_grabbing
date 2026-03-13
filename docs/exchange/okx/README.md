# OKX API Documentation

This folder contains the complete OKX API documentation fetched from https://www.okx.com/docs-v5/

## Overview

OKX is a leading cryptocurrency exchange providing comprehensive API for trading operations.

## Files

| File | Description | Size |
|------|-------------|------|
| `en.md` | Main API Documentation | 2.6M |
| `log.md` | Change Log | 900K |
| `trick.md` | Best Practices | 68K |
| `broker.md` | Broker Program | 60K |
| `agent.md` | Agent Program | 28K |

## Main Sections (en.md)

### Overview
- API Resources and Support
- API Key Creation
- REST Authentication
- WebSocket
- Rate Limits
- Market Maker Program

### Trading Account
- Get Balance
- Get Positions
- Set Leverage
- Get Fee Rates
- Account Configuration

### Order Book Trading
- Trade (Place/Amend/Cancel Orders)
- Market Data
- Copy Trading
- Signal Bot Trading

### Public Data
- Get Instruments
- Get Tickers
- Get Index Tickers
- Get Order Book

### Trading Bot
- Grid Bot
- Signal Bot
- Recurring Buy
- DCA Bot

### Block Trading
- RFQ (Request for Quote)
- Quotes
- Trades

### Financial Product
- ETH Staking
- SOL Staking
- Simple Earn
- Flexible Loan
- On-chain Earn

### Funding Account
- Deposit
- Withdrawal
- Transfer
- Exchange

### Sub-account
- Account Management
- Transfer Management

### Affiliate
- Invitee Details

### Convert
- Get Currencies
- Get Quote
- Convert History

### Spread Order Book
- Market Data
- Trade

## Features

- **REST API** - All endpoints documented with parameters
- **WebSocket API** - Real-time data streams
- **Code Examples** - curl, Python, and more
- **Authentication** - API key, signature, timestamp
- **Rate Limits** - Detailed rate limit information
- **Error Codes** - Complete error code reference

## Supported Products

- **Spot** - Spot trading
- **Margin** - Margin trading
- **Swap** - Perpetual futures
- **Futures** - Delivery futures
- **Options** - Options trading

## API Base URLs

- Production: `https://www.okx.com`
- Demo: `https://www.okx.com` (with demo trading flag)

## Authentication

All private endpoints require:
- `OK-ACCESS-KEY` - API Key
- `OK-ACCESS-SIGN` - Signature
- `OK-ACCESS-TIMESTAMP` - Timestamp
- `OK-ACCESS-PASSPHRASE` - Passphrase

## Source

All documentation is from: https://www.okx.com/docs-v5/

Fetched: March 2025
