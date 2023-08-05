var promptSyncing = require('prompt-sync')();
var balance = promptSyncing("What is your Balance: ");
var minBalance = promptSyncing("What is your min balance: ");
var maxBalance = promptSyncing("What is your max balance: ");
var total = parseInt(balance) + parseInt(minBalance) + parseInt(maxBalance);
if (balance <= 100 && minBalance <= 100 && maxBalance <= 100) {
    console.log("\nTotal Amount is: ", total);
    if (250 < total && total <= 300) {
        console.log("\nYour Credit Score is: A+");
    }
    else if (220 < total && total <= 250) {
        console.log("\nYour Credit Score is: B");
    }
    else if (180 < total && total <= 220) {
        console.log("\nYour Credit Score is: C");
    }
    else if (150 < total && total <= 180) {
        console.log("\nYour Credit Score is: D");
    }
    else if (0 < total && total <= 150) {
        console.log("\nYour Credit Score is: Low");
    }
}
else {
    console.log("input should be less than 100!");
}
