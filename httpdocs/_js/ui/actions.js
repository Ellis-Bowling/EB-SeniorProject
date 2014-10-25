(function(EBSP, $, _) {

	EBSP.ui = EBSP.ui || {};
	
	EBSP.ui.actions = {
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

	console.log(EBSP.ui.actions);

})(window.EBSP = window.EBSP || {}, window.$, window._);