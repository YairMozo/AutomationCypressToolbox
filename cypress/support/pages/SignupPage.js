
class SignupPage {

  enterName(name) {
    // Clear any existing text and type the name
    cy.get('[data-qa="signup-name"]').clear().type(name);
    return this;
  }

  enterEmail(email) {
    // Clear any existing text and type the email
    cy.get('[data-qa="signup-email"]').clear().type(email);
    return this;
  }

  clickSignupButton() {
    // Click the signup button
    cy.get('[data-qa="signup-button"]').click();
    return this;
  }
}

export default new SignupPage(); 