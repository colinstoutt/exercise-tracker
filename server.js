// Dependencies
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
require("dotenv").config();

const workoutRouter = require("./routes/workout");
const usersRouter = require("./routes/users");

app.get("/", (req, res) => {
  res.send("Now listening to Exercise Tracker Backend...");
});

// DB Config
require("./config/database");

// Middleware

// Routers

app.use("/users", usersRouter);
app.use(require("./config/auth"));
app.use("/api/workouts", workoutRouter);

// Listener
const PORT = process.env.PORT || 3001;
// const { PORT = 3001 } = process.env;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
