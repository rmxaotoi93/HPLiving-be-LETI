var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var cors = require("cors");

var indexRouter = require("./routes/index");
var houseRouter = require("./routes/houses");
var userRouter = require("./routes/users");
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost/final-project", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connect to database"));

app.use("/", indexRouter);
app.use("/houses", houseRouter);
app.use("/users", userRouter);
module.exports = app;
