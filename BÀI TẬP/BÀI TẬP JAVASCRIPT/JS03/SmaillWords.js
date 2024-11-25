const smallWords = (string, number) => {
    const result = string.split(" ").filter(item => item.length <= number);
    return result.join(" ");
};

const test1 = "I Love Foood Code Too Playing Much";
console.log(smallWords(test1, 4));
// Trả về: I Love Code Too Much


const test2 = "I Love Foood Code Too Playing Much";
console.log(smallWords(test2, 3));
// Trả về: I Too
