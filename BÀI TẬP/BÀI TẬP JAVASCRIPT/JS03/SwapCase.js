const swapCase = (string) => {
    const array = string.split("");
    const result = array.map(item => {
        return item.indexOf(' ') >= 1 ? item : item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase();
    });
    return result.join("");
};


const test1 = "Le VAn HunG";
console.log(swapCase(test1));
// Trả về: lE vaN hUNg


const test2 = "Đặng PhưƠnG NAm";
console.log(swapCase(test2));
// Trả về: đẶNG pHƯơNg naM
