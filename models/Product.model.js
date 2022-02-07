const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  brand: {
    ref: "Brand",
    type: mongoose.Schema.Types.ObjectId,
  },
  category: {
    ref: "Category",
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
