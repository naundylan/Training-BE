const ignoreNumbers = (string) => {
    const newArray = string.split("").map(item => isNaN(parseInt(item)) ? item : "");
    return newArray.join("");
};

const test1 = "Test4Ag54SF";
console.log(ignoreNumbers(test1));
// Trả về: TestAgSF


const test2 = "JHk34Gl3gG";
console.log(ignoreNumbers(test2));
// Trả về: JHkGlgG
