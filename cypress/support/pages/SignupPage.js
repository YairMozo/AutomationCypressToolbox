/**
 * SignupPage class
 * This class contains methods for interacting with the initial signup form
 */
class SignupPage {
  /**
   * Enter name in the signup form
   * @param {string} name - The name to enter
   * @returns {SignupPage} Returns the current SignupPage instance for method chaining
   */
  enterName(name) {
    // Clear any existing text and type the name
    cy.get('[data-qa="signup-name"]').clear().type(name);
    return this;
  }

  /**
   * Enter email in the signup form
   * @param {string} email - The email to enter
   * @returns {SignupPage} Returns the current SignupPage instance for method chaining
   */
  enterEmail(email) {
    // Clear any existing text and type the email
    cy.get('[data-qa="signup-email"]').clear().type(email);
    return this;
  }

  /**
   * Click the signup button to proceed to the registration form
   * @returns {SignupPage} Returns the current SignupPage instance for method chaining
   */
  clickSignupButton() {
    // Click the signup button
    cy.get('[data-qa="signup-button"]').click();
    return this;
  }
}

// Export a new instance of the SignupPage class
export default new SignupPage(); 