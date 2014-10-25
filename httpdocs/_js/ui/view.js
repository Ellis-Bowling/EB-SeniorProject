(function(EBSP, $, _) {

	EBSP.ui = EBSP.ui || {};
	
	EBSP.ui.view = {};

	$(document).ready(function() {
		// establish references
		EBSP.ui.view.txtUserAddress = $('#txtUserAddress');
		EBSP.ui.view.btnResolveAddressToLatLng = $('#btnResolveAddressToLatLng');
		EBSP.ui.view.btnUserGeolocate = $('#btnUserGeolocate');
		EBSP.ui.view.txtLatLng = $('#txtLatLng');
		EBSP.ui.view.txtLocId = $('#txtLocId');
		EBSP.ui.view.btnResolveLatLngToLocId = $('#btnResolveLatLngToLocId');
		EBSP.ui.view.btnObtainRawDsxData = $('#btnObtainRawDsxData');
		EBSP.ui.view.divRawDsxDataForLoc = $('#divRawDsxDataForLoc');
		EBSP.ui.view.btnGenerateSaturationAnalysis = $('#btnGenerateSaturationAnalysis');
		EBSP.ui.view.divSaturationAnalysis = $('#divSaturationAnalysis');

		// bind event handlers
		EBSP.ui.view.btnUserGeolocate.click(EBSP.ui.actions.doGeolocate);
		EBSP.ui.view.btnResolveAddressToLatLng.click(EBSP.ui.actions.doResolveAddressToLatLng);
		EBSP.ui.view.btnResolveLatLngToLocId.click(EBSP.ui.actions.doResolveLatLngToLocId);
		EBSP.ui.view.btnObtainRawDsxData.click(EBSP.ui.actions.doObtainRawDsxDataForLocId);
		EBSP.ui.view.btnGenerateSaturationAnalysis.click(EBSP.ui.actions.doGenerateSaturationAnalysis);
	});
	
	console.log(EBSP.ui.view);

})(window.EBSP = window.EBSP || {}, window.$, window._);