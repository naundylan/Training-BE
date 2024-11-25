let price = 100;
const discount = false;
const discountAmount = 30;
const country = "Việt Nam";
const student = true;


if (discount === true) {
  price -= discountAmount;
} else if (country === "Việt Nam") {
  if (student === true) {
    price -= discountAmount + 30;
  } else {
    price -= discountAmount + 10;
  }
} else {
  price -= 10;
}


console.log(price);
// Trả về 40
// Vì discount = false và country = "Việt Nam" nên rơi vào else if (country === "Việt Nam")
// Vì student = true nên rơi vào if (student === true)
// price -= discountAmount + 30 = price - (discountAmount + 30) = 100 - (30 + 30) = 40
