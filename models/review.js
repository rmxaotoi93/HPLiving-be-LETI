const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  comment: {
    type: String,
  },
});
module.exports = mongoose.model("House", houseSchema);
