const abbreviate = (string, n = 0) => {
    let array = string.split(" ");
    let filterArray = array.filter((word) => word.length >= n);
    let getChar = filterArray.map((item) => {
        return item[0];
    });
    let stringChar = getChar.join("").toUpperCase();
    return stringChar;
};

const test1 = abbreviate("Xin chào! Tôi tên là Nam.");
console.log(test1); // XCTTLN


const test2 = abbreviate("Xin chào! Tôi tên là Nam.", 3);
console.log(test2); // XCTTN --> Chữ "là" bị bỏ qua, vì có 2 ký tự, nhỏ hơn n = 3


const test3 = abbreviate("Xin chào! Tôi tên là Nam.", 4);
console.log(test3); // CN --> Các chữ có 3 ký tự trở xuống bị bỏ, vì n = 4
