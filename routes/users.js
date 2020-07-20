var express = require("express");
var router = express.Router();
const {
  getUserList,
  createUser,
  updateUsers,
  deleteUser,
  login,
} = require("../controllers/userController");
const { loginWithEmail } = require("../controllers/authController");

router.route("/").get(getUserList).post(createUser).put(updateUsers);

router.post("/auth/login", loginWithEmail);
router.route("/:id").delete(deleteUser);
module.exports = router;
