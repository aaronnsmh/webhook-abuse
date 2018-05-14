var request = require('request');
var headers = {
  "Content-Type": "application/json"
}

var options = {
  url: "https://discordapp.com/api/webhooks/445658827325702144/H9eKn64j5lxUGpHy3BxOKITQtowYy7bgpxuFPopGEBxyUOgfP7C7heZc4pw8wQp3kk4O",
  method:  "POST",
  headers: headers,
  form: {"content": "@everyone chat is movin so fast no one will see im gey.",
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
