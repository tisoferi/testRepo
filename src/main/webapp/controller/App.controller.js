sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sap.ui.Walkthrough.controller.App", {
		onShowHello : function () {
			// show a native JavaScript alert
			alert("Hello World");
		}
	});
});