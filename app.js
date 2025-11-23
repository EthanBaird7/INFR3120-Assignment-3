// This allows me to load environment variables from .env file (like DB link, PORT number)
require("dotenv").config();

// Import libraries I installed for this project
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// Create my Express application
const app = express();

// Allows me to read data sent from forms (req.body)
app.use(express.urlencoded({ extended: true }));

// Tells Express where our public files (CSS, images) are stored
app.use(express.static("public"));

// Tells Express I want to use EJS for our pages
app.set("view engine", "ejs");

// Tells Express where my "views" folder is located
app.set("views", path.join(__dirname, "views"));

// Imports the workout routes file
const workoutRoutes = require("./routes/workouts");

// Every route starting with "/workouts" will use workoutRoutes
app.use("/workouts", workoutRoutes);

// Home page route with the (localhost:3000/)
app.get("/", (req, res) => {
  // Renders the index.ejs file
  res.render("index");
});


// DATABASE CONNECTION
const connectDB = require("./config/db");
connectDB();

// START SERVER
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
