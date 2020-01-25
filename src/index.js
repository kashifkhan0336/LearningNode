const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("This is Home Page");
});

app.get("/posts", (req, res) => {
  res.send("We are on posts");
});

mongoose.connect(
  "mongodb+srv://mastermind0336:XhvXyUR0TkFeBuwf@cluster0-j8qym.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  () => console.log("Connected to DB!")
);

app.listen(3000);
