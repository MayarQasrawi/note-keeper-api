const express = require("express");
const connectDB = require("./config/database");
const errorHandler = require("./middleware/errorHandler");
const noteRoutes = require("./routes/notes");

const app = express();

// Connect to database
connectDB();

// Body parser
app.use(express.json());

// Routes
app.use("/api/v1/notes", noteRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Note Keeping API");
});

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

// Error handler (must be last)
app.use(errorHandler);

module.exports = app;
