sap.ui.define([
    "sap/m/Button",
    "sap/ui/core/mvc/XMLView"
], function (XMLView) {
    "use strict";

    // new Button({
    //     text: "Hello World",
    // }).placeAt("content");

    XMLView.create({
        viewName: "sap.ui.demo.view.App"
    }).then(function (oView) {
        oView.placeAt("content");
    });
});