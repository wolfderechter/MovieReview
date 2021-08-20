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

    it('Edit review invalid score, should display max score error', function(){
        cy.get('[data-cy=editReviewButton]').then($elements => {cy.wrap($elements[0]).click();});

        cy.get('[data-cy=scoreInput]').type('101');
        cy.get('[data-cy=saveButton]').click();
        cy.get('[data-cy=maxScoreError]').should('be.visible'); 
        
    });

    it('Create review empty, should display error', function(){
        //multiple reviews, click on the first element
        cy.visit('/search');

        cy.get('[data-cy=searchInput]').type('movie{enter}');
        cy.get('[data-cy=addReviewButton]').then($elements => {cy.wrap($elements[0]).click();});
        cy.get('[data-cy=scoreInput]').click();
        cy.get('[data-cy=reviewTextarea]').click();
        cy.get('[data-cy=scoreRequiredError]').should('be.visible'); 
        
    });
    it('Create review invalid score, should display max score error', function(){
        //multiple reviews, click on the first element
        cy.visit('/search');

        cy.get('[data-cy=searchInput]').type('movie{enter}');
        cy.get('[data-cy=addReviewButton]').then($elements => {cy.wrap($elements[0]).click();});
        cy.get('[data-cy=scoreInput]').type('100');
        cy.get('[data-cy=reviewTextarea]').click();
        cy.get('[data-cy=maxScoreError]').should('be.visible'); 
        
    });

    it('Create review invalid score, should display min score error', function(){
        //multiple reviews, click on the first element
        cy.visit('/search');

        cy.get('[data-cy=searchInput]').type('movie{enter}');
        cy.get('[data-cy=addReviewButton]').then($elements => {cy.wrap($elements[0]).click();});
        cy.get('[data-cy=scoreInput]').type('-100');
        cy.get('[data-cy=reviewTextarea]').click();
        cy.get('[data-cy=minScoreError]').should('be.visible'); 
        
    });

});