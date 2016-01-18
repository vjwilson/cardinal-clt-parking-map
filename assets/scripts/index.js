(function() {

  // When the window has finished loading create our google map below
  google.maps.event.addDomListener(window, 'load', init);

  function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 16,

      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(35.227156, -80.846351), // Parkard Place Charlotte

      // How you would like to style the map.
      // This is where you would paste any style found on Snazzy Maps.
      styles: [{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#e9e5dc"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54},{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"water","elementType":"all","stylers":[{"saturation":43},{"lightness":-11},{"color":"#1a85c7"}]}]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var cardinalLogo = 'images/cardinal-logo.svg';

    var officeMarker = new google.maps.Marker({
      position: new google.maps.LatLng(35.227156, -80.846351),
      map: map,
      icon: cardinalLogo,
      title: 'Charlotte Cardinal Office - 5th floor'
    });

    var GreensParkingMarker = new google.maps.Marker({
      position: new google.maps.LatLng(35.227895, -80.847096),
      map: map,
      title: 'Parking near Greens Lunch'
    });

    var HillStMarker = new google.maps.Marker({
      position: new google.maps.LatLng(35.228253, -80.856591),
      map: map,
      title: 'Hill Street Parking'
    });
  }

}());
