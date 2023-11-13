const express = require("express");
const ABI = require("./ABI.json");
const { Web3 } = require("web3");

const app = express();
const PORT = 4000;

const web3 = new Web3(
  "https://polygon-mainnet.g.alchemy.com/v2/qqO6T6O2_WFhudRMLIDLrRVfjP5iGLaT"
);
//cotract address : 0x3C422f0e4E578472FaFDbD4621448f84270503c4
const contractAdderss = "0x3C422f0e4E578472FaFDbD4621448f84270503c4";
const contract = new web3.eth.Contract(ABI, contractAdderss);
console.log(contract);
app.listen(PORT, () => {
  console.log("start");
});
