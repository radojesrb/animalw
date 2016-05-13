// define view model
// continent property is being used to get and output the google map, by using google maps API
var MapViweModel = can.Map.extend({
  define: {
    continent: {
      value: null,
      get: function() {
        var me = this;
        var cId = this.attr('continentId');

        // get continent data (lat, long...)
        Continent.findOne({'id': cId}).done(function(data) {
          // init google map API
          map('.gmap', data, 3);
        });
      }
    }
  }
});

function map(targetElementSelector, continentData, zoomLevel) {
  var myLatLng = {lat: continentData.lat, lng: continentData.long};

  // Create a map object and specify the DOM element for display.
  var map = new window.google.maps.Map(document.querySelector(targetElementSelector), {
    center: myLatLng,
    scrollwheel: false,
    zoom: zoomLevel
  });

  // Create a marker and set its position.
  var marker = new window.google.maps.Marker({
    map: map,
    position: myLatLng,
    title: continentData.name
  });
}

// define the Map component
can.Component.extend({
  tag: 'animalw-map',
  leakScope: false,
  template: can.view('components/map/map.stache'),
  scope: MapViweModel
});
