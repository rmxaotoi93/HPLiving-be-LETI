const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    trim: true,
  },
  tokens: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
