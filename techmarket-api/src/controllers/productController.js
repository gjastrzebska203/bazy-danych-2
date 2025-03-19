const Product = require("../models/productModel");

const getAllProducts = async (req, res, next) => {
  try {
    const orderBy = req.query.orderBy; // price_asc, price_desc
    const isAvailable = req.query.isAvailable; // true lub false
    const filterParams = {
      name: req.query.name,
      category: req.query.category,
      brand: req.query.brand,
    };

    const products = await Product.getAllProducts(
      orderBy,
      isAvailable,
      filterParams
    );
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const product = await Product.getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Produkt nie znaleziony" });
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
};

const addNewProduct = async (req, res, next) => {
  try {
    await Product.addProduct(req.body);
    res.status(201).json({ message: "Produkt dodany pomyślnie" });
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const {
      name,
      category,
      description,
      price,
      stockCount,
      brand,
      imageUrl,
      isAvailable,
    } = req.body;

    const currentProduct = await Product.getProductById(productId);
    if (!currentProduct) {
      return res.status(404).json({ message: "Produkt nie znaleziony" });
    }

    const updatedProduct = {
      name: name ?? currentProduct.name,
      category: category ?? currentProduct.category,
      description: description ?? currentProduct.description,
      price: price ?? currentProduct.price,
      stockCount: stockCount ?? currentProduct.stockCount,
      brand: brand ?? currentProduct.brand,
      imageUrl: imageUrl ?? currentProduct.imageUrl,
      isAvailable: isAvailable ?? currentProduct.isAvailable,
    };

    const result = await Product.updateProduct(productId, updatedProduct);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Produkt nie znaleziony" });
    }

    res.json({ message: "Produkt zaktualizowany pomyślnie" });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const result = await Product.deleteProduct(req.params.id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Produkt nie znaleziony" });
    }
    res.json({ message: "Produkt usunięty pomyślnie" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addNewProduct,
  updateProduct,
  deleteProduct,
};
