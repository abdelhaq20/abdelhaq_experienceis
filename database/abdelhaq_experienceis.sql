-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-02-2024 a las 13:57:17
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `experienceis`
--
CREATE DATABASE IF NOT EXISTS `abdelhaq_experienceis` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `abdelhaq_experienceis`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `surname1` varchar(250) NOT NULL,
  `surname2` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `name`, `surname1`, `surname2`, `email`) VALUES
(1, 'abdelhaq', 'achrourou', '', 'abdelhaqdillen@gmail.com'),
(2, 'admin2', 'admin2', 'admin2', 'admin2@yopmail.com'),
(3, 'admin3', 'admin3', 'admin3', 'admin3@yopmail.com'),
(4, 'user4', 'surname4_1', 'surname4', 'user4@yopmail.com'),
(5, 'user5', 'surname5_1', 'surname5', 'user5@yopmail.com'),
(6, 'user6', 'surname6_1', 'surname6', 'user6@yopmail.com'),
(7, 'user7', 'surname7_1', 'surname7', 'user7@yopmail.com'),
(8, 'user8', 'surname8_1', 'surname8', 'user8@yopmail.com'),
(10, 'user9', 'user9', '', 'user9@yopmail.com'),
(11, 'user10', 'user10', '', 'user10@yopmail.com'),
(12, 'user11', 'user11', '', 'user11@yopmail.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
