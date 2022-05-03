// home.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


context('Fire Protection', () => {
    it('Should open Google browser', () => {
        cy.visit('https://google.co.nz')

        cy.get('#input').type('fire pro').should('have.value', 'fire pro')

    })
})