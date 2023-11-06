// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract Variables {
    // State variables are stored on the blockchain.
    string public str = "hello world";
    uint public num = 10;

    function doSome() public {
        // Local variables are not saved to the blockchain.
        uint count = 0;

        // Here are some global variables
        uint timeStamp = block.timestamp;
        address sender = msg.sender;
    }

    // Constants  // coding convention to uppercase constant variables
    // Constants are variables that cannot be modified.
    // Their value is hard coded and using constants can save gas cost.

    address public constant MY_ADDRESS =
        0x777788889999AaAAbBbbCcccddDdeeeEfFFfCcCc;
    uint public constant MY_UINT = 123;
}
