describe('Login Tests', function(){
    it('Valid login', function(){
        cy.visit('/');
        cy.get('[data-cy=usernameInput]').type('wolf');
        cy.get('[data-cy=passwordInput]').type('password');
        cy.get('[data-cy=loginButton]').click();

        cy.url()
      .should('be.equal', 'https://localhost:4200/reviews');
    });


    it('Invalid login, wrong password', function() {
        cy.visit('/');
        cy.get('[data-cy=usernameInput]').type('wolf');
        cy.get('[data-cy=passwordInput]').type('wrongpassword');
        cy.get('[data-cy=loginButton]').click();
        
        //Toastr message
        cy.get('.toast-message').should('be.visible');

        cy.url()
      .should('be.equal', 'https://localhost:4200/');

    });

    it('Invalid login, wrong username', function() {
        cy.visit('/');
        cy.get('[data-cy=usernameInput]').type('wolffff');
        cy.get('[data-cy=passwordInput]').type('password');
        cy.get('[data-cy=loginButton]').click();
        
        //Toastr message
        cy.get('.toast-message').should('be.visible');

        cy.url()
      .should('be.equal', 'https://localhost:4200/');

    });

});