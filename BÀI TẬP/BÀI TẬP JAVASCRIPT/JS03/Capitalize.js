const makeTitle = (string) => {
    const stringArray = string.split(" ");
    const newArray = stringArray.map((item) => {
        return item[0].toUpperCase() + item.slice(1).toLowerCase();
    })
    return newArray.join(" ");
};

const test1 = makeTitle("Fix bug là chuyện dễ. Tìm đoạn code gây ra bug để fix mới là chuyện khó.");
console.log(test1);


const test2 = makeTitle("Khi tui biên dịch và code chạy suôn sẻ trong lần đầu. Tui tự hỏi đã làm sai chỗ nào.");
console.log(test2);
