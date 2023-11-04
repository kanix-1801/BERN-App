// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
contract Counter{
    string public str = "hello";
    uint public count = 0;

    // get() --> to show the value --> return count;
    function get() public view returns (uint){
        return count;
    }
    // count++; --> inc()
    function inc() public{
        count += 1;
    }
    // count--; --> dec()
    function dec() public{
        count -= 1;
    }
}