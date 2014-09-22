define([], function() {
	return function(EBSP) {
		return {
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
	};
});