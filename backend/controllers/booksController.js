const db = require('../db');

// Get all books
exports.getBooks = (req, res) => {
  db.query("SELECT * FROM books", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};

// Borrow book
exports.borrowBook = (req, res) => {
  const id = req.params.id;

  db.query("SELECT available_copies FROM books WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).send(err);

    if (result[0].available_copies <= 0) {
      return res.status(400).json({ message: "No copies available" });
    }

    db.query("UPDATE books SET available_copies = available_copies - 1 WHERE id=?", [id]);
    db.query("INSERT INTO transactions (book_id, type) VALUES (?, 'borrow')", [id]);

    res.json({ message: "Book borrowed" });
  });
};

// Return book
exports.returnBook = (req, res) => {
  const id = req.params.id;

  db.query("UPDATE books SET available_copies = available_copies + 1 WHERE id=?", [id]);
  db.query("INSERT INTO transactions (book_id, type) VALUES (?, 'return')", [id]);

  res.json({ message: "Book returned" });
};