import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import Index from './Routes/Index.js';
import Users from './Routes/Users.js';
import Products from './Routes/Products.js';
import Blog from './Routes/Blog.js';
const PORT = 3000;
const app = express();
app.use(express.json()); // built-in middleware - json, urlencoded, static


//third party middleware
const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:5000",
    "http://localhost:8000",
]
app.use(cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", 'OPTIONS'],
    allowedHeaders: ["Content-Type", "Authorization", "Content-Length", "Content-Range"]
})); // allows request from different origins(eg: react app or angular app on another port)
app.use(morgan("dev")); // logs every request
app.use(helmet()) // adds secure HTTP headers to protect our application

// middleware
// 1. Application Level Middleware
// 2. Router-level middleware
// 3. Built-in middleware
// 4. Third party middleware
// 5. Error handling middleware

// Error-handling Middleware
function errorM1(error, req, res, next) {
    console.log("Error Middleware is called");
    
    res.status(500).json({
        message: error.message
    })
}

app.get('/caller', (req, res)=>{
    throw new Error("There is some error!");
})
app.use(errorM1);
function m1(req, res, next){
    console.log("This is Middleware 1");
    next();
    // res.send('Finished');
}
app.use(m1);
// app.use(function(req, res, next) {
//     console.log("This is Middleware 2");
//     return next();
// });


// Express Router
app.use('/', Index);
app.use('/users', Users);
app.use('/products', Products);
app.use('/blogs', Blog);

app.listen(PORT, '127.0.0.1', ()=>{
    console.log(`Node App is ruuning on localhost:${PORT}`);
})