var request = require('request');
var headers = {
  "Content-Type": "application/json"
}

var options = {
  url: "https://discordapp.com/api/webhooks/451336879296741387/2KQ4WgxJl0_HdhDzb4a4MSDA0b9hcLJ6fY0Uc2iKBifsmNC4oSy_su_hKyM-XtVNDehx",
  method:  "POST",
  headers: headers,
  form: {"content": "@TheReal#1781.",
         "username": "iBot",
         "avatar_url": "https://images-ext-2.discordapp.net/external/Q-vxhw7onm06dGerOPEMT6n_RiYQFfPIiH5imJg875g/https/cdn.discordapp.com/icons/444159749458755594/bf3e28de726e8521e6e3e25830b0c0a7.jpg?width=80&height=80"}
}



var interval = 10 * 10; // setting interval at .35 seconds so we dont get ratelimited
for (var x = 0; x < 10000; x+=1) { // change '100' to howmany messages u wanna send
  setTimeout( function (x) {
    request(options, function(error, body){
      if (error) console.log("Webhook is invalid"); // if we cant connect webhook = invalid
    })
   
  }, interval * x, x);
}

