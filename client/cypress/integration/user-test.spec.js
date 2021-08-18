describe('User tests', function(){
    beforeEach(function(){
        cy.login();
    });

    it('Mock user get, should display reviews in the list', function(){
        cy.server();
        cy.route({
            method: 'GET',
            url: 'https://localhost:5001/api/users/admin',
            status: 200,
            response: 'fixture:user.json' 
        });
        cy.visit('/reviews');
        cy.get('[data-cy=reviewCard').should('have.length', 2);
    });

    it('mock user get on error, should show error message', function() { 
        cy.server();
        cy.route({
            method: 'GET',
            url: 'https://localhost:5001/api/users/admin',
            status: 400,
            response : 'Error'
        });
        cy.visit('/reviews');

        //Toastr message
        cy.get('.toast-message').should('be.visible');

    });

    it('Mock user get, should display watchlist', function(){
        cy.server();
        cy.route({
            method: 'GET',
            url: 'https://localhost:5001/api/users/admin',
            status: 200,
            response: 'fixture:user.json' 
        });
        cy.visit('/watchlist');
        cy.get('[data-cy=watchlistCard').should('have.length', 1);
    });
});