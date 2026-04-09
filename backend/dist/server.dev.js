"use strict";

require('dotenv').config();

var express = require('express');

var app = express();
app.use(express.json()); // routes

var booksRoutes = require('./routes/books');

app.use('/books', booksRoutes); // server start

var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log("Server running on port ".concat(PORT));
});
//# sourceMappingURL=server.dev.js.map
