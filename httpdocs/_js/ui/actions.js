(function(EBSP, $, _) {
	var showLocation, 
			geocoder;
			
			
			
	showLocation=function(position) {
		var lat = position.coords.latitude;
		var lng = position.coords.longitude;
		EBSP.ui.view.txtLatLng.val(lat + ', ' + lng);
	};


	EBSP.ui = EBSP.ui || {};
	
	EBSP.ui.actions = {
		doGeolocate: function() {
			console.log('doGeolocate() on ', EBSP);
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(showLocation);
			} else { 
				alert('Geolocation is not supported by the browser.');
			}
			
			
		},

		doResolveAddressToLatLng: function() {
			console.log('doResolveAddressToLatLng() on ', EBSP);
			var theAddress = EBSP.ui.view.txtUserAddress.val();
			if(!geocoder) {
				geocoder = new google.maps.Geocoder();
			}
			
			
			geocoder.geocode( { 'address': theAddress}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					var lat = results[0].geometry.location.lat();
					var lng = results[0].geometry.location.lng();
					var position = {
						coords:{
							'latitude':  lat,
							'longitude': lng
						}
					};
					showLocation(position);
				} else {
					alert('Geocode was not successful for the following reason: ' + status);
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