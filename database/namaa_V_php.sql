-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 16, 2026 at 11:15 AM
-- Server version: 8.0.42
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `namaa`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int NOT NULL,
  `category_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`) VALUES
(1, 'Flowers'),
(2, 'Plants');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text,
  `price` decimal(10,2) NOT NULL,
  `stock` int NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `category_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `name`, `description`, `price`, `stock`, `image`, `category_id`) VALUES
(1, 'Rose Bouquet', 'A timeless bouquet with soft, elegant roses.', 120.00, 10, 'https://www.fnp.sa/cdn/shop/files/Red_Rose_Flower_Bouquet_Fresh_Flower_Delivery_in_Saudi_Arabia_1.jpg', 1),
(2, 'Tulip Bouquet', 'A modern bouquet with fresh tulips.', 110.00, 8, 'https://www.fnp.sa/cdn/shop/files/FLTPPKWNBQRGHR.jpg', 1),
(3, 'Peony Bouquet', 'Luxurious peonies with a romantic feel.', 160.00, 6, 'https://static-assets-prod.fnp.ae/images/pr/l/v20251024221830/precious-peonies-bouquet_1.jpg', 1),
(4, 'Mixed Bouquet', 'Seasonal flowers in elegant tones.', 130.00, 9, 'https://www.fnp.sa/cdn/shop/files/FL.MX.MD.BQ.RG.UX-ASZ.jpg', 1),
(5, 'White Lily Arrangement', 'Refined white lilies.', 140.00, 7, 'https://www.contempee.com/cdn/shop/files/Febrauary_-_14.jpg', 1),
(6, 'Orchid Arrangement', 'Elegant orchids in minimal style.', 170.00, 5, 'https://www.fnp.sa/cdn/shop/files/FLODBLVSRGUX1-2.jpg', 1),
(7, 'Baby’s Breath Bundle', 'Soft minimal floral bundle.', 80.00, 10, 'https://www.craftoutlet.com/cdn/shop/files/gypso-babys-breath-bundle-4-13344wt.jpg', 1),
(8, 'Sunflower Wrap', 'Bright sunflower arrangement.', 95.00, 8, 'https://www.fnp.sa/cdn/shop/files/20250414_1913_Sunflower_Bouquet_Display_remix_01jrth4tw4emfrwn3v5kxkettj.jpg', 1),
(9, 'Snake Plant', 'Low-maintenance modern plant.', 90.00, 12, 'https://images.plnts.com/optimize/q:80/w:3840/plain/https://webshop.plnts.com/media/catalog/product/cache/aa5d334f459227518b6c3cf7ea9d29ed/p/l/pl.l.005-2-0106.jpg', 2),
(10, 'Peace Lily', 'Elegant indoor plant.', 110.00, 10, 'https://bostan.com.sa/cdn/shop/files/peace-lily-spathiphyllum-wallisii-4510638.jpg', 2),
(11, 'Monstera Plant', 'Bold green modern plant.', 140.00, 6, 'https://webshop.plnts.com/media/catalog/product/cache/aa5d334f459227518b6c3cf7ea9d29ed/p/l/pl.l.096-1.jpg', 2),
(12, 'Pothos Plant', 'Trailing indoor plant.', 85.00, 11, 'https://bostan.com.sa/cdn/shop/files/golden-pothos-vertical-epipremnum-aureum-3990476.jpg', 2),
(13, 'ZZ Plant', 'Resilient sleek plant.', 120.00, 7, 'https://jomostudio.com/cdn/shop/files/ZamioculcasZamiifolia6n.jpg', 2),
(14, 'Fiddle Leaf Fig', 'Large statement plant.', 180.00, 4, 'https://growhub.ae/cdn/shop/files/Fiddle_Leaf_Plant_2.jpg', 2),
(15, 'Areca Palm', 'Tropical indoor plant.', 150.00, 5, 'https://eureka-farms.com/cdn/shop/files/07_PALM_ARECA_01.jpg', 2),
(16, 'Succulent Set', 'Small low-maintenance plants.', 60.00, 15, 'https://www.plantshop.me/media/product/Succulent_Collection-56-plantshopme.jpg', 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `role`) VALUES
(1, 'admin', '1234', 'admin'),
(2, 'fatimah', '1234', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
