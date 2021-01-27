# binance-pump-bot

Automation for Binance p&d(pump and dump) activity.

## Important notes

Read these before you proceed.

- Pump and dumps are SCAM.
- You are very likely to lose money.
- Invest only what you can afford to lose.

But, `if you think there is a profit window in pump & dumps`, like I did, here's a little tool for you.

## Prerequisites

### Node.js

You must have (Node.js)[https://nodejs.org/en/] installed!

## Installation

`Clone` or `download` this repository, then:

```bash
$ npm install
```

Meanwhile, You need to put your own Binance.com API Key and API Secret in your local `config.js` for the script to run.

You can request for one after logging into their [official site](binance.com).

`This gives the script access to your account.`

And then you're all set.

## Usage

First `make sure you have available balance` for the trading pair.

For example, you know the trading pair is XXXX/BTC, then you need to have BTC in your available balance. (Command output will show this).

Then, just run this 1~2 minutes before the pump starts.

```bash
$ npm start
```

Have the discord or Telegram or any communication tool that your group uses on the side,

and follow the command output instructions.

(`Inserting the coin name will trigger a 93% market buy immediately, divided into 4 market price orders`, e.g. 60% + 11% + 11% + 11%, to ensure max volume possible)

`The coin name is case ignored, you can input lower case.`

Sell orders are triggered automatically by configuration in `pump-config.js`, or manually with hotkeys(`check command line output`).

All orders placed by this script will show up in your Binance app or Binance.com as well. You can review these for next-time-better-strategies.
