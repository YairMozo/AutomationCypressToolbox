class DashboardPage {
  selectors = {
    message: 'b',
    continueButton: '[data-qa="continue-button"]'
  };

  verifyMessage(expectedText) {
    cy.get(this.selectors.message).should('have.text', expectedText);
    return this;
  }

  clickContinue() {
    cy.get(this.selectors.continueButton).click();
    return this;
  }

  verifyAccountCreated() {
    return this.verifyMessage('Account Created!');
  }

  verifyAccountDelete() {
    return this.verifyMessage('Account Deleted!');
  }


  clickContinueDelete() {
    return this.clickContinue();
  }
}

export default new DashboardPage();
