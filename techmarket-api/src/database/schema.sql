-- CREATE TABLE IF NOT EXISTS products (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     category VARCHAR(100),
--     description TEXT,
--     price DECIMAL(10, 2) NOT NULL,
--     stockCount INT NOT NULL,
--     brand VARCHAR(100),
--     imageUrl VARCHAR(255),
--     isAvailable BOOLEAN NOT NULL,
--     createdAt TIMESTAMP NOT NULL
-- );

INSERT INTO products (name, category, description, price, stockCount, brand, imageUrl, isAvailable, createdAt) 
VALUES
("MacBook Pro 16'", "Laptopy", "Laptop Apple z procesorem M1 Pro, 16GB RAM, 512GB SSD", 9999.99, 15, "Apple", "https://example.com/macbook.jpg", true, "2023-01-15 14:30:00"),
("Dell XPS 15", "Laptopy", "Ultrabook Dell z procesorem Intel i7, 16GB RAM, 1TB SSD", 8999.99, 10, "Dell", "https://example.com/dellxps.jpg", true, "2023-02-20 10:15:00"),
("iPhone 14 Pro", "Smartfony", "Smartfon Apple z wyświetlaczem 6.1', 256GB pamięci", 5999.99, 20, "Apple", "https://example.com/iphone14.jpg", true, "2023-03-05 08:45:00"),
("Samsung Galaxy S23", "Smartfony", "Flagowy smartfon Samsunga z ekranem Dynamic AMOLED 6.8'", 5499.99, 25, "Samsung", "https://example.com/galaxys23.jpg", true, "2023-04-12 12:00:00"),
("Sony WH-1000XM5", "Słuchawki", "Bezprzewodowe słuchawki z ANC i długim czasem pracy na baterii", 1599.99, 30, "Sony", "https://example.com/sonywh1000.jpg", true, "2023-05-01 15:20:00"),
("Apple Watch Series 85", "Smartwatche", "Smartwatch Apple z funkcją pomiaru EKG i wodoodpornością", 2499.99, 12, "Apple", "https://example.com/applewatch.jpg", true, "2023-06-10 09:10:00"),
("Logitech MX Master 3", "Akcesoria", "Ergonomiczna mysz bezprzewodowa dla profesjonalistów", 499.99, 50, "Logitech", "https://example.com/logitechmx.jpg", true, "2023-07-08 13:30:00"),
("LG OLED C2 55'", "Telewizory", "Telewizor LG OLED z HDR, 120Hz i wsparciem dla Dolby Vision", 6999.99, 8, "LG", "https://example.com/lgoled.jpg", true, "2023-08-15 18:00:00"),
("PlayStation 5", "Konsole", "Konsola do gier nowej generacji od Sony", 2999.99, 5, "Sony", "https://example.com/ps5.jpg", true, "2023-09-21 11:40:00"),
("GoPro Hero 11 Black", "Kamery", "Kamera sportowa z możliwością nagrywania w 5.3K i stabilizacją", 2199.99, 18, "GoPro", "https://example.com/gopro11.jpg", true, "2023-10-30 07:55:00");
