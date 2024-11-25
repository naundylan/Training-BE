const students = [
    { hoTen: "Le Van A", lop: "A", diem: 7.5 },
    { hoTen: "Do Van B", lop: "B", diem: 6.8 },
    { hoTen: "Nguyen Thi C", lop: "A", diem: 8 },
    { hoTen: "Dao Van D", lop: "C", diem: 9 },
    { hoTen: "Hoang Thi E", lop: "B", diem: 8.5 },
    { hoTen: "Vu Van F", lop: "B", diem: 7.2 },
];
  
  
  /*
  Trả về:
  {
    A: 15.5,
    B: 22.5,
    C: 9
  }
  */
  

const gradeOfClass = students.reduce((classitem, item) => {
    if (!classitem[item.lop]) {
        classitem[item.lop] = item.diem;
    }
    else {
        classitem[item.lop] += item.diem;
    }
    return classitem;
}, {});

console.log(gradeOfClass);