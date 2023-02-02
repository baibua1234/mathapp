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
    database:"mathapp"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
//check error
// db.connect(function(err) {
//     if(err) {
//         return console.error('error' + err.message);
//     }
//     console.log('Connect to mysql')
//     sql="insert into exercise (img,mark) values('next.png','มากกว่า')";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("insert complete"); 
//     }); 

// })


module.exports = mysql;

