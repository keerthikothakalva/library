"use strict";

var express = require('express');

var cors = require('cors');

var bookRoutes = require('./routes/books');

var app = express();
app.use(cors());
app.use(express.json());
app.use('/books', bookRoutes);
app.listen(5000, function () {
  console.log("Server running on http://localhost:5000");
});
//# sourceMappingURL=server.dev.js.map
