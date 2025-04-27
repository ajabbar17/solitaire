const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');  // <-- ADD THIS
const authRoutes = require('./routes/authRoutes');

dotenv.config();
const app = express();


app.get('/', (req, res) => {
    res.send('API is working 🚀');
  });
  

// Middleware
app.use(cors({
  origin: '*'
}));

app.use(express.json());



// Routes
app.use('/api/auth', authRoutes);

// Database Connection
const connectDB = require('./config/db');
connectDB();

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
