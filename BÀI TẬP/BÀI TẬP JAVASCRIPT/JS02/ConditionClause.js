let price = 100;
const discount = true;
const discountAmount = 30;
const country = "Việt Nam";


if (discount === true) {
  price -= discountAmount;
} else if (country === "Thái Lan") {
  price -= 40;
} else if (country === "Hàn Quốc") {
  price -= 50;
} else {
  price -= 10;
}


console.log(price);
// Trả về 70
// Vì discount = true nên rơi vào trường hợp đầu tiên
// price -= discountAmount = price - discountAmount = 100 - 30 = 70
