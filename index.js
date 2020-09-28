const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.json())

// creating a connection for  mysql db
var sqlConnection = mysql.createConnection({
    host: "localhost",
    user: "SahilMund",
    password: "17ece032",
    database: "nodeMysql",
    multipleStatements:true
  });

// connecting with the mysql database
sqlConnection.connect((err)=>{
      if (err) throw err
      console.log('Database Connected Successfully.........');
  })


app.get("/", (req, res) => {
      res.send("Server working");
  });
  
// listening to the routes
 const port = process.env.PORT || 5000;
 
 app.listen(port, () => console.log(`Server running on port ${port}...`));


// -------------------------------routers------------------------

/**
//  ? To create a Employee table/schema

 
  CREATE TABLE `employee`(
    `EmpID` int(11) NOT NULL AUTO_INCREMENT,
    `Name` varchar(45) DEFAULT NULL,
    `EmpCode` varchar(45) DEFAULT NULL,
    `Salary` int(11) DEFAULT NULL,
    PRIMARY KEY (`EmpID`))
    ENGINE=INNODB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    
 */


 // ? 1.Read operation
// get all employee details
app.get('/getempdata', (req, res) => {
  sqlConnection.query("SELECT * FROM Employee",  (err, result, fields)=> {
    if (err) throw err;
    res.send(result);
  });
});

// get an employee details
app.get('/getempdata/:id', (req, res) => {
  sqlConnection.query("SELECT * FROM Employee WHERE EmpId=?",[req.params.id],  (err, result, fields)=> {
    if (err) throw err;
    res.send(result);
  });
});


// ? 2. Insert records into the database
app.post('/insertdata', (req, res) => {

    let data = {EmpID: req.body.EmpID, Name: req.body.Name  ,  EmpCode: req.body.EmpCode ,  Salary: req.body.Salary  };
    let sql = "INSERT INTO Employee SET ?";
    sqlConnection.query(sql, data , (err, result,fields)=> {

    if (err) throw err;
    res.send(result);
  });
});



// ? 3. updating a record from the database

app.put('/updatedata/:id', (req, res) => {
 
  let data = {EmpID: req.body.EmpID, Name: req.body.Name  ,  EmpCode: req.body.EmpCode ,  Salary: req.body.Salary  };
  let sql = "UPDATE Employee SET ? WHERE EmpID="+req.params.id;
  sqlConnection.query(sql, data , (err, result,fields)=> {

  if (err) throw err;
  res.send(" records updated successfully");
});
});


// ? 4.Delete an employee id

// delete an employee details
app.delete('/delete/:id', (req, res) => {
  sqlConnection.query("DELETE From Employee WHERE EmpId=?",[req.params.id],  (err, result, fields)=> {
    if (err) throw err;
    res.send('records deleted successfully');
  });
});


// ? To drop the table
app.get('/deleteDB',(req,res)=>{
  sqlConnection.query("DROP TABLE Employee",  (err, result, fields)=> {
    if (err) throw err;
    res.send('Database  droped successfully');
  });
})