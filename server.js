require('dotenv').config();         // ✅ Load environment variables from .env

const express = require('express');
const cors = require('cors');

const connectDB = require('./mongoDB/connectDB'); // ✅ Connect to MongoDB Atlas
const authRoutes = require('./routes/authRoutes');
const noteRoutes = require('./routes/noteRoutes');

const app = express();

// 🔐 CORS Configuration (Includes localhost & Netlify)
const corsOptions = {
  origin: ['http://localhost:5173', 'https://quicknotes-frontend.netlify.app'],
  credentials: true,
};
app.use(cors(corsOptions));

// 🧠 Connect to MongoDB Atlas
connectDB();

// 📦 Middleware
app.use(express.json());

// 🔗 Routes
app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);

app.get('/', (req, res) => {
  res.send('🚀 QuickNotes backend is running!');
});

// 🚀 Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));