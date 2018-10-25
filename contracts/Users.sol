pragma solidity ^0.4.25;

import "./TypeToken.sol";

contract Users{

    struct Client{

    }

    struct Merchant{

    }

    mapping(address => Merchant) merchants;
    mapping(address => Client) clients;

    address[] public merchants_list;
    address[] public clients_list;

    TypeToken public token;

    constructor() public{

    }
}