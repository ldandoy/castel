-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  mer. 18 juil. 2018 à 12:42
-- Version du serveur :  10.1.32-MariaDB
-- Version de PHP :  5.6.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `castel`
--

-- --------------------------------------------------------

--
-- Structure de la table `buildings`
--

CREATE TABLE `buildings` (
  `id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL,
  `wood_needed` int(11) NOT NULL DEFAULT '0',
  `gold_needed` int(11) NOT NULL DEFAULT '0',
  `stone_needed` int(11) NOT NULL DEFAULT '0',
  `pop_need` int(11) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `buildings`
--

INSERT INTO `buildings` (`id`, `label`, `wood_needed`, `gold_needed`, `stone_needed`, `pop_need`, `created_at`, `updated_at`) VALUES
(1, 'Palais', 0, 0, 0, 0, '2018-07-13 00:00:00', NULL),
(2, 'Grenier', 30, 5, 80, 10, '2018-07-13 00:00:00', NULL),
(3, 'Ferme', 50, 10, 30, 0, '2018-07-17 00:00:00', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `castels`
--

CREATE TABLE `castels` (
  `id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `points` int(11) NOT NULL DEFAULT '0',
  `wood` int(11) NOT NULL DEFAULT '0',
  `gold` int(11) NOT NULL DEFAULT '0',
  `stone` int(11) NOT NULL DEFAULT '0',
  `pop` int(11) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `castels`
--

INSERT INTO `castels` (`id`, `label`, `user_id`, `points`, `wood`, `gold`, `stone`, `pop`, `created_at`, `updated_at`) VALUES
(1, 'Test castel', 1, 20, 0, 0, 0, 0, '2018-07-12 00:00:00', NULL),
(2, 'Test Castel 2', 26, 100, 0, 0, 0, 0, '2018-07-13 00:00:00', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `castels_buildings`
--

CREATE TABLE `castels_buildings` (
  `id` int(11) NOT NULL,
  `castel_id` int(11) NOT NULL,
  `building_id` int(11) NOT NULL,
  `level` int(11) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `castels_buildings`
--

INSERT INTO `castels_buildings` (`id`, `castel_id`, `building_id`, `level`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 0, '2018-07-13 00:00:00', NULL),
(2, 1, 3, 2, '0000-00-00 00:00:00', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `castels_unities`
--

CREATE TABLE `castels_unities` (
  `id` int(11) NOT NULL,
  `unity_id` int(11) NOT NULL,
  `castel_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `castels_unities`
--

INSERT INTO `castels_unities` (`id`, `unity_id`, `castel_id`, `quantity`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 20, '2018-07-17 15:52:19', NULL),
(2, 2, 1, 5, '2018-07-17 15:52:29', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `unities`
--

CREATE TABLE `unities` (
  `id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL,
  `strength` int(11) NOT NULL DEFAULT '0',
  `defense` int(11) NOT NULL DEFAULT '0',
  `pop` int(11) NOT NULL DEFAULT '0',
  `wood_needed` int(11) NOT NULL DEFAULT '0',
  `gold_needed` int(11) NOT NULL DEFAULT '0',
  `stone_needed` int(11) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `unities`
--

INSERT INTO `unities` (`id`, `label`, `strength`, `defense`, `pop`, `wood_needed`, `gold_needed`, `stone_needed`, `created_at`, `updated_at`) VALUES
(1, 'Guérrier', 5, 5, 1, 5, 5, 5, '2018-07-17 12:31:00', NULL),
(2, 'Chevalier', 10, 10, 3, 10, 8, 15, '2018-07-17 13:38:00', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `birthday` datetime DEFAULT NULL,
  `gender` enum('','Homme','Femme','Autre') NOT NULL DEFAULT '',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `username`, `password`, `birthday`, `gender`, `created_at`, `updated_at`) VALUES
(1, NULL, NULL, 'ldandoy@gmail.com', 'test', '1234', NULL, '', '2018-07-10 14:49:01', '2018-07-10 14:49:01'),
(10, NULL, NULL, 'ldandoy1@gmail.com', 'Test', '12345', NULL, '', '2018-07-10 17:52:20', '2018-07-10 17:52:20'),
(26, 'test', NULL, 'test', 'test', 'test', NULL, '', '2018-07-12 13:50:06', '2018-07-12 13:50:06');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `buildings`
--
ALTER TABLE `buildings`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `castels`
--
ALTER TABLE `castels`
  ADD PRIMARY KEY (`id`),
  ADD KEY `castels_ibfk_1` (`user_id`);

--
-- Index pour la table `castels_buildings`
--
ALTER TABLE `castels_buildings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `castel_id` (`castel_id`),
  ADD KEY `building_id` (`building_id`);

--
-- Index pour la table `castels_unities`
--
ALTER TABLE `castels_unities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `unity_id` (`unity_id`),
  ADD KEY `castel_id` (`castel_id`);

--
-- Index pour la table `unities`
--
ALTER TABLE `unities`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `buildings`
--
ALTER TABLE `buildings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `castels`
--
ALTER TABLE `castels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `castels_buildings`
--
ALTER TABLE `castels_buildings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `castels_unities`
--
ALTER TABLE `castels_unities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `unities`
--
ALTER TABLE `unities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `castels`
--
ALTER TABLE `castels`
  ADD CONSTRAINT `castels_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `castels_buildings`
--
ALTER TABLE `castels_buildings`
  ADD CONSTRAINT `castels_buildings_ibfk_1` FOREIGN KEY (`castel_id`) REFERENCES `castels` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `castels_buildings_ibfk_2` FOREIGN KEY (`building_id`) REFERENCES `buildings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `castels_unities`
--
ALTER TABLE `castels_unities`
  ADD CONSTRAINT `castels_unities_ibfk_1` FOREIGN KEY (`castel_id`) REFERENCES `castels` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `castels_unities_ibfk_2` FOREIGN KEY (`unity_id`) REFERENCES `unities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
