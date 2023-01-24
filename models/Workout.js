const mongoose = require("mongoose");
const Exercise = require("./Exercise");

const workoutSchema = new mongoose.Schema(
  {
    day: { type: String, required: true },
    muscleGroup: { type: String, required: true },
    exercises: [Exercise.schema],
  },
  { collection: "workout" }
);

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
