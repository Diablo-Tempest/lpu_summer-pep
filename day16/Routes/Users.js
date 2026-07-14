import express from 'express';
const router = express.Router()

router.get('/', (req, res) => {
    res.send(`users Page ${req.method}`);
})
    .post('/', (req, res) => {
        res.send(`users Page ${req.method}`);
    })
    .put('/', (req, res) => {
        res.send(`users Page ${req.method}`);
    })
    .delete('/', (req, res) => {
        res.send(`users Page ${req.method}`);
    })
export default router;