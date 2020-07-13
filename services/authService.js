const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.generateToken = async (user) => {
  console.log(JWT_SECRET);
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
  user.tokens.push(token);
  await user.save();
  return token;
};
