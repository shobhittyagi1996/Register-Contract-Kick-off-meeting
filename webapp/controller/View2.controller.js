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

            let logModel = new JSONModel([{
                "logDateTime": "2024-04-01",
                "logTitle": "KPO Dept Commented",
                "logComments": "Point No 3 in MOM adjusted.",
                "loggedBy": "User@kpo.kz",

            },
            {
                "logDateTime": "2024-04-05",
                "logTitle": "Supplier Commented",
                "logComments": "Describe more on point 3 in MOM Attached",
                "loggedBy": "supplier@gmail.com",

            },
            {
                "logDateTime": "2024-04-09",
                "logTitle": "Process Started",
                "logComments": "MoM Registered",
                "loggedBy": "VQ@kpo.kz",

            }]);

            this.getView().setModel(logModel, "logModel");
        },
        onPressMoM:function(){

            sap.m.MessageBox.confirm("Are you sure you want to confirm MOM?")
        },
        onSubmitMOM:function(){
            let oDataModel = this.getOwnerComponent().getModel();
            oDataModel.create("/sendEmail",{
                sEmailId:"chandh@terralink-global.com",
                sSubject:"KPO Shared Minute of Meeting for Confirmation",
                sBody:`Dear Vendor, KPO has shared MOM for your review and confirmation. Please click on this link for review MOM <a href="https://www.google.com">Click Here</a>`
            },{

                success:function(res){
                    alert("success");
                },
                error:function(error){
                    alert("Error");
                }



            })


            // let oDataModel = this.getOwnerComponent().getModel();
            // var oActionBindingContext = oDataModel.bindContext("/sendEmail(...)");
            // oActionBindingContext.setParameter("sEmailId","chandh@terralink-global.com");
            // oActionBindingContext.setParameter("sSubject","KPO Related Minute of Meeting Demo");
            // oActionBindingContext.setParameter("sBody","Hi Hem, PFB");
            // oActionBindingContext.execute().then(function(){
            //     sap.m.MessageBox.information("The Email has successfully Sent");
               
            // }).catch(function(error){
            //     sap.m.MessageBox.error("Error starting instance:");

            // })
        }
      });
    }
  );
  