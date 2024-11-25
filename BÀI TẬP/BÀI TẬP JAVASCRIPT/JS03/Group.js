const students = [
    { hoTen: "Le Van A", gioiTinh: "Nam" },
    { hoTen: "Do Van B", gioiTinh: "Nam" },
    { hoTen: "Nguyen Thi C", gioiTinh: "Nu" },
    { hoTen: "Dao Van D", gioiTinh: "Nam" },
    { hoTen: "Hoang Thi E", gioiTinh: "Nu" },
    { hoTen: "Vu Van F", gioiTinh: "Nam" },
];
  

const groupedStudents = students.reduce((groups, item) => {
    if (groups[item.gioiTinh]) {
        groups[item.gioiTinh].push(item.hoTen);
    }
    else {
        groups[item.gioiTinh] = [item.hoTen];
    }
    return groups;
}, {});

console.log(groupedStudents);
