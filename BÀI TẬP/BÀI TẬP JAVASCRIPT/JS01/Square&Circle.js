// Hãy tưởng tượng một hình tròn nằm giữa và có hai hình vuông: một hình vuông nhỏ hơn và một hình vuông lớn hơn.
// Đối với hình vuông nhỏ hơn, thì hình tròn là ngoại tiếp.
// Đối với hình vuông lớn hơn, thì hình tròn là nội tiếp.
// Tạo một hàm nhận vào một số nguyên (bán kính hình tròn) và trả về hiệu của diện tích hai hình vuông (Diện tích phần màu đỏ).

function squareAreasDifference(r) {
    var S = 2 * r**2;
    return S;
  };
  
  
  var test1 = squareAreasDifference(5);
  console.log(test1); // 50
  
  
  var test2 = squareAreasDifference(6);
  console.log(test2); // 72
  
  
  var test3 = squareAreasDifference(7);
  console.log(test3); // 98
  