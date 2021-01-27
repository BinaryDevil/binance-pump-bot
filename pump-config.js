let config = {}

// Config HERE
// !!! The coin to trade in, make sure you have some in your balance
config.TRADE_IN = 'BTC'
// Should market price BUY ALL upon symbol
config.BUY_UPON_SYMBOL = true
// How many X before take profit happens (will sell 100%)
config.HARD_TAKE_PROFIT = 3.3
// Where to stop loss
config.HARD_STOP_LOSS = 0.75
// Soft stop loss (Array, please put in ascending order, orders will be put in quantity of divide of the array length, e.g length = 3 then sell 1/3 every time)
// Not used anymore, bugs exist
// config.SOFT_TAKE_PROFIT = [5, 6, 7, 8]
// config.SOFT_TAKE_PROFIT_PERCENT = 0.7 // How many * available are selling
// Peak take profit
config.PEAK_TAKE_PROFIT_THRESHOLD = 2
// After Peak threshold, if TIMEOUT ms later the profit times is not greater than right now, SELL ALL
config.PEAK_TAKE_PROFIT_TIMEOUT = 700
// Max drawback starting point
config.MAX_DRAWBACK_START = 2
// Max drawback to trigger take profit
config.MAX_DRAWBACK = 0.7

module.exports = config
