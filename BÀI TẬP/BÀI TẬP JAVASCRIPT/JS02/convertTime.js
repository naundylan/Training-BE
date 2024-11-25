function convertTime(string) {
    var time = string.slice(0, -2);
    var ampm = string.slice(-2);
    var time = time.split(":");
    var hour = time[0];
    var minute = time[1];
    var second = time[2];
    
    // format
    if (hour === "12") {
        hour = "00";
    }
    if (ampm === "PM") {
        hour = parseInt(hour) + 12;
    }

    // join string
    return hour + ":" + minute + ":" + second;
};


var test1 = convertTime("07:05:45PM");
console.log(test1); // 19:05:45


var test2 = convertTime("12:40:22AM");
console.log(test2); // 00:40:22


var test3 = convertTime("12:45:54PM");
console.log(test3); // 12:45:54
