define([], function() {
	return function(EBSP) {
		var elements = [
			'txtUserAddress',
			'btnResolveAddressToLatLng',
			'btnUserGeolocate',
			'txtLatLng',
			'txtLocId',
			'btnResolveLatLngToLocId',
			'btnObtainRawDsxData',
			'divRawDsxDataForLoc',
			'btnGenerateSaturationAnalysis',
			'divSaturationAnalysis'
		];

		return {
			initView: function() {
				console.log('initView() on ', EBSP);
				
				var i;

				// get references
				for(i = 0; i < elements.length; i++) {
					EBSP.ui.view['#' + elements[i]] = $(elements[i]);
				}

				// bind event handlers
				EBSP.ui.view.btnUserGeolocate.click(EBSP.ui.actions.doGeolocate);
				EBSP.ui.view.btnResolveAddressToLatLng.click(EBSP.ui.actions.doResolveAddressToLatLng);
				EBSP.ui.view.btnResolveLatLngToLocId.click(EBSP.ui.actions.doResolveLatLngToLocId);
				EBSP.ui.view.btnObtainRawDsxData.click(EBSP.ui.actions.doObtainRawDsxDataForLocId);
				EBSP.ui.view.btnGenerateSaturationAnalysis.click(EBSP.ui.actions.doGenerateSaturationAnalysis);
			}
		};
	};
});

