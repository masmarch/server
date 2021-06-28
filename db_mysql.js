const mysql = require('mysql');

const db =  mysql.createConnection({
    user : "march",
    host : "128.199.69.192",
    password : "fgi012012",
    database: "fitwhey"    
});

module.exports = db;