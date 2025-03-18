const products = require("../data/products");
const Product = require("../models/productModel");

const getAllProducts = (req, res) => {
  res.json(products);
};

const getProductById = (req, res, next) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));

  if (!product) {
    const error = new Error("Produkt nie znaleziony");
    res.status(404);
    return next(error);
  }

  res.json(product);
};

const addNewProduct = (req, res, next) => {
  const { name, category, description, price, stockCount, brand, imageUrl } =
    req.body;

  if (!name || !category || !price || !stockCount) {
    const error = new Error(
      "Proszę podać wymagane pola: name, category, price, stockCount"
    );
    res.status(400);
    return next(error);
  }

  const newProduct = new Product({
    id: products.length ? products[products.length - 1].id + 1 : 1,
    name,
    category,
    description,
    price,
    stockCount,
    brand,
    imageUrl,
  });

  products.push(newProduct);
  res.status(201).json(newProduct);
};

const updateProduct = (req, res, next) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));

  if (!product) {
    const error = new Error("Produkt nie znaleziony");
    res.status(404);
    return next(error);
  }

  const { name, category, description, price, stockCount, brand, imageUrl } =
    req.body;

  product.name = name || product.name;
  product.category = category || product.category;
  product.description = description || product.category;
  product.price = parseFloat(price) || product.price;
  product.stockCount = parseInt(stockCount) || product.stockCount;
  product.brand = brand || product.brand;
  product.imageUrl = imageUrl || product.imageUrl;
  product.isAvailable = product.stockCount > 0 ? true : false;

  res.json(product);
};

const deleteProduct = (req, res, next) => {
  const productIndex = products.findIndex(
    (p) => p.id === parseInt(req.params.id)
  );

  if (productIndex === -1) {
    const error = new Error("Produkt nie znaleziony");
    res.status(404);
    return next(error);
  }

  products.splice(productIndex, 1);
  res.json({ message: "Produkt usunięty" });
};

module.exports = {
  getAllProducts,
  getProductById,
  addNewProduct,
  updateProduct,
  deleteProduct,
};
