function leapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }
    if (year % 100 === 0 && year % 400 ===0) {
        return true;
    }
    return false;
};

console.log(leapYear(2016));
console.log(leapYear(2000));
console.log(leapYear(1700));
console.log(leapYear(1800));
console.log(leapYear(100));
