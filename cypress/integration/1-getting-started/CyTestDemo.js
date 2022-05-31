/// <reference types='cypress'/>

describe("Radio Buttons and input box", function(){
    it("" , function(){
        cy.visit("https://demo.guru99.com/test/newtours/index.php")
        cy.url().should('include','newtours')
        cy.get(':nth-child(2) > [width="112"] > input').should('be.visible').should('be.enabled').type("vijay")  // username 
        cy.get(':nth-child(3) > [width="112"] > input').should('be.visible').should('be.enabled').type("V!j@y121@")  // password 
        cy.get('div > input').click()
        cy.wait(2000)
        cy.get(':nth-child(2) > [width="80"] > a').click()  // click flights button
        cy.title().should('include', 'Flight')  // title verification
        cy.wait(2000)


        //radio buttons
        cy.get('input[value="roundtrip"]').should('be.visible').should('be.checked')
        cy.get('input[value="oneway"]').should('be.visible').should('not.be.checked').click()

        cy.get('input[name="findFlights"]').should('be.visible').should('be.enabled').click()

    })
})