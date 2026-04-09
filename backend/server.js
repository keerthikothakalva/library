require('dotenv').config(); 

const express = require('express');
const app = express();

app.use(express.json());

// routes
const booksRoutes = require('./routes/books');
app.use('/books', booksRoutes);

// server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});