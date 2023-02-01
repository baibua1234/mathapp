const mysql = require('mysql')
const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"",
    database:"mathapp"
})
//check error
db.connect(function(err) {
    if(err) {
        return console.error('error' + err.message);
    }
    console.log('Connect to mysql')
})


module.exports = db;