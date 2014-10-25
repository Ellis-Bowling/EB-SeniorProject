(function(EBSP, $, _) {
	var showLocation, 
			geocoder,
			currentLat,
			currentLng;
	

	// function showAndStoreLatLng(position)
	showAndStoreLatLng = function(position) {
		var lat = position.coords.latitude;
		var lng = position.coords.longitude;

		lat = Math.round(lat * 100.0) / 100.0;
		lng = Math.round(lng * 100.0) / 100.0;

		// show the LatLng...
		EBSP.ui.view.txtLatLng.val(lat + ', ' + lng);

		// store the LatLng, with an acceptable number of decimal places...
		currentLat = lat;
		currentLng = lng;

		console.log('currentLat, currentLng: ' + currentLat + ', ' + currentLng);
	};


	EBSP.ui = EBSP.ui || {};
	

	// OBJECT EBSP.ui.actions...
	EBSP.ui.actions = {

		// function doGeolocate()
		doGeolocate: function() {
			console.log('doGeolocate() on ', EBSP);
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(showAndStoreLatLng);
			} else { 
				alert('Geolocation is not supported by the browser.');
			}
		},


		// function doResolveAddressToLatLng()
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
					showAndStoreLatLng(position);
				} else {
					alert('Geocode was not successful for the following reason: ' + status);
				}
			});	
			
		},


		// function doResolveLatLngToLocId()
		doResolveLatLngToLocId: function() {
			console.log('doResolveLatLngToLocId() on ', EBSP);

			var locId = null;

			var gotLocIdSuccess = function(data, textStatus) {
				if(data && data.body && data.body[0] && data.body[0].doc && data.body[0].doc.locId) {
					locId = data.body[0].doc.locId + ':1:US';
				} else {
					alert('Failure! Contacted DSX, but response received was in wrong format to resolve to a valid TWC location ID');
				}

				EBSP.ui.view.txtLocId.val(locId);
			};

			var gotLocIdFailure = function(jqxhr, textStatus, errorThrown) {
				alert('Failure! Couldn\'t contact DSX to resolve Lat/Lng to a valid TWC location ID.');
			};

			EBSP.dsx.requests.getDsxLocIdFromLatLng(currentLat, currentLng, gotLocIdSuccess, gotLocIdFailure);
		},


		// function doObtainRawDsxDataForLocId()
		doObtainRawDsxDataForLocId: function() {
			console.log('doObtainRawDsxDataForLocId() on ', EBSP);
		},


		// function doGenerateSaturationAnalysis()
		doGenerateSaturationAnalysis: function() {
			console.log('doGenerateSaturationAnalysis() on ', EBSP);
		}

	};

	console.log(EBSP.ui.actions);

})(window.EBSP = window.EBSP || {}, window.$, window._);