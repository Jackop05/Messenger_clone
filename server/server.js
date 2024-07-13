const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./database/MongoDBConnection'); 

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Built-in middleware for parsing JSON
app.use(cookieParser()); // Middleware for parsing cookies
app.use(cors()); // Middleware for handling CORS

// Connect to MongoDB
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

// Routes
/*
const authUserRoutes = require('./routes/authUser');
const conversationRoutes = require('./routes/conversations');
const getDataRoutes = require('./routes/getData');
const imageRoutes = require('./routes/images');
const messageRoutes = require('./routes/messages');

app.use('/api/auth', authUserRoutes);
app.use('/api/data', getDataRoutes);
app.use('/api/conversations', conversationRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/images', imageRoutes);
*/

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: err.message });
});
