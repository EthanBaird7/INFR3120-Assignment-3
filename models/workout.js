// Import mongoose library
const mongoose = require("mongoose");

// Create a schema (structure) for workouts
const workoutSchema = new mongoose.Schema({
  exercise: { type: String, required: true },     // Name of exercise
  muscleGroup: { type: String, required: true },  // Muscle group targeted
  sets: { type: Number, required: true },         // Number of sets
  reps: { type: Number, required: true },         // Number of reps
  date: { type: Date, default: Date.now }         // Date of workout
});

// Export the model so I can use it in controllers
module.exports = mongoose.model("Workout", workoutSchema);
