/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"nsc/ui5/host/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});