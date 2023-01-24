const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const workoutRouter = require("./routes/workout");
const usersRouter = require("./routes/users");

app.use(express.static("public"));
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

require("dotenv").config();
// mongoose connect
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

require("./config/database");

app.use("/users", usersRouter);
app.use(require("./config/auth"));

app.use("/workouts", workoutRouter);

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), () => {
  console.log(`Listening on PORT ` + app.get("port"));
});
