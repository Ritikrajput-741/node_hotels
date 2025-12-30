const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

//Routes
const personRouter = require("./router/personRouter");
const menuItemRouter = require("./router/menuItemRouter");

//Routes use
app.use("/person", personRouter);
app.use("/menu", menuItemRouter);

app.get("/", (req, res) => {
  res.send("This is our home page");
});
 

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`The server is run at localhost:${PORT}`);
});
