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
    image: [
      {
        type: String,
      },
    ],
    price: {
      type: Number,
      required: [true, "title is required "],
    },
    state: {
      type: String,
    },
    tags: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("House", houseSchema);
