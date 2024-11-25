function laSoNguyenDuong(value) {
    return value > 0 && value % 1 == 0;
  };
  
  
  var input = prompt("Nhập một số bất kỳ", "");
  input = parseFloat(input);
  
  
  if (isNaN(input)) {
    alert("Vui lòng nhập một số!");
  } else {
    var result = laSoNguyenDuong(input);
    if (result == true) {
      alert("YES");
    } else {
      alert("NO");
    }
  }
  