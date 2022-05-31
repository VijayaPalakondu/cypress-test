/// <reference types='cypress'/>

describe("CheckBox testing" ,function(){

    it('checkBox', function(){
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('input[type="checkbox"]').check('Cricket')
        cy.get('#Skills').select('Analytics').should('have.value', 'Analytics')

        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('Catalan').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('French').click()
        cy.get('#basicBootstrapForm > :nth-child(7)').click()

        cy.get('span[role="combobox"]').click({ force : true})
        cy.get('.select2-search__field').type('India')
        cy.get('.select2-search__field').type('{enter}')


    })
})