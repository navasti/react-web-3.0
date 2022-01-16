// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transactions {
  uint256 transactionCount;

  event Transfer(
    uint amount, 
    address from,
    string keyword,
    string message,
    address receiver,
    uint256 timestamp
    );

  struct TransferStruct {
    uint amount;
    string keyword;
    string message;
    address sender;
    address receiver;
    uint256 timestamp;
  }

  TransferStruct[] transactions;

  function addToBlockchain(
    uint amount, 
    string memory keyword,
    string memory message, 
    address payable receiver
    ) public {
    transactionCount += 1;
    transactions.push(
      TransferStruct(amount, keyword, message, msg.sender, receiver, block.timestamp)
    );
    emit Transfer(amount, msg.sender, keyword, message, receiver, block.timestamp);
  }
  
  function getAllTransactions() public view returns (TransferStruct[] memory) {
    return transactions;
  }
  
  function getTransactionCount() public view returns (uint256) {
    return transactionCount;
  }

}