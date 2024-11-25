const countOnes = (array) => {
    const result = array.reduce((total, row) => total + row.filter(item => item === 1).length, 0);
    return result;
};

const test1 = countOnes([
    [1, 0],
    [0, 0],
  ]);
  console.log(test1); // 1
  
  
  const test2 = countOnes([
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ]);
  console.log(test2); // 7
  
  
  const test3 = countOnes([
    [1, 2, 3],
    [0, 2, 1],
    [5, 7, 33],
  ]);
  console.log(test3); // 2
  