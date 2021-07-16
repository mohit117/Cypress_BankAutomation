
import HomePage from '../../pages/HomePage'
import ManagerPage from '../../pages/ManagerPage'


describe("Bank Manageer Page Test Suite", function(){

    const hpObj = new HomePage()
    const mgrPageObj = new ManagerPage()

    before(function(){

        cy.fixture('example').then(function(data){
            this.globalData = data
        })
    })
    
    beforeEach("visit site", function(){
       
        cy.visit(Cypress.env('testUrl'))
        
    })

//how to validate alert message?

it("Add Customer Details", function(){

    hpObj.clickOnBankManagerLoginButton()
    mgrPageObj.openCustomerInfoForm()
    mgrPageObj.enterCustomerInfo(this.globalData.firstName, this.globalData.lastName, this.globalData.postCode)
    mgrPageObj.addCustomerToBank()
    mgrPageObj.validateAlerMessage(this.globalData.alertMessage)
   
})



})