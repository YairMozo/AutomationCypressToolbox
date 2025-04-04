
class RegistrationFormPage {
  /**
   * Select gender (male or female)
   * @param {string} gender - The gender to select ('male' or 'female')
   * @returns {RegistrationFormPage} Returns the current RegistrationFormPage instance for method chaining
   */
  selectGender(gender) {
    if (gender === 'male') {
      // Select male gender
      cy.get('#id_gender1').check();
    } else {
      // Select female gender
      cy.get('#id_gender2').check();
    }
    return this;
  }

  /**
   * Enter password
   * @param {string} password - The password to enter
   * @returns {RegistrationFormPage} Returns the current RegistrationFormPage instance for method chaining
   */
  enterPassword(password) {
    // Clear any existing text and type the password
    cy.get('[data-qa="password"]').clear().type(password);
    return this;
  }

  /**
   * Select date of birth
   * @param {string} day - The day of birth
   * @param {string} month - The month of birth
   * @param {string} year - The year of birth
   * @returns {RegistrationFormPage} Returns the current RegistrationFormPage instance for method chaining
   */
  selectDateOfBirth(day, month, year) {
    // Select day, month, and year from dropdown menus
    cy.get('[data-qa="days"]').select(day);
    cy.get('[data-qa="months"]').select(month);
    cy.get('[data-qa="years"]').select(year);
    return this;
  }

  /**
   * Check newsletter and special offers checkboxes
   * @returns {RegistrationFormPage} Returns the current RegistrationFormPage instance for method chaining
   */
  checkNewsletterAndOffers() {
    // Check the newsletter and special offers checkboxes
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    return this;
  }

  /**
   * Enter first name
   * @param {string} firstName - The first name to enter
   * @returns {RegistrationFormPage} Returns the current RegistrationFormPage instance for method chaining
   */
  enterFirstName(firstName) {
    // Clear any existing text and type the first name
    cy.get('[data-qa="first_name"]').clear().type(firstName);
    return this;
  }

  /**
   * Enter last name
   * @param {string} lastName - The last name to enter
   * @returns {RegistrationFormPage} Returns the current RegistrationFormPage instance for method chaining
   */
  enterLastName(lastName) {
    // Clear any existing text and type the last name
    cy.get('[data-qa="last_name"]').clear().type(lastName);
    return this;
  }

  /**
   * Enter company name
   * @param {string} company - The company name to enter
   * @returns {RegistrationFormPage} Returns the current RegistrationFormPage instance for method chaining
   */
  enterCompany(company) {
    // Clear any existing text and type the company name
    cy.get('[data-qa="company"]').clear().type(company);
    return this;
  }

  /**
   * Enter address
   * @param {string} address - The address to enter
   * @returns {RegistrationFormPage} Returns the current RegistrationFormPage instance for method chaining
   */
  enterAddress(address) {
    // Clear any existing text and type the address
    cy.get('[data-qa="address"]').clear().type(address);
    return this;
  }

  /**
   * Select country
   * @param {string} country - The country to select
   * @returns {RegistrationFormPage} Returns the current RegistrationFormPage instance for method chaining
   */
  selectCountry(country) {
    // Select the country from the dropdown menu
    cy.get('[data-qa="country"]').select(country);
    return this;
  }

  /**
   * Enter state
   * @param {string} state - The state to enter
   * @returns {RegistrationFormPage} Returns the current RegistrationFormPage instance for method chaining
   */
  enterState(state) {
    // Clear any existing text and type the state
    cy.get('[data-qa="state"]').clear().type(state);
    return this;
  }

  /**
   * Enter city
   * @param {string} city - The city to enter
   * @returns {RegistrationFormPage} Returns the current RegistrationFormPage instance for method chaining
   */
  enterCity(city) {
    // Clear any existing text and type the city
    cy.get('[data-qa="city"]').clear().type(city);
    return this;
  }

  /**
   * Enter zipcode
   * @param {string} zipcode - The zipcode to enter
   * @returns {RegistrationFormPage} Returns the current RegistrationFormPage instance for method chaining
   */
  enterZipcode(zipcode) {
    // Clear any existing text and type the zipcode
    cy.get('[data-qa="zipcode"]').clear().type(zipcode);
    return this;
  }

  /**
   * Enter mobile number
   * @param {string} mobileNumber - The mobile number to enter
   * @returns {RegistrationFormPage} Returns the current RegistrationFormPage instance for method chaining
   */
  enterMobileNumber(mobileNumber) {
    // Clear any existing text and type the mobile number
    cy.get('[data-qa="mobile_number"]').clear().type(mobileNumber);
    return this;
  }

  /**
   * Click create account button
   * @returns {RegistrationFormPage} Returns the current RegistrationFormPage instance for method chaining
   */
  clickCreateAccount() {
    // Click the create account button
    cy.get('[data-qa="create-account"]').click();
    return this;
  }

  /**
   * Click continue button after successful registration
   * @returns {RegistrationFormPage} Returns the current RegistrationFormPage instance for method chaining
   */
  clickContinue() {
    // Click the continue button
    cy.get('b').click();
    cy.get('[data-qa="continue-button"]').click();
    return this;
  }
}

// Export a new instance of the RegistrationFormPage class
export default new RegistrationFormPage(); 