-- categories - products - orders - managers - order_items - package_items

CREATE DATABASE Namā ;
USE Namā ;

CREATE TABLE categories (
  category_id INT AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(100) NOT NULL
);
INSERT INTO categories (category_name) VALUES
('Flowers'),
('Plants'),
('Coffee'),
('Chocolates'),
('Packages');

CREATE TABLE products (
  product_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  stock INT NOT NULL,
  image VARCHAR(255),
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES categories(category_id)
);
INSERT INTO products (name, description, price, stock, image, category_id) VALUES

-- Flowers
('Red Roses', 'Beautiful red roses bouquet', 50.00, 10, 'rose1.jpg', 1),
('White Lily', 'Elegant white lily flowers', 45.00, 8, 'lily.jpg', 1),
('Pink Tulips', 'Fresh pink tulips bouquet', 55.00, 12, 'tulips.jpg', 1),
('Sunflower', 'Bright sunflower bouquet', 35.00, 9, 'sunflower.jpg', 1),

-- Plants
('Indoor Plant', 'Green decorative indoor plant', 30.00, 15, 'plant1.jpg', 2),
('Succulent', 'Small easy-care succulent plant', 20.00, 12, 'succulent.jpg', 2),
('Snake Plant', 'Air-purifying snake plant', 40.00, 10, 'snake.jpg', 2),
('Bonsai Tree', 'Mini decorative bonsai tree', 70.00, 5, 'bonsai.jpg', 2),

-- Coffee
('Arabic Coffee', 'Traditional Arabic coffee beans', 40.00, 20, 'coffee1.jpg', 3),
('Espresso Beans', 'Strong espresso coffee beans', 55.00, 10, 'espresso.jpg', 3),
('Latte Mix', 'Smooth latte coffee mix', 35.00, 14, 'latte.jpg', 3),
('Cold Brew', 'Ready cold brew coffee', 25.00, 18, 'coldbrew.jpg', 3),

-- Chocolates
('Dark Chocolate', 'Premium dark chocolate box', 35.00, 18, 'dark.jpg', 4),
('Milk Chocolate', 'Sweet milk chocolate gift', 30.00, 14, 'milk.jpg', 4),
('Chocolate Truffles', 'Luxury chocolate truffles', 60.00, 6, 'truffle.jpg', 4),
('Hazelnut Chocolate', 'Chocolate with hazelnut filling', 45.00, 10, 'hazelnut.jpg', 4),

-- Packages
('Romantic Package', 'Flowers + chocolate gift set', 90.00, 5, 'pack1.jpg', 5),
('Luxury Package', 'Flowers + coffee + chocolate', 120.00, 3, 'pack2.jpg', 5),
('Simple Gift Box', 'Chocolate + small plant', 70.00, 7, 'pack3.jpg', 5),
('Premium Bundle', 'Full gift bundle set', 150.00, 2, 'pack4.jpg', 5);
