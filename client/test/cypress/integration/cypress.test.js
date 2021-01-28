const pageUrl = 'http://localhost:3000';

describe('Cypress tests', () => {
    it(`home page`, () => {
        cy.visit(pageUrl);
        cy.contains('Home Page').should('be.visible')
    });

    it('registration', async () => {
        const login = 'kek';
        const password = 'kek';
        cy.visit(pageUrl + '/registration');
        cy.get('input#input-login').type(login);
        cy.get('input#input-password').type(password);
        cy.get('#submit-button').click();
        cy.wait(100);
        cy.contains('You are logged in as' + login).should('be.visible')
    });

    it('authorization fail', async () => {
        const login = 'الْأَبْجَدِيَّة الْعَرَبِيَّة';
        const password = 'الْحُرُوف الْعَرَبِيَّة';
        cy.visit(pageUrl + '/login');
        cy.get('input#input-login').type(login);
        cy.get('input#input-password').type(password);
        cy.get('#submit-button').click();
        cy.wait(100);
        cy.contains('Failed to login').should('be.visible')
    });

    it('authorization after registration', async () => {
        const login = 'new login';
        const password = 'new password';
        // register new user
        cy.visit(pageUrl + '/registration');
        cy.get('input#input-login').type(login);
        cy.get('input#input-password').type(password);
        cy.get('#submit-button').click();
        cy.wait(100);
        cy.contains('You are logged in as' + login).should('be.visible');

        //log out
        cy.get('#logout-button').click();
        cy.wait(100);
        cy.contains('Home Page').should('be.visible');

        //try to log in
        cy.visit(pageUrl + '/login');
        cy.get('input#input-login').type(login);
        cy.get('input#input-password').type(password);
        cy.get('#submit-button').click();
        cy.wait(100);
        cy.contains('You are logged in as' + login).should('be.visible');
    });


    it('about page', async () => {
        cy.visit(pageUrl + '/about');
        cy.contains('About Page').should('be.visible')
    });
});