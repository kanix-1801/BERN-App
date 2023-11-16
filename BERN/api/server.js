const express = require("express");
const ABI = require("./ABI.json");
const { Web3 } = require("web3");

const app = express();
const PORT = 4000;

const web3 = new Web3(
  "https://polygon-mumbai.g.alchemy.com/v2/lZCx3Go-DzOvoUIBS3oXOPdqNaCBYX2h"
);
const contractAddress = "0xF9F7090f0642Ff0359756F3faB1F207Ea8cC74fF";
const contractInstance = new web3.eth.Contract(ABI, contractAddress);

app.get("/api/eth/data", async (req, res) => {
  try {
    const task = await contractInstance.methods.get1().call();
    console.log(task);
    res.status(200).json({ status: 200, task, message: "Task Exist" });

    // res;
  } catch (error) {
    res.status(500).json({ status: 500, message: "task not exist" });
    // console.error();
  }
});
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
