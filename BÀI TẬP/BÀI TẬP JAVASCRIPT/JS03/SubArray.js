const numbers = [
    [1, 2],
    [3, 4],
    [5, 6],
];
  

const subSum = (array) => {
    const result = array.map(item => item.reduce((total, number) => total + number), 0);
    return result;
}

console.log(subSum(numbers));
