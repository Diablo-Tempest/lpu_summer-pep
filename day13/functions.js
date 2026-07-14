// CommonJs
// function add(num1, num2) {
//     return num1+num2;
// }

// function substract(num1, num2) {
//     return num1-num2;
// }

// function multiply(num1, num2) {
//     return num1*num2;
// }

// function divide(num1, num2) {
//     return num1/num2;
// }

// function exponent(num1, num2) {
//     return num1**num2;
// }

// module.exports = {
//     add,
//     substract,
//     multiply,
//     exponent,
// }

// module.exports is used to export code

// const multiply = (num1, num2) =>{
//     return num1 * num2;
// }
// exports.multiply = multiply;
// exports.add = (num1, num2) => num1 + num2;
// exports.substract = (num1, num2) => num1 - num2;

// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     greet(){
//         console.log(`Hello ${this.name}`);
//     }
// }

// module.exports = Person;

//Interview trick question
// exports = {
//     add(num1, num2){ return num1, num2}
// }

// This will not work because we make exports point to the new object, while module.exports still points to the old one.

// exports -> new object
// module.exports -> old object

//ES6 Module

// named export
// export const PI = 3.14;
// export function add(num1, num2) {
//     return num1 + num2;
// }
// export const exponent = (num1, num2) => num1 ** num2;

// let age = 24;
// export {age};

// // default export
// export default function greet(){
//     console.log("Hello");
// }

// const substract = (num1, num2) => num1 - num2;
// const divide = (num1, num2) => num1 / num2;

//exporting multiple things together
// export {
//     // renaming
//     substract as subs,
//     divide,
// }