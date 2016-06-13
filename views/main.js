function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 8,
	    center: {lat: 35.645689, lng: 139.711052},
	    mapTypeId: google.maps.MapTypeId.ROADMAP
	});
    var geocoder = new google.maps.Geocoder();
    
    document.getElementById('showLocation').addEventListener('click', function() {
	    geocodeAddress(geocoder, map);
	});
    
    document.getElementById('showCurrentLocation').addEventListener('click', function() {
	    geocodeAddress(geocoder, map);
	});
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function currentLocation() {
    var pos;
    if (navigator.geolocation) {
	var map = document.getElementById("gmap");
	navigator.geolocation.getCurrentPosition(function(position) {
		map.setCenter(position);
		var makerOpts = new google.maps.Marker({
			position: position,
			map: map,
			title: 'You are here'
		    });
	    });
    }
    else {
	alert('Cannot get current location');
    }
}

