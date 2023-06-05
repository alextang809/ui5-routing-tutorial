// sap.ui.define([
// 	"sap/ui/base/ManagedObject"
// ], function(
// 	ManagedObject
// ) {
// 	"use strict";

// 	return ManagedObject.extend("ui5-routing-tutorial.Component", {
// 	});
// });
sap.ui.define([
    "sap/ui/core/UIComponent",
], function (UIComponent) {
    "use strict";
    return UIComponent.extend("ui5-routing-tutorial.Component", {
        metadata: {
            "interfaces": ["sap.ui.core.IAsyncContentCreation"],
            "rootView": {
                "viewName": "ui5-routing-tutorial.view.App",
                "type": "XML",
                "id": "app"
            }
        },
        init: function () {
            UIComponent.prototype.init.apply(this, arguments);
            this.getRouter().initialize();
        }
    })
});
