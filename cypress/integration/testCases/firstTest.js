/// <reference types="cypress" />

describe("Bank automation", function(){

    this.beforeEach("visit site", function(){
        cy.visit('http://www.way2automation.com/angularjs-protractor/banking/#/login')
    })

    it("demo tes1", function(){
        cy.log("first test")
    })

    it("demo test2", function(){
        cy.log("second test")
    })

    it("demo test3", function(){
        cy.log("third test")
    })

    



})