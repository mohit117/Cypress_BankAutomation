import HomePage from '../../pages/HomePage'

describe("Home Page Test Suite", function(){

    const hpObj = new HomePage();

    before(function(){

        cy.fixture('example').then(function(data){
            this.globalData = data
        })
    })

    this.beforeEach("visit site", function(){
       
        cy.visit(Cypress.env('testUrl'))
        
    })
   
    //how to validate title of the page?

    it("validate title", function(){
        //hpObj.getTitle().should('eq', "Protractor practice website - Banking App")
        hpObj.validatePageTitle(this.globalData.homePageTitle)
    })

     //how to validate visibility of elements?

    it("Elements visibility test",  function(){
        
        hpObj.validateElementsAvailability();
     
    })

    // how to validate navigation url?

    it("Navigation test to customer login", function(){

        hpObj.validateCustomerLoginUrl()
        
    })

    it("Navigation test to Bank Manager login", function(){

        hpObj.validateManagerLoginUrl()
       
    })

})