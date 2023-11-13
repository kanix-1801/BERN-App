const express = require("express");
const ABI = require("./ABI.json");
const { Web3 } = require("web3");

const app = express();
const PORT = 4000;

const web3 = new Web3(
  "https://polygon-mumbai.g.alchemy.com/v2/lZCx3Go-DzOvoUIBS3oXOPdqNaCBYX2h"
);

const contractAddress = "0x4bb39BaBB53Ef2313229920256890199ee193DF3";

const contractInstance = new web3.eth.Contract(ABI, contractAddress);

const view = async () => {
  // const task = await contractInstance.method.get().call();
  const task = await contractInstance.methods.get().call();
  console.log(task);
};
view();
// const test = await view();
app.listen(PORT, () => {
  console.log("Server started on port", PORT);
  // console.log(view());
});

// const express = require("express");
// const ABI = require("./ABI.json");
// const { Web3 } = require("web3");

// const app = express();
// const PORT = 4000;

// const web3 = new Web3(
//   "https://polygon-mumbai.g.alchemy.com/v2/lZCx3Go-DzOvoUIBS3oXOPdqNaCBYX2h"
// );
// //cotract address : 0x3C422f0e4E578472FaFDbD4621448f84270503c4
// const contractAddress = "0x4bb39babb53ef2313229920256890199ee193df3";
// const contract = new web3.eth.Contract(ABI, contractAddress);
// console.log(contract);

// // const view = async () => {
// //   const task = await contract.method.get().call();
// //   console.log(task);
// // };

// view();
// app.listen(PORT, () => {
//   console.log("start");
// });
