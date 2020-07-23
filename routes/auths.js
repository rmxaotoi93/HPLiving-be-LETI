var express = require("express");

const {
  loginWithEmail,
  loginFacebook,
  logout,
} = require("../Controllers/authController");
var router = express.Router();

router.route("/auth/login").post(loginWithEmail);
router.route("/auth/facebook/login").get(loginFacebook);

module.exports = router;
