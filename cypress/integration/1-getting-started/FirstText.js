/// <reference types="cypress"/>

describe("my first test", function(){

    it("verify title of page", function(){
         cy.visit("https://demo.nopcommerce.com/")
         cy.title().should('eq',"nopCommerce demo store")
         cy.get('#small-searchterms').type("Apple MacBook Pro 13-inch")
         cy.get('#small-search-box-form > .button-1').click()
         cy.get('.product-box-add-to-cart-button').click()
         cy.get('#add-to-cart-button-4').click()
         cy.wait(5000)
         cy.get('#topcartlink').click()
         cy.wait(3000)
         cy.get('.product-unit-price').contains("$1,800.00")
         cy.get('.product-subtotal').contains("$3,600.00")
    })
})