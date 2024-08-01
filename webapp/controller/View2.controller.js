sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/ui/core/Fragment",
    ],
    function (BaseController, JSONModel,Fragment) {
        "use strict";

        return BaseController.extend("com.sap.registercontract.controller.View2", {
            onInit: function () {
                let adata = [
                    {
                        "kpo": "Klimenko, Yevgeniy",
                        "feedback": "",

                    },
                    {
                        "kpo": "Aslan Nabiyev",
                        "feedback": "",

                    }


                ];
                let atablemodel = new JSONModel(adata);
                this.getView().setModel(atablemodel, "myModel")


                let adata1 = [
                    {
                        "supplier": "Danara Kalenova",

                    },
                    {
                        "supplier": "Dmitriy Ekhlakov",

                    }


                ];
                let atablemodel1 = new JSONModel(adata1);
                this.getView().setModel(atablemodel1, "myModel1")





                let logModel = new JSONModel([{
                    " NO.": "",
                    "TOPICSDISCUSSED": "",
                    "KPOAttendeesComments": ".",
                    "SupplierComments": "",

                },
                ]);

                this.getView().setModel(logModel, "logModel");

                var oViewModel = new JSONModel({
                    isPA: true,
                    isSM: false,
                    isPASM: true
                });
                this.getView().setModel(oViewModel, "formModel");



                let ContractNo = [{
                    "cNo": "AP/X/24/2424",
                },
                {
                    "cNo": "AP/X/25/2434",
                },
                {
                    "cNo": "AP/X/24/2524",
                },
               ,
                ]

                let CNModel = new JSONModel(ContractNo);
                this.getView().setModel(CNModel, "con")


            },
            onPressMoM: function () {

                sap.m.MessageBox.confirm("Are you sure you want to confirm MOM?")
            },

            onAddRow: function () {
                var oModel = this.getView().getModel("logModel");
                var aItems = oModel.getData();

                aItems.push({
                    " NO.": "",
                    "TOPICSDISCUSSED": "",
                    "KPOAttendeesComments": ".",
                    "SupplierComments": "",
                });
                oModel.setData(aItems);
                oModel.refresh();
            },
            onSelect: function (oEvent) {
                var sSelectedButtonId = oEvent.getParameter("selectedIndex");

                if (sSelectedButtonId === 0) {
                    this.getView().getModel("formModel").setProperty("/isPA", true);
                    this.getView().getModel("formModel").setProperty("/isSM", false);
                    this.getView().getModel("formModel").setProperty("/isPASM", true);

                } else {
                    this.getView().getModel("formModel").setProperty("/isPA", false);
                    this.getView().getModel("formModel").setProperty("/isSM", true);
                    this.getView().getModel("formModel").setProperty("/isPASM", true);

                }
            },
            onAddRow1: function () {
                var oModel = this.getView().getModel("myModel");
                var aItems = oModel.getData();

                aItems.push({
                    "kpo": "",
                    "feedback": "",

                });
                oModel.setData(aItems);
                oModel.refresh();
            },
            onF4ContractNum: function () {
                if (!this._F4EcnDialog) {
                    Fragment.load({
                        id: this.getView().getId(),
                        name: "com.sap.registercontract.view.fragment.Contract",
                        controller: this
                    }).then(oDialog => {
                        this._F4EcnDialog = oDialog
                        this.getView().addDependent(oDialog)
                        oDialog.open()
                    })
                } else {
                    this._F4EcnDialog.open()
                }
            },
            onCancelF4ExistingContractNum: function () {
                this._F4EcnDialog.close();
            }
        });
    }
);
