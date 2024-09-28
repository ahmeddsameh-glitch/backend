const express = require("express");
const router = express.Router();
const manager = require("./cartController");
router.get("/", manager.readAllItems);
router.post("/", manager.createItem);
router.delete("/:id", manager.deleteOneItem);
module.exports = router;
