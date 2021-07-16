
const objRepo = require('../locators/locators.json')

export default class ManagerPage{

    
    //elements
    getAddCustomerButton()
    {
        return cy.get(objRepo.managerPage.addCustomerButton)
    }
    
    getFirstName()
    {
        return cy.get(objRepo.managerPage.firstName)
    }

    getLastName()
    {
        return cy.get(objRepo.managerPage.lastName)
    }

    getPostCode()
    {
        return cy.get(objRepo.managerPage.postCode)
    }

    //Methods on the locators
    openCustomerInfoForm()
    {
        this.getAddCustomerButton().click();
    }

    enterCustomerInfo(firstName, lastName, postCode ){
        this.getFirstName().type(firstName);
        this.getLastName().type(lastName);
        this.getPostCode().type(postCode);
    }

    addCustomerToBank()
    {
        cy.get(objRepo.managerPage.addCustomerbtn).click()
    }
    
     //how to validate alear message?

    validateAlerMessage(aleartText)
    {
        cy.on('window:alert', function(message){

            expect(message).contains(aleartText)
        })
    }

}