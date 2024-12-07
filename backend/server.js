const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config({ path: '../.env' });
//dotenv.config();
console.log(process.env.MONGO_URI);
connectDB();
const app = express();

app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);


app.use(notFound);
app.use(errorHandler);


app.get('/', (req, res) => {
    try {
        res.send("API is running");  
    } catch (error) {
        console.error("Error with health check route:", error);
        res.status(500).send({ error: 'Server is experiencing issues. Please try again later.' });
    }
});

/*
app.get('/api/chat', (req, res) => {
    res.send(chats); 
});

app.get('/api/chats/:id', (req, res) => {
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat); 
});
*/

const PORT = process.env.PORT || 4000

app.listen(PORT, (err) => {
    if (err) {
        // Network Error Handling
        if (err.code === 'EADDRINUSE') {
            console.error(`Error: Port ${PORT} is already in use. Please choose a different port.`);
            // Respond with a custom message for the client
            process.exit(1);  // Exit the process because the server cannot start
        } else if (err.code === 'EACCES') {
            console.error(`Error: Permission denied to use port ${PORT}.`);
            // Suggest running with elevated privileges
            process.exit(1);  // Exit the process
        } else if (err.code === 'ENOTFOUND') {
            console.error(`Error: Network configuration issue. Unable to bind to port ${PORT}.`);
            process.exit(1);  // Exit the process
        } else {
            console.error(`Unexpected error while starting server on port ${PORT}:`, err);
            process.exit(1);
        }
    } else {
        console.log(`Server successfully started on PORT ${PORT}` .yellow.bold);
    }
});

