var express = require("express");
var router = express.Router();

const {
  getAllHouse,
  addHouse,
  updateHouse,
} = require("../controllers/houseController");

/* GET host list. */
router.get("/", getAllHouse).post("/", addHouse).put("/", updateHouse);

module.exports = router;
