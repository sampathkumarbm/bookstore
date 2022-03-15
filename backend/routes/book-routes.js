const express = require("express");
const router = express.Router();
const booksController = require("../controllers/books-controllers");

router.get("/books", booksController.getAllBooks);
router.post("/add", booksController.addBook);

router.get("/books/:id", booksController.getById);
router.put("/books/:id", booksController.updateBook);
router.delete("/books/:id", booksController.deleteBook);

module.exports = router;