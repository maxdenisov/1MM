const express = require("express");
const path = require("path");
const app = express();
const Web3 = require("web3");

/*
 * Процесс создания лимитного ордера не завершен
 */

// const { LimitOrderBuilder } = require("@1inch/limit-order-protocol");

// const web3 = new Web3("http://localhost:3001");

// const contractAddress = "0x7643b8c2457c1f36dc6e3b8f8e112fdf6da7698a";
// let walletAddress;
// const chainId = 1;

// const limitOrderBuilder = new LimitOrderBuilder(
//   contractAddress,
//   chainId,
// );

app.use(express.static(path.join(__dirname, "client")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded());

app.listen(PORT, () => {
  console.log("Listening on 3001...");
});

app.get("/", (req, res) => {
  res.render("orderForm");
});

//принимает данные требуемые для создания ордера + адрес подключенного кошелька
app.post("/orderData", (req, res) => {
  console.log("/order Data", req.body);
  const {
    expiresIn,
    firstCoin,
    secondCoin,
    stopPrice,
    limitPrice,
    makerAddress,
  } = req.body;
  walletAddress = makerAddress;

  //   const limitOrder = limitOrderBuilder.buildLimitOrder({
  //     makerAssetAddress: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
  //     takerAssetAddress: "0x111111111117dc0aa78b770fa6a738034120c302",
  //     makerAddress: "0xfb3c7ebccccAA12B5A884d612393969Adddddddd",
  //     makerAmount: "100",
  //     takerAmount: "200",
  //     predicate: "0x0",
  //     permit: "0x0",
  //     interaction: "0x0",
  //   });
  //   console.log(limitOrder);
  res.redirect("/");
});
