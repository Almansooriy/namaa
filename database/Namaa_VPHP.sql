-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2026 at 04:26 PM
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
CREATE DATABASE IF NOT EXISTS `namaa` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `namaa`;

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `admin_id` int NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`admin_id`, `email`, `password`) VALUES
(1, 'admin@namaa.com', 'admin123'),
(2, 'fatimah@namaa.com', '123456'),
(3, 'nouf@namaa.com', '123456'),
(4, 'noof@namaa.com', '123456'),
(5, 'norah@namaa.com', '123456'),
(6, 'raha@namaa.com', '123456');

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
(2, 'Plants'),
(3, 'Gift Packages');

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
(1, 'White Harmony Bouquet', 'A soft blend of white blooms creating a calm and elegant look.', 95.00, 10, 'WhiteHarmonyBouquet.png', 2),
(2, 'Blush Bloom Bouquet', 'Delicate pink tones arranged in a romantic and graceful style.', 155.00, 10, 'BlushBloomBouquet.png', 2),
(3, 'Autumn Glow Bouquet', 'Warm seasonal flowers with rich tones inspired by autumn.', 245.00, 10, 'AutumnGlowBouquet.png', 2),
(4, 'Lavender Harmony Bouquet', 'A soothing mix of soft purple and white flowers for a refined feel.', 158.00, 10, 'LavenderHarmonyBouquet.png', 2),
(5, 'Pink Cloud Bouquet', 'Light and airy pink blooms with a soft cloud-like appearance.', 227.00, 10, 'PinkCloudBouquet.png', 2),
(6, 'Fresh Garden Bouquet', 'A fresh arrangement inspired by natural greenery and bright tones.', 197.00, 10, 'FreshGardenBouquet.png', 2),
(7, 'Rustic Flame Bouquet', 'Bold red and orange tones with a warm rustic charm.', 317.00, 10, 'RusticFlameBouquet.png', 2),
(8, 'Sky Breeze Bouquet', 'A refreshing mix of blue and white blooms inspired by the sky.', 280.00, 10, 'SkyBreezeBouquet.png', 2),
(9, 'Sunlight Harmony Arrangement', 'A bright blend of yellow and white blooms arranged to bring warmth and freshness.', 248.00, 10, 'SunlightHarmonyArrangement.png', 2),
(10, 'Golden Autumn Luxe Arrangement', 'A rich mix of warm tones designed in a luxurious autumn-inspired style.', 599.00, 10, 'GoldenAutumnLuxeArrangement.png', 2),
(11, 'Pure Elegance Arrangement', 'A clean and sophisticated arrangement featuring soft white blooms.', 525.00, 10, 'PureEleganceArrangement.png', 2),
(12, 'Blush Sky Arrangement', 'A delicate mix of pink and blue tones creating a calm and airy feel.', 349.00, 10, 'BlushSkyArrangement.png', 2),
(13, 'Red Anthurium Elegance Plant', 'A vibrant red plant that adds a bold and elegant touch to any space.', 229.00, 10, 'RedAnthuriumElegancePlant.png', 1),
(14, 'Peace Lily Serenity Plant', 'A calming plant with soft white blooms, perfect for a peaceful atmosphere.', 149.00, 10, 'PeaceLilySerenityPlant.png', 1),
(15, 'White Anthurium Serenity Plant', 'A clean and minimal white plant that brings elegance and simplicity.', 220.00, 10, 'WhiteAnthuriumSerenityPlant.png', 1),
(16, 'Blue Orchid Elegance Plant', 'A unique blue orchid that adds a luxurious and refined touch.', 265.00, 10, 'BlueOrchidElegancePlant.png', 1),
(17, 'White Orchid Elegance Plant', 'An elegant white orchid that enhances modern and minimal interiors.', 230.00, 10, 'WhiteOrchidElegancePlant.png', 1),
(18, 'Red Anthurium Luxe Plant', 'A premium red plant with a bold look, perfect for statement decor.', 280.00, 10, 'RedAnthuriumLuxePlant.png', 1),
(19, 'Peace Lily Warm Elegance Plant', 'A warm-toned plant that combines natural beauty with cozy elegance.', 210.00, 10, 'PeaceLilyWarmElegancePlant.png', 1),
(20, 'White Anthurium Luxe Plant', 'A luxurious white plant designed to elevate any interior space.', 240.00, 10, 'WhiteAnthuriumLuxePlant.png', 1),
(21, 'Crimson Luxe Box Arrangement', 'A bold red arrangement presented in a luxurious box for a striking gift.', 310.00, 10, 'CrimsonLuxeBoxArrangement.png', 3),
(22, 'Golden Bloom & Coffee Luxe Arrangement', 'A premium floral arrangement paired with coffee for a warm and refined experience.', 565.00, 10, 'GoldenBloomCoffeeLuxeArrangement.png', 3),
(23, 'Blush Treat Gift Box', 'A soft pink floral gift set complemented with sweet chocolate treats.', 198.00, 10, 'BlushTreatGiftBox.png', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`admin_id`),
  ADD UNIQUE KEY `email` (`email`);

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `admin_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

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
