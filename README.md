# binance-pump-bot

Automation for Binance p&d(pump and dump) activity, ensures fastest purchase and provides auto selling functionality to lockdown profit during these events.

## Important notes

Read these before you proceed.

- Pump and dumps are SCAM.
- You are very likely to lose money.
- Invest only what you can afford to lose.

But, `if you think there is a profit window in pump & dumps`, like I did, here's a little tool for you.

## Further development

This repository is no longer actively maintained, pull requests are welcome.

## Prerequisites

### Node.js

You must have (Node.js)[https://nodejs.org/en/] installed!

## Installation

Run these in terminal or other command line tool:

```shell
git clone git@github.com:BinaryDevil/binance-pump-bot.git
cd binance-pump-bot
npm install
```

Then, You need to put your own Binance.com API Key and API Secret in your local `config.js` for the script to run.

You can request for one after logging into their [official site](binance.com).

`This gives the script access to your account.`

And then you're all set.

## Configuration

See `pump-config.js`, the `TRADE_IN` is important, it's the coin to trade for the pumped coin, usually it's `BTC`.

default configurations are as follow, you can tweak these settings as you like:

```js
let config = {};

// Config HERE
// !!! The coin to trade in, make sure you have some in your balance
config.TRADE_IN = "BTC";
// Should market price BUY ALL upon symbol
config.BUY_UPON_SYMBOL = true;
// How many X before take profit happens (will sell 100%)
config.HARD_TAKE_PROFIT = 3.3;
// Where to stop loss
config.HARD_STOP_LOSS = 0.75;
// Soft stop loss (Array, please put in ascending order, orders will be put in quantity of divide of the array length, e.g length = 3 then sell 1/3 every time)
// Not used anymore, bugs exist
// config.SOFT_TAKE_PROFIT = [5, 6, 7, 8]
// config.SOFT_TAKE_PROFIT_PERCENT = 0.7 // How many * available are selling
// Peak take profit
config.PEAK_TAKE_PROFIT_THRESHOLD = 2;
// After Peak threshold, if TIMEOUT ms later the profit times is not greater than right now, SELL ALL
config.PEAK_TAKE_PROFIT_TIMEOUT = 700;
// Max drawback starting point
config.MAX_DRAWBACK_START = 2;
// Max drawback to trigger take profit
config.MAX_DRAWBACK = 0.7;

module.exports = config;
```

## Usage

### Running

First `make sure you have available balance` for the trading pair.

For example, you know the trading pair is XXXX/BTC, then you need to have BTC in your available balance. (Command output will show this).

Then, just run the following command 1~2 minutes before the pump starts:

```bash
$ npm start
```

`For Windows, compatibility is better with Windows PowerShell or Git Bash. Using these two command line tools is recommended.`

I personally don't use Windows that much, if you find trouble running the script, try `Windows PowerShell` or `Git Bash`.

### The Process

Have the discord or Telegram or any communication tool that your group uses on the side,

and follow the command output instructions.

(`Inserting the coin name will trigger a 93% market buy immediately, divided into 4 market price orders`, e.g. 60% + 11% + 11% + 11%, to ensure max volume possible)

`The coin name is case ignored, you can input lower case.`

Sell orders are triggered automatically by configuration in `pump-config.js`, or manually with hotkeys(`check command line output`).

All orders placed by this script will show up in your Binance app or Binance.com as well. You can review these for next-time-better-strategies.

## Hotkeys

When the initial purchase is made, hotkeys are enabled:

```bash
1 - SELL ALL
2 - SELL HALF
3 - SELL QUARTER
4 - SELL 10%
5 - BUY ALL(based on your balance)
6 - BUY HALF
7 - BUY QUARTER
o - Open browser with the Trading Pair
0 - Toggle Manual(no take profits or stop losses)
(Enter key not needed)
```

Note: `the script is not ready for second-entry during pumps, operate only with your first purchase.`

## Proxy/VPN Usage(For CN Users especially)

Search for `Proxy` in `pump.js`, change them to your local VPN port.

## Contribution

Any feature add/improvements are welcome, just send a PR.

This is a very sideways project for me, I might have little time to maintain this (and that I don't participate p&ds any more).

## Buy me coffee

If this script helped you make profits or you simply want to support, feel free to donate to these addresses:

- Ethereum ERC20：0xa4AaDceA7c1b0B23978fbea24faA097beF9335B1
- BSC BEP20：0xa4AaDceA7c1b0B23978fbea24faA097beF9335B1
