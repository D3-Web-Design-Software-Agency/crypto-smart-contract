

// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";


contract WavePortal {
    
    uint256 totalWave;

    constructor (){
        console.log("my first contract");
    }

    function wave() public {
        totalWave += 1;
        console.log("%s has waved!", msg.sender);
        //console.log("%s has waved!", msg.address);
    }

    function getTotal() public view returns (uint256) {
        console.log("We have %d total waves!", totalWave);
        return totalWave;
    }
}