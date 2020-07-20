var express = require("express");

const {
  loginWithEmail,
  loginFacebook,
  logout,
} = require("../controllers/authController");
var router = express.Router();

router.route("/auth/login").post(loginWithEmail);
router.route("/facebook/login").get(loginFacebook);

router.route("auth/logout").post(logout);

module.exports = router;
