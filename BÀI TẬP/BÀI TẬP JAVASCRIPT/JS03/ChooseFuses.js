const chooseFuse = (fuses, curr) => {
    const num = parseFloat(curr);
    const fuseArray = fuses.map(parseFloat).filter((item) => item >= num);
    
    return `${Math.min(...fuseArray)}V`; // Bê mảng fuse xuống thay vì đưa thủ công
};

const test1 = chooseFuse(["3V", "5V", "12V"], "4.5V");
console.log(test1); // 5V


const test2 = chooseFuse(["5V", "14V", "2V"], "5.5V");
console.log(test2); // 14V


const test3 = chooseFuse(["17V", "15V", "12V"], "9V");
console.log(test3); // 12V
