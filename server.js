/*
*** The server is set up 
*/

require('dotenv').config(); // Load environment variables from .env file
const express = require ('express');
const cors = require ('cors');

const connectDB = require('./src/config/db'); // Import database connection
const authRoutes = require('./src/routes/authRoutes'); // Import authentication routes

const app = express();

// Middleware
app.use(express.json());  // To parse incoming JSON
app.use(cors());          // To handle cross-origin requests

// Connect to MongoDB
connectDB();

// Use routes
app.use('/api/auth', authRoutes);  // Authentication routes

// Home route
app.get('/', (req, res) => {
    res.send('Marketplace API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});