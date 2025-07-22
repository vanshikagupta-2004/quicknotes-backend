require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./mongoDB/connectDB');
const authRoutes = require('./routes/authRoutes');
const noteRoutes = require('./routes/noteRoutes'); // Add this if missing

// 🧠 Connect to MongoDB
connectDB();

// 🏗️ Create app instance BEFORE using it
const app = express();

// 🔐 Middleware
app.use(cors());
app.use(express.json());

// 🔗 Routes
app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);

app.get('/', (req, res) => {
  res.send('🚀 QuickNotes backend is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));