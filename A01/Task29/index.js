var favorite_fruits = ["mango", "banana", "orange"];
function fruitChecker(fruit) {
    if (fruit === "peech") {
        console.log("You really like ".concat(fruit, "es!"));
    }
    if (fruit === "mango") {
        console.log("You really like ".concat(fruit, "es!"));
    }
    if (fruit === "banana") {
        console.log("You really like ".concat(fruit, "s!"));
    }
    if (fruit === "avocado") {
        console.log("You really like ".concat(fruit, "es!"));
    }
    if (fruit === "pineapple") {
        console.log("You really like ".concat(fruit, "s!"));
    }
}
for (var _i = 0, favorite_fruits_1 = favorite_fruits; _i < favorite_fruits_1.length; _i++) {
    var fruit = favorite_fruits_1[_i];
    fruitChecker(fruit);
}
