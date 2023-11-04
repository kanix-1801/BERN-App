// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract Primitives{
    bool public Right = false; //boolean
    // uint stands for unsigned integer, meaning non negative integers
    uint public count = 0;

    // Signed integer of 256 bits (-2^255 to 2^255 - 1)
    int public counts = 0;

    // minimum and maximum of int
    uint public minUInt = type(uint).min; //uint256: 0
    uint public maxUInt = type(uint).max;
// uint256: 115792089237316195423570985008687907853269984665640564039457584007913129639935

    int public minInt = type(int).min;
// nt256: -57896044618658097711785492504343953926634992332820282019728792003956564819968 
    int public maxInt = type(int).max; 
// int256: 57896044618658097711785492504343953926634992332820282019728792003956564819967

    // The address data type is used to store Ethereum addresses.
    // Addresses are used to represent users, contracts, and other entities on the Ethereum blockchain.
    address public userAddress = 0x1234567890123456789012345678901234567890;

    // A dynamic string of UTF-8 characters. Strings are used for storing textual data.
    string public str = "hello world";

    // Default values
    // Unassigned variables have a default value
    bool public defaultBool; // false
    uint public defaultUint; //0
    int public defaultInt; //0
    address public defaultAddr; // 0x0000000000000000000000000000000000000000
    string public dfaultstr; //

}