let Web3 = require('web3')
let url = 'https://mainnet.infura.io/v3/f97a74b8ceca423cb7f5f2b83ce90bba'
let web3 = new Web3(url)
let address = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
web3.eth.getBalance(address, (err, balance) => {
        console.log( balance , ' wei')
        console.log(web3.utils.fromWei(balance, 'gwei'), ' gwei')
        console.log(web3.utils.fromWei(balance, 'Gwei'), ' GWei')
        console.log(web3.utils.fromWei(balance, 'ether'), ' ether')
    })

console.log('Account: ',web3.eth.accounts.create())