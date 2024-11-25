function MaxNumber(firstNumber, SecondNumber) {
    // cách 1
    // if(firstNumber > SecondNumber) return firstNumber;
    // else return SecondNumber;

    // cách 2
    return firstNumber > SecondNumber ? firstNumber : SecondNumber;
};

console.log(MaxNumber(10, 20));
console.log(MaxNumber(50, 20));
console.log(MaxNumber(50, 50));

