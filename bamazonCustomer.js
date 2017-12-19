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

//prompt user product ID they want to buy

var userPrompt = function() {
  inquirer
    .prompt ([{
      name: "item_id",
      type: "input",
      message: "What item ID would you like to purchase?",
    }, {
      name: "Quantity",
      type: "input",
      message: "How many would you like to purchase?",git 
    }  
    .then(function(answer) {
      connection.query("SELECT * FROM products", {product: answer.item_id }, function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log("Total cost: " + answer.Quantity + " /n "
        }
        var idchosen = answer.item_id;
        var chosenItem = res.idchosen;
        var quantity = anwer.Quantity;




      });
    });
}


 
connection.end();






//prompt for quantity

//then check if quantity is in stock
    // log insufficienty quantity if not

//if stock does have product 
    //update sql database to reflect remaining

    //show total cost to customer for item purchased

