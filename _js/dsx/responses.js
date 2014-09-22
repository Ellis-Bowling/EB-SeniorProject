define([], function() {
	return function(EBSP) {
		return {

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
	};
});
