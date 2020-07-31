var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var cors = require("cors");
require("dotenv").config({ path: ".env" });

var indexRouter = require("./routes/index");
var houseRouter = require("./routes/houses");
var userRouter = require("./routes/users");
var authRouter = require("./routes/auths");
var searchRouter = require("./routes/search");
var myLogger = require("./middleWare/logger");
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connect to database"));

app.use("/", indexRouter);
app.use("/houses", houseRouter);
app.use("/users", userRouter);
app.use("/", authRouter);
app.use("/search", searchRouter);

module.exports = app;
