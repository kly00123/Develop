-- MySQL dump 10.16  Distrib 10.1.41-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: self_chess
-- ------------------------------------------------------
-- Server version	10.1.41-MariaDB-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `equip_compose`
--

DROP TABLE IF EXISTS `equip_compose`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `equip_compose` (
  `equip_name` varchar(15) NOT NULL,
  `equip_require` varchar(15) NOT NULL,
  `equip_explain` text NOT NULL,
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equip_compose`
--

LOCK TABLES `equip_compose` WRITE;
/*!40000 ALTER TABLE `equip_compose` DISABLE KEYS */;
INSERT INTO `equip_compose` VALUES ('swords','demon dege+reli','Attack power increased by 100',0);
/*!40000 ALTER TABLE `equip_compose` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hero_fetters`
--

DROP TABLE IF EXISTS `hero_fetters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hero_fetters` (
  `fetters_name` varchar(15) NOT NULL,
  `fetters_reuire_hero_name` varchar(15) NOT NULL,
  `fetters_result_1` text NOT NULL,
  `fetters_result_2` text NOT NULL,
  `fetters_result_3` text,
  `fetters_keep_time` int(11) DEFAULT NULL,
  `fetters_probablity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hero_fetters`
--

LOCK TABLES `hero_fetters` WRITE;
/*!40000 ALTER TABLE `hero_fetters` DISABLE KEYS */;
INSERT INTO `hero_fetters` VALUES ('sandstorm','SF,TA,SK','There are three at the same time','There are four at the same time','There are five at the same time',5,45);
/*!40000 ALTER TABLE `hero_fetters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hero_info`
--

DROP TABLE IF EXISTS `hero_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hero_info` (
  `id` int(11) NOT NULL,
  `hero_name` varchar(15) NOT NULL,
  `lvl_1_hp` int(11) NOT NULL,
  `lvl_2_hp` int(11) NOT NULL,
  `lvl_3_hp` int(11) NOT NULL,
  `lvl_1_mp` int(11) NOT NULL,
  `lvl_2_mp` int(11) NOT NULL,
  `lvl_3_mp` int(11) NOT NULL,
  `hero_id` int(11) DEFAULT NULL,
  `hero_attack_1` int(11) DEFAULT NULL,
  `hero_attack_2` int(11) DEFAULT NULL,
  `hero_attack_3` int(11) DEFAULT NULL,
  `hero_defence_1` int(11) DEFAULT NULL,
  `hero_defence_2` int(11) DEFAULT NULL,
  `hero_defence_3` int(11) DEFAULT NULL,
  `race` varchar(15) DEFAULT NULL,
  `pay` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hero_info`
--

LOCK TABLES `hero_info` WRITE;
/*!40000 ALTER TABLE `hero_info` DISABLE KEYS */;
INSERT INTO `hero_info` VALUES (1,'SF',100,200,300,100,100,100,1,NULL,NULL,NULL,NULL,NULL,NULL,'evil',0);
/*!40000 ALTER TABLE `hero_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hero_skill`
--

DROP TABLE IF EXISTS `hero_skill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hero_skill` (
  `id` int(11) NOT NULL,
  `skill_name` varchar(15) NOT NULL,
  `skill_scope` int(11) NOT NULL,
  `skill_damage_1` int(11) NOT NULL,
  `skill_damage_2` int(11) NOT NULL,
  `skill_damage_3` int(11) NOT NULL,
  `skill_cd` int(11) NOT NULL,
  `skill_explain` text,
  `hero_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hero_skill`
--

LOCK TABLES `hero_skill` WRITE;
/*!40000 ALTER TABLE `hero_skill` DISABLE KEYS */;
INSERT INTO `hero_skill` VALUES (1,'taunt',300,100,200,300,15,NULL,1);
/*!40000 ALTER TABLE `hero_skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `race`
--

DROP TABLE IF EXISTS `race`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `race` (
  `race_name` varchar(15) NOT NULL,
  `race_effct` varchar(15) NOT NULL,
  `race_explain` text NOT NULL,
  `race_fetters_1` text NOT NULL,
  `race_fetters_2` text,
  `race_fetters_3` text,
  `id` int(11) NOT NULL,
  `race_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `race`
--

LOCK TABLES `race` WRITE;
/*!40000 ALTER TABLE `race` DISABLE KEYS */;
INSERT INTO `race` VALUES ('evil','Friendly Unit','Powerful forces from different dimensions','Attack power increased by 40%','Attack power increased by 50%',NULL,0,NULL);
/*!40000 ALTER TABLE `race` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team_query`
--

DROP TABLE IF EXISTS `team_query`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `team_query` (
  `team_name` varchar(15) NOT NULL,
  `team_require` text NOT NULL,
  `team_explain` text NOT NULL,
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team_query`
--

LOCK TABLES `team_query` WRITE;
/*!40000 ALTER TABLE `team_query` DISABLE KEYS */;
INSERT INTO `team_query` VALUES ('Necromancy hunt','three hunter and three ghost','It is easy to collapse in the early stage and has a high output after forming',0);
/*!40000 ALTER TABLE `team_query` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-20  9:56:24
