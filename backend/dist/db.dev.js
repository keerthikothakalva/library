"use strict";

var mysql = require('mysql2');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'library'
});
db.connect(function (err) {
  if (err) {
    console.log("DB Error:", err);
  } else {
    console.log("Database Connected");
  }
});
module.exports = db;
//# sourceMappingURL=db.dev.js.map
