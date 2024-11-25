function isPrime(number) {
    if(number < 2)
        return false;
    for(let i = 2; i < number; i++) {
        if(number % i == 0)
            return false;
    }
    return true;
};

function showPrimeNumber(number) {
    for(let i = 2; i < number; i++) {
        if(isPrime(i))
            console.log("Số nguyên tố: " + i);
    }
};

console.log(showPrimeNumber(20));