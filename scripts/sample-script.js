// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {

    //Marketplace deployed to: 0x478920Ce0519c582A4BD4Fa88Df5D1E64110e249
    // NFT deployed to: 0xC209E39Fe67a89f3D7e2466C0421afCBEE96F9E9
    // const contractAddress = await hre.ethers.getContractFactory('Trade')
    // const nft = await hre.ethers.getContractFactory('TariNFT1155')
    // const NFT = await nft.deploy("0x3436B92023eeDAC679940B148f4B4B40d5198470")
    const trade = await ethers.getContractAt("Trade","0x478920Ce0519c582A4BD4Fa88Df5D1E64110e249")
    const nft = await ethers.getContractAt("TariNFT1155","0xC209E39Fe67a89f3D7e2466C0421afCBEE96F9E9")
    // await nft.setOperator("0x79BF6Ab2d78D81da7d7E91990a25A81e93724a60")
    // await nft.mint("0x79BF6Ab2d78D81da7d7E91990a25A81e93724a60","Something2",10000,10)
    // console.log('NFT Done')
    // await trade.setSigner('0x79BF6Ab2d78D81da7d7E91990a25A81e93724a60')
    // await nft.setApprovalForAll("0x478920Ce0519c582A4BD4Fa88Df5D1E64110e249", true)
    await trade.executeOrder(["0x79BF6Ab2d78D81da7d7E91990a25A81e93724a60","0xb0e80DE54b19d5996Ed37fF8d2F41D7044422545","0xC209E39Fe67a89f3D7e2466C0421afCBEE96F9E9",true,1,122000000,2,1,21334,"0x3205b66ed866f2404bcaa9b880a31ae2d84d49000b3c5b95c677efcd4d859f460531a87bd5ee50a02793673638354e91d4b43d4e02bdf454bdfa3a79370edf531c"],{value:122000000})
    console.log('Trade Done')
    // const val = await trade.owner()
    // console.log(val)
    // await trade.executeOrder(["0x79BF6Ab2d78D81da7d7E91990a25A81e93724a60","0xb0e80DE54b19d5996Ed37fF8d2F41D7044422545","0xeE8fee79c4150Bf677946f539e4b8943096B3F4A",true,1,122000000,1,1,21334,"0xab84e5d9cc17672ab304141f3d2406ba45a90801cb60392ddc577eb8a623cfb02f4bf870ac3cc54977dc3bbe0b0a65f05bb21a4b7aaf400083799f89653492e61c"],{value:122000000})
    // console.log("Went through")
    //     const receipt = await contractAddress.deploy(35)
    // await receipt.she();
    // console.log("Marketplace deployed to:", receipt.address);
    // console.log("NFT deployed to:", NFT.address);

        // const toRead = await ethers.getContractAt("0x044631A69D685865B807EF53C553ec5b51F6F81F")


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
