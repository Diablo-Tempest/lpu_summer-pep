import express from 'express'; // es module
// const express = require('express'); // commonjs
const PORT = 3000;
const app = express();

// REST API: Representational State Transfer Application Programming Interface is a way for different software applications to communicate over the internet using HTTP methods.
app.get('/', (req, res)=>{
    res.send("Hello World GET");
})
.post("/", (req, res)=>{
    res.send("Hello World POST");
})
.put("/", (req, res)=>{
    res.send("Hello World PUT");
})
.patch("/", (req, res)=>{
    res.send("Hello World PATCH");
})
.delete("/", (req, res)=>{
    res.send("Hello World DELETE");
})
.head('/', (req, res)=>{
    res.send("Hello World HEAD");
})
.options("/", (req, res)=>{
    res.send("Hello World options");
})

//Chain OF APIs
app.get('/about', ()=>{
    res.send("About Page GET");   
})
.post('/about', ()=>{
    res.send("About Page POST");   
})
.put('/about', ()=>{
    res.send("About Page PUT");   
})
.delete('/about', ()=>{
    res.send("About Page DELETE");   
})

app.listen(PORT, '127.0.0.1', ()=>{
    console.log(`Port is running on 127.0.0.1:${PORT}`);
});