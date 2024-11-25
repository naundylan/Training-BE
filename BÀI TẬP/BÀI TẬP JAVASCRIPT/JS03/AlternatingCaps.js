const alternatingCaps = ((string) => {
    let count = -1;
    let array = string.split("");

    let changeCase = array.map((item) => {
        count += 1;
        if(item === " ") return item;
        return count % 2 === 0 ? item.toUpperCase() : item.toLowerCase();
    });

    let newArray = changeCase.join("");
    return newArray;
});

const test1 = alternatingCaps("Khá Bảnh");
console.log(test1); // KhÁ bẢnH


const test2 = alternatingCaps("Khổ trước sướng sau thế mới giàu.");
console.log(test2); // KhỔ tRưỚc SưỚnG sAu ThẾ mỚi GiÀu.


const test3 = alternatingCaps("Giàu trước khổ sau thế càng đau.");
console.log(test3); // GiÀu TrƯớC kHổ SaU tHế CàNg ĐaU.
