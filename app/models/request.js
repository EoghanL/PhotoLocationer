const authorize={
  client_id:'2VDO3R100FWTZUV24MTZEXD5VZMYRMCRMERUNUYCOG0STC4Z',
  client_secret:'3N3Z0AM0COVEAOLZHDPSZBUE30V2AH0TRKZBND21SGREVFE',
  v:'20180101',
  m:'foursquare'
}
https://api.flickr.com/services/rest/?&method=flickr.photos.geo.getLocation&api_key=c9a915838f46c00d25dbdbf28614f240&photo_id=
rootURL = "https://api.flickr.com/services/rest/?&method=flickr.photos.search&tag=nyc&format=json&has_geo=1&accuracy=14&api_key=c9a915838f46c00d25dbdbf28614f240"


function queryTwitterAPI(){
  let response = ""
  let term = $("#userInput").val()
  $.ajax({
    url: rootURL,
    method: "GET",
    success: function(data){
      debugger
      let parser = JSON.parse(data.slice(14,-1)).photos.photo
      parser.forEach(function(elem){
        let url = `https://farm${elem.farm}.staticflickr.com/${elem.server}/${elem.id}_${elem.secret}.jpg`
        new createPhoto(elem.id, elem.secret, elem.server, elem.farm, url)
      })
      console.log("SUCCESS")
      debugger
      return parser
    },
    error: function(data){
      console.log(data, "ERROR")
    }
  })
}
