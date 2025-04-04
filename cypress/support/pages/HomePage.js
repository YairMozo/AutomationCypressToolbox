/**
 * HomePage class
 * This class contains methods for interacting with the home page of the website
 */
class HomePage {
  /**
   * Navigate to the website
   * @returns {HomePage} Returns the current HomePage instance for method chaining
   */
  visit() {
    // Visit the website URL
    cy.visit('https://automationexercise.com/');
    return this;
  }

  /**
   * Click on the register link in the navigation menu
   * @returns {HomePage} Returns the current HomePage instance for method chaining
   */
  clickRegister() {
    // Click on the register link in the navigation menu
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    return this;
  }
}

// Export a new instance of the HomePage class
export default new HomePage(); 