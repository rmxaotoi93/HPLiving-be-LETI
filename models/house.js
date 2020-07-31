const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required "],
    },
    description: {
      type: String,
      required: [true, "title is required "],
    },
    typeRoom: {
      type: String,
    },

    images: [
      {
        type: String,
      },
    ],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    price: {
      type: Number,
      required: [true, "title is required "],
    },
    status: {
      type: String,
    },
    location: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("House", houseSchema);
