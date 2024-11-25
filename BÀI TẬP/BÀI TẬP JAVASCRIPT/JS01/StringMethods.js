var theName = "  28Tech  ";


console.log(theName); // "  28Tech  "
console.log(theName[1]); // " "
console.log(theName[5]); // "e"


console.log(theName.charAt(1)); // " "
console.log(theName.charAt(5)); // "e"


console.log(theName.length); // 10


console.log(theName.trim()); // "28Tech"


console.log(theName.toUpperCase()); // "  28TECH  "
console.log(theName.toLowerCase()); // "  28tech  "


console.log(theName.trim().charAt(5).toUpperCase()); // "H"



var a = "Daca.vn - Professional Web Design Services.";


console.log(a.indexOf("Web")); // 23
console.log(a.indexOf("Web", 24)); // -1
console.log(a.indexOf("vn")); // 5


console.log(a.lastIndexOf("Design")); // 27


console.log(a.slice(10, 22)); // Professional
console.log(a.slice(-16, -10)); // Design


console.log(a.split("", 7));
// ["D", "a", "c", "a", ".", "v", "n"]

