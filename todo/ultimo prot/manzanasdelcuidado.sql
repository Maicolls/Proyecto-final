-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-12-2023 a las 02:54:26
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `manzanasdelcuidado`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `manzanas`
--

CREATE TABLE `manzanas` (
  `id_manzanas` int(11) NOT NULL,
  `nombre_m` varchar(30) DEFAULT NULL,
  `localidad_m` varchar(30) DEFAULT NULL,
  `direccion_m` varchar(50) DEFAULT NULL,
  `fk_municipios` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `manzana_servicios`
--

CREATE TABLE `manzana_servicios` (
  `fk_manzana` int(11) DEFAULT NULL,
  `fk_servicios` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `municipios`
--

CREATE TABLE `municipios` (
  `id_municipios` int(11) NOT NULL,
  `nombre_mun` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `propuestas`
--

CREATE TABLE `propuestas` (
  `id_propuestas` int(11) NOT NULL,
  `man_pro` varchar(30) DEFAULT NULL,
  `ser_pro` varchar(30) DEFAULT NULL,
  `fecha_pro` date DEFAULT NULL,
  `fk_docmujer` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios`
--

CREATE TABLE `servicios` (
  `id_servicios` int(11) NOT NULL,
  `nombre_s` varchar(30) DEFAULT NULL,
  `descripcion_s` varchar(100) DEFAULT NULL,
  `tipo_s` varchar(50) DEFAULT NULL,
  `categoria_s` int(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio_mujeres`
--

CREATE TABLE `servicio_mujeres` (
  `fk_servicio` int(11) DEFAULT NULL,
  `fk_mujer` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `tipodedoc_mj` varchar(30) DEFAULT NULL,
  `nombre_mj` varchar(30) DEFAULT NULL,
  `apellido_mj` varchar(30) DEFAULT NULL,
  `telefono_mj` varchar(20) DEFAULT NULL,
  `correo_mj` varchar(50) DEFAULT NULL,
  `contraseña_mj` varchar(40) DEFAULT NULL,
  `ciudad_mj` varchar(20) DEFAULT NULL,
  `direccion_mj` varchar(50) DEFAULT NULL,
  `ocupacion_mj` varchar(40) DEFAULT NULL,
  `rol_mj` varchar(40) DEFAULT 'Usuario'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `manzanas`
--
ALTER TABLE `manzanas`
  ADD PRIMARY KEY (`id_manzanas`),
  ADD KEY `fk_municipios` (`fk_municipios`);

--
-- Indices de la tabla `manzana_servicios`
--
ALTER TABLE `manzana_servicios`
  ADD KEY `fk_manzana` (`fk_manzana`),
  ADD KEY `fk_servicios2` (`fk_servicios`);

--
-- Indices de la tabla `municipios`
--
ALTER TABLE `municipios`
  ADD PRIMARY KEY (`id_municipios`);

--
-- Indices de la tabla `propuestas`
--
ALTER TABLE `propuestas`
  ADD PRIMARY KEY (`id_propuestas`),
  ADD KEY `fk_docmujer` (`fk_docmujer`);

--
-- Indices de la tabla `servicios`
--
ALTER TABLE `servicios`
  ADD PRIMARY KEY (`id_servicios`);

--
-- Indices de la tabla `servicio_mujeres`
--
ALTER TABLE `servicio_mujeres`
  ADD KEY `fk_servicios3` (`fk_servicio`),
  ADD KEY `fk_mujer2` (`fk_mujer`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `manzanas`
--
ALTER TABLE `manzanas`
  MODIFY `id_manzanas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `propuestas`
--
ALTER TABLE `propuestas`
  MODIFY `id_propuestas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `servicios`
--
ALTER TABLE `servicios`
  MODIFY `id_servicios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `manzanas`
--
ALTER TABLE `manzanas`
  ADD CONSTRAINT `fk_municipios` FOREIGN KEY (`fk_municipios`) REFERENCES `municipios` (`id_municipios`);

--
-- Filtros para la tabla `manzana_servicios`
--
ALTER TABLE `manzana_servicios`
  ADD CONSTRAINT `fk_manzana` FOREIGN KEY (`fk_manzana`) REFERENCES `manzanas` (`id_manzanas`),
  ADD CONSTRAINT `fk_servicios2` FOREIGN KEY (`fk_servicios`) REFERENCES `servicios` (`id_servicios`);

--
-- Filtros para la tabla `propuestas`
--
ALTER TABLE `propuestas`
  ADD CONSTRAINT `fk_docmujer` FOREIGN KEY (`fk_docmujer`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `servicio_mujeres`
--
ALTER TABLE `servicio_mujeres`
  ADD CONSTRAINT `fk_mujer` FOREIGN KEY (`fk_mujer`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `fk_servicios3` FOREIGN KEY (`fk_servicio`) REFERENCES `servicios` (`id_servicios`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
