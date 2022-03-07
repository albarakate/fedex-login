describe('Login Page - E2E tests', () => {
  beforeEach(() => {
    cy.visit('/client/login');
  });

  it("Should display error message 'Field required' when field are empty and click on 'Login' button", () => {
    // Click on submit button
    cy.get('[data-cy=submitLoginForm]').click();

    // Check if there is an error message for all fields
    cy.get('[data-cy=first-name-error]').should('be.visible');
    cy.get('[data-cy=last-name-error]').should('be.visible');
    cy.get('[data-cy=email-error-required]').should('be.visible');
    cy.get('[data-cy=password-error-required]').should('be.visible');
  });

  it("Should display error message 'Email is not valid' when not valid email is filled and click on 'Login' button", () => {
    // Fill fields
    cy.get('[data-cy=first-name]').type('James');
    cy.get('[data-cy=last-name]').type('Dupont');
    cy.get('[data-cy=email]').type('james.dupontgmailcom');

    // Pause
    cy.wait(500);

    // Click on submit button
    cy.get('[data-cy=submitLoginForm]').click();

    // Check error message - email
    cy.get('[data-cy=email-error-not-valid]').should('be.visible');
  });

  it("Should display all error messages when not valid password is filled and click on 'Login' button", () => {
    // Fill fields
    cy.get('[data-cy=first-name]').type('James');
    cy.get('[data-cy=last-name]').type('Dupont');
    cy.get('[data-cy=email]').type('james.dupont@gmailcom');

    // ------------------
    // 1 - test minlength
    // ------------------
    cy.get('[data-cy=password]').type('MinLen');
    cy.wait(200);
    cy.get('[data-cy=submitLoginForm]').click();
    cy.get('[data-cy=password-error-min-length]').should('be.visible');
    cy.get('[data-cy=password]').clear();

    // ------------------
    // 2 - test lower and upper case
    // ------------------
    cy.get('[data-cy=password]').type('lowerupper');
    cy.wait(200);
    cy.get('[data-cy=submitLoginForm]').click();
    cy.get('[data-cy=password-error-loweruppper]').should('be.visible');
    cy.get('[data-cy=password]').clear();

    // ------------------
    // 2 - password should not contains firstname or username
    // ------------------
    cy.get('[data-cy=password]').type('james2022');
    cy.wait(200);
    cy.get('[data-cy=submitLoginForm]').click();
    cy.get('[data-cy=password-error-not-valid]').should('be.visible');
    cy.get('[data-cy=password]').clear();
  });

  it("Should land in home page when no errors and click on 'Login' button", () => {
    // Fill fields
    cy.get('[data-cy=first-name]').type('James');
    cy.get('[data-cy=last-name]').type('Dupont');
    cy.get('[data-cy=email]').type('james.dupont@gmail.com');
    cy.get('[data-cy=password]').type('FedexTest2022');

    // Click on submit button
    cy.get('[data-cy=submitLoginForm]').click();

    // Tests
    cy.url().should('eq', 'http://localhost:4200/');
    cy.get('[data-cy=home-logout]').should('be.visible');

    // We can add tests to check the data .....
  });

  it("Should land in login page when click on 'Logout' in home page", () => {
    // Fill fields
    cy.get('[data-cy=first-name]').type('James');
    cy.get('[data-cy=last-name]').type('Dupont');
    cy.get('[data-cy=email]').type('james.dupont@gmail.com');
    cy.get('[data-cy=password]').type('FedexTest2022');

    // Click on submit button
    cy.get('[data-cy=submitLoginForm]').click();

    // Click on 'log out'
    cy.wait(500);
    cy.get('[data-cy=home-logout]').click();

    // Test if we are in login page
    cy.url().should('eq', 'http://localhost:4200/client/login');
  });
});
