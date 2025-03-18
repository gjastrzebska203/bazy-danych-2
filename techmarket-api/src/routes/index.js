const express = require("express");
const productRoutes = require("./productRoutes");

const router = express.Router();

router.use("/api/products", productRoutes);

module.exports = router;
