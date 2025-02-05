// Nhúng mongoose
const mongoose = require('mongoose');

module.exports.connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database Connected!");
    }
    catch (error) {
        console.log("Database Error!");
    }
}