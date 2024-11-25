const sum = (arrayProduct) => {
    const totalPrice = arrayProduct.reduce((total, number) => total + number, 0);
    return totalPrice;
};

const getTotalPrice = (array) => {
    const arrayProduct = array.map((item) => item.price * item.quantity);
    return sum(arrayProduct);
}

const test1 = getTotalPrice([
	{ product: "Sữa", quantity: 1, price: 7000 }
]);
console.log(test1); // 7000


const test2 = getTotalPrice([
  { product: "Sữa", quantity: 1, price: 7000 },
  { product: "Ngũ cốc", quantity: 1, price: 50000 },
]);
console.log(test2); // 57000


const test3 = getTotalPrice([
	{ product: "Sữa", quantity: 3, price: 7000 }
]);
console.log(test3); // 21000


const test4 = getTotalPrice([
  { product: "Sữa", quantity: 1, price: 7000 },
  { product: "Trứng", quantity: 12, price: 3000 },
  { product: "Bánh mỳ", quantity: 2, price: 15000 },
  { product: "Phô mai", quantity: 1, price: 5000 },
]);
console.log(test4); // 78000


const test5 = getTotalPrice([
  { product: "Sô cô la", quantity: 1, price: 12000 },
  { product: "Kẹo", quantity: 1, price: 2000 },
]);
console.log(test5); // 14000
