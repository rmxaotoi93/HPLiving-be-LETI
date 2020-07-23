var express = require("express");
var router = express.Router();
const upload = require("../services/multer");

const multerUpload = upload.array("images");
const {
  getUserList,
  createUser,
  updateUsers,
  deleteUser,
  getMyProfile,
} = require("../controllers/userController");
const { loginWithEmail } = require("../controllers/authController");

router.route("/").get(getUserList).post(multerUpload, createUser);
router.put("/:id", updateUsers);
router.post("/auth/login", loginWithEmail);
router.route("/:id").delete(deleteUser);
router.get("/me/:id", getMyProfile);
module.exports = router;
