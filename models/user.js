const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
      unique: true,
    },
    images: [
      {
        type: String,
      },
    ],
    email: {
      type: String,
      required: [true, "email is required"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
    },
    tokens: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);
userSchema.statics.checkEmailPassword = async (email, password) => {
  const user = await User.findOne({ email: email });
  if (!user) {
    throw new Error("Unable to login");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new Error("Unable to login");
  }
  return user;
};

userSchema.statics.findOneOrCreate = async function ({ email, name }) {
  // this refers to User model
  let user = await this.findOne({ email });
  if (!user) {
    user = await this.create({
      email: email,
      name: name,
    });
  }
  return user;
};
const User = mongoose.model("User", userSchema);
module.exports = User;
