"use strict";

var mysql = require('mysql2');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'SQL26',
  database: 'library'
});
db.connect(function (err) {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL");
  }
});
module.exports = db;
//# sourceMappingURL=db.dev.js.map
