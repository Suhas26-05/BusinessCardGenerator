const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.urlencoded({ extended: true }));

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 'http://localhost:5000'");
});

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://suhaskodakandla464_db_user:mF7xFv6liYHH0m01@practice.xxyhm96.mongodb.net/?appName=Practice"
  )
  .then(() => console.log("Connected to MongoDB"));

const UserSchema = new mongoose.Schema(
  {
    // Personal Information
    name: {
      type: String,
      required: true,
      trim: true, // Removes whitespace from both ends of a string
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensures no two users share the same email
      lowercase: true, // Converts email to lowercase before saving
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },

    // Skills (grouped into an array for better structure)
    skill1: { type: String, default: [] },
    skill2: { type: String, default: [] },
    skill3: { type: String, default: [] },
    skill4: { type: String, default: [] },

    // Design/UI Elements
    gradient1: { type: String, default: [] },
    gradient2: { type: String, default: [] },
    gradient3: { type: String, default: [] },
    color: {
      type: String,
      trim: true,
    },
    radius: {
      type: String,
      trim: true, // Assuming radius is stored as a string like '75' or '50px'
    },
  },
  {
    // Schema Options
    timestamps: true, // Adds `createdAt` and `updatedAt` fields
  }
);

const User = mongoose.model("User", UserSchema);

// Save form submission
app.post("/user/save", (req, res) => {
  async function saveUserData() {
    const newUser = new User(req.body);
    const saveUser = await newUser.save();
    console.log("User data saved:" + saveUser);
  }
  saveUserData();
  res.send("User data saved");
});
