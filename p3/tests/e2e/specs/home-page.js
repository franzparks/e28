describe('home-page', () => {
    it('visits the homepage', () => {

        // Ref: /tests/e2e/support/commands.js

        cy.visit('/')
        cy.contains('h2', 'Recipes')

        // Confirm we see at least 3 recipes
        cy.get('[data-test="recipe"]').its('length').should('be.gte', 3);
    })
})