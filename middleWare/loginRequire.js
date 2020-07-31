exports.auth = async (req, res, next) => {
  // make sure we get the token
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer")
  )
    return res.status(401).json({ status: "fail", message: "Unauthorized" });

  // verify token
  const token = req.headers.authorization.replace("Bearer ", "");
  try {
    const decoded = jwt.verify(token, "coderschool");
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
