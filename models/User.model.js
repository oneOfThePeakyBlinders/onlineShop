const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,

  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
  },
});

const User = mongoose.model("User", userSchema);
