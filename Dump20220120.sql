-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: localhost    Database: socialmedia
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `liked_post`
--

DROP TABLE IF EXISTS `liked_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `liked_post` (
  `User_ID` int NOT NULL,
  `Post_ID` int NOT NULL,
  PRIMARY KEY (`User_ID`,`Post_ID`),
  KEY `LIKED_POST_FK2` (`Post_ID`),
  CONSTRAINT `LIKED_POST_FK1` FOREIGN KEY (`User_ID`) REFERENCES `user` (`User_ID`),
  CONSTRAINT `LIKED_POST_FK2` FOREIGN KEY (`Post_ID`) REFERENCES `post` (`Post_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `liked_post`
--

LOCK TABLES `liked_post` WRITE;
/*!40000 ALTER TABLE `liked_post` DISABLE KEYS */;
INSERT INTO `liked_post` VALUES (2,1),(3,1),(4,1),(1,2),(2,2),(10,2),(3,3),(10,3),(3,4),(7,4),(2,5),(5,5),(8,5),(9,5),(8,6),(5,7),(7,7),(4,9),(8,9),(9,9),(1,10),(3,10),(4,10),(5,10),(6,10),(8,10),(6,11),(7,11),(1,12),(2,12),(2,13),(4,13),(7,13),(10,14),(10,15),(6,16),(8,16),(1,17),(6,18),(1,19),(7,19),(9,19),(1,20),(3,20),(6,20),(9,20);
/*!40000 ALTER TABLE `liked_post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `Post_ID` int NOT NULL AUTO_INCREMENT,
  `Post_Title` varchar(50) NOT NULL,
  `Post_Description` varchar(200) DEFAULT NULL,
  `Post_image` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`Post_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'Relatable','Walking up and down the aisles for what seems like hours.','https://preview.redd.it/jjvqtw9iapb81.gif?format=mp4&s=e333e78478df813b5b18ecd0905efc8b00ae210c'),(2,'New Job','Just finished my first week','https://preview.redd.it/op4nak4pvpb81.jpg?width=640&crop=smart&auto=webp&s=615dce736df9a82ae1e2136727e440a863a1ffbe'),(3,'New Friend','Happy times','https://preview.redd.it/21ghjyhnjmb81.gif?width=960&format=mp4&s=69ae3f05ee59793703165d1b726159dcc1205f1f'),(4,'Gameboy','Hello old friend','https://i.redd.it/in0kdzuienb81.jpg'),(5,'Dinosaur','Sweet dreams about your loved ones','https://preview.redd.it/rwtgu96btqb81.jpg?width=960&crop=smart&auto=webp&s=13b18d9fb9355b81349568a124955458f0f8d2e3'),(6,'Sked penguin','SpoOOooOOoky','https://preview.redd.it/qcq4ktmgzqb81.jpg?width=960&crop=smart&auto=webp&s=52f3cd201555bf09534b903246df9cd0dd995264'),(7,'Studying','Is this what its supposed to feel like?','https://i.redd.it/600fjw70hqb81.jpg'),(8,'Mother','My mom sees no difference here','https://preview.redd.it/7m3h2v230qb81.jpg?width=640&crop=smart&auto=webp&s=9a6617330a192b1801c1af857233b28608d48b19'),(9,'Buddy','You and me, we are friends now!','https://preview.redd.it/iwxtvicntqb81.gif?width=640&format=mp4&s=6cebc45c632020c2629dbf39be4492d55e6dce35'),(10,'Love through Food','Buying food is a way to show love right.','https://preview.redd.it/n649wifg95041.jpg?width=960&crop=smart&auto=webp&s=0f6d7b4b57ce051d3d5a6ffce8a11e1ea0a5ebd9'),(11,'Rhino','Less Threatening','https://preview.redd.it/tx6biuq81vb81.jpg?width=960&crop=smart&auto=webp&s=764d0e4b5c29d8abd36df97e842c817a10b9d1e8'),(12,'Karaoke','Sing along time','https://i.redd.it/491l4somvtb81.jpg'),(13,'Halo to Valo','Enough to make a grown man cry','https://preview.redd.it/e85me6m6fvb81.png?width=640&crop=smart&auto=webp&s=ca9622be8caf9cb187fdcb1ca15e6cdafd6ba2d6'),(14,'Electrical Engineering','A wizard for sure','https://preview.redd.it/ii4eqom4xpa81.png?width=640&crop=smart&auto=webp&s=dc9af81b67c4113cd9d2bf1a6f1400b4028fd548'),(15,'Christmas','A wholesome family','https://i.redd.it/xazlesb3c7981.jpg'),(16,'Fashion','You are too hot!','https://preview.redd.it/4tfwjsvfxh881.jpg?width=960&crop=smart&auto=webp&s=7b4eddb5b50d03bf354ebeeda4f9aa90aa582d37'),(17,'Listening Ear','I can do this all day','https://preview.redd.it/se55p3jvfd781.gif?format=mp4&s=261a874c2f4fbbc4383aa692b931531afdaf660f'),(18,'Gaming','True hidden gems','https://preview.redd.it/mf1ud3kh3f881.gif?format=mp4&s=c7cb20547c4794a2d93e55053fcbbe041d7f6c44'),(19,'Sushi','Amazing Chef','https://i.redd.it/q5wt8cj1jw881.jpg'),(20,'Gym Bros','Fitness Goal','https://preview.redd.it/otu1l944db981.png?width=960&crop=smart&auto=webp&s=7edef7c548b567127e5be80de9ae24d1499d5ab3');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_comment`
--

DROP TABLE IF EXISTS `post_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post_comment` (
  `Comment_ID` int NOT NULL AUTO_INCREMENT,
  `User_ID` int NOT NULL,
  `Post_ID` int NOT NULL,
  `Comment` text,
  PRIMARY KEY (`Comment_ID`),
  KEY `POST_COMMENT_FK1` (`User_ID`),
  KEY `POST_COMMENT_FK2` (`Post_ID`),
  CONSTRAINT `POST_COMMENT_FK1` FOREIGN KEY (`User_ID`) REFERENCES `user` (`User_ID`),
  CONSTRAINT `POST_COMMENT_FK2` FOREIGN KEY (`Post_ID`) REFERENCES `post` (`Post_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_comment`
--

LOCK TABLES `post_comment` WRITE;
/*!40000 ALTER TABLE `post_comment` DISABLE KEYS */;
INSERT INTO `post_comment` VALUES (1,4,19,'leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio'),(2,10,9,'amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien'),(3,10,10,'montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis'),(4,5,14,'rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis'),(5,3,9,'nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer'),(6,10,19,'ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum'),(7,8,9,'ut at dolor quis odio consequat varius integer ac leo pellentesque'),(8,4,16,'in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum'),(9,6,20,'in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum'),(10,2,3,'non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse'),(11,3,2,'morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum'),(12,4,16,'vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget'),(13,3,2,'ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus'),(14,3,4,'non mauris morbi non lectus aliquam sit amet diam in magna'),(15,5,2,'morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique'),(16,4,1,'non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt'),(17,4,18,'ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem'),(18,4,15,'quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum'),(19,3,20,'justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae'),(20,4,9,'feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam'),(21,9,7,'sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed'),(22,7,3,'placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan'),(23,10,6,'luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam'),(24,7,16,'in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum'),(25,7,17,'volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim'),(26,3,10,'molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas'),(27,4,15,'pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla'),(28,5,4,'in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem'),(29,5,2,'non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel'),(30,6,17,'massa donec dapibus duis at velit eu est congue elementum in hac'),(31,3,8,'dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie'),(32,4,8,'sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed'),(33,8,18,'odio cras mi pede malesuada in imperdiet et commodo vulputate justo in'),(34,8,19,'pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus'),(35,1,7,'rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus'),(36,10,5,'volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh'),(37,1,10,'cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel'),(38,3,8,'ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla'),(39,1,14,'at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec'),(40,5,4,'consequat morbi a ipsum integer a nibh in quis justo');
/*!40000 ALTER TABLE `post_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `User_ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  `Age` int DEFAULT NULL,
  `Birthday` date DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Phone` varchar(50) DEFAULT NULL,
  `City` varchar(50) DEFAULT NULL,
  `Country` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`User_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Brose McCreery',22,'1993-03-01','bmccreery0@bloomberg.com','(858) 1604103','Gujba','Nigeria'),(2,'Darla Joret',23,'1996-09-08','djoret1@latimes.com','(859) 9667080','Zoumaping','China'),(3,'Marcia Ivasyushkin',16,'2000-06-17','mivasyushkin2@nydailynews.com','(412) 6782559','Três de Maio','Brazil'),(4,'Sherlock Ryde',22,'1991-06-08','sryde3@ed.gov','(190) 6466427','Baroh','Indonesia'),(5,'Quintus Mahaddy',22,'1996-08-26','qmahaddy4@123-reg.co.uk','(567) 3310071','Cruz das Almas','Brazil'),(6,'Garwood Dumingos',18,'1999-07-26','gdumingos5@wufoo.com','(779) 6222613','Tabuaço','Portugal'),(7,'Laural Wallach',30,'1998-01-11','lwallach6@github.com','(283) 8439630','Périgueux','France'),(8,'Christen Purchon',28,'1992-04-24','cpurchon7@umich.edu','(872) 8312472','Przasnysz','Poland'),(9,'Eunice Kirk',19,'1992-10-06','ekirk8@hatena.ne.jp','(847) 8038365','Bassar','Togo'),(10,'Kessia Landeg',28,'1990-04-06','klandeg9@bluehost.com','(280) 8616457','Bratsigovo','Bulgaria');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-20 15:09:36
