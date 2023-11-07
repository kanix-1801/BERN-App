//SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract Write_Read {
    // State variable to store a number
    uint public num;

    // by set function change the number
    function set(uint _num) public {
        num = _num;
    }

    // show the value
    function get() public view returns (uint) {
        return num;
    }
}
