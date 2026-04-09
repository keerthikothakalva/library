const express = require('express');
const router = express.Router();
const controller = require('../controllers/booksController');

router.get('/', controller.getBooks);
router.post('/borrow/:id', controller.borrowBook);
router.post('/return/:id', controller.returnBook);

module.exports = router;