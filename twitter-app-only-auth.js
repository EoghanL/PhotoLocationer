function getAccessToken () {

    var secret = encodeURI("P46BQIP3AePmre2llHduQE8UBkads9AJDr1QynrSGYMHaTtcox");
    var key = encodeURI("1tgemHy34mqhdWFK7syeEBJsO");
    var keyAndSecret = key + ":" + secret;
    var encoded = btoa(keyAndSecret);
    var postData = "grant_type=client_credentials"

    var authRequest = new XMLHttpRequest();
    authRequest.open("POST", "https://api.twitter.com/oauth2/token");
    // authRequest.setRequestHeader("User-Agent", "TwitterLocationProject")
    // authRequest.open("POST", "https://api.twitter.com/oauth2/token");
    authRequest.setRequestHeader("Authorization", "Basic " + encoded);
    authRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
    authRequest.setRequestHeader("Access-Control-Allow-Origin", "*");
    // authRequest.setRequestHeader("Accept-Encoding", "gzip")
    authRequest.onreadystatechange = function () {
        if (authRequest.readyState === XMLHttpRequest.DONE && authRequest.status === 200) {
            var accessToken = JSON.parse(authRequest.response);
            console.log("access token:", accessToken);
        }
    }
    authRequest.send(postData);
}
