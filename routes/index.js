var express = require('express');
var router = express.Router();

var twit = require('../twitterdata.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Welcome to twitSearch',

  });
});

module.exports = router;
