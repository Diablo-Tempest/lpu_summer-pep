import express from 'express';
const router = express.Router()

// Route specific middleware
function rm1(req, res, next){
    console.log("Authorization Successful!");
    next();
}
router.
    get('/', rm1, (req, res) => {
        
        res.send(`Index Page ${req.method}`);
    })
    .post('/', (req, res) => {
        // res.send(`Index Page ${req.method}`);
        console.log(req.body);
        res.json({
            message: "Data received",
            data: req.body,
        })
    })
    .put('/', (req, res) => {
        res.send(`Index Page ${req.method}`);
    })
    .delete('/', (req, res) => {
        res.send(`Index Page ${req.method}`);
    })
export default router;