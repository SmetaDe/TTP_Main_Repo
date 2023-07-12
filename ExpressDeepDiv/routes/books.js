const express = require("express");
const router = express.Router();

// Implement the routes

// GET /books
router.get("/", function (req, res, next) {
  res.send("GET request to /books");
});

// POST /books
router.post("/", function (req, res, next) {
  res.send("POST request to /books");
});

// GET /books/:bookId
// router.get("/:bookId", function (req, res, next) {
//   res.send(`GET request to /books/${req.params.bookId}`);
// });
router.get("/:id", (req, res) => {
    res.send(`GET Book with id ${req.params.id}`);
  });

// PUT /books/:bookId
router.put("/:bookId", function (req, res, next) {
  res.send(`PUT request to /books/${req.params.bookId}`);
});

// DELETE /books/:bookId
router.delete("/:bookId", function (req, res, next) {
  res.send(`DELETE request to /books/${req.params.bookId}`);
});

module.exports = router;