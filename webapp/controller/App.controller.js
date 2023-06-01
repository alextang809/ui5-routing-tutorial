sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";
    return Controller.extend("ui5-routing-tutorial.controller.App", {
        incrementBy1 : function () {
            let myTextElement = this.getView().byId("counter");
            let myNum = parseInt(myTextElement.getText());
            let myNewNum = myNum + 1;
            myTextElement.setText(myNewNum);
        },
        incrementBy5 : function () {
            let myTextElement = this.getView().byId("counter");
            let myNum = parseInt(myTextElement.getText());
            let myNewNum = myNum + 5;
            myTextElement.setText(myNewNum);
        },
        onInit: function () {
            let oModel = new JSONModel(
                sap.ui.require.toUrl("i5-routing-tutorial/Data.json")
            );
            this.getView().setModel(oModel);
        }
    });
});