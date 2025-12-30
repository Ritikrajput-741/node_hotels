const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 3001;

//Routes
const personRouter = require("./router/personRouter");
const menuItemRouter = require("./router/menuItemRouter");

//Routes use
app.use("/person", personRouter);
app.use("/menu", menuItemRouter);

app.get("/", (req, res) => {
  res.send("This is our home page it is say hello to world");
});



app.listen(PORT, () => {
  console.log(`The server is run at localhost:${PORT}`);
});
