sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/ui/core/Fragment",
        "com/sap/registercontract/controller/Utils",
        "sap/m/ColumnListItem",
    ],
    function (BaseController, JSONModel, Fragment, Utils, ColumnListItem) {
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


                let adata2 = [
                    {
                        "name": "Danara Kalenova",
                        "email": "xyz@gmail.com"

                    },


                ];
                let atablemodel2 = new JSONModel(adata2);
                this.getView().setModel(atablemodel2, "myModel2")


                let agendaData = [
                    {
                        "agenda": "Safety Moment",
                        "icon": "sap-icon://ppt-attachment"

                    },
                    {
                        "agenda": "Form of contract",
                        "icon": "sap-icon://pdf-attachment"

                    },
                    {
                        "agenda": "Compensation and payment",
                        "icon": "sap-icon://ppt-attachment"

                    },


                ];
                let agendaMdel = new JSONModel(agendaData);
                this.getView().setModel(agendaMdel, "agendaMdel")





                let logModel = new JSONModel([{
                    "NO": "1",
                    "TOPICSDISCUSSED": "",
                    "KPOAttendeesComments": "",
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


                var today = new Date();
                var tomorrow = new Date();
                tomorrow.setDate(today.getDate() + 1);

                function getNextWeekday(date) {
                    var day = date.getDay();
                    if (day === 6) {
                        date.setDate(date.getDate() + 2); 
                    } else if (day === 0) {
                        date.setDate(date.getDate() + 1); 
                    }
                    return date;
                }

                var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "yyyy-MM-dd" });

                var aWeekDates = [];
                for (var i = 0; i < 5; i++) {
                    var postDate = getNextWeekday(tomorrow);
                    aWeekDates.push(oDateFormat.format(postDate));
                    tomorrow = new Date(postDate);
                    tomorrow.setDate(tomorrow.getDate() + 1);
                }

                this.getView().byId("datePicker1").setValue(aWeekDates[0]);
                this.getView().byId("datePicker2").setValue(aWeekDates[1]);
                this.getView().byId("datePicker3").setValue(aWeekDates[2]);
                this.getView().byId("datePicker4").setValue(aWeekDates[3]);
                this.getView().byId("datePicker5").setValue(aWeekDates[4]);



            },
            onPressMoM: function () {

                sap.m.MessageBox.confirm("Are you sure you want to confirm MOM?")
            },

            onAddRow: function () {
                debugger
                var oModel = this.getView().getModel("logModel");
                var aItems = oModel.getData();



                var nextNumber = aItems.length + 1;

                aItems.push({
                    "NO": nextNumber,
                    "TOPICSDISCUSSED": "",
                    "KPOAttendeesComments": "",
                    "SupplierComments": "",
                });
                console.log(aItems)
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
            },

            moveToAvailableProductsTable: function () {
                var oSelectedProductsTable = Utils.getSelectedProductsTable(this);
                debugger
                Utils.getSelectedItemContext(oSelectedProductsTable, function (oSelectedItemContext, iSelectedItemIndex) {
                    // reset the rank property and update the model to refresh the bindings
                    var oProductsModel = oSelectedProductsTable.getModel();
                    oProductsModel.setProperty("Rank", Utils.ranking.Initial, oSelectedItemContext);

                    // select the previously selected position
                    var aItemsOfSelectedProductsTable = oSelectedProductsTable.getItems();
                    var oPrevItem = aItemsOfSelectedProductsTable[Math.min(iSelectedItemIndex, aItemsOfSelectedProductsTable.length - 1)];
                    if (oPrevItem) {
                        oPrevItem.setSelected(true);
                    }
                });
            },

            onDropSelectedProductsTable: function (oEvent) {
                var oDraggedItem = oEvent.getParameter("draggedControl");
                var oDraggedItemContext = oDraggedItem.getBindingContext();
                if (!oDraggedItemContext) {
                    return;
                }

                var oRanking = Utils.ranking;
                var iNewRank = oRanking.Default;
                var oDroppedItem = oEvent.getParameter("droppedControl");

                if (oDroppedItem instanceof ColumnListItem) {
                    // get the dropped row data
                    var sDropPosition = oEvent.getParameter("dropPosition");
                    var oDroppedItemContext = oDroppedItem.getBindingContext();
                    var iDroppedItemRank = oDroppedItemContext.getProperty("Rank");
                    var oDroppedTable = oDroppedItem.getParent();
                    var iDroppedItemIndex = oDroppedTable.indexOfItem(oDroppedItem);

                    // find the new index of the dragged row depending on the drop position
                    var iNewItemIndex = iDroppedItemIndex + (sDropPosition === "After" ? 1 : -1);
                    var oNewItem = oDroppedTable.getItems()[iNewItemIndex];
                    if (!oNewItem) {
                        // dropped before the first row or after the last row
                        iNewRank = oRanking[sDropPosition](iDroppedItemRank);
                    } else {
                        // dropped between first and the last row
                        var oNewItemContext = oNewItem.getBindingContext();
                        iNewRank = oRanking.Between(iDroppedItemRank, oNewItemContext.getProperty("Rank"));
                    }
                }

                // set the rank property and update the model to refresh the bindings
                var oSelectedProductsTable = Utils.getSelectedProductsTable(this);
                var oProductsModel = oSelectedProductsTable.getModel();
                oProductsModel.setProperty("Rank", iNewRank, oDraggedItemContext);
            },

            moveSelectedItem: function (sDirection) {
                var oSelectedProductsTable = Utils.getSelectedProductsTable(this);
                Utils.getSelectedItemContext(oSelectedProductsTable, function (oSelectedItemContext, iSelectedItemIndex) {
                    var iSiblingItemIndex = iSelectedItemIndex + (sDirection === "Up" ? -1 : 1);
                    var oSiblingItem = oSelectedProductsTable.getItems()[iSiblingItemIndex];
                    var oSiblingItemContext = oSiblingItem.getBindingContext();
                    if (!oSiblingItemContext) {
                        return;
                    }

                    // swap the selected and the siblings rank
                    var oProductsModel = oSelectedProductsTable.getModel();
                    var iSiblingItemRank = oSiblingItemContext.getProperty("Rank");
                    var iSelectedItemRank = oSelectedItemContext.getProperty("Rank");

                    oProductsModel.setProperty("Rank", iSiblingItemRank, oSelectedItemContext);
                    oProductsModel.setProperty("Rank", iSelectedItemRank, oSiblingItemContext);

                    // after move select the sibling
                    oSelectedProductsTable.getItems()[iSiblingItemIndex].setSelected(true).focus();
                });
            },

            moveUp: function (oEvent) {
                this.moveSelectedItem("Up");
                oEvent.getSource().focus();
            },

            moveDown: function (oEvent) {
                this.moveSelectedItem("Down");
                oEvent.getSource().focus();
            },

            onBeforeOpenContextMenu: function (oEvent) {
                oEvent.getParameters().listItem.setSelected(true);
            }
        });
    },




);
