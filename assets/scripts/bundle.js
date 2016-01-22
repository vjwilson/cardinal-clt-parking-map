(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _parkingLots = require('./parking-lots');

var _offices = require('./offices');

var _mapStyles = require('./map-styles');

var center = undefined;
var map = undefined;
var infoWindow = undefined;

var city = 'charlotte';

var parkingMap = {
  init: function init() {
    var _this = this;

    var mapElement = document.getElementById('map');

    center = new google.maps.LatLng(_offices.offices[city][0].lat, _offices.offices[city][0].lng);

    var mapOptions = {
      zoom: 16,
      scrollwheel: false,
      center: center,
      styles: _mapStyles.mapStyles[city]
    };

    infoWindow = new google.maps.InfoWindow({});

    map = new google.maps.Map(mapElement, mapOptions);

    [].concat(this.addIconToOffice(_offices.offices[city]), _parkingLots.parkingLots[city]).forEach(function (item) {
      var markerCenter = new google.maps.LatLng(item.lat, item.lng);

      var newMapMarker = new google.maps.Marker({
        position: markerCenter,
        map: map,
        title: item.name,
        icon: item.icon ? item.icon : ''
      });

      newMapMarker.addListener('click', function () {
        var content = document.createElement('div');
        var header = document.createElement('h3');

        header.innerHTML = item.name;

        content.appendChild(header);

        if (item.info) {
          var info = document.createElement('div');

          info.innerHTML += item.info;

          content.appendChild(info);
        }

        content.appendChild(this.getDirectionLink(item.address));

        infoWindow.setContent(content);

        infoWindow.open(map, newMapMarker);
      }.bind(_this));
    });

    this.bindEvents();
  },
  bindEvents: function bindEvents() {
    var cardinalAddress = document.getElementById('cardinal-address');

    cardinalAddress.addEventListener('click', function () {
      map.setCenter(center);
    });

    google.maps.event.addDomListener(window, 'resize', function () {
      map.setCenter(center);
    });
  },
  addIconToOffice: function addIconToOffice(offices) {
    var cardinalLogo = './assets/images/cardinal-logo.svg';

    var officeArray = [];

    offices.forEach(function (item, index, array) {
      item.icon = cardinalLogo;

      officeArray.push(item);
    });

    return officeArray;
  },
  getDirectionLink: function getDirectionLink(addressObj) {
    if (addressObj) {
      var addressStringArray = [];

      for (var prop in addressObj) {
        if (addressObj.hasOwnProperty(prop) && addressObj[prop].length) {
          addressStringArray.push(addressObj[prop].trim().replace(/[\s\/\\]/igm, '+'));
        }
      }

      if (addressStringArray.length) {
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

},{"./map-styles":2,"./offices":3,"./parking-lots":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mapStyles = exports.mapStyles = {
  charlotte: [{ 'featureType': 'landscape.man_made', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#e9e5dc' }] }, { 'featureType': 'landscape.natural', 'elementType': 'geometry.fill', 'stylers': [{ 'visibility': 'on' }, { 'color': '#b8cb93' }] }, { 'featureType': 'poi', 'elementType': 'all', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'poi.business', 'elementType': 'all', 'stylers': [{ 'visibility': 'simplified' }] }, { 'featureType': 'poi.medical', 'elementType': 'all', 'stylers': [{ 'visibility': 'on' }] }, { 'featureType': 'poi.park', 'elementType': 'all', 'stylers': [{ 'visibility': 'on' }] }, { 'featureType': 'poi.park', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ccdca1' }] }, { 'featureType': 'poi.sports_complex', 'elementType': 'all', 'stylers': [{ 'visibility': 'on' }] }, { 'featureType': 'road', 'elementType': 'geometry.fill', 'stylers': [{ 'hue': '#ff0000' }, { 'saturation': -100 }, { 'lightness': 99 }] }, { 'featureType': 'road', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#808080' }, { 'lightness': 54 }, { 'visibility': 'off' }] }, { 'featureType': 'road', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#767676' }] }, { 'featureType': 'road', 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#ffffff' }] }, { 'featureType': 'water', 'elementType': 'all', 'stylers': [{ 'saturation': 43 }, { 'lightness': -11 }, { 'color': '#1a85c7' }] }]
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var offices = exports.offices = {
  charlotte: [{
    lat: 35.227156,
    lng: -80.846351,
    name: 'Cardinal Solutions Office',
    info: '<p>Office is located on the 5th floor.</p>',
    address: {
      street: '222 S Church Street',
      street2: 'ste 500',
      city: 'Charlotte',
      state: 'NC',
      zip: '28202',
      country: 'USA'
    }
  }]
};

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var parkingLots = exports.parkingLots = {
  charlotte: [{
    lat: 35.227895,
    lng: -80.847096,
    name: 'Poplar St & 4th St Preferred Parking',
    info: '<ul>' + '<li><strong>Daily</strong>: $9.00</li>' + '<li><strong>Monthly</strong>: $135.00</li>' + '</ul>' + '<p><strong>Note</strong>: <em>Lot is behind Green\'s Lunch</em>.</p>',
    address: {
      street: '208 South Poplar Street',
      street2: 'Lot 208 / 311',
      city: 'Charlotte',
      state: 'NC',
      zip: '28202',
      country: 'USA'
    }
  }, {
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
  }, {
    lat: 35.232059,
    lng: -80.845199,
    name: 'Graham St & 6th St',
    info: '<ul>' + '<li><strong>Daily</strong>: $5.00</li>' + '<li><strong>Monthly</strong>: $79.00</li>' + '</ul>',
    address: {
      street: '214 N Graham Street',
      street2: '',
      city: 'Charlotte',
      state: 'NC',
      zip: '28202',
      country: 'USA'
    }
  }, {
    lat: 35.230140,
    lng: -80.848257,
    name: 'Graham St & 4th St (<em>Paved Lot</em>)',
    info: '<ul>' + '<li><strong>Daily</strong>: $6.00</li>' + '</ul>' + '<p><strong>Note</strong>: <em>Cash only unless using <a href="http://us.parkmobile.com/mobile-apps" target="_blank">ParkMobile App</a></em>.</p>',
    address: {
      street: '120 South Graham Street',
      street2: '',
      city: 'Charlotte',
      state: 'NC',
      zip: '28202',
      country: 'USA'
    }
  }, {
    lat: 35.228335,
    lng: -80.845348,
    name: 'Carillon Tower Parking',
    info: '<ul>' + '<li><strong>Hourly</strong>: $6.00</li>' + '</ul>' + '<p><strong>Note</strong>: <em>Daily Maximum of $20.00</em>.</p>',
    address: {
      street: '227 West Trade Street',
      street2: '',
      city: 'Charlotte',
      state: 'NC',
      zip: '28202',
      country: 'USA'
    }
  }, {
    lat: 35.231153,
    lng: -80.847495,
    name: 'Graham St & 4th St Preferred Parking (<em>Gravel Lot</em>)',
    info: '<ul>' + '<li><strong>Daily</strong>: $6.00</li>' + '</ul>',
    address: {
      street: '539 West Trade Street',
      street2: '',
      city: 'Charlotte',
      state: 'NC',
      zip: '28202',
      country: 'USA'
    }
  }, {
    lat: 35.225486,
    lng: -80.846469,
    name: 'Charlotte Chamber Garage (MLK Jr Blvd & 4th St)',
    info: '<ul>' + '<li><strong>Daily</strong>: $12.00</li>' + '</ul>',
    address: {
      street: '330 South Tryon Street',
      street2: '',
      city: 'Charlotte',
      state: 'NC',
      zip: '28202',
      country: 'USA'
    }
  }]
};

},{}]},{},[1]);
