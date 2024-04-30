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
                        "meetingdetail": "Weekly progress review meeting",
                        "contractnumber": "CON1023",
                        "supplier": "ABC Manufacturing"
                    },
                    {
                        "meetingdetail": "Monthly performance evaluation session",
                        "contractnumber": "CON2056",
                        "supplier": "XYZ Technologies"
                    },
                    {
                        "meetingdetail": "Quarterly financial audit meeting",
                        "contractnumber": "CON3098",
                        "supplier": "LMN Services"
                    },
                    {
                        "meetingdetail": "Annual strategy planning conference",
                        "contractnumber": "CON4102",
                        "supplier": "PQR Solutions"
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
