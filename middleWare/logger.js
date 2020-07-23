exports.myLogger = (req, res, next) => {
  console.log("LOGGED");
  next();
};
