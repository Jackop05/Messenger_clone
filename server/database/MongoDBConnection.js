const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();



const connectDB = async () => {
    try {
        const dbURI = process.env.MONGODB_URL;
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
        process.exit(1);
    }
};



module.exports = connectDB;