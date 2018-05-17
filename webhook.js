var request = require('request');
var headers = {
  "Content-Type": "application/json"
}

var options = {
  url: "https://discordapp.com/api/webhooks/446732308297285652/-2aGkeJJrzFs3WyF8RSIXwrmDqEVfmxlaBbMOm6WP9AOQW5yJgCTgCLUNqrJcUX_hpfp",
  method:  "POST",
  headers: headers,
  form: {"content": "@everyone hi.",
         "username": "my name is jeff",
         "avatar_url": "https://i.ytimg.com/vi/JilHZ_DdBYg/maxresdefault.jpg"}
}

var options2 = {
  url: "https://discordapp.com/api/webhooks/446732369378934787/JWF99E0drdBsEBgtrhDpr5rEaNlc4w4XTG50uUk1H8TEBjG44p3jHNN5A4wbEPFE1mYs",
  method:  "POST",
  headers: headers,
  form: {"content": "@everyone hi.",
         "username": "my name is jeff",
         "avatar_url": "https://i.ytimg.com/vi/JilHZ_DdBYg/maxresdefault.jpg"}
}

var options3 = {
  url: "https://discordapp.com/api/webhooks/446732420775936001/YGzn2Fu-fmi9Y0-yWNrfb-2RZqvyIqpz9GRyRQqVoJwJRINQ8vyzeQFkQocl9gocW7nj",
  method:  "POST",
  headers: headers,
  form: {"content": "@everyone hi.",
         "username": "my name is jeff",
         "avatar_url": "https://i.ytimg.com/vi/JilHZ_DdBYg/maxresdefault.jpg"}
}

var options4 = {
  url: "https://discordapp.com/api/webhooks/446732479077023744/GElG7Agz8z82rtn_E1tv5uc9trjJhgFy2sMUC2-ltOQoRtV7iJBas_TZJ56t9eepJI5p",
  method:  "POST",
  headers: headers,
  form: {"content": "@everyone hi.",
         "username": "my name is jeff",
         "avatar_url": "https://i.ytimg.com/vi/JilHZ_DdBYg/maxresdefault.jpg"}
}

var interval = 10 * 10; // setting interval at .35 seconds so we dont get ratelimited
for (var x = 0; x < 10000; x+=1) { // change '100' to howmany messages u wanna send
  setTimeout( function (x) {
    request(options, function(error, body){
      if (error) console.log("Webhook is invalid"); // if we cant connect webhook = invalid
    })
    request(options2, function(error, body){
      if (error) console.log("Webhook is invalid"); // if we cant connect webhook = invalid
    })
    request(options3, function(error, body){
      if (error) console.log("Webhook is invalid"); // if we cant connect webhook = invalid
    })
    request(options4, function(error, body){
      if (error) console.log("Webhook is invalid"); // if we cant connect webhook = invalid
    })
  }, interval * x, x);
}

