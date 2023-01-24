const express = require("express");
const router = express.Router();
const workoutController = require("../controllers/workout");

// IDUCES

router.get("/", workoutController.index);

router.delete("/:id", workoutController.del);

router.put("/:id", workoutController.update);

router.post("/", workoutController.create);

router.get("/:id", workoutController.show);

module.exports = router;
