const blahBlah = (string, n) => {
    const arrayWord = string.split(" ");
    const newArray = arrayWord.map((item, index, originArray) => {
        return n > originArray.length - index - 1 ? "blah" : item;
    });
    return newArray.join(" ") + "...";
};

const test1 = blahBlah("Anh học CNTT hả, cài win dùm em nhé!", 3);
console.log(test1); // Anh học CNTT hả, cài win blah blah blah...


const test2 = blahBlah("Cảm giác bất an khi tự dưng một đứa bạn cũ hỏi mình đang học IT phải không.", 5);
console.log(test2); // Anh học CNTT hả, cài win blah blah blah...
