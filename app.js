var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var twitter = require('twitter');
//var jquery = require ('jquery')
var routes = require('./routes/index');
var about = require('./routes/about');
//var twitter = require('./twitterCom');

var app = express();

app.locals.points = "100"; //variable that is local to my app (aka a global var)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);
app.use('/about', about);

var client = new twitter({
  consumer_key: 'jEquAN7YYa9NPyDn19J602zgn',
  consumer_secret: '3jh7sQSVkmtqzgjykF4aihNpBDOImpr5vKoX3u8CWVTuO12Yis',
  access_token_key: '1138591364-n4oelTh8j3U87k1zswQnXbyQBAMxeGrQaDh6EL2',
  access_token_secret: 'VU7CMVjY4cTcIY7BD4d2sV6EFr8xTebmxgHBFabA0Ji99'
});

//getInput = function (search, num) {
//  client.get('search/tweets', {q: search, count: num}, function(error, tweets, response){
//    console.log("tweets " + tweets);
//    for (var i = 0 ; i < num ; i ++) {
//      console.log("***************************");
//      console.log(tweets.statuses[i].text);
//      //console.log(response);
//      about.test = tweets.statuses[i].text;
//      console.log("GETINPUT test: " + about.test);
//      return about.test;
//    }
//    console.log("***************************");
//  });
//};

app.use('/about',function(req,res,next){
  var search = req.body.search_bar;
  req.search = search;
  var num = req.body.number_bar;
  var resultType = req.body.resultType;
  //var num    = req.body.number_bar;
  //about.getInput(search, 1);


  client.get('search/tweets', {q: search, count: num, result_type: resultType}, function(error, tweets, response){
    //console.log(tweets);
    console.log("\n\n\n\n");

    for (var i = 0 ; i < num ; i ++) {
      console.log("***************************");
      console.log("Tweet: "+tweets.statuses[i].text);
      //console.log(tweets.statuses[i].source);
      console.log("\nsource: "+ tweets.statuses[i].source);
      console.log("\nHow many times was it retweeted?  "+tweets.statuses[i].retweet_count);
      console.log("How many times was it favourited? "+tweets.statuses[i].favorite_count);
    }
    console.log("***************************");
    console.log("\n\n\n");
    return req.test;
  });

  next()
});

app.post('/about', function (req,res,next) {
  console.log("........");
  res.render('about',{
    title: 'twitSearch',
    search: 'https://twitter.com/search?q='+ req.search,
    test : about.test
  });
  //res.end();
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
