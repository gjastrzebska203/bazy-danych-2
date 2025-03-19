const { query } = require("../config/db");

const getAllProducts = async (orderBy, isAvailable, filterParams) => {
  let sql = "SELECT * FROM products WHERE 1=1";
  let params = [];

  if (isAvailable !== undefined) {
    sql += " AND isAvailable = ?";
    params.push(isAvailable === "true" ? 1 : 0);
  }

  Object.keys(filterParams).forEach((key) => {
    if (filterParams[key]) {
      sql += ` AND ${key} LIKE ?`;
      params.push(`%${filterParams[key]}%`);
    }
  });

  if (orderBy === "price_asc") {
    sql += " ORDER BY price ASC";
  } else if (orderBy === "price_desc") {
    sql += " ORDER BY price DESC";
  }

  return await query(sql, params);
};

const getProductById = async (id) => {
  const [product] = await query("SELECT * FROM products WHERE id = ?", [id]);
  return product || null;
};

const addProduct = async (data) => {
  return await query(
    "INSERT INTO products (name, category, description, price, stockCount, brand, imageUrl, isAvailable, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())",
    [
      data.name,
      data.category,
      data.description,
      data.price,
      data.stockCount,
      data.brand,
      data.imageUrl,
      true ? data.stockCount > 0 : false,
    ]
  );
};

const updateProduct = async (id, data) => {
  return await query(
    `UPDATE products 
     SET name = ?, category = ?, description = ?, price = ?, stockCount = ?, brand = ?, imageUrl = ?, isAvailable = ?
     WHERE id = ?`,
    [
      data.name,
      data.category,
      data.description,
      data.price,
      data.stockCount,
      data.brand,
      data.imageUrl,
      data.isAvailable,
      id,
    ]
  );
};

const deleteProduct = async (id) => {
  return await query("DELETE FROM products WHERE id = ?", [id]);
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
