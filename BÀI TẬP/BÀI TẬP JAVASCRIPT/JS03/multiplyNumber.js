const multiplyNumberInString = (string) => {
    const arrayNumber = string.split("").filter(item => !isNaN(parseInt(item))).map(number => parseInt(number));
    if(arrayNumber.length === 0) return "0";
    const multiplyArray = arrayNumber.map(item => item * item);
    return multiplyArray.join("");
};

const test1 = "JG23BGH5BA";
console.log(multiplyNumberInString(test1)); // "4925"


const test2 = "VD23GS8S6AH";
console.log(multiplyNumberInString(test2)); // "496436"


const test3 = "AGD353GDSK8";
console.log(multiplyNumberInString(test3)); // "925964"


const test4 = "JBKJJKLDJ";
console.log(multiplyNumberInString(test4)); // "0"
