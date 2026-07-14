import express from 'express';
const router = express.Router();
//2. Router level middleware
function routeM1(req, res, next) {
    console.log("Blogs router is triggered");
    next();
}
router.use(routeM1);
router.get('/:blogName', (req, res)=>{
    //Route Parameters
    // console.log(req.params);
    //Route queries
    // console.log(req.query.language);
    // console.log(`${req.query.mode} mode is initiated`);
    res.send(`Welcome to the blog ${req.params.blogName}`);
})
export default router;