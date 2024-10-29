// let myDate = new Date();
// console.log(myDate); //2024-10-29T18:17:20.450Z
// console.log(myDate.toString()); // Tue Oct 29 2024 23:49:07 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); //Tue Oct 29 2024
// console.log(myDate.toISOString()); //2024-10-29T18:20:25.649Z
// console.log(myDate.toLocaleDateString()); //29/10/2024
// console.log(myDate.toLocaleString()); //29/10/2024, 11:51:26 pm
// console.log(myDate.toLocaleTimeString()); //11:51:48 pm

// console.log(typeof myDate); //object

// let createdDate = new Date(2024, 0, 23);
// console.log(createdDate.toLocaleString()); //23/1/2024, 12:00:00 am

// let createdDate = new Date(2024, 1, 23, 5, 3);
// console.log(createdDate.toLocaleString());
// here month start with 0 index

let newDate = new Date();
// console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
  })
);
