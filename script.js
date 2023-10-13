// What is the result of this line of pseudocode? [1, 2, 3].map(multiplyByTwo).reduce(add)

let arr = [1, 2, 3];
console.log(arr); // [1, 2, 3]

let multiplyByTwo = arr.map((x) => x * 2);
console.log(multiplyByTwo); // [2, 4, 6]

// 0 + 2 + 4 + 6
let initialValue = 0;

let add = multiplyByTwo.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);
console.log(add); // 12
