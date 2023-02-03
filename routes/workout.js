const express = require("express");
const router = express.Router();
const workoutController = require("../controllers/workout");

router.get("/", workoutController.index);
router.delete("/:id", workoutController.del);
router.post("/:id/:index", workoutController.delExercise);
router.put("/:id", workoutController.update);
router.post("/", workoutController.create);
router.get("/", workoutController.show);
router.post("/:id", workoutController.addExercise);

module.exports = router;
