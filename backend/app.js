const express = require('express');
const mongoose = require('mongoose');
const borrowRoutes = require('./routes/borrowRoutes'); // or wherever yours is
require('dotenv').config();

const app = express();
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/librarydb';

// Connect to MongoDB BEFORE starting the server
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
    .then(() => {
      console.log("✅ MongoDB connected");

      // Start the server only after Mongo is ready
      app.use('/api/borrow', borrowRoutes);

      app.listen(3000, () => {
        console.log("🚀 Server running on http://localhost:3000");
      });
    })
    .catch((err) => {
      console.error("❌ MongoDB connection failed:", err.message);
    });