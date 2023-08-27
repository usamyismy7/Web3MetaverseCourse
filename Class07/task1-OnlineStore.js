// Modelling online store entities
function calculateTotalPrice(order) {
    let totalPrice = 0;
    order.cart.forEach((product) => {
        totalPrice += product.price;
    });
    return totalPrice;
}
console.log(calculateTotalPrice({
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
})); // 600
export {};
