// Modelling online store entities

/*
You're building a TypeScript application for an online store. Define the following types and interfaces:

Define an interface Product with properties like id, name, price, and category.

Create a type Cart that represents an array of Product objects.

Define an interface Customer with properties like id, name, and email.

Create a type Order that represents an object containing a Customer and a Cart.

Implement a function that calculates the total price of products in the cart.
*/

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

type Cart = Product[];

interface Customer {
  id: number;
  name: string;
  email: string;
}

type Order = {
  customer: Customer;
  cart: Cart;
};

function calculateTotalPrice(order: Order): number {
  let totalPrice: number = 0;
  order.cart.forEach((product: Product) => {
    totalPrice += product.price;
  });
  return totalPrice;
}

console.log(
  calculateTotalPrice({
    customer: {
      id: 1,
      name: "John",
      email: "",
    },
    cart: [
      {
        id: 1,
        name: "Product 1",
        price: 100,
        category: "Category 1",
      },
      {
        id: 2,
        name: "Product 2",
        price: 200,
        category: "Category 2",
      },
      {
        id: 3,
        name: "Product 3",
        price: 300,
        category: "Category 3",
      },
    ],
  })
); // 600
