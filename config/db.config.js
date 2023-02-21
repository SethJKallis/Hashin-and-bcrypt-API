const mysql = require('mysql2');
require('dotenv').config();

let sql = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DBPORT,
    multipleStatements: true
});

module.exports = sql;