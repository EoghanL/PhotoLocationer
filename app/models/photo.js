let store = []
var holder = ""
const createPhoto = (function(){
  locationURL = `https://api.flickr.com/services/rest/?&method=flickr.photos.geo.getLocation&format=json&api_key=c9a915838f46c00d25dbdbf28614f240&photo_id=`
  store_id = 0
  return class Photo{
    constructor(photo_id, secret, server, farm, url){
      this.id = ++store_id
      this.photo_id = photo_id
      this.secret = secret
      this.farm = farm
      this.url = url
      $.when(this.getLocations()).done(() => {
        store = [...store, this]
      })

    }
    getLocations(){
      let that = this
      return $.ajax({
        url: locationURL + `${this.photo_id}`,
        method: "GET"
      }).done(function(data){
        data = JSON.parse(data.slice(14,-1)).photo.location
        that.locations = [data.latitude, data.longitude]
      })
    }
  }
})()
// THINGS TO DO: Set Geo Radius to max // CONVERT TO REACT COMPONENTS // ??????????????
