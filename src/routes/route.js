// const express = require('express');
// const router = express.Router();
// const BookController= require("../controllers/bookController")

// router.post("/createBook", BookController.createBook)
// router.post("/bookList1", BookController.bookList) 
// router.post("/getBooksInYear", BookController.getBooksInYear)
// router.post("/getParticularBooks1", BookController.getParticularBooks)
// router.post("/getXINRBooks",BookController.getXINRBooks)
// router.post("/getRandomBooks1", BookController.getRandomBooks)
// module.exports = router;
const express = require('express');
const router = express.Router();
const authorModel= require("../models/authorModel")

const BookController= require("../controllers/bookController");
const bookModel = require('../models/bookModel');
const { Route } = require('express');
const { Router } = require('express');



router.post("/createAuthor", BookController.createAuthor )
router.post("/createBook", BookController.createBook )

router.get("/listOut",BookController.listOut)
router.get("/findAndUpdate",BookController.findAndUpdate)
router.get("/bookByCost",BookController.bookByCost)



module.exports = router;