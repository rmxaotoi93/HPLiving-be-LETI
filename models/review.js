const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    house: {
      type: mongoose.Schema.ObjectId,
      ref: "House",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Review", reviewSchema);
