describe('Logout test', function() {
    beforeEach(function () {
        cy.login();
      });

    it('Log out', function() {
        cy.visit('/reviews')
        cy.get('[data-cy=dropdownToggle]').click();
        cy.get('[data-cy=logoutButton]').click();

        // cy.get('[data-cy=loginTitle]').should(l => expect(l).to.contain('Login'));   
        cy.get('[data-cy=loginButton]').should('be.visible');
        cy.url().should('be.equal', 'https://localhost:4200/');

    });
});