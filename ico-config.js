let config = {}

// Config HERE
// !!! The coin to trade in, make sure you have some in your balance
config.TRADE_IN = 'BTC'
// How many X before take profit happens (will sell 100%)
config.HARD_TAKE_PROFIT = 100
// Where to stop loss
config.HARD_STOP_LOSS = 0.75
// Soft stop loss (Array, please put in ascending order, orders will be put in quantity of divide of the array length, e.g length = 3 then sell 1/3 every time)
config.SOFT_TAKE_PROFIT = [10, 20, 30]
config.SOFT_TAKE_PROFIT_PERCENT = 0.8 // How many * available are selling
// Peak take profit
config.PEAK_TAKE_PROFIT_THRESHOLD = 10
// After Peak threshold, if TIMEOUT ms later the profit times is not greater than right now, SELL ALL
config.PEAK_TAKE_PROFIT_TIMEOUT = 3000
// Max drawback starting point
config.MAX_DRAWBACK_START = 10
// Max drawback to trigger take profit
config.MAX_DRAWBACK = 3

module.exports = config
