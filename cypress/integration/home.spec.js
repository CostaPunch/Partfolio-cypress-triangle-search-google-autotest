// home.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test






context('Google open', () => {
    it('Should open Google browser', () => {
        cy.visit('https://google.co.nz')
        cy.contains('No thanks').click()
    })
})


// Everything is disabled below due to testing  "No thanks" button

//context('ENTER button', () => {
//it('Should type fire pro and trigger enter', () => {
//  cy.get('[type="text"]').type('fire pro{enter}')
// })
//})
