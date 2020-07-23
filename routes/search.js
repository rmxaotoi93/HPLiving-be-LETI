var express = require("express");
const { filter } = require("../controllers/houseController");
var router = express.Router();

router.get("/", filter);

module.exports = router;
