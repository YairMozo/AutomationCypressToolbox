/**
 * DashboardPage class
 * This class contains methods for verifying successful registration
 */
class DashboardPage {
  /**
   * Verify that the account created message is displayed
   * @returns {DashboardPage} Returns the current DashboardPage instance for method chaining
   */
  verifyAccountCreated() {
    // Check if the account created message is displayed
    cy.get('b').should('have.text', 'Account Created!');
    return this;
  }

  /**
   * Click continue button after successful registration
   * @returns {DashboardPage} Returns the current DashboardPage instance for method chaining
   */
  clickContinue() {
    // Click the continue button
    cy.get('[data-qa="continue-button"]').click();
    return this;
  }
}

// Export a new instance of the DashboardPage class
export default new DashboardPage(); 