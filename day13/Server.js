// Creating an HTTP server using HTTP module
// import {createServer} from 'node:http';

// const server = createServer((req, res)=>{
//     res.writeHead(200, {'Content-Type': 'text/plain'})
//     res.end('Hello World');
// })

// server.listen(3000, '127.0.0.1', ()=>{
//     console.log("Port Listening to 127.0.0.1:3000");
// })

// CommonJs and ES6 modules are 2 different ways to organize and share code in JS.
//ECMAScript: It is the official specification(standard) that defines how JS language should work.

//CommonJS: Older module system mainly used in Node.Js

// require is used to import code
// const {add, exponent} = require('./functions');
// console.log(add(2, 3));
// console.log(substract(2, 3));
// console.log(exponent(2, 3));
// console.log(multiply(2, 3));

// const math = require('./functions');
// console.log(math.add(2, 3));
// console.log(math.substract(2, 3));
// console.log(math.multiply(2, 3));

// const {add, substract, multiply} = require('./functions')
// console.log(add(2, 3));
// console.log(multiply(2, 3));

// const Person = require('./functions')
// const p1 = new Person("Biprosom");
// p1.greet()

// const {log} = require('console');
// log("Hello world");

// import {PI, add, exponent} from './functions.js';
// console.log(PI);
// console.log(add(5, 6));
// console.log(exponent(5, 3));

// import math from './functions.js'
// console.log(math.PI);
// console.log(math.add(5, 6));
// console.log(math.exponent(5, 3));

// import sayHello, {PI, add, subs, divide} from './functions.js'
// sayHello()
// console.log(PI);
// console.log(add(2, 5));
// console.log(subs(2, 5));

// import {log, warn, error} from 'console';
// log("Hello world again");
// warn("warn again");
// error("error again");

// Module Wrapper

//Module Wrapper
// ( function(exports, require, module, __filename, __dirname) {

//     console.log(`FileName: -${__filename}`);
//     console.log(`FileName: -${__dirname}`);
// }
// )
// Module wrapper let every file gets its own scope
// Module wrapper is only available in commonJs module4⁴
// console.log(`FileName: -${__filename}`);
// console.log(`Directory Name: -${__dirname}`);
// console.log(`Require: -${require}`);
// console.log(`Module: -${module}`);
// console.log(`exports: -${exports}`);

const { error } = require('console');
const fs = require('fs');
// works in asyncronous manner
fs.writeFile('logs.txt', "This is the second text 🎨\n", (error)=>{
    console.log(`Error: ${error}`);
})

// UTF-8 is one of the several character encoding. A character encoding defines how characters(letters, numbers, symbols, emojis, etc) are represented as bytes in our computer.
fs.readFile('logs.txt', 'utf-8', (error, data)=>{
    if (error) {
        console.log(`Error: ${error}`);
    }
    console.log(data);  
})


// works in syncronous manner
fs.writeFileSync('logs.txt', "This is a new text");
const data = fs.readFileSync('logs.txt', 'utf-8',);  
console.log(data);



