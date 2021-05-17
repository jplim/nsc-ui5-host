sap.ui.define([
	"./BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("nsc.ui5.host.controller.Main", {

		/* =========================================================== */
		/* lifecycle methods                                           */
		/* =========================================================== */

		/**
		 * Called when the main controller is instantiated.
		 * @public
		 */
		onInit: function () {
			var oServer = this.byId("idNscServer");
			oServer.initialize();
		}

	});
});