//Kiểm tra xem một chuỗi có phải là palindrome hay không?
function palindrome(string) {
    let reverseString = string.split("").reverse().join("");
    console.log(reverseString);
    return string === reverseString;
}

console.log("Hello");
console.log(palindrome("heheheh"));
