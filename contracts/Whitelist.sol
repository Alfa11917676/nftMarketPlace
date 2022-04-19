//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol";

contract WhitelistChecker is EIP712{

    string private constant SIGNING_DOMAIN = "NFT_MARKET_PLACE";
    string private constant SIGNATURE_VERSION = "1";

    struct whitelisted{
        address seller;
        address buyer;
        address nftAddress;
        bool inEth;
        uint _orderType;
        uint amount;
        uint tokenId;
        uint qty;
        uint timestamp;
        bytes signature;
    }

    constructor() EIP712(SIGNING_DOMAIN, SIGNATURE_VERSION){}


    function getSigner(whitelisted memory list) public view returns(address){
        return _verify(list);
    }


    /// @notice Returns a hash of the given rarity, prepared using EIP712 typed data hashing rules.

    function _hash(whitelisted memory list) internal view returns (bytes32) {
        return _hashTypedDataV4(
            keccak256(
                abi.encode(
                    keccak256("whitelisted(address seller,address buyer,address nftAddress,bool inEth,uint256 _orderType,uint256 amount,uint256 tokenId,uint256 qty,uint256 timestamp)"),
                    list.seller,
                    list.buyer,
                    list.nftAddress,
                    list.inEth,
                    list._orderType,
                    list.amount,
                    list.tokenId,
                    list.qty,
                    list.timestamp
                )
            )
        );
    }

    function _verify(whitelisted memory list) internal view returns (address) {
        bytes32 digest = _hash(list);
        return ECDSA.recover(digest, list.signature);
    }

    function getChainID() external view returns (uint256) {
        uint256 id;
        assembly {
            id := chainid()
        }
        return id;
    }
}