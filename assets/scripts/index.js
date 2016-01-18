(function() {

  var center;
  var map;
  var geocoder;

  var cardinalLogo = './assets/images/cardinal-logo.svg';

  var office = {
    lat: 35.227156,
    lng: -80.846351,
    icon: cardinalLogo,
    name: 'Cardinal Solutions Office',
    info: '<p>Office is located on the 5th floor.</p>'
  };

  var lots = [
    {
      lat: 35.227895,
      lng: -80.847096,
      name: 'Parking near Greens Lunch',
      info: '<ul><li><strong>Daily</strong>: $9.00</li><li><strong>Monthly</strong>: $135.00</li></ul>'
    },
    {
      lat: 35.228253,
      lng: -80.856591,
      name: 'Hill Street Parking',
      info: '<p>Street Parking is free, but fills up early.</p>'
    },
    {
      lat: 35.232059,
      lng: -80.845199,
      name: 'Graham St & 6th St',
      info: '<ul><li><strong>Daily</strong>: $5.00</li><li><strong>Monthly</strong>: $79.00</li></ul>'
    }
  ];

  // When the window has finished loading create our google map below
  google.maps.event.addDomListener(window, 'load', init);

  google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(center);
  });

  function init() {
    center = new google.maps.LatLng(35.227156, -80.846351);

    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
      zoom: 16,
      scrollwheel: false,
      center: center,
      //generated from Snazzy Maps.
      styles: [{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#e9e5dc"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54},{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"water","elementType":"all","stylers":[{"saturation":43},{"lightness":-11},{"color":"#1a85c7"}]}]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    var infoWindow = new google.maps.InfoWindow({});

    // Create the Google Map using our element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

    [].concat(office, lots).forEach(function(item) {
      var newMapMarker = new google.maps.Marker({
        position: new google.maps.LatLng(item.lat, item.lng),
        map: map,
        title: item.name,
        icon: (item.icon) ? item.icon : ''
      });

      newMapMarker.addListener('click', function() {
        var content = '<h3>' + item.name + '</h3>';

        if(item.info) {
          content += item.info;
        }

        infoWindow.setContent(content);

        infoWindow.open(map, newMapMarker);
      })
    });
  }

}());
