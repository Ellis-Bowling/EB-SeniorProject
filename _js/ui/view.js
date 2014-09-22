define([], function() {
	return function(EBSP) {
		return {

			enableGeolocationControl: function() {
				console.log('enableGeolocationControl() on ', EBSP);
			},

			disableGeolocationControl: function() {
				console.log('disableGeolocationControl() on ', EBSP);
			},

			processSoilMoistureDsxResponse: function() {
				console.log('processSoilMoistureDsxResponse() on ', EBSP);
			}
		};
	};
});

