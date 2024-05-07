sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.sap.registercontract.controller.View1", {
            onInit: function () {
                let data =[
                    {
                        "meetingdetail": "Kick Off Meeting for Contract CON1023",
                        "contractnumber": "CON1023",
                        "supplier": "ABC Manufacturing",
                        "status": "Draft",
                        "dor":"2024-04-30"
                    },
                    {
                        "meetingdetail": "Kick Off Meeting for Contract CON2056",
                        "contractnumber": "CON2056",
                        "supplier": "XYZ Technologies",
                        "status": "Confirmed",
                        "dor":"2023-04-30"
                    },
                    {
                        "meetingdetail": "Kick Off Meeting for Contract CON3098",
                        "contractnumber": "CON3098",
                        "supplier": "LMN Services",
                        "status": "Sent to Supplier",
                        "dor":"2024-05-01"
                    },
                    {
                        "meetingdetail": "Kick Off Meeting for Contract CON4102",
                        "contractnumber": "CON4102",
                        "supplier": "PQR Solutions",
                        "status": "Confirmed",
                        "dor":"2024-04-30"
                    }
                ]
                
                let tabelmodel = new JSONModel(data);
                this.getView().setModel(tabelmodel, "myModel");

            },
            onRegister: function(){
                this.getOwnerComponent().getRouter().navTo("RouteView2");

            }
        });
    });
