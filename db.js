const mongoose = require("mongoose");

//Define mongo Url
const mongourl = "mongodb://localhost:27017/hotels";

//Mongo connect
mongoose.connect(mongourl);

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
