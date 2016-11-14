// var request = require('request');
// var OAuth   = require('oauth-1.0a');
// var crypto  = require('crypto');
const rootURL = "http://api.eventful.com/rest/events/search?app_key=btZGcN2g4drGjd73&keywords="

function queryTwitterAPI(){
  let term = $("#userInput").val()
  debugger
  $.ajax({
    url: rootURL + term,
    dataType: 'jsonp',
    jsonpCallback: false,
    // data: oauth.authorize(request_data, token),
    headers: {
      "Access-Control-Allow-Origin": '*'
    }
  }).done(function(data){
    console.log(data)
  })
}

// var oauth = OAuth({
//     consumer: {
//         key: "2Q858yg1xnvUIWjPPTqDB3Ldc",
//         secret: 'AW51lNLM62xR7Gotl8UwDpApqCkR3D5lxyqROGGyK9RiWyM2Oi'
//     },
//     signature_method: 'HMAC-SHA1',
//     hash_function: function(base_string, key) {
//         return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
//     }
// });
// var token = {
//     key: '797438164193472516-aQ5yiVeki8LJBbxXEwiZAcz3gICEsWO',
//     secret: 'abkosoNRF2UaOFQHtpUSGnW91c2w51yhvSCIX64tNc0vH'
// };
// var request_data = {
//     url: "https://api.twitter.com/1.1/search/tweets.json?q=",
//     method: "GET"
// };
// function callBack(json){
//   console.log(json)
// }
// $.ajax({
//     url: request_data.url,
//     type: request_data.method,
//     data: oauth.authorize(request_data, token),
//     headers: oauth.toHeader(oauth.authorize(request_data, token))
// }).done(function(data) {
//     console.log(data)
// });


// THIS IS THE ONE FOR NODE REQUESTS, ABOVE IS FOR BROWSER
// var oauth = OAuth({
//     consumer: {
//         key: "2Q858yg1xnvUIWjPPTqDB3Ldc",
//         secret: 'AW51lNLM62xR7Gotl8UwDpApqCkR3D5lxyqROGGyK9RiWyM2Oi'
//     },
//     signature_method: 'HMAC-SHA1',
//     hash_function: function(base_string, key) {
//        return crypto.createHmac('sha1', key).update(base_string).digest('base64');
//     }
// });
// request({
//     url: request_data.url,
//     method: request_data.method,
//     form: request_data.data,
//     oauth.toHeader(oauth.authorize(request_data, token)),
//     headers: oauth.toHeader(oauth.authorize(request_data, token))
// }, function(error, response, body) {
//     console.log(response)
// });
//        ,
// xhrFields: {
//   withCredentials: true
// }
// error: function(xhr, status, error){
//   console.log(xhr),
//   console.log(status),
//   console.log(error)
// }
