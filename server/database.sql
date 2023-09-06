SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `customers` (
  `customer_id` int(11) NOT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `message` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `orderdetails` (
  `order_detail_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `total_price` decimal(10,2) DEFAULT NULL,
  `total_discount` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `discount_price` decimal(10,2) DEFAULT NULL,
  `rating` float DEFAULT NULL,
  `info` text DEFAULT NULL,
  `product_description` text DEFAULT NULL,
  `additional_info` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `products` (`product_id`, `category`, `image`, `product_name`, `price`, `discount_price`, `rating`, `info`, `product_description`, `additional_info`) VALUES
(1, 'Vegetable', 'calabrese-broccoli.png', 'Calabrese broccoli', '20.00', '13.00', 5, 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.', 'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.', 'A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.'),
(2, 'Fresh', 'banana.png', 'Fresh banana fruites', '20.00', '14.00', 5, 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.', 'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.', 'A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.'),
(3, 'Millets', 'pistachios.png', 'Health Pistachios', '20.00', '15.00', 5, 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.', 'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.', 'A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.'),
(4, 'Vegetable', 'tomato.png', 'Vegan red tomato', '20.00', '17.00', 5, 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.', 'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.', 'A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.'),
(5, 'Health', 'mung-bean.png', 'Mung bean', '20.00', '11.00', 5, 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.', 'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.', 'A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.'),
(6, 'Nuts', 'hazelnut.png', 'Brown hazelnut', '20.00', '12.00', 5, 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.', 'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.', 'A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.'),
(7, 'Fresh', 'eggs.png', 'Eggs', '20.00', '17.00', 5, 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.', 'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.', 'A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.'),
(8, 'Fresh', 'bread.png', 'Zelco suji elaichi rusk', '20.00', '15.00', 5, 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.', 'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.', 'A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.'),
(9, 'Health', 'zucchini-zebra.png', 'Zucchini zebra', '20.00', '11.00', 5, 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.', 'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.', 'A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.'),
(10, 'Nuts', 'cashew.png', 'Cashew', '20.00', '12.00', 5, 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.', 'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.', 'A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.'),
(11, 'Fresh', 'corn.png', 'Fresh corn', '20.00', '17.00', 5, 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.', 'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.', 'A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.'),
(12, 'Fresh', 'almonds.png', 'Organick almonds', '15.00', NULL, 5, 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.', 'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.', 'A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.'),
(13, 'Vegetable', 'broccoli.png', 'Broccoli', '11.00', NULL, 5, 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.', 'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.', 'A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.'),
(14, 'Vegetable', 'zucchini.png', 'Zucchini', '12.00', NULL, 5, 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.', 'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.', 'A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.'),
(15, 'Vegetable', 'onion.png', 'Onion', '17.00', NULL, 5, 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.', 'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.', 'A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.'),
(16, 'Vegetable', 'cabbage.png', 'Cabbage', '17.00', NULL, 5, 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.', 'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.', 'A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.');


ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`);

ALTER TABLE `orderdetails`
  ADD PRIMARY KEY (`order_detail_id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `customer_id` (`customer_id`);

ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);


ALTER TABLE `customers`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `orderdetails`
  MODIFY `order_detail_id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;


ALTER TABLE `orderdetails`
  ADD CONSTRAINT `orderdetails_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `orderdetails_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
