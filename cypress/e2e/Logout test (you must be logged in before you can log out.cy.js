describe('Logout test (you must be logged in before you can log out)', () => {

    it('should log in and then log out, verifying that the user is redirected to the login page', () => {
    
        cy.visit('https://www.saucedemo.com/');

    
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include', '/inventory.html');
        cy.get('[data-test="logout-sidebar-link"]').should('exist');
        cy.get('[data-test="logout-sidebar-link"]').click
        cy.get('[id="logout_sidebar_link"]').click   
        
    });

});
