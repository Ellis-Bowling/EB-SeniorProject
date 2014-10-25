(function(EBSP, $, _) {

	EBSP.dsx = EBSP.dsx || {};

	EBSP.dsx.requests = {
		executeDsxRequest: function(requestPath, objParams, successFunction, errorFunction) {
			console.log('executeDsxRequest() on ', EBSP);

			var requestHost = EBSP.config.dsxHost;
			var requestURL = requestHost + requestPath;

			objParams.api = EBSP.config.apiKey;

			$.ajax({
				url:       requestURL,
				jsonp:     "jsonp",      // the name of the callback parameter
				dataType:  "jsonp",         // tell jQuery we're expecting JSONP
				data:      objParams,       // any params, including the api key
				success:   successFunction, // work with the response
				error:     errorFunction    // if anything goes awry
			});
		},

		getDsxLocIdFromLatLng: function(lat, lng, successFunction, errorFunction) {
			var requestPath = '/wxd/v2/loc/(' + lat + ',' + lng + ')';

			EBSP.dsx.requests.executeDsxRequest(requestPath, {}, successFunction, errorFunction);
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