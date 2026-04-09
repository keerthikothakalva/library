"use strict";

var mysql = require('mysql2');

var connection = mysql.createConnection(process.env.MYSQL_URL);
connection.connect(function (err) {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to DB");
  }
});
module.exports = connection;
//# sourceMappingURL=db.dev.js.map
