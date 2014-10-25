(function(EBSP, $, _) {
	var displayLatLng,
	    showGeolocationError,
	    instGeocoder = null;

	/**
	 * function displayLatLng(position)
	 *
	 * This is the callback function which is executed
	 * to display the lat/lng position when determined
	 * by geocoding or geolocation.
	 */
	displayLatLng = function(position) {
		console.log('displayLatLng: ', position);

		var lat = position.coords.latitude;
		var lng = position.coords.longitude;

		var displayField = EBSP.ui.view.txtLatLng;

		displayField.val(lat + ', ' + lng);
	};

	showGeolocationError = function(error) {
		console.log('showGeolocationError: ', error);

		switch(error.code) {
			case error.PERMISSION_DENIED:
				alert("User denied the request for Geolocation.");
				break;
			case error.POSITION_UNAVAILABLE:
				alert("Location information is unavailable.");
				break;
			case error.TIMEOUT:
				alert("The request to get user location timed out.");
				break;
			case error.UNKNOWN_ERROR:
				alert("An unknown error occurred.");
				break;
		}

	};

	EBSP.ui = EBSP.ui || {};
	
	EBSP.ui.actions = {
		doGeolocate: function() {
			console.log('doGeolocate() on ', EBSP);

			if(navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(displayLatLng);
			} else {
				alert('Geolocation is not supported by this browser');
			}
		},

		doResolveAddressToLatLng: function() {
			console.log('doResolveAddressToLatLng() on ', EBSP);

			var theAddress = EBSP.ui.view.txtUserAddress.val();

			if(instGeocoder === null) {
				instGeocoder = new google.maps.Geocoder();
				console.log('initialized instGeocoder: ', instGeocoder);
			}

			instGeocoder.geocode({'address': theAddress}, function(results, status) {
				var position = {
					coords: {}
				};

				if (status == google.maps.GeocoderStatus.OK) {
					position.coords.latitude  = results[0].geometry.location.lat();
					position.coords.longitude = results[0].geometry.location.lng();
					displayLatLng(position);
				} else {
					alert('Geocode failed for the following reasons:\n' + status);
				}
			});
		},

		doResolveLatLngToLocId: function() {
			console.log('doResolveLatLngToLocId() on ', EBSP);
		},

		doObtainRawDsxDataForLocId: function() {
			console.log('doObtainRawDsxDataForLocId() on ', EBSP);
		},

		doGenerateSaturationAnalysis: function() {
			console.log('doGenerateSaturationAnalysis() on ', EBSP);
		}
	};

	console.log(EBSP.ui.actions);

})(window.EBSP = window.EBSP || {}, window.$, window._);

