const Cart = require("./cartModule");
const createItem = async (req, res) => {
  try {
    const { _id, title, price, discount, category, deliveryTime } =
      req.body;
    const newCartItem = new Cart({
      _id,
      title,
      price,
      discount,
      category,
      deliveryTime,
    });
    const savedItem = await newCartItem.save();
    res.status(201).json(savedItem);
  } catch (e) {
    res.status(400).json(e);
  }
};
const readAllItems = async (req, res) => {
  try {
    const items = await Cart.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
const readOneItem = async (req, res) => {
  try {
    const item = await Cart.findById(req.params.id);
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: "Not found ! " });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
const deleteOneItem = async (req, res) => {
  try {
    const updated = await Cart.findByIdAndDelete(req.params.id);
    if (updated) {
      res.status(200).json("item deleted");
    } else {
      res.status(404).json({ message: "Not found ! " });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
module.exports = {
  createItem,
  readAllItems,
  deleteOneItem,
  readOneItem,
};
