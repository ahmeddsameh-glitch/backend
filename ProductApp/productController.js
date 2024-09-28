const Product = require("./productModule");
const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (e) {
    res.status(400).json(e); //error from client side
  }
};
const readAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
const readOneProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Not found ! " });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
const updateOneProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (updated) {
      res.status(200).json("product updated");
    } else {
      res.status(404).json({ message: "Not found ! " });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
const deleteOneProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndDelete(req.params.id);
    if (updated) {
      res.status(200).json("product deleted");
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
  createProduct,
  readAllProducts,
  deleteOneProduct,
  updateOneProduct,
};
