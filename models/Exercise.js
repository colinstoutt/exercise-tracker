const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subTitle: { type: String },
    sets: { type: Number },
    reps: { type: Number },
    weight: { type: Number },
    minutes: { type: Number },
    seconds: { type: Number },
    notes: { type: String },
  },
  { collection: "exercise" }
);

const Exercise = mongoose.model("exercise", exerciseSchema);

module.exports = Exercise;

// {
//   title: "Squat",
//   subTitle: "Barbell Back Squat",
//   sets: 3,
//   reps: 8,
//   weight: 185,
//   minutes: null,
//   seconds: null,
//   notes: "Make sure to keep your back straight and engage your core."
// }
