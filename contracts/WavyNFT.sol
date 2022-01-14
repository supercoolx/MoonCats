// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract WavyNFT is ERC721URIStorage {

    // token id is a counter
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("WavyNFT", "WAVY") {

    }

    // mint nft to target address
    function awardItem(address addr, string memory tokenURI) public returns (uint256)
    {
        // increment token id
        _tokenIds.increment();

        // get current item id
        uint256 newItemId = _tokenIds.current();

        // mint to receipent address
        _mint(addr, newItemId);

        // set token uri to that token
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}
