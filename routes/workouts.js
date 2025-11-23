const express = require("express");
const router = express.Router();

// Import controller
const workoutController = require("../controllers/workoutController");

// Show all workouts
router.get("/", workoutController.getAllWorkouts);

// Add workout
router.get("/add", workoutController.getAddWorkout);
router.post("/add", workoutController.postAddWorkout);

// Edit workout
router.get("/edit/:id", workoutController.getEditWorkout);
router.post("/edit/:id", workoutController.postEditWorkout);

// Delete workout
router.get("/delete/:id", workoutController.getDeleteWorkout);
router.post("/delete/:id", workoutController.postDeleteWorkout);

module.exports = router;
