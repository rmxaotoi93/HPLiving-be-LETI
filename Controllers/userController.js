const User = require("../models/user");
const bcrypt = require("bcrypt");
const multer = require("multer");
const cloudinary = require("../services/cloudinary");
const upload = multer();
const { generateToken } = require("../services/authService");

exports.getUserList = async (req, res) => {
  try {
    const userList = await User.find({});
    res.status(200).json({
      userList,
    });
  } catch (err) {
    res.status(400).json({
      mess: "Error happens",
    });
  }
};

exports.updateUsers = async (req, res) => {
  try {
    const { name, email, password, image } = req.body;
    const { id } = req.params;
    console.log(req);
    if (!name && !email && !password && !image) {
      return res.status(400).json({
        mess: "Name, email, password are required",
      });
    }
    if (password) {
      const hashPassword = await bcrypt.hash(password, 10);
      if (!_id) {
        return res.status(400).json({
          mess: "require id",
        });
      }
    }
    console.log("123123123123", id);

    const user = await User.findById({ _id: id });
    console.log(user);
    if (email) {
      user.email = email;
    }
    if (name) {
      user.name = name;
    }
    if (image) {
      user.image = image;
    }
    if (password) {
      user.password = hashPassword;
    }
    await user.save();
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      mess: err.mess,
    });
  }
};

exports.createUser = async (req, res) => {
  console.log("asdasdasd");
  try {
    const { name, email, password, images } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        mess: "Name, email, password are required",
      });
    }
    console.log("12312312312213123", req.body);
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email: email,
      name: name,
      password: hashPassword,
      images: images,
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
    console.log("useeer", user);

    const token = await generateToken(user);
    console.log("token", token);

    res.status(200).json({
      status: "success",
      data: { user, token },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      mess: err.message,
    });
  }
};

exports.getMyProfile = async (req, res) => {
  const myProfile = await User.findById(req.params.id);

  // console.log("single user", myProfile);
  res.send({
    status: "ok",
    data: myProfile,
  });
};

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(200).json({
    data: null,
    status: "success",
  });
};
