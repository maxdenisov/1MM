const mainContent = document.getElementById("mainContent");
const connectionContent = document.getElementById("connectionContent");

let makerAddress;

document.addEventListener("DOMContentLoaded", async () => {
  console.log("Script is ready");
  if (typeof window.ethereum === "undefined") {
    mainContent.style.display = "none";
    connectionContent.style.display = "block";
  } else {
    mainContent.style.display = "block";
    connectionContent.style.display = "none";
    connectWallet();
  }
});

const connectWalletButton = document.querySelector(".buttonConnect");

async function connectWallet() {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  makerAddress = accounts[0];
}

const buttonConnect = document.querySelector(".buttonConnect");

buttonConnect.addEventListener("click", (e) => {
  // e.preventDefault();
  console.log("sent");
  const {
    firstCoin: { value: firstCoin },
    secondCoin: { value: secondCoin },
    firstAmount: { value: firstAmount },
    limitPrice: { value: limitPrice },
    expiresIn: { value: expiresIn },
    stopPrice: { value: stopPrice },
  } = document.forms.mainForm;
  fetch("/orderData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstCoin,
      secondCoin,
      firstAmount,
      limitPrice,
      expiresIn,
      stopPrice,
      makerAddress
    }),
  });
});
