const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.get("/", (req, res) => {
  mongoose
    .connect(
      "mongodb+srv://suhaskodakandla464_db_user:mF7xFv6liYHH0m01@practice.xxyhm96.mongodb.net/?appName=Practice"
    )
    .then(() => console.log("Connected to MongoDB"));
  res.send("Business Card Backend Server is Running");
});
app.listen(5000, () => {
  console.log("Server is running on port 'http://localhost:5000'");
});
