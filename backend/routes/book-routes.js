const express = require("express");
const router = express.Router();
const booksController = require("../controllers/books-controllers");

router.get("/books", booksController.getAllBooks);
router.post("/add", booksController.addBook);
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router;