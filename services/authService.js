const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.generateToken = async (user) => {
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
exports.loginRequire = async (req, res, next) => {
  // make sure we get the token
  console.log("212312312", req.headers);
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer")
  )
    return res.status(401).json({ status: "fail", message: "Unauthorized" });

  // verify token
  const token = req.headers.authorization.replace("Bearer ", "");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // find User with token
    const user = await User.findOne({ _id: decoded.id, tokens: token });
    if (!user) throw new Error("Unauthorized");

    // attach user object to req object
    req.user = user;
  } catch (err) {
    return res.status(401).json({ status: "fail", message: err.message });
  }
  next();
};
