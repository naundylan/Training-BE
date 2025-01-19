// call back: hàm có đối số là một hàm khác khi gọi
const congViec1 = () => {
    console.log("Day la cong viec 1");
}

const congViec2 = (callback) => {
    console.log("Day la cong viec 2");
    callback();
}

congViec2(congViec1);


// promise
var a = 10;

var promise = new Promise((resolve, reject) => {
    if(a === undefined) {
        reject();
    }
    else {
        resolve(a);
    }
})

promise
.then((a) => {
    console.log(a);
    return a;
})
.then((a) => {
    const b = a + 10
    console.log(b);
    return b
})
.then((b) => {
    const c = b + 10
    console.log(c);
})
.catch(() => {
    console.log("That bai");
})

// then dưới phải đợi then trên chạy xong và trả về giá trị mới chạy