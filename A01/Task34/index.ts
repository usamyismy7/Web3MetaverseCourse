let favorite_pizza: string[] = ["Pepperoni", "Hawaiian", "Cheese"];

for (let i = 0; i < favorite_pizza.length; i++) {
  console.log(`I like ${favorite_pizza[i]} pizza`);
}

console.log(
  `How much do you like pizza?\n I like the following pizzas:\n ${favorite_pizza.join(
    ", "
  )}\n Therefore, I really like pizza!`
);
