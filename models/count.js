const db = require("../database");

// If the table doesn't exist, create if at the starting
!async function createTable() {
    const tableQuery = `CREATE TABLE IF NOT EXISTS counts (id INT PRIMARY KEY AUTO_INCREMENT, information VARCHAR(255))`;
    await db.query(tableQuery);    
}();

exports.count = async function () {
    const res = await db.query("SELECT COUNT(*) FROM counts");
    return res[0];
}

exports.increment = async function () {
    await db.query("INSERT INTO counts(information) VALUES (?)", ["information"]);
}
