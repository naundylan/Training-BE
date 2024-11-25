const totalPrice = (array) => {
    const result = array.reduce((total, item) => total + (item.quantity * item.price), 0);
    return result;
};

const cart = [
    { name: "iPhone", price: 1000, quantity: 5 },
    { name: "iPad", price: 500, quantity: 2 },
    { name: "MacBook", price: 2000, quantity: 1 },
];
  
console.log(totalPrice(cart)); // Trả về: 8000
  