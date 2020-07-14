var express = require("express");
var router = express.Router();

const {
  getAllHouse,
  addHouse,
  updateHouse,
  deleteHouse,
} = require("../controllers/houseController");

/* GET host list. */
router
  .get("/", getAllHouse)
  .post("/", addHouse)
  .put("/:id", updateHouse)
  .delete("/:id", deleteHouse);

module.exports = router;
