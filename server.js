const express = require("express");
const path = require("path");
const app = express();

const { LimitOrderBuilder } = require("@1inch/limit-order-protocol");

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

app.post("/orderData", (req, res) => {
  console.log("/order Data", req.body);
  const { expiresIn, firstCoin, secondCoin, stopPrice, limitPrice } = req.body;
  res.redirect("/");
});
