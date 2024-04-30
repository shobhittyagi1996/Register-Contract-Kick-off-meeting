sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ],
    function(BaseController, JSONModel) {
      "use strict";
  
      return BaseController.extend("com.sap.registercontract.controller.View2", {
        onInit: function() {
            let adata = [
                {
                    "Name": "Laurent Dubois",
                    "JobTitle": "Accounts Payable Manager",
                    "Photo": "/images/Laurent_Dubois.png",
                    "Icon": "sap-icon://activity-individual",
                    "JobResponsibilities": "Plans, organizes and manages the operations and activities of an accounts payables.\nSupervises employees and monitors activities.\nFinal check of accounts payable payments and sign off.\nReporting to the head of finance.\n\n\"I am a diligent person. I put great attention to detail.\"",
                    "HireDate": "Date(1371020400000)"
                },
                {
                    "Name": "Sabine Mayer",
                    "JobTitle": "Configuration Expert",
                    "Photo": "/images/Sabine_Mayer.png",
                    "Icon": "sap-icon://settings",
                    "JobResponsibilities": "Implementing new Public Cloud ERP Financials system into his company and keeping it aligned with business.\nDuring the initial set-up of an ERP system: Customizing Financial Accounting settings such as organizational  structures, chart of accounts, and tax configuration (as part of implementation projects).\nDuring the ongoing maintenance of the configuration: Adapting the configuration to organizational and  process changes in business.\n\n\"I’m a versatile person. I keep the big picture in mind.\"",
                    "HireDate": "Date(1376290800000)"
                },
                {
                    "Name": "Alain Chevalier",
                    "JobTitle": "Credit Analyst",
                    "Photo": "/images/Alain_Chevalier.png",
                    "Icon": "sap-icon://manager-insight",
                    "JobResponsibilities": "Responsible for a high number of accounts (ca. 4000 customers).\nMonitor the credit risk of his customers.\nFocus on changes in his customer’s credit situation.\nRecurring checks on a regular basis.\nDecide on credit blocked sales orders.\nDecide on credit limits for his customers (according the company’s credit policy).\n\n\"I almost always find a pragmatic solution, that’s acceptable for my customers and my company.\"",
                    "HireDate": "Date(1332403200000)"
                },
                
            ];
            let atablemodel = new JSONModel (adata);
            this.getView().setModel(atablemodel, "myModel")
        }
      });
    }
  );
  