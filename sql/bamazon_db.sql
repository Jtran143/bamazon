CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	item_id INTEGER AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    deparment VARCHAR(30) NOT NULL,
    price INTEGER NOT NULL,
    stock_quantity INTEGER NOT NULL,
    PRIMARY KEY (id)
);

SELECT * FROM bamazon_db.products;

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("Iphone X", "Electronics", 999, 1);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("TV", "Electronics", 1999, 2);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("Google Home Mini", "Electronics", 30, 2000);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("Speakers", "Electronics", 150, 10);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("Basketball", "Sports", 70, 200);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("SoccerBall", "Sports", 50, 300);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("TennisBalls", "Sports", 3, 10000);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("VolleyBall", "Sports", 30, 450);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("Bat", "Sports", 199, 349);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("BaseBall", "Sports", 20, 235);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("TVREMOTE", "Electronics", 20, 3);

