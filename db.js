const mongoose = require("mongoose");
require("dotenv").config();

//Define mongo Url
// const mongoUrl = process.env.mongoUrl;
const mongoUrl = process.env.MONGODB_URL;

//Mongo connect
mongoose.connect(mongoUrl);

//provide default connection
const db = mongoose.connection;

// event listner for mongoo
db.on("connected", () => {
  console.log("Mongodb is connected to server");
});

db.on("error", (err) => {
  console.log("MongoDB connection error", err);
});

db.on("disconnected", () => {
  console.log("Mongodb is disconnected to server");
});

//export the database connections
module.exports = db;
