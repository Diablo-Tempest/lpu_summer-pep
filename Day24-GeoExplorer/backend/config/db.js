const mongoose = require('mongoose');
async function connectDB(){
    const uri = process.env.MONGO_URI;
    if (!uri) {
        console.error("MONGO_URI is not set.");
        process.exit(1);
    }
    try {
        await mongoose.connect(uri);
    } catch (error) {
        console.error("MongoDB connection Failed.", error.message);
        process.exit(1);
    }
}
module.exports = connectDB;