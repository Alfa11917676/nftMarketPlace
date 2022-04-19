const {ethers} = require ("ethers")
const provider = ethers.providers.getDefaultProvider("rinkeby")
const contractAddress= "0x373C5e9A20D6daeA9159951caC8b1874d26e52c2"
const {web3, eth} = require ("web3")
const hex_to_str= _hex=> {
    const hex = _hex.toString()
    let str = '';
    for (let i=0; i<hex.length;i+=2) {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16))
    }
    return str
}

const decodePrivate = async() => {
    // for (let i=0;i<50;i++) {
    //     const storage = await provider.getStorageAt(contractAddress, i)
    //     console.log('Data-->', storage)
    await web3("wss://rinkeby.infura.io/ws/v3/cc04cf86d67044cca564b6f196bc23b0").getStorageAt('0x373C5e9A20D6daeA9159951caC8b1874d26e52c2',0,(e,v)=> console.log(v))
        web3.eth.getStorageAt('0x373C5e9A20D6daeA9159951caC8b1874d26e52c2',0,(e,v)=> console.log(v))
        // const info = hex_to_str(storage)
        // console.log("decoded string-->", info)
    // }
    // const info = hex_to_str(storage)
    // console.log("decoded string-->", info)
}

decodePrivate();