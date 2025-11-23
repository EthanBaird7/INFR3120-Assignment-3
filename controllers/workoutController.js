// Import Workout model
const Workout = require("../models/workout");

// GET all workouts
exports.getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find(); // Get all workouts from DB
    res.render("workout-list", { workouts }); // Render list page
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// GET add workout page
exports.getAddWorkout = (req, res) => {
  res.render("workout-add"); // Show form to add workout
};

// POST new workout
exports.postAddWorkout = async (req, res) => {
  try {
    const { exercise, muscleGroup, sets, reps, date } = req.body;

    const newWorkout = new Workout({ exercise, muscleGroup, sets, reps, date });
    await newWorkout.save();

    res.redirect("/workouts"); // Go back to list page
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// GET edit workout page
exports.getEditWorkout = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    res.render("workout-edit", { workout });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// POST updated workout
exports.postEditWorkout = async (req, res) => {
  try {
    const { exercise, muscleGroup, sets, reps, date } = req.body;

    await Workout.findByIdAndUpdate(req.params.id, {
      exercise,
      muscleGroup,
      sets,
      reps,
      date,
    });

    res.redirect("/workouts");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// GET delete confirmation page
exports.getDeleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    res.render("workout-delete", { workout });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// POST delete workout
exports.postDeleteWorkout = async (req, res) => {
  try {
    await Workout.findByIdAndDelete(req.params.id);
    res.redirect("/workouts");
  } catch (err) {
    res.status(500).send(err.message);
  }
};
