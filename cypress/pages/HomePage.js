
//reading the locators.json file

const objRepo = require('../locators/locators.json')

export default class HomePage{

    //getting all elements

    getCustomerLoginButton()
    {
        return cy.get(objRepo.homePageLocators.customerLoginButton)
    }

    getBankManagerLoginButton()
    {
        return cy.get(objRepo.homePageLocators.bankManagerLoginButton)
    }

    getHomeButton()
    {
        return cy.get(objRepo.homePageLocators.homeButton)
    }

    getMainHeading()
    {
        return cy.get(objRepo.homePageLocators.mainHeading)
    }

    getTitle()
    {
        return cy.title()
    }

    //methods to work on elements

    clickOnCustomerLoginButton()
    {
        this.getCustomerLoginButton().click();
    }

    clickOnBankManagerLoginButton()
    {
        this.getBankManagerLoginButton().click()
    }

    validatePageTitle(title)
    {
        this.getTitle().should('eq', title)
    }

    validateElementsAvailability(){
        this.getHomeButton().should('be.visible')
        this.getCustomerLoginButton().should('be.visible')
        this.getBankManagerLoginButton().should('be.visible')
        this.getMainHeading().should('be.visible')
    }

    validateCustomerLoginUrl()
    {
        this.clickOnCustomerLoginButton();
        cy.url().should('contain', '/customer')

    }

    validateManagerLoginUrl()
    {
        this.clickOnBankManagerLoginButton();
        cy.url().should('contain', '/manager')

    }

}

