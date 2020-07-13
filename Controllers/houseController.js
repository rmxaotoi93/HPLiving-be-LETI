const House = require("../models/house");

const getAllHouse = async (req, res) => {
  const houseList = await House.find({});
  res.send({
    status: "ok",
    data: houseList,
  });
};

const addHouse = async (req, res) => {
  try {
    const { title, description, price, tags, images } = req.body;
    const house = await House.create({
      title: title,
      description: description,
      price: price,
      tags: tags,
      images: images,
    });
    res.send({
      status: "ok",
      data: house,
    });
  } catch (err) {
    res.json({
      status: "fail",
      message: err,
    });
  }
};
const updateHouse = async (req, res) => {
  try {
  } catch (err) {
    res.json({
      status: "fail",
      message: err,
    });
  }
};
module.exports = {
  getAllHouse,
  addHouse,
  updateHouse,
};
