(function(EBSP, $, _) {

	EBSP.dsx = EBSP.dsx || {};

	EBSP.dsx.requests = {
		executeDsxRequest: function(apiPath, objParams) {
			console.log('executeDsxRequest() on ', EBSP);
		},

		getDsxAlmanacData: function() {
			console.log('getDsxAlmanacData() on ', EBSP);
		},

		getDsxPrecipData: function() {
			console.log('getDsxPrecipData() on ', EBSP);
		},

		getDsxSoilMoistureData: function() {
			console.log('getDsxSoilMoistureData() on ', EBSP);
		}
	};

	console.log(EBSP.dsx.requests);

})(window.EBSP = window.EBSP || {}, window.$, window._);