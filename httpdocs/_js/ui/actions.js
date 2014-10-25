(function(EBSP, $, _) {
	var displayLatLng,
	    showGeolocationError;

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

