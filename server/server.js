const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./database/MongoDBConnection'); 

dotenv.config();



const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true
}));

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});


const authUserRoutes = require('./routes/authUser');
const conversationRoutes = require('./routes/conversations');
const getDataRoutes = require('./routes/getData');
const messageRoutes = require('./routes/messages');

app.use('/api/auth', authUserRoutes);
app.use('/api/data', getDataRoutes);
app.use('/api/conversations', conversationRoutes);
app.use('/api/messages', messageRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: err.message });
});