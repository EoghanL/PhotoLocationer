const rootURL = "https://api.twitter.com/1.1/search/tweets.json?q="
function queryTwitterAPI(){
  let term = $("#userInput").val()
  debugger
  $.ajax({
    url: rootURL + term
  })
}
