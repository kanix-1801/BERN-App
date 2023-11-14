const express = require("express");
const ABI = require("./ABI.json");
const { Web3 } = require("web3");

const app = express();
const PORT = 4000;

const web3 = new Web3(
  "https://polygon-mumbai.g.alchemy.com/v2/lZCx3Go-DzOvoUIBS3oXOPdqNaCBYX2h"
);
const contractAddress = "0x34f0f055d0Ad2918e36E3d0018b38EC9bEdD394A";
const contractInstance = new web3.eth.Contract(ABI, contractAddress);

const view = async () => {
  const task = await contractInstance.methods.get().call();
  console.log(task);
};
const num = 11;
const setValue = async (num) => {
  await contractInstance.methods.set(num).call();
};
view();
// setValue(10);
// view();
app.listen(PORT, () => {
  console.log("Server started on port", PORT);
  // view();
});

// const express = require("express");
// const ABI = require("./ABI.json");
// const { Web3 } = require("web3");

// const app = express();
// const PORT = 4000;

// const web3 = new Web3(
//   "https://polygon-mumbai.g.alchemy.com/v2/lZCx3Go-DzOvoUIBS3oXOPdqNaCBYX2h"
// );
// const contractAddress = "0x4bb39BaBB53Ef2313229920256890199ee193DF3";
// const contractInstance = new web3.eth.Contract(ABI, contractAddress);

// const view = async () => {
//   const task = await contractInstance.methods.get().call();
//   console.log(task);
// };
// view();
// app.listen(PORT, () => {
//   console.log("Server started on port", PORT);
//   view();
// });

// old abi
// [
// 	{
// 		"inputs": [],
// 		"name": "get",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]
