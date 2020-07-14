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
    const {
      title,
      description,
      typeRoom,
      images,
      price,
      status,
      location,
    } = req.body;
    const house = await House.create({
      title: title,
      description: description,
      typeRoom: typeRoom,
      price: price,
      images: images,
      status: status,
      location: location,
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
  const {
    title,
    description,
    typeRoom,
    images,
    price,
    status,
    location,
    _id,
  } = req.body;
  console.log("update", _id);
  if (!_id) {
    return res.status(400).json({
      mess: "require id",
    });
  }
  const fixHouseInfo = await House.findById({ _id: _id });
  console.log("idne", _id);

  if (title) {
    fixHouseInfo.title = title;
  }
  if (description) {
    fixHouseInfo.description = description;
  }
  if (typeRoom) {
    fixHouseInfo.typeRoom = typeRoom;
  }
  if (price) {
    fixHouseInfo.price = price;
  }
  if (images) {
    fixHouseInfo.images = images;
  }
  if (status) {
    fixHouseInfo.status = status;
  }
  if (location) {
    fixHouseInfo.location = location;
  }
  await fixHouseInfo.save();
  res.status(200).json({
    status: "success",
    data: fixHouseInfo,
  });
};
const deleteHouse = async (req, res) => {
  console.log("delete house id", req.params.id);

  await House.findByIdAndDelete(req.params.id);
  res.status(200).json({
    data: null,
    status: "success",
  });
};
module.exports = {
  getAllHouse,
  addHouse,
  updateHouse,
  deleteHouse,
};
