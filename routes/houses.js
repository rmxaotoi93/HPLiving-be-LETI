var express = require("express");
var router = express.Router();
const upload = require("../services/multer");

const multerUpload = upload.array("images");
const {
  getAllHouse,
  addHouse,
  updateHouse,
  deleteHouse,
  getDistrict,
  getSingle,
  getAllImage,
} = require("../controllers/houseController");

/* GET host list. */
router
  .get("/", getAllHouse)
  .post("/", multerUpload, addHouse)
  .put("/:id", updateHouse)
  .delete("/:id", deleteHouse)
  .get("/gallery", getAllImage);
router.get("/:id", getSingle);
router.get("/district", getDistrict);

module.exports = router;
