var express = require('express');
var fs = require('fs');
var router = express.Router();
var twitter = require('twitter');


router.get('/', function(req, res, next) {
    res.render('about', {
        title: 'Twitter Talk',
        search: 'https://twitter.com/search?q='+ req.body.search_bar
    });
});

module.exports = router;


