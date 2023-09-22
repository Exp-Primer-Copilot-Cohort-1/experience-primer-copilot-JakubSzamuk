// Create web server

var express = require('express');
var router = express.Router();

var Comment = require('../models/Comment.js');

// GET all comments
router.get('/', function(req, res, next) {
    Comment.find(function (err, comments) {
        if (err) return next(err);
        res.json(comments);
    });
})