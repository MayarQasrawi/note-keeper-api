require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./src/config/database");

const PORT = process.env.PORT || 5000;

app.get("/hello", (req, res) => {
  res.send("Welcome to the Note Keeping API");
});

     
connectDB();


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

