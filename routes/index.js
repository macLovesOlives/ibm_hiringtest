var express = require('express');
var router = express.Router();
var emoji = require('node-emoji');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Welcome to twitSearch',
    emoji: emoji

  });
});

module.exports = router;
