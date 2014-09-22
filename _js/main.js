// Load and configure libraries...
require.config({
	paths: {
		'jQuery': 'vendor/jquery',
		'underscore': 'vendor/underscore'
	},
	shim: {
		'jQuery': {
			exports: '$'
		},
		'underscore': {
			exports: '_'
		}
	}
});


// Load modules and use them...
require(['app/config', 'ui/actions', 'ui/view', 'dsx/requests', 'dsx/responses', 'app/init'],
function(appConfig, uiActions, uiView, dsxRequests, dsxResponses, appInit) {
	// constructor for EBSP app...
	var EBSP = function() {
		var me = this;

		// app config (settings variables)...
		me.config = appConfig;

		// app ui functionality...
		me.ui = {
			actions: uiActions(me),
			view:    uiView(me)
		};

		// app dsx support functionality...
		me.dsx = {
			requests:  dsxRequests(me),
			responses: dsxResponses(me)
		};

		// app initializer...
		me.init = appInit(me);

	};

	// place application into global (window)
	// namespace, and launch application
	window.EBSP = new EBSP();
	window.EBSP.init();
});