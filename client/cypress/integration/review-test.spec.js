describe('Review tests', function(){
    beforeEach(function(){
        cy.login();
        cy.server();
        cy.route({
            method: 'GET',
            url: 'https://localhost:5001/api/users/admin',
            status: 200,
            response: 'fixture:user.json' 
        });
        cy.visit('/reviews');
    });

    // it('Edit review invalid, should display error', function(){
    //     //multiple reviews, click on the first element
    //     cy.get('[data-cy=editReviewButton]').then($elements => {cy.wrap($elements[0]).click();});

    //     cy.get('[data-cy=scoreInput]').type('1');
    //     cy.get('[data-cy=saveButton]').click();
    //     cy.get('[data-cy=maxScoreError]').should('be.visible'); 
        
    // });

    // it('Create review empty, should display error', function(){
    //     //multiple reviews, click on the first element
    //     cy.visit('/search');

    //     cy.get('[data-cy=searchInput]').type('movie{enter}');
    //     cy.get('[data-cy=addReviewButton]').then($elements => {cy.wrap($elements[0]).click();});
    //     cy.get('[data-cy=scoreInput]').click();
    //     cy.get('[data-cy=reviewTextarea]').click();
    //     cy.get('[data-cy=scoreRequiredError]').should('be.visible'); 
        
    // });
    it('Create review empty, should display error', function(){
        //multiple reviews, click on the first element
        cy.visit('/search');

        cy.get('[data-cy=searchInput]').type('movie{enter}');
        cy.get('[data-cy=addReviewButton]').then($elements => {cy.wrap($elements[0]).click();});
        cy.get('[data-cy=scoreInput]').click();
        cy.get('[data-cy=reviewTextarea]').click();
        cy.get('[data-cy=scoreRequiredError]').should('be.visible'); 
        
    });

    // it('mock user get on error, should show error message', function() { 
    //     cy.server();
    //     cy.route({
    //         method: 'GET',
    //         url: 'https://localhost:5001/api/users/admin',
    //         status: 400,
    //         response : 'Error'
    //     });
    //     cy.visit('/reviews');

    //     //Toastr message
    //     cy.get('.toast-message').should('be.visible');

    // });

});