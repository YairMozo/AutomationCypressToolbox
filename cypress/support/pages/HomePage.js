
class HomePage {

  visit() {
    // Visit the website URL
    cy.visit('https://automationexercise.com/');
    return this;
  }

  clickRegister() {
    // Click on the register link in the navigation menu
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    return this;
  }
}

export default new HomePage(); 