describe('Register tests', function(){
    // it('Valid registration', function(){
    //     cy.visit('/');
    //     cy.get('[data-cy=registerButtonToggle]').click();


    //     cy.get('[data-cy=usernameInputRegister]').type('admin');
    //     cy.get('[data-cy=passwordInputRegister]').type('password');
    //     cy.get('[data-cy=confirmPasswordInputRegister]').type('password');

        
    //     cy.get('[data-cy=registerButton]').click();
    //     cy.url()
    //     .should('be.equal', 'https://localhost:4200/members');
    // });

    it('Invalid registration, username already exists', function(){
        cy.visit('/');
        cy.get('[data-cy=registerButtonToggle]').click();


        cy.get('[data-cy=usernameInputRegister]').type('wolf');
        cy.get('[data-cy=passwordInputRegister]').type('Password0');
        cy.get('[data-cy=confirmPasswordInputRegister]').type('Password0');
        
        cy.get('[data-cy=registerButton]').click();

        //Toastr message
        cy.get('.toast-message').should('be.visible');

        cy.url()
        .should('be.equal', 'https://localhost:4200/');
    });

    it('Invalid registration, password is too short', function(){
        cy.visit('/');
        cy.get('[data-cy=registerButtonToggle]').click();


        cy.get('[data-cy=usernameInputRegister]').type('vincent2');
        cy.get('[data-cy=passwordInputRegister]').type('Pa');
        cy.get('[data-cy=confirmPasswordInputRegister]').type('Pa');
        
        //Toastr message
        cy.get('[data-cy=passwordTooShort]').should('be.visible');

        cy.get('[data-cy=registerButton]').should('be.disabled');

        cy.url()
        .should('be.equal', 'https://localhost:4200/');
    });

    it('Invalid registration, password is too long', function(){
        cy.visit('/');
        cy.get('[data-cy=registerButtonToggle]').click();


        cy.get('[data-cy=usernameInputRegister]').type('vincent3');
        cy.get('[data-cy=passwordInputRegister]').type('Passsssssswwwwwwoooorddd');
        cy.get('[data-cy=confirmPasswordInputRegister]').type('Passsssssswwwwwwoooorddd');
        
        //Toastr message
        cy.get('[data-cy=passwordTooLong]').should('be.visible');

        cy.get('[data-cy=registerButton]').should('be.disabled');

        cy.url()
        .should('be.equal', 'https://localhost:4200/');
    });

    it('Invalid registration, password is not matching', function(){
        cy.visit('/');
        cy.get('[data-cy=registerButtonToggle]').click();


        cy.get('[data-cy=usernameInputRegister]').type('vincent4');
        cy.get('[data-cy=confirmPasswordInputRegister]').type('password2');
        cy.get('[data-cy=passwordInputRegister]').type('password1');

        //Toastr message
        cy.get('[data-cy=passwordNotMatching]').should('be.visible');

        cy.get('[data-cy=registerButton]').should('be.disabled');

        cy.url()
        .should('be.equal', 'https://localhost:4200/');
    });
});