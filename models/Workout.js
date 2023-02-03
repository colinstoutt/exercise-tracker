const mongoose = require("mongoose");

const Exercise = new mongoose.Schema({
  title: String,
});

const workoutSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    day: { type: String, required: true },
    muscleGroup: { type: String, required: true },
    exercises: [Exercise],
  },
  { collection: "workout" }
);

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
