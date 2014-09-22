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
require(['app-config', 'ui/actions', 'ui/view', 'dsx/requests', 'dsx/responses', 'app-init'],
function(appConfig, uiActions, uiView, dsxRequests, dsxResponses, appInit) {
	// constructor for EBSP app...
	var EBSP = function() {

		// app config (settings variables)...
		this.config = new appConfig();

		// app ui functionality...
		this.ui = {
			actions: new uiActions(),
			view: new uiView()
		};

		// app dsx support functionality...
		this.dsx = .dsx = {
			requests: new dsxRequests(),
			responses: new dsxResponses()
		};

		// app initializer...
		this.init = new appInit();

	};

	// launch application...
	(new EBSP()).init();
});