const House = require("../models/house");
const multer = require("multer");
const cloudinary = require("../services/cloudinary");
const upload = multer();

const getAllHouse = async (req, res) => {
  const minPrice = req.query.minPrice;
  const maxPrice = req.query.maxPrice;
  let houseList;
  if (!minPrice || !maxPrice) {
    houseList = await House.find();
  } else {
    houseList = await House.find({
      price: { $gte: minPrice, $lte: maxPrice },
    }).sort({ price: 1 });
  }
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

    if (req.files && req.files.length > 0) {
      let image = await cloudinary.uploadSingleFile(
        req.files[0].path,
        "Images"
      );
      console.log(image);
      house.images = [image.url];
      house.save();
    }
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
const getDistrict = async (req, res) => {
  console.log("get district here");
  await House.find().distinct("_id", (err, result) => {
    console.log(result);
    res.send({
      status: "ok la",
      data: result,
    });
  });
};

const getSingle = async (req, res) => {
  const singleHouse = await House.findById(req.params.id);
  console.log("single house", singleHouse);
  res.send({
    status: "ok la",
    data: singleHouse,
  });
};

const getAllImage = async (req, res) => {
  const allHouse = await House.find({});
  let allImage = [];
  for (let i = 0; i < allHouse.length; i++) {
    allImage.push(allHouse[i].images);
  }
  res.send({
    status: "get all img",
    data: allImage,
  });
};

const filter = async (req, res) => {
  const { location } = req.query;
  console.log("filterrrrrrr222");
  let queries = [];

  if (location) {
    // return res.json({
    //   data: await House.find({}),
    // });
    queries.push({ location: { $eq: location } });
  }

  const finalQuery = queries.length == 0 ? {} : { $and: queries };

  const filter = await House.find(finalQuery);
  console.log("filterrrrrrr");
  res.status(201).json({
    status: "success",
    data: filter,
  });
};
module.exports = {
  getAllHouse,
  addHouse,
  updateHouse,
  deleteHouse,
  getDistrict,
  getSingle,
  getAllImage,
  filter,
};
