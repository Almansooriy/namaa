CREATE DATABASE Namaa;
USE Namaa;

CREATE TABLE categories (
  category_id INT AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(100) NOT NULL
);

INSERT INTO categories (category_name) VALUES
('Flowers'),
('Plants');

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

-- إدخال المنتجات

INSERT INTO products (name, description, price, stock, image, category_id) VALUES

-- 🌸 Flowers (category_id = 1)
('Rose Bouquet', 'A timeless bouquet with soft, elegant roses.', 120, 10, 'https://www.fnp.sa/cdn/shop/files/Red_Rose_Flower_Bouquet_Fresh_Flower_Delivery_in_Saudi_Arabia_1.jpg', 1),
('Tulip Bouquet', 'A modern bouquet with fresh tulips.', 110, 8, 'https://www.fnp.sa/cdn/shop/files/FLTPPKWNBQRGHR.jpg', 1),
('Peony Bouquet', 'Luxurious peonies with a romantic feel.', 160, 6, 'https://static-assets-prod.fnp.ae/images/pr/l/v20251024221830/precious-peonies-bouquet_1.jpg', 1),
('Mixed Bouquet', 'Seasonal flowers in elegant tones.', 130, 9, 'https://www.fnp.sa/cdn/shop/files/FL.MX.MD.BQ.RG.UX-ASZ.jpg', 1),
('White Lily Arrangement', 'Refined white lilies.', 140, 7, 'https://www.contempee.com/cdn/shop/files/Febrauary_-_14.jpg', 1),
('Orchid Arrangement', 'Elegant orchids in minimal style.', 170, 5, 'https://www.fnp.sa/cdn/shop/files/FLODBLVSRGUX1-2.jpg', 1),
('Baby’s Breath Bundle', 'Soft minimal floral bundle.', 80, 10, 'https://www.craftoutlet.com/cdn/shop/files/gypso-babys-breath-bundle-4-13344wt.jpg', 1),
('Sunflower Wrap', 'Bright sunflower arrangement.', 95, 8, 'https://www.fnp.sa/cdn/shop/files/20250414_1913_Sunflower_Bouquet_Display_remix_01jrth4tw4emfrwn3v5kxkettj.jpg', 1),

-- 🌿 Plants (category_id = 2)
('Snake Plant', 'Low-maintenance modern plant.', 90, 12, 'https://images.plnts.com/optimize/q:80/w:3840/plain/https://webshop.plnts.com/media/catalog/product/cache/aa5d334f459227518b6c3cf7ea9d29ed/p/l/pl.l.005-2-0106.jpg', 2),
('Peace Lily', 'Elegant indoor plant.', 110, 10, 'https://bostan.com.sa/cdn/shop/files/peace-lily-spathiphyllum-wallisii-4510638.jpg', 2),
('Monstera Plant', 'Bold green modern plant.', 140, 6, 'https://webshop.plnts.com/media/catalog/product/cache/aa5d334f459227518b6c3cf7ea9d29ed/p/l/pl.l.096-1.jpg', 2),
('Pothos Plant', 'Trailing indoor plant.', 85, 11, 'https://bostan.com.sa/cdn/shop/files/golden-pothos-vertical-epipremnum-aureum-3990476.jpg', 2),
('ZZ Plant', 'Resilient sleek plant.', 120, 7, 'https://jomostudio.com/cdn/shop/files/ZamioculcasZamiifolia6n.jpg', 2),
('Fiddle Leaf Fig', 'Large statement plant.', 180, 4, 'https://growhub.ae/cdn/shop/files/Fiddle_Leaf_Plant_2.jpg', 2),
('Areca Palm', 'Tropical indoor plant.', 150, 5, 'https://eureka-farms.com/cdn/shop/files/07_PALM_ARECA_01.jpg', 2),
('Succulent Set', 'Small low-maintenance plants.', 60, 15, 'https://www.plantshop.me/media/product/Succulent_Collection-56-plantshopme.jpg', 2);