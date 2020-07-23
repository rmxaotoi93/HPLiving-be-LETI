var express = require("express");
const { filter } = require("../Controllers/houseController");
var router = express.Router();

router.get("/", filter);

module.exports = router;
