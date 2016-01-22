import { parkingLots } from './parking-lots';
import { offices } from './offices';
import { mapStyles } from './map-styles';

let center;
let map;
let infoWindow;

const city = 'charlotte';

const parkingMap = {
  init: function() {
    const mapElement = document.getElementById('map');

    center = new google.maps.LatLng(offices[city][0].lat, offices[city][0].lng);

    const mapOptions = {
      zoom: 16,
      scrollwheel: false,
      center: center,
      styles: mapStyles[city]
    };

    infoWindow = new google.maps.InfoWindow({});

    map = new google.maps.Map(mapElement, mapOptions);

    [].concat(this.addIconToOffice(offices[city]), parkingLots[city]).forEach((item) => {
      const markerCenter = new google.maps.LatLng(item.lat, item.lng);

      const newMapMarker = new google.maps.Marker({
        position: markerCenter,
        map: map,
        title: item.name,
        icon: (item.icon) ? item.icon : ''
      });

      newMapMarker.addListener('click', function() {
        const content = document.createElement('div');
        const header = document.createElement('h3');

        header.innerHTML = item.name;

        content.appendChild(header);

        if(item.info) {
          const info = document.createElement('div');

          info.innerHTML += item.info;

          content.appendChild(info);
        }

        content.appendChild(this.getDirectionLink(item.address));

        infoWindow.setContent(content);

        infoWindow.open(map, newMapMarker);
      }.bind(this));
    });

    this.bindEvents();
  },
  bindEvents: function() {
    const cardinalAddress = document.getElementById('cardinal-address');

    cardinalAddress.addEventListener('click', function() {
      map.setCenter(center);
    });

    google.maps.event.addDomListener(window, 'resize', function() {
      map.setCenter(center);
    });
  },
  addIconToOffice: function (offices) {
    const cardinalLogo = './assets/images/cardinal-logo.svg';

    let officeArray = [];

    offices.forEach((item, index, array) => {
      item.icon = cardinalLogo;

      officeArray.push(item);
    });

    return officeArray;
  },
  getDirectionLink: function(addressObj) {
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
};

google.maps.event.addDomListener(window, 'load', parkingMap.init.bind(parkingMap));
