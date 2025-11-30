const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    sellerId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
    },
    category: {
      type: String,
    },
    price: {
      type: Number,
    },
    picture: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
