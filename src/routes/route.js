
const express = require('express');
const router = express.Router();
const authorModel= require("../models/authorModel")
const BookController= require("../controllers/bookController");
const bookModel = require('../models/bookModel');
const { Route } = require('express');
const { Router } = require('express');



router.post("/createAuthor", BookController.createAuthor )
router.get("/authorId",BookController.authorId )
router.post("/createBook1", BookController.createBook1 )
router.post("/createPublisher",BookController.createPublisher)
router.put("/updateBookCover",BookController.updateBookCover)




module.exports = router;