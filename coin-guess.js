const isWin = process.platform === 'win32'

if (isWin) {
  process.env.socks_proxy = 'socks5h://127.0.0.1:1084'
} else {
  process.env.socks_proxy = 'socks5h://127.0.0.1:1087'
}

const axios = require('axios')

const http = axios.create({
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: isWin ? '1084' : '1087',
  },
})

http
  .get(
    'https://www.binance.com/exchange-api/v2/public/asset-service/product/get-products?includeEtf=true'
  )
  .then((res) => {
    console.log(res)
  })
