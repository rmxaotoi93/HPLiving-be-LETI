var express = require("express");
var router = express.Router();

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
  .post("/", addHouse)
  .put("/:id", updateHouse)
  .delete("/:id", deleteHouse)
  .get("/gallery", getAllImage);
router.get("/:id", getSingle);
router.get("/district", getDistrict);

module.exports = router;
