/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"numen/apps/Teste/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});