"use strict";

var express = require('express');

var router = express.Router();

var controller = require('../controllers/booksController');

router.get('/', controller.getBooks);
router.post('/borrow/:id', controller.borrowBook);
router.post('/return/:id', controller.returnBook);
module.exports = router;
//# sourceMappingURL=books.dev.js.map
