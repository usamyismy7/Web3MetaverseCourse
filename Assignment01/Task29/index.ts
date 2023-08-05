const favorite_fruits: string[] = ["mango", "banana", "orange"];

function fruitChecker(fruit: string) {
    if (fruit === "peech") {
        console.log(`You really like ${fruit}es!`);
    }
    if (fruit === "mango") {
        console.log(`You really like ${fruit}es!`);
    }
    if (fruit === "banana") {
        console.log(`You really like ${fruit}s!`);
    }
    if (fruit === "avocado") {
        console.log(`You really like ${fruit}es!`);
    }
    if (fruit === "pineapple") {
        console.log(`You really like ${fruit}s!`);
    }
}

for (let fruit of favorite_fruits) {
    fruitChecker(fruit)
}