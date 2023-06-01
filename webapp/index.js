sap.ui.define([
    "sap/m/Button",
], function (Button, XMLView) {
    "use strict";

    new Button({
        text: "Hello World",
    }).placeAt("content");

    XMLView.create({
        viewName: "sap.ui.demo.App"
    }).then(function (oView) {
        oView.placeAt("content");
    });
});