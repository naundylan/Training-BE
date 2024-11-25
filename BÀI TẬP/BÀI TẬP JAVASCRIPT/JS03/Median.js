const sum = (array) => {
    return array.reduce((total, number) => total + number, 0);
};

const mean = (array) => {
    return sum(array) / array.length;
};

const median = (array) => {
    const numberBefore = array[Math.floor((array.length - 1) / 2)];
    const numberAfter = array[Math.ceil((array.length - 1) / 2)];
    const result = mean([numberBefore, numberAfter]);
    return result;
};

const test1 = median([1, 2, 4, 5, 6, 8, 8, 8, 10]);
console.log(test1); // 6


const test2 = median([2, 2, 6, 8, 8, 10, 10]);
console.log(test2); // 8


const test3 = median([1, 2, 2, 4, 7, 8, 9, 10]);
console.log(test3); // 5.5
