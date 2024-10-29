// const score = 100;
// const balance = new Number(100);

// console.log(score);
// console.log(balance.toString().length);

// console.log(balance.toFixed(2)); //100.00

// const otherNumber = 123.897;
// console.log(otherNumber.toPrecision(6));

//  It means when we want to use precision then we have to use value >=the number of digit before the decimal
//  If we want to add the precision value > the number of digit in decimal then it will automatically set the value zero after the greater the value of the precison than the number of digit in decimal

// const values = 10000000;
// console.log(values.toLocaleString()); //1,00,00,000
// console.log(values.toLocaleString("en-IN")); // 1,00,00,000

// console.log(Math);
// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.5));
// console.log(Math.floor(5.1));

console.log(Math.random()); // 0-1
console.log(Math.random() * 10);

// if we want to the number in any partcular range
const min = 15;
const max = 30;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
