const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")

router.post("/createBook", BookController.createBook)
router.post("/bookList1", BookController.bookList) 
router.post("/getBooksInYear", BookController.getBooksInYear)
router.post("/getParticularBooks1", BookController.getParticularBooks)
router.post("/getXINRBooks",BookController.getXINRBooks)
router.post("/getRandomBooks1", BookController.getRandomBooks)
module.exports = router;