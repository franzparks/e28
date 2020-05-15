describe('recipes-page', () => {

    // Define a recipe we can use throughout our tests
    let recipe = {
        name: 'Strawberry Muffins',
        slug: 'strawberry-muffins'
    }

    it('shows all the recipes', () => {

        cy.visit('/')
        cy.contains('h2', 'Recipes')

        // Confirm we see at least 3 recipes
        cy.get('[data-test="recipe-name"]').its('length').should('be.gte', 3);

        // Confirm we see our test recipe
        cy.contains('[data-test="recipe-name"]', recipe.name)

        // Confirm we can click on a recipe and get to its individual page
        cy.get('[data-test="recipe-name"]').contains(recipe.name).click();

        // Confirm the test recipe page loads
        cy.contains('[data-test="recipe-name"]', recipe.name)
        cy.url().should('include', recipe.slug)

    })

    it('shows the correct recipe images', () => {

        cy.visit('/')

        cy.get('[data-test=recipe-image-' + recipe.slug + ']').should('have.attr', 'src').should('include', recipe.slug)
    })

})