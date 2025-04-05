
class HomePage {
  // Selectors for the home page
  selectors = {
    navMenuItem: (position) => `.shop-menu > .nav > :nth-child(${position}) > a`
  };
  // Methods for interacting with the home page
  visit() {
    cy.visit('https://automationexercise.com/');
    return this;
  }

  clickNavItem(position) {
    cy.get(this.selectors.navMenuItem(position)).click();
    return this;
  }
  // Click on the "Register / Login" button
  clickRegister() {
    return this.clickNavItem(4);
  }
  // Click on the "Delete Account" button 
  clickDeleteAccount() {
    return this.clickNavItem(5);
  }
}

export default new HomePage();
