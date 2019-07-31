-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 31, 2019 at 11:40 PM
-- Server version: 5.7.27-0ubuntu0.19.04.1
-- PHP Version: 7.2.19-0ubuntu0.19.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cafeteria`
--

-- --------------------------------------------------------

--
-- Table structure for table `meal_orders`
--

CREATE TABLE `meal_orders` (
  `order_id` int(11) NOT NULL,
  `meal_name` text NOT NULL,
  `description` text NOT NULL,
  `meal_type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `meal_orders`
--

INSERT INTO `meal_orders` (`order_id`, `meal_name`, `description`, `meal_type`) VALUES
(2, 'foo', 'bar', 'meat'),
(5, 'undefined', 'ss', 'undefined');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `meal_orders`
--
ALTER TABLE `meal_orders`
  ADD PRIMARY KEY (`order_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `meal_orders`
--
ALTER TABLE `meal_orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
