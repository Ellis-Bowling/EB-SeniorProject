// Load and configure libraries...
require.config({
	paths: {
		'jQuery': 'vendor/jquery-1.11.1',
		'underscore': 'vendor/underscore-1.7.0'
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
require(['app/config', 'ui/actions', 'ui/view', 'dsx/requests', 'dsx/responses', 'jQuery', 'underscore'],
function(appConfig, uiActions, uiView, dsxRequests, dsxResponses, appInit, $, _) {
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

		// app pre-DOM-Ready initializer...
		me.preDomReadyInit = function() {
			console.log('preDomReadyInit() on ', me);
		};

		// app on-DOM-Ready initializer...
		me.onDomReadyInit = function() {
			console.log('onDomReadyInit() on ', me);
			me.ui.view.initView();
		};
	};

	// place application into global (window) namespace
	window.EBSP = new EBSP();

	// intialize everything that can be initialized prior to DOM Ready
	window.EBSP.preDomReadyInit();

	// ...aaand, on DOM Ready, initialize stuff that's DOM-dependent
	$(document).ready(function() {
		window.EBSP.onDomReadyInit();
	});
});