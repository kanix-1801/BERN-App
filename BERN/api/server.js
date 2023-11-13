const express = require("express");
const ABI = require("./ABI.json");
const { web3 } = require("web3");

const app = express();
const port = 4000;

app.listen(port, () => {
  console.log("start");
});
