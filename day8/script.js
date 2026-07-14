// const obj1 = {
//     // key: value 
//     fname: "John",
//     lname: "Doe",
//     // this: refers to the object that is executing the current function
//     getFullName() {
//         return `${this.fname} ${this.lname}`;
//     },
// }

// Inherit properties from obj1
// const obj2 = {
//     __proto__: obj1,
// }


// console.log(obj2.getFullName());

// const obj2 = Object.create(obj1); // Create a new Object instance
// console.log(obj2);  // Empty Object with properties of obj1 inherited

// obj2.fname = "Ajay";
// obj2.lname = "Nagar";

// console.log(obj2.getFullName());

/*
obj1 = {
    fname: "John",
    lname: "Doe",
    __proto__: {Object}
    
    }
    obj2 = {
        __proto__: obj1
        }
        
        
        */

// console.log(obj1.getFullName());


// console.log(obj1);
// Prototype: is a property of functions(especially constructor functions and classes)
// __proto__: is a property of objects that points to the Object prototype.

// console.log(obj1.fname);
// console.log(obj1.lname);

// obj1.age = 10;
// console.log(obj1);

// Wrapper Classes: String, Number, Boolean, Object, Array, null
//    const str1 = "abc"; // const str1 = new String('abc');
//    console.log(str1.__proto__);

// console.log(str1.__proto__);
// const num1 = 10; // const num1 = new Number(10)

// Prototype of any instacke will be an Object, and prototype of the Object will be null


// Prototypical inheritance
// const obj1 = {
//     fname: "John",
//     lname: "Doe",
//     getFullName(){
//         return `Name:  ${this.fname} ${this.lname}`
//     }
// }
// const obj2 = {
//     age: 24,
//     occupation: "Frontend Dev",
//     getAge(){
//         return `Age: ${this.age}`
//     },
//     getOccupation(){
//         return `Occupation: ${this.occupation}`
//     },
//     __proto__: obj1,
// }

// const obj3 = {
//     __proto__: obj2
// }

// console.log(obj3.getFullName());

// Using Array constructor
// const arr1 = new Array(1, 2, 3, 4, 5)
// console.log(arr1);

// Create an array with fixed length
// const arr1 = new Array(5);
// for (let i = 0; i < arr1.length; i++) {
//     arr1[i] = i+1;
// }
// arr1[5] = 6;
// console.log(arr1);


// let num = 10;
// console.log("Number:", num);

// function greet() {
//     console.log("Hello");

// }
// greet()

// Promise.resolve("This is resolved").then(console.log)

// setTimeout(() => {
//     console.log("3 seconds are completed");
// }, 0);

// console.log("This is a script");


