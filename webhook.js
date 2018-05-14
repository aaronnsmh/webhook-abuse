var request = require('request');
var headers = {
  "Content-Type": "application/json"
}

var options = {
  url: "https://discordapp.com/api/webhooks/445644098880143360/e7viBruFVVH1flFHrUFGPnxc__vutdGejVa_y4lj9TuPKga9SVHMaTy1Pm6XHOajhUMU",
  method:  "POST",
  headers: headers,
  form: {"content": "@everyone niggas im logan.",
         "username": "Logan",
         "avatar_url": "https://www.famousbirthdays.com/headshots/connor-knowles-6.jpg"}
}

var interval = 10 * 35; // setting interval at .35 seconds so we dont get ratelimited
for (var x = 0; x < 10000; x+=1) { // change '100' to howmany messages u wanna send
  setTimeout( function (x) {
    request(options, function(error, body){
      if (error) console.log("Webhook is invalid"); // if we cant connect webhook = invalid
    })
  }, interval * x, x);
}
