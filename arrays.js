// const arr1 = [0, 1, 2, 3, 4];
// const arr2 = new Array(2, 4, 6, 8, 10);
// console.log(arr1);
// console.log(arr2);

// arr2.unshift(9);
// console.log(arr2); //[ 9, 2, 4, 6, 8, 10 ]

// console.log(arr2.includes(9)); //true

// const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const realAnotherArr = anotherArr.flat(Infinity);
// console.log(realAnotherArr); /*[
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ] */

console.log(Array.isArray("Pradum")); //false
console.log(Array.from("Pradum")); //[ 'P', 'r', 'a', 'd', 'u', 'm' ]
console.log(Array.from({ name: "Pradum" })); //[]

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]
