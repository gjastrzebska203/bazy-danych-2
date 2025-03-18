const products = [
  {
    id: 1,
    name: 'MacBook Pro 16"',
    category: "Laptopy",
    description: "Laptop Apple z procesorem M1 Pro, 16GB RAM, 512GB SSD",
    price: 9999.99,
    stockCount: 15,
    brand: "Apple",
    imageUrl: "https://example.com/macbook.jpg",
    isAvailable: true,
    createdAt: "2023-01-15T14:30:00Z",
  },
  {
    id: 2,
    name: "Dell XPS 15",
    category: "Laptopy",
    description: "Ultrabook Dell z procesorem Intel i7, 16GB RAM, 1TB SSD",
    price: 8999.99,
    stockCount: 10,
    brand: "Dell",
    imageUrl: "https://example.com/dellxps.jpg",
    isAvailable: true,
    createdAt: "2023-02-20T10:15:00Z",
  },
  {
    id: 3,
    name: "iPhone 14 Pro",
    category: "Smartfony",
    description: 'Smartfon Apple z wyświetlaczem 6.1", 256GB pamięci',
    price: 5999.99,
    stockCount: 20,
    brand: "Apple",
    imageUrl: "https://example.com/iphone14.jpg",
    isAvailable: true,
    createdAt: "2023-03-05T08:45:00Z",
  },
  {
    id: 4,
    name: "Samsung Galaxy S23",
    category: "Smartfony",
    description: 'Flagowy smartfon Samsunga z ekranem Dynamic AMOLED 6.8"',
    price: 5499.99,
    stockCount: 25,
    brand: "Samsung",
    imageUrl: "https://example.com/galaxys23.jpg",
    isAvailable: true,
    createdAt: "2023-04-12T12:00:00Z",
  },
  {
    id: 5,
    name: "Sony WH-1000XM5",
    category: "Słuchawki",
    description:
      "Bezprzewodowe słuchawki z ANC i długim czasem pracy na baterii",
    price: 1599.99,
    stockCount: 30,
    brand: "Sony",
    imageUrl: "https://example.com/sonywh1000.jpg",
    isAvailable: true,
    createdAt: "2023-05-01T15:20:00Z",
  },
  {
    id: 6,
    name: "Apple Watch Series 8",
    category: "Smartwatche",
    description: "Smartwatch Apple z funkcją pomiaru EKG i wodoodpornością",
    price: 2499.99,
    stockCount: 12,
    brand: "Apple",
    imageUrl: "https://example.com/applewatch.jpg",
    isAvailable: true,
    createdAt: "2023-06-10T09:10:00Z",
  },
  {
    id: 7,
    name: "Logitech MX Master 3",
    category: "Akcesoria",
    description: "Ergonomiczna mysz bezprzewodowa dla profesjonalistów",
    price: 499.99,
    stockCount: 50,
    brand: "Logitech",
    imageUrl: "https://example.com/logitechmx.jpg",
    isAvailable: true,
    createdAt: "2023-07-08T13:30:00Z",
  },
  {
    id: 8,
    name: 'LG OLED C2 55"',
    category: "Telewizory",
    description: "Telewizor LG OLED z HDR, 120Hz i wsparciem dla Dolby Vision",
    price: 6999.99,
    stockCount: 8,
    brand: "LG",
    imageUrl: "https://example.com/lgoled.jpg",
    isAvailable: true,
    createdAt: "2023-08-15T18:00:00Z",
  },
  {
    id: 9,
    name: "PlayStation 5",
    category: "Konsole",
    description: "Konsola do gier nowej generacji od Sony",
    price: 2999.99,
    stockCount: 5,
    brand: "Sony",
    imageUrl: "https://example.com/ps5.jpg",
    isAvailable: true,
    createdAt: "2023-09-21T11:40:00Z",
  },
  {
    id: 10,
    name: "GoPro Hero 11 Black",
    category: "Kamery",
    description:
      "Kamera sportowa z możliwością nagrywania w 5.3K i stabilizacją",
    price: 2199.99,
    stockCount: 18,
    brand: "GoPro",
    imageUrl: "https://example.com/gopro11.jpg",
    isAvailable: true,
    createdAt: "2023-10-30T07:55:00Z",
  },
];

module.exports = products;
