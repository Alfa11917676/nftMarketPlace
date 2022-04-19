require('dotenv').config()
const ethers = require('ethers');
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY)// const wallet = new ethers.Wallet(process.env.KEY);
async function signTransaction(seller,buyer,nftAddress,inEth,_ordertype,amount,tokenId,qty,timestamp) {
    const domain = {
        name: "NFT_MARKET_PLACE",
        version: "1",
        chainId: 4, //put the chain id
        verifyingContract: "0x478920Ce0519c582A4BD4Fa88Df5D1E64110e249" //contract address
    }

    const types ={

        whitelisted: [
            {name: 'seller', type: 'address'},
            {name: 'buyer', type: 'address'},
            {name: 'nftAddress', type: 'address'},
            {name: 'inEth', type: 'bool'},
            {name: '_orderType', type: 'uint256'},
            {name: 'amount', type: 'uint256'},
            {name: 'tokenId', type: 'uint256'},
            {name: 'qty', type: 'uint256'},
            {name: 'timestamp', type: 'uint256'}
        ]
    }

    const value = {
        seller: seller,
        buyer: buyer,
        nftAddress: nftAddress,
        inEth: inEth,
        _orderType: _ordertype,
        amount: amount,
        tokenId: tokenId,
        qty: qty,
        timestamp: timestamp
    };

    const sign = await wallet._signTypedData(domain,types,value)
    console.log(sign);
}
signTransaction("0x79BF6Ab2d78D81da7d7E91990a25A81e93724a60","0xb0e80DE54b19d5996Ed37fF8d2F41D7044422545","0xC209E39Fe67a89f3D7e2466C0421afCBEE96F9E9",true,1,122000000,2,1,21334)

module.exports = { signTransaction };

//["0x79BF6Ab2d78D81da7d7E91990a25A81e93724a60",1234567890,6,50,true,"0x1673c537e5582fbf6a78d794168f379b0e73a4f35eb1b6d79e1074917c996de56b7d71121cb3c809e7cfa858c9c0856de29e9622843e8f97682ffeb4bde7afa71c"]
//["0x79BF6Ab2d78D81da7d7E91990a25A81e93724a60","0xb0e80DE54b19d5996Ed37fF8d2F41D7044422545","0xC209E39Fe67a89f3D7e2466C0421afCBEE96F9E9",true,1,122000000,1,1,21334,"0x0f8e9ce4755d9608e42d87aabfdad19605436fd12f2d7203d5937937ffd7b341699e35a0e8d29c0c43ed4206b6b77fe6f1760a0e79928afe7d22dcc48624716a1c"]