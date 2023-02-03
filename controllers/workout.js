const Workout = require("../models/Workout");

// Index
const index = async (req, res) => {
  try {
    res.json(await Workout.find({}));
  } catch (error) {
    // send error to user
    res.status(400).json(error);
  }
};

// Delete
const del = async (req, res) => {
  try {
    res.json(await Workout.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
};

// Update
const update = async (req, res) => {
  try {
    res.json(
      await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json(error);
  }
};

// Create
const create = async (req, res) => {
  try {
    res.json(await Workout.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
};

const addExercise = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    workout.exercises.push(req.body);
    workout.save();
    res.json(workout);
  } catch (error) {
    res.status(400).json(error);
  }
};

const delExercise = async (req, res) => {
  try {
    const { index } = req.params;
    const workout = await Workout.findById(req.params.id);
    workout.exercises.splice(index, 1);
    workout.save();
    res.json(workout);
  } catch (error) {
    res.status(400).json(error);
  }
};

// Show
const show = async (req, res) => {
  try {
    res.json(await Workout.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  index,
  del,
  update,
  create,
  show,
  addExercise,
  delExercise,
};
