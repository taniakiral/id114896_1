function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(59.9391150,30.3200000)
  }
  var map = new google.maps.Map(document.getElementById("map-canvas"),
                                mapOptions);
  var image = "img/map-marker.png";
  var myLatLng = new google.maps.LatLng(59.9386900,30.3238200);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, "load", initialize);