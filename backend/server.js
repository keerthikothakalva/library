const express = require('express');
const cors = require('cors');
const bookRoutes = require('./routes/books');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/books', bookRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});