sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/walkthrough/model/formatter"
], function (Controller, JSONModel, formatter) {
	"use strict";
	return Controller.extend("sap.ui.walkthrough.controller.InvoiceList",
	{

		formatter: formatter,

		onInit : function () {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		}
	});
});