(function(window, document) {

  var center;
  var map;

  var cardinalLogo = './assets/images/cardinal-logo.svg';

  var cardinalAddress = document.getElementById('cardinal-address');

  var offices = [
    {
      lat: 35.227156,
      lng: -80.846351,
      icon: cardinalLogo,
      name: 'Cardinal Solutions Office',
      info: '<p>Office is located on the 5th floor.</p>',
      address: {
        street: '',
        street2: '',
        city: 'Charlotte',
        state: 'NC',
        zip: '28202',
        country: 'USA'
      }
    }
  ];

  var lots = [
    {
      lat: 35.227895,
      lng: -80.847096,
      name: 'Poplar St & 4th St Preferred Parking',
      info: '<ul>' +
        '<li><strong>Daily</strong>: $9.00</li>' +
        '<li><strong>Monthly</strong>: $135.00</li>' +
        '</ul>' +
        '<p><strong>Note</strong>: <em>Lot is behind Green\'s Lunch</em>.</p>',
      address: {
        street: '208 South Poplar Street',
        street2: 'Lot 208 / 311',
        city: 'Charlotte',
        state: 'NC',
        zip: '28202',
        country: 'USA'
      }
    },
    {
      lat: 35.228253,
      lng: -80.856591,
      name: 'Hill Street Parking',
      info: '<p>Street parking is free, but fills up early.</p>',
      address: {
        street: '902 W Hill St',
        street2: '',
        city: 'Charlotte',
        state: 'NC',
        zip: '28202',
        country: 'USA'
      }
    },
    {
      lat: 35.232059,
      lng: -80.845199,
      name: 'Graham St & 6th St',
      info: '<ul>' +
        '<li><strong>Daily</strong>: $5.00</li>' +
        '<li><strong>Monthly</strong>: $79.00</li>' +
        '</ul>',
      address: {
        street: '214 N Graham Street',
        street2: '',
        city: 'Charlotte',
        state: 'NC',
        zip: '28202',
        country: 'USA'
      }
    },
    {
      lat: 35.230140,
      lng: -80.848257,
      name: 'Graham St & 4th St (<em>Paved Lot</em>)',
      info: '<ul>' +
        '<li><strong>Daily</strong>: $6.00</li>' +
        '</ul>' +
        '<p><strong>Note</strong>: <em>Cash only unless using <a href="http://us.parkmobile.com/mobile-apps" target="_blank">ParkMobile App</a></em>.</p>',
      address: {
        street: '120 South Graham Street',
        street2: '',
        city: 'Charlotte',
        state: 'NC',
        zip: '28202',
        country: 'USA'
      }
    },
    {
      lat: 35.228335,
      lng: -80.845348,
      name: 'Carillon Tower Parking',
      info: '<ul>' +
        '<li><strong>Hourly</strong>: $6.00</li>' +
        '</ul>' +
        '<p><strong>Note</strong>: <em>Daily Maximum of $20.00</em>.</p>',
      address: {
        street: '227 West Trade Street',
        street2: '',
        city: 'Charlotte',
        state: 'NC',
        zip: '28202',
        country: 'USA'
      }
    },
    {
      lat: 35.231153,
      lng: -80.847495,
      name: 'Graham St & 4th St Preferred Parking (<em>Gravel Lot</em>)',
      info: '<ul>' +
        '<li><strong>Daily</strong>: $6.00</li>' +
        '</ul>',
      address: {
        street: '539 West Trade Street',
        street2: '',
        city: 'Charlotte',
        state: 'NC',
        zip: '28202',
        country: 'USA'
      }
    },
    {
      lat: 35.225486,
      lng: -80.846469,
      name: 'Charlotte Chamber Garage (MLK Jr Blvd & 4th St)',
      info: '<ul>' +
        '<li><strong>Daily</strong>: $12.00</li>' +
        '</ul>',
      address: {
        street: '330 South Tryon Street',
        street2: '',
        city: 'Charlotte',
        state: 'NC',
        zip: '28202',
        country: 'USA'
      }
    }
  ];

  // When the window has finished loading create our google map below
  google.maps.event.addDomListener(window, 'load', init);

  google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(center);
  });

  cardinalAddress.addEventListener('click', function() {
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
      styles: [{'featureType':'landscape.man_made','elementType':'geometry.fill','stylers':[{'color':'#e9e5dc'}]},{'featureType':'landscape.natural','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#b8cb93'}]},{'featureType':'poi','elementType':'all','stylers':[{'visibility':'off'}]},{'featureType':'poi.business','elementType':'all','stylers':[{'visibility':'simplified'}]},{'featureType':'poi.medical','elementType':'all','stylers':[{'visibility':'on'}]},{'featureType':'poi.park','elementType':'all','stylers':[{'visibility':'on'}]},{'featureType':'poi.park','elementType':'geometry.fill','stylers':[{'color':'#ccdca1'}]},{'featureType':'poi.sports_complex','elementType':'all','stylers':[{'visibility':'on'}]},{'featureType':'road','elementType':'geometry.fill','stylers':[{'hue':'#ff0000'},{'saturation':-100},{'lightness':99}]},{'featureType':'road','elementType':'geometry.stroke','stylers':[{'color':'#808080'},{'lightness':54},{'visibility':'off'}]},{'featureType':'road','elementType':'labels.text.fill','stylers':[{'color':'#767676'}]},{'featureType':'road','elementType':'labels.text.stroke','stylers':[{'color':'#ffffff'}]},{'featureType':'water','elementType':'all','stylers':[{'saturation':43},{'lightness':-11},{'color':'#1a85c7'}]}]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id='map' seen below in the <body>
    var mapElement = document.getElementById('map');

    var infoWindow = new google.maps.InfoWindow({});

    // Create the Google Map using our element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

    [].concat(offices, lots).forEach(function(item) {
      var markerCenter = new google.maps.LatLng(item.lat, item.lng);

      var newMapMarker = new google.maps.Marker({
        position: markerCenter,
        map: map,
        title: item.name,
        icon: (item.icon) ? item.icon : ''
      });

      newMapMarker.addListener('click', function() {
        map.setCenter(offsetCenter(markerCenter, 0, -80));

        var content = document.createElement('div');

        var header = document.createElement('h3');

        header.innerHTML = item.name;

        content.appendChild(header);

        if(item.info) {
          var info = document.createElement('div');

          info.innerHTML += item.info;

          content.appendChild(info);
        }

        content.appendChild(getDirectionLink(item.address));

        infoWindow.setContent(content);

        infoWindow.open(map, newMapMarker);
      });
    });
  }

  function getDirectionLink(addressObj) {
    if(addressObj) {
      var addressStringArray = [];

      for(var prop in addressObj) {
        if(addressObj.hasOwnProperty(prop) && addressObj[prop].length) {
          addressStringArray.push(addressObj[prop].trim().replace(/[\s\/\\]/igm, '+'));
        }
      }

      if(addressStringArray.length) {
        var anchorContainer = document.createElement('p');

        var anchorElement = document.createElement('a');

        anchorElement.innerHTML = 'Get Directions';

        anchorElement.setAttribute('href', 'https://www.google.com/maps/dir//' + addressStringArray.join('+'));
        anchorElement.setAttribute('target', '_blank');

        anchorContainer.appendChild(anchorElement);

        return anchorContainer;
      }
    }
  }

  //borrowed from:  http://stackoverflow.com/a/10666030
  function offsetCenter(latlng,offsetx,offsety) {
    // latlng is the apparent centre-point
    // offsetx is the distance you want that point to move to the right, in pixels
    // offsety is the distance you want that point to move upwards, in pixels
    // offset can be negative
    // offsetx and offsety are both optional

    var scale = Math.pow(2, map.getZoom());

    var worldCoordinateCenter = map.getProjection().fromLatLngToPoint(latlng);

    var pixelOffset = new google.maps.Point((offsetx/scale) || 0,(offsety/scale) ||0);

    var worldCoordinateNewCenter = new google.maps.Point(
        worldCoordinateCenter.x - pixelOffset.x,
        worldCoordinateCenter.y + pixelOffset.y
    );

    var newCenter = map.getProjection().fromPointToLatLng(worldCoordinateNewCenter);

    map.setCenter(newCenter);
  }

}(window, window.document, undefined));
