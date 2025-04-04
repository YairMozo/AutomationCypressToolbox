
class DashboardPage {
  verifyAccountCreated() {
    // Check if the account created message is displayed
    cy.get('b').should('have.text', 'Account Created!');
    return this;
  }

  clickContinue() {
    // Click the continue button
    cy.get('[data-qa="continue-button"]').click();
    return this;
  }
}

export default new DashboardPage(); 