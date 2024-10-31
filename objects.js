// const mySym = Symbol("key1");

// const JSUser = {
//   name: "Pradum",
//   [mySym]: "myKey1",
//   age: 23,
//   location: "Jaunpur",
//   email: "pradumkumar0612@gmail.com",
// };
// console.log(JSUser.email);
// console.log(JSUser["email"]); // better way instead of the above
// console.log(JSUser[mySym]); //myKey1

// JSUser.email = "pradumkumar@chatgpt.com";
// Object.freeze(JSUser);
// JSUser.email = "pradumkumar@google.com";
// console.log(JSUser);

// JSUser.greeting = function () {
//   console.log("Hello JS User");
// };
// console.log(JSUser.greeting); //[Function (anonymous)]
// console.log(JSUser.greeting());

// JSUser.greeting2 = function () {
//   console.log(`Hello JS User my name is ${this.name}`);
// };
// console.log(JSUser.greeting2());

// const tinderUser = {};
// tinderUser.id = "22ms0095";
// tinderUser.name = "Sammy";
// tinderUser.isLoggedIn = false;
// console.log(tinderUser);

// const obj1 = { 1: "a", 2: "b", 3: "c" };
// const obj2 = { 4: "c", 5: "d" };
// const obj = { obj1, obj2 };
// console.log(obj);

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

// We will prefer to use this
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'c', '5': 'd' }

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

//Object de-structure and JSON API intro

const course = {
  courseName: "DSA in Java",
  courseId: "22ms0095",
  courseIntructor: "Shradha Mamm",
};
const { courseIntructor } = course;
console.log(courseIntructor);
