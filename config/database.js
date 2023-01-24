const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);

let db = mongoose.connection;

// mongoose connection status messages
db = mongoose.connection;
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));
