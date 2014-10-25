(function(EBSP, $, _) {

	EBSP.dsx = EBSP.dsx || {};

	EBSP.dsx.responses = {
		processAlmanacDsxResponse: function() {
			console.log('processAlmanacDsxResponse() on ', EBSP);
		},

		processPrecipDsxResponse: function() {
			console.log('processPrecipDsxResponse() on ', EBSP);
		},

		processSoilMoistureDsxResponse: function() {
			console.log('processSoilMoistureDsxResponse() on ', EBSP);
		}
	};

	console.log(EBSP.dsx.responses);

})(window.EBSP = window.EBSP || {}, window.$, window._);