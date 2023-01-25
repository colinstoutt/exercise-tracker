// Dependencies
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();

require("dotenv").config();

const workoutRouter = require("./routes/workout");
const usersRouter = require("./routes/users");

app.get("/", (req, res) => {
  res.send("Backend up and running...");
});

// DB Config
require("./config/database");

// Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(cors());

// Routers

app.use("/users", usersRouter);
// Mount our custom auth middleware to protect routes below it
app.use(require("./config/auth"));
app.use("/api/workout", workoutRouter);

// Listener
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
