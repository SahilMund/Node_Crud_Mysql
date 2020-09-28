
// ! Here we learn about mysql in nodejs

const mysql = require('mysql');

// creating a connection with mysql db
var con = mysql.createConnection({
    host: "localhost",
    user: "SahilMund",
    password: "17ece032",
    database: "mydb"
  });
  

/** 
* ? create a new database mydb

var con = mysql.createConnection({
    host: "localhost",
    user: "SahilMund",
    password: "17ece032"
    
  });
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydb", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });

*/

// ? create schema for the database mydb
/** 
con.connect((err)=> {
  if (err) throw err;
  console.log("mysql database Connected!");
  var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  con.query(sql,  (err, result) =>{
    if (err) throw err;
    console.log("Table created");
  });
});
*/

// ? insert data into database
/** 
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('infosys', 'Banglore')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
*/

// ? Read data from the database
// The third parameter of the callback function is an array containing information about each field in the result.
/** 
con.connect((err)=> {
  if (err) throw err;
  con.query("SELECT * FROM customers",  (err, result, fields)=> {
    if (err) throw err;
    console.log(result);
  });
});
*/

// ? Sorting the data by name and get the data
/** 
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
*/

// ? updating specific  records of the database
/** 
con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE customers SET address = 'Hyderabad' WHERE address = 'Banglore'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });

  console.log("after updating the database :");

  con.query("SELECT * FROM customers",  (err, result, fields)=> {
    if (err) throw err;
    console.log(result);
  });
});
*/

// ? Deleting specific records from the database
/**
con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM customers WHERE address = 'New Delhi'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});
 */

//  ? Drop the entire table
/** 
con.connect(function(err) {
  if (err) throw err;
  var sql = "DROP TABLE customers";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted successfully");
  });
});
*/