console.log("hello" + "world"); // helloworld


var a = "JavaScript";


a += " tutorial";
console.log(a); // JavaScript tutorial






var value1 = "one";
var value2 = "two";


// Giá trị ban đầu
console.log("Giá trị ban đầu: ", value1); // Giá trị ban đầu:  one
console.log("Giá trị ban đầu: ", value2); // Giá trị ban đầu:  two


// Hoán đổi giá trị
var value3 = value1;
value1 = value2;
value2 = value3;


console.log("Giá trị sau khi hoán đổi: ", value1); // Giá trị sau khi hoán đổi:  two
console.log("Giá trị sau khi hoán đổi: ", value2); // Giá trị sau khi hoán đổi:  one
