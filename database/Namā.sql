CREATE DATABASE Namaa;
USE Namaa;

CREATE TABLE Admins (
  admin_id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(150) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

INSERT INTO Admins (email, password) VALUES
('admin@namaa.com', 'admin123'),
('fatimah@namaa.com', '123456'),
('nouf@namaa.com', '123456'),
('noof@namaa.com', '123456'),
('norah@namaa.com', '123456'),
('raha@namaa.com', '123456');

CREATE TABLE categories (
  category_id INT AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(100) NOT NULL
);

INSERT INTO categories (category_name) VALUES
('Flowers'),
('Plants'),
('Gift Packages');

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

INSERT INTO products (product_id, name, description, price, stock, image, category_id)
VALUES

-- FLOWERS
(1, 'White Harmony Bouquet', 'A soft blend of white blooms creating a calm and elegant look.', 95, 10, 'WhiteHarmonyBouquet.png', 2),
(2, 'Blush Bloom Bouquet', 'Delicate pink tones arranged in a romantic and graceful style.', 155, 10, 'BlushBloomBouquet.png', 2),
(3, 'Autumn Glow Bouquet', 'Warm seasonal flowers with rich tones inspired by autumn.', 245, 10, 'AutumnGlowBouquet.png', 2),
(4, 'Lavender Harmony Bouquet', 'A soothing mix of soft purple and white flowers for a refined feel.', 158, 10, 'LavenderHarmonyBouquet.png', 2),
(5, 'Pink Cloud Bouquet', 'Light and airy pink blooms with a soft cloud-like appearance.', 227, 10, 'PinkCloudBouquet.png', 2),
(6, 'Fresh Garden Bouquet', 'A fresh arrangement inspired by natural greenery and bright tones.', 197, 10, 'FreshGardenBouquet.png', 2),
(7, 'Rustic Flame Bouquet', 'Bold red and orange tones with a warm rustic charm.', 317, 10, 'RusticFlameBouquet.png', 2),
(8, 'Sky Breeze Bouquet', 'A refreshing mix of blue and white blooms inspired by the sky.', 280, 10, 'SkyBreezeBouquet.png', 2),
(9, 'Sunlight Harmony Arrangement', 'A bright blend of yellow and white blooms arranged to bring warmth and freshness.', 248, 10, 'SunlightHarmonyArrangement.png', 2),
(10, 'Golden Autumn Luxe Arrangement', 'A rich mix of warm tones designed in a luxurious autumn-inspired style.', 599, 10, 'GoldenAutumnLuxeArrangement.png', 2),
(11, 'Pure Elegance Arrangement', 'A clean and sophisticated arrangement featuring soft white blooms.', 525, 10, 'PureEleganceArrangement.png', 2),
(12, 'Blush Sky Arrangement', 'A delicate mix of pink and blue tones creating a calm and airy feel.', 349, 10, 'BlushSkyArrangement.png', 2),

-- INDOOR PLANTS
(13, 'Red Anthurium Elegance Plant', 'A vibrant red plant that adds a bold and elegant touch to any space.', 229, 10, 'RedAnthuriumElegancePlant.png', 1),
(14, 'Peace Lily Serenity Plant', 'A calming plant with soft white blooms, perfect for a peaceful atmosphere.', 149, 10, 'PeaceLilySerenityPlant.png', 1),
(15, 'White Anthurium Serenity Plant', 'A clean and minimal white plant that brings elegance and simplicity.', 220, 10, 'WhiteAnthuriumSerenityPlant.png', 1),
(16, 'Blue Orchid Elegance Plant', 'A unique blue orchid that adds a luxurious and refined touch.', 265, 10, 'BlueOrchidElegancePlant.png', 1),
(17, 'White Orchid Elegance Plant', 'An elegant white orchid that enhances modern and minimal interiors.', 230, 10, 'WhiteOrchidElegancePlant.png', 1),
(18, 'Red Anthurium Luxe Plant', 'A premium red plant with a bold look, perfect for statement decor.', 280, 10, 'RedAnthuriumLuxePlant.png', 1),
(19, 'Peace Lily Warm Elegance Plant', 'A warm-toned plant that combines natural beauty with cozy elegance.', 210, 10, 'PeaceLilyWarmElegancePlant.png', 1),
(20, 'White Anthurium Luxe Plant', 'A luxurious white plant designed to elevate any interior space.', 240, 10, 'WhiteAnthuriumLuxePlant.png', 1),

-- GIFT PACKAGES
(21, 'Crimson Luxe Box Arrangement', 'A bold red arrangement presented in a luxurious box for a striking gift.', 310, 10, 'CrimsonLuxeBoxArrangement.png', 3),
(22, 'Golden Bloom & Coffee Luxe Arrangement', 'A premium floral arrangement paired with coffee for a warm and refined experience.', 565, 10, 'GoldenBloomCoffeeLuxeArrangement.png', 3),
(23, 'Blush Treat Gift Box', 'A soft pink floral gift set complemented with sweet chocolate treats.', 198, 10, 'BlushTreatGiftBox.png', 3);