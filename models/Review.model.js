const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  text: String,
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
