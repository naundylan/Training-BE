function limitSpeed(speed) {
    if(speed <= 70)
        return "Vận tốc an toàn"
    else if(speed <= 120) {
        var penaltyPoint = speed - 70;
        return "Bạn đã bị phạt " + penaltyPoint * 30000 + "đ"; 
    }
    else return "Bạn đã bị tước giấy phép lái xe";
}


console.log(limitSpeed(70));
console.log(limitSpeed(120));
console.log(limitSpeed(50));
console.log(limitSpeed(90));

