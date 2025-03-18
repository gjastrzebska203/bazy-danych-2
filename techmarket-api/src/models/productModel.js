class Product {
  constructor({
    id,
    name,
    category,
    description,
    price,
    stockCount,
    brand,
    imageUrl,
  }) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.description = description || "";
    this.price = parseFloat(price);
    this.stockCount = parseInt(stockCount);
    this.brand = brand || "Unknown";
    this.imageUrl = imageUrl;
    this.isAvailable = stockCount > 0;
    this.createdAt = new Date().toISOString();
  }
}

module.exports = Product;
