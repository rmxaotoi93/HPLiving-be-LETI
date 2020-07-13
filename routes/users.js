var express = require("express");
var router = express.Router();
const {
  getUserList,
  createUser,
  updateUsers,
  deleteUser,
} = require("../controllers/userController");

router.route("/").get(getUserList).post(createUser).put(updateUsers);

router.route("/users/:id").delete(deleteUser);
module.exports = router;
