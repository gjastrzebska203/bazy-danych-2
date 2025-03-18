const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// pobieranie wszystkich produktów
router.get("/", productController.getAllProducts);

// pobieranie produktu po id
router.get("/:id", productController.getProductById);

// dodawanie nowego produktu
router.post("/", productController.addNewProduct);

// aktualizacja produktu
router.put("/:id", productController.updateProduct);

// usuwanie produktu
router.delete("/:id", productController.deleteProduct);

module.exports = router;
