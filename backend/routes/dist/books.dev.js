"use strict";

var express = require('express');

var router = express.Router();

var db = require('../db');

router.get('/', function (req, res) {
  db.query('SELECT * FROM books', function (err, result) {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});
router.post('/borrow/:id', function (req, res) {
  var id = req.params.id;
  db.query('SELECT available_copies FROM books WHERE id = ?', [id], function (err, result) {
    if (err) return res.status(500).send(err);
    var book = result[0];

    if (!book || book.available_copies <= 0) {
      return res.status(400).send("No copies available");
    }

    db.query('UPDATE books SET available_copies = available_copies - 1 WHERE id = ?', [id], function (err2) {
      if (err2) return res.status(500).send(err2);
      res.send("Book borrowed");
    });
  });
});
router.post('/return/:id', function (req, res) {
  var id = req.params.id;
  db.query('SELECT available_copies, total_copies FROM books WHERE id = ?', [id], function (err, result) {
    if (err) return res.status(500).send(err);
    var book = result[0];

    if (!book || book.available_copies >= book.total_copies) {
      return res.status(400).send("All books already returned");
    }

    db.query('UPDATE books SET available_copies = available_copies + 1 WHERE id = ?', [id], function (err2) {
      if (err2) return res.status(500).send(err2);
      res.send("Book returned");
    });
  });
});
module.exports = router;
//# sourceMappingURL=books.dev.js.map
