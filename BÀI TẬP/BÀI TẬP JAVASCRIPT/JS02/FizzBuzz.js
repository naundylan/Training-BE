function FizzBuzz(arg) {
    if(typeof arg !== "number") {
        return "Vui lòng nhập số!";
    }
    else if(arg % 3 == 0 && arg % 5 == 0) {
        return "FizzBuzz";
    }
    else if (arg % 3 == 0) {
        return "Fizz";
    }
    else if (arg % 5 == 0) {
        return "Buzz";
    }
    else return arg
};

console.log(FizzBuzz(10));
console.log(FizzBuzz(3));
console.log(FizzBuzz(150));
console.log(FizzBuzz("20"));
console.log(FizzBuzz(50));

