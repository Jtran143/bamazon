//require packages
require("console.table");
var mysql = require('mysql');
var inquirer = require("inquirer");


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'bamazon_db',
  port : '3307'
});

connection.connect();
 
connection.query('SELECT * FROM products', function (error, results, fields) {
  if (error) throw error;
  console.table(results);
});

 
connection.end();




//prompt user product ID

//prompt for quantity

//then check if quantity is in stock
    // log insufficienty quantity if not

//if stock does have product 
    //update sql database to reflect remaining

    //show total cost to customer for item purchased

