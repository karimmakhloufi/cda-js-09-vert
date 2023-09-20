CREATE TABLE ad
(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	title TEXT NOT NULL,
	description TEXT,
	owner TEXT NOT NULL,
	price INT,
    createdAt TEXT,
    picture TEXT,
    ville TEXT,
    categorie TEXT
);

INSERT INTO ad (title, description, owner, price, ville)
 VALUES
('Boat to sell', 'My Boat is red, working fine.','Boat.seller@gmail.com', 140000, 'Bordeaux'),
 ('Plane to sell', '"My Plane is blue, working fine.', 'Plane.seller@gmail.com', 100000000, 'Lyon'),
 ('Car to sell', 'My Car is red, working fine.','Car.seller@gmail.com', 12000, 'Bordeaux'),
 ('Bed to sell', 'My Computer is orange, working fine.', 'Bed.seller@gmail.com', 2000, 'Paris'),
 ('Computer to sell', 'My Computer is grey, working fine.', 'Computer.seller@gmail.com', 800, 'Lyon'),
 ('iPhone to sell', 'My iPhone 15 pro, working fine.', 'iPhone.seller@gmail.com', 1279, 'Lyon'),
 ('Toy to sell', 'My Toy to sell, very beautifull', 'Toy.seller@gmail.com', 12, 'Lyon'),
 ('Flower to sell', 'My Flower to sell, is red', 'Flower.seller@gmail.com', 4, 'Bordeaux'),
 ('Shoe to sell', 'My Shoe to sell, very practical', 'Shoe.seller@gmail.com', 60, 'Lyon'),
 ('Paint to sell', 'My Paint to sell, very incredible', 'Paint.seller@gmail.com', 559, 'Paris'),
 ('Dog to sell', 'My Dog to sell, very cool', 'Dog.seller@gmail.com', 250, 'Bordeaux'),
 ('Keyboard to sell', 'My Keyboard to sell, very colorful', 'Keyboard.seller@gmail.com', 120, 'Lyon'),
 ('Shoe to sell', 'My Shoe to sell, very practical', 'Shoe.seller@gmail.com', 60, 'Paris'),
 ('Cat to sell', 'My Cat to sell, very usefull', 'Cat.seller@gmail.com', 300, 'Lyon'),
 ('Skateboard to sell', 'My Skateboard to sell, very usefull', 'Skateboard.seller@gmail.com', 20, 'Bordeaux'),
 ('Table to sell', 'My Table to sell, very nice', 'Table.seller@gmail.com', 340, 'Paris'),
 ('Bread to sell', 'My Bread to sell, very good', 'Bread.seller@gmail.com', 1, 'Bordeaux'),
 ('Lamp to sell', 'My Lamp to sell, very grat', 'Lamp.seller@gmail.com', 18, 'Lyon'),
 ('T-shirt to sell', 'My T-shirt to sell, very usefull', 'Tshirt.seller@gmail.com', 80, 'Lyon'),
 ('Pant to sell', 'My Pant to sell, very large', 'Pant.seller@gmail.com', 40, 'Bordeaux'),
 ('Mirror to sell', 'My mirror to sell, very luxuary', 'Mirror.seller@gmail.com', 650, 'Paris')
 ;

-- SELECT * FROM ad;

/* SELECT * FROM ad
WHERE ville Like "Lyon";*/

/*DELETE FROM ad
WHERE price > 40;*/

/*
UPDATE ad
SET price = 0
WHERE createdAt = '01/09$';
*/

/*
SELECT AVG(price) FROM ad
WHERE ville LIKE "Paris";
*/

/* #BONUS#
SELECT ville, AVG(price)
FROM ad
GROUP BY ville;
*/