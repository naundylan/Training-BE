const getBirthdayCake = (name, age) => {
    const char = age % 2 === 0 ? '#' : '*';

    const middle = `${char} ${age} Chúc mừng sinh nhật ${name}! ${age} ${char}`;

    const edge = char.repeat(middle.length);

    return `
        ${edge}
        ${middle}
        ${edge}
    `;
};


const test1 = getBirthdayCake("Nam", 18);
console.log(test1);

const test2 = getBirthdayCake("Long", 17);
console.log(test2);
