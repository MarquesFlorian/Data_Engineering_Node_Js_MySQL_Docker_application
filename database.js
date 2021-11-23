const mysql = require("mysql2");

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: "root",
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE
}); 

const promise = pool.promise();

module.exports = promise;