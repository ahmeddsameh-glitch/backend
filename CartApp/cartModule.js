const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String },
  discount: { type: Number },
  image: { type: String },
  deliveryTime: { type: Number, required: true },
});
const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
