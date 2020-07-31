const Review = require("../models/review");
const House = require("../models/house");

exports.getReview = async (req, res) => {
  try {
    const reviewList = await Review.find({});
    console.log(reviewList);
    res.status(200).json({
      status: "okok",
      data: reviewList,
    });
  } catch (err) {
    res.status(400).json({
      status: "can not get review",
      message: err.message,
    });
  }
};
exports.createReview = async (req, res) => {
  try {
    const { comment } = req.body;
    const user = req.user;
    const houseId = req.params.id;
    console.log("zxczxczcxzc", houseId);
    const house = await House.findById({ _id: houseId });

    if (!house) {
      throw new Error("house not exist");
    }
    const review = await Review.create({
      comment,
      user: user._id,
      house: houseId,
    });

    res.status(200).json({
      status: "ok",
      data: review,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateReview = async (req, res) => {
  try {
    const user = req.user;
    const reviewId = req.params.reviewsId;

    const review = await Review.findById({ _id: reviewId });

    if (!user._id.equals(review.user)) {
      console.log("123");
      throw new Error("dont allow to update comment");
    }

    const houseId = req.params.id;
    console.log("1213", houseId);
    const house = await House.findById({ _id: houseId });

    if (!house) {
      throw new Error("house not exist");
    }
    const { comment } = req.body;
    console.log(comment);
    if (comment) {
      review.comment = comment;
    }
    await review.save();
    res.status(200).json({
      status: "ok",
      data: review,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const user = req.user;

    const reviewId = req.params.reviewsId;

    const review = await Review.findById({ _id: reviewId });

    if (!user._id.equals(review.user)) {
      throw new Error("You are not11111 allow to delete");
    }

    await review.deleteOne({ _id: reviewId });
    res.status(200).json({
      data: null,
      status: "success",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
