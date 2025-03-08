function calculate() {
    let wallet = parseFloat(document.getElementById("wallet").value);
    let apple = parseInt(document.getElementById("apple").value);
    let banana = parseInt(document.getElementById("banana").value);
  
    let applePrice = 100 * apple;
    let bananaPrice = 100 * banana;
    let groceryTotal = applePrice + bananaPrice;
    let remainingWallet = wallet - groceryTotal;
  
    document.getElementById("walletAmount").innerText = wallet;
    document.getElementById("groceryTotal").innerText = groceryTotal;
    document.getElementById("remainingWallet").innerText = remainingWallet;
  }
  