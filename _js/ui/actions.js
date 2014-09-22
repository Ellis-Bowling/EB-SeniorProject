define([], function() {
	return function(EBSP) {

		return {

			doGeolocate: function() {
				console.log('doGeolocate() on ', EBSP);
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


	};
});

