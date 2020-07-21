const User = require("../models/user");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const { generateToken } = require("../services/authService");

exports.loginWithEmail = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        status: "fail",
        message: "Not exist email or password",
      });
    }
    console.log("doooo");

    const user = await User.checkEmailPassword(email, password);
    console.log(user);

    if (!user) {
      console.log("ifff");
      return res.status(401).json({
        status: "fail",
        message: "Wrong user",
      });
    }

    const token = await generateToken(user);

    res.status(201).json({
      status: "success",
      data: {
        user: user,
        token: token,
      },
    });
  } catch (err) {
    res.status(401).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.loginFacebook = async (req, res, next) => {
  const fbToken = req.query.token;
  if (!fbToken) {
    return res.status(401).json({ status: "failed", error: "need token" });
  }

  const data = await axios.get(
    `https://graph.facebook.com/me?fields=id,name,email&access_token=${fbToken}`
  );

  const user = await User.findOneOrCreate({
    email: data.data.email,
    name: data.data.name,
  });

  const token = await user.generateToken();

  return res.status(200).json({ status: "success", data: { user, token } });
};

exports.logout = async (req, res, next) => {
  console.log(req.query.token);
};
