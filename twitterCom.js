/**
 * Created by Mackenzie on 3/11/2016.
 */
var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'jEquAN7YYa9NPyDn19J602zgn',
    consumer_secret: '3jh7sQSVkmtqzgjykF4aihNpBDOImpr5vKoX3u8CWVTuO12Yis',
    access_token_key: '1138591364-n4oelTh8j3U87k1zswQnXbyQBAMxeGrQaDh6EL2',
    access_token_secret: 'VU7CMVjY4cTcIY7BD4d2sV6EFr8xTebmxgHBFabA0Ji99'
});

var param ; //= 'list:NASA/astronauts-in-space-now'; //this is the value that the user can change
var num   = 1;

function getInput(param){
    client.get('search/tweets', {q: param, count: num}, function(error, tweets, response){
        console.log(tweets);
        console.log(response);
    });
}