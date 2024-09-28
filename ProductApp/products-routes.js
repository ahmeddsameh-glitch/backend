const express = require("express");
const router = express.Router();
const manager = require("./productController");
const authMiddleware = require("../middlewares/auth-middleware");
router.get("/", manager.readAllProducts);
// Get one product by ID
// router.get("/:id", authMiddleware, async (req, res) => {
//   const product = await manager.getProductById(req.params.id);
//   res.json(product);
// });
// Create a new product
router.post("/", manager.createProduct);
// Update product partially
router.patch("/:id", manager.updateOneProduct);
// Delete one product by ID
router.delete("/:id", manager.deleteOneProduct);
module.exports = router;
