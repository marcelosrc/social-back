const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    maxLength: 50,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    maxLength: 20,
  },
  password: {
    type: String,
    required: true,
    maxLength: 80
  },
  dob: {
    type: Date,
    required: true,
  },
  profilePicPath: {
    type: String,
  },
  bio: {
    type: String,
    maxLength: 300,
  },
  score: {
    type: Number,
    default: 1000,
    min: 0,
  },
  registerDate: {
    type: Date,
    default: Date.now,
  },
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
