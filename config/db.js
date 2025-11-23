// Import mongoose library
const mongoose = require("mongoose");

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI); // Use connection string from .env
    console.log("MongoDB Connected ✓");
  } catch (err) {
    console.error("Database Connection Error:", err);
    process.exit(1); // Stop server if DB connection fails
  }
};

// Export the function to use in app.js
module.exports = connectDB;
