const invertedNumbers = (array) => {
    return array.map(item => -item);
};

const test1 = [1, -10, -20, 15, 100, -30];
console.log(invertedNumbers(test1));
// Trả về: [-1, 10, 20, -15, -100, 30];


const test2 = [-20, 30, 10, -25, -60, 20];
console.log(invertedNumbers(test2));
// Trả về: [20, -30, -10, 25, 60, -20];
