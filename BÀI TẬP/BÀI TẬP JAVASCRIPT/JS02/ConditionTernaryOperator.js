const fullName = "Đặng Phương Nam";
const gender = "Nam";
const age = 17;


const vocative = gender === "Nam" ? "Ông" : "Bà";


console.log(vocative);
// Ông


console.log(`Xin chào ${gender === "Nam" ? "Ông" : "Bà"} ${fullName}`);
// Xin chào Ông Đặng Phương Nam


console.log(`Xin chào ${vocative} ${fullName}`);
// Xin chào Ông Đặng Phương Nam


const drinkAlcohol =
  age < 18
    ? "Bạn chưa được phép uống rượu."
    : age >= 18 && age <= 60
    ? "Bạn nên uống ít rượu."
    : age > 60
    ? "Bạn không nên uống rượu."
    : "Bạn ơi! Bạn còn đó chứ!";


console.log(drinkAlcohol);
// Bạn chưa được phép uống rượu.
