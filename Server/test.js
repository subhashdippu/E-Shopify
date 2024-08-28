const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const app = express();
// require("dotenv").config();
dotenv.config({ path: "./.env" });
require("./db/conn");

app.use(express.json());
app.use(require("./router/auth"));

const PORT = process.env.PORT;
console.log(process.env.PORT);

app.get("/", (req, res) => {
  res.send("Hello world form the server");
});

app.listen(PORT, () => {
  console.log(`Server is running at port no ${PORT}`);
});
