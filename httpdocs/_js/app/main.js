(function(EBSP, $, _) {
	var i,
	    randomCacheBuster = Math.random();

	EBSP.sources = [
		'_js/app/config.js',
		'_js/ui/actions.js',
		'_js/ui/view.js',
		'_js/dsx/requests.js',
		'_js/dsx/responses.js',
	];

	for(i = 0; i < EBSP.sources.length; i++) {
		document.write('<' + 'script src="' + EBSP.sources[i] + '?rcb=' + randomCacheBuster + '"><' + '/script' + '>');	
	}

})(window.EBSP = window.EBSP || {}, window.$, window._);