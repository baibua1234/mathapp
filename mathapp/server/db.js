// const mysql = require('mysql')
// const db = mysql.createConnection({
//     host:"localhost",
//     user: "root",
//     password:"",
//     database:"mathapp"
// })

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mathapp"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
});

})


module.exports = mysql;

