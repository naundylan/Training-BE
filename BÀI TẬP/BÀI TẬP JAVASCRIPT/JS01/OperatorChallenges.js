// Đề bài: Phỏng đoán kết quả của console.log().
var a = 10;
var b = "20";
var c = 80;


var test1 = ++a + +b++ + +c++ - +a++; // 11 + 20 + 80 - 11 = 100
console.log(test1); // 100
console.log(a, b, c); // 12 21 81
console.log("------------");


// 12 21 81
var test2 = ++a + -b + +c++ - -a++ + +a; // 13 + (-21) + 81 - (-13) + 14 = 100
console.log(test2); // 100
console.log(a, b, c); // 14 21 82
console.log("------------");

// 14 21 82
var test3 = --c + +b + --a * +b++ - +b * a + --a - +true; // 81 + 21 + 13*21 - 22*13 + 12 - 1 = 81 + 21 + 273 - 286 + 12 - 1 = 100
console.log(test3); // 100
console.log(a, b, c); // 12 22 81
console.log("------------");
