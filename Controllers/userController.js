const User = require("../models/user");
const bcrypt = require("bcrypt");
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
    const { name, email, password, token } = req.body;
    if (!name && !email && !password) {
      return res.status(400).json({
        mess: "Name, email, password are required",
      });
    }

    if (!token) {
      return res.status(400).json({
        mess: "require token",
      });
    }
    const user = await User.findOne({ tokens: token });
    if (email) {
      user.email = email;
    }
    if (name) {
      user.name = name;
    }
    if (password) {
      user.password = password;
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
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        mess: "Name, email, password are required",
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email: email,
      name: name,
      password: hashPassword,
    });
    console.log("useeer", user);

    const token = await generateToken(user);
    console.log("token", token);

    res.status(200).json({
      status: "success",
      data: { user, token },
    });
  } catch (err) {
    res.status(400).json({
      mess: err.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  console.log("asdsad", req.params.id);

  await User.findByIdAndDelete(req.params.id);
  res.status(200).json({
    data: null,
    status: "success",
  });
};
