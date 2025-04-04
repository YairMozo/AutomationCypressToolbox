
class RegistrationFormPage {

  selectGender(gender) {
    if (gender === 'male') {
      cy.get('#id_gender1').check();
    } else {
      cy.get('#id_gender2').check();
    }
    return this;
  }

  enterPassword(password) {
    // Clear any existing text and type the password
    cy.get('[data-qa="password"]').clear().type(password);
    return this;
  }

  selectDateOfBirth(day, month, year) {
    // Select day, month, and year from dropdown menus
    cy.get('[data-qa="days"]').select(day);
    cy.get('[data-qa="months"]').select(month);
    cy.get('[data-qa="years"]').select(year);
    return this;
  }

  checkNewsletterAndOffers() {
    // Check the newsletter and special offers checkboxes
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    return this;
  }

  enterFirstName(firstName) {
    // Clear any existing text and type the first name
    cy.get('[data-qa="first_name"]').clear().type(firstName);
    return this;
  }


  enterLastName(lastName) {
    // Clear any existing text and type the last name
    cy.get('[data-qa="last_name"]').clear().type(lastName);
    return this;
  }

  enterCompany(company) {
    // Clear any existing text and type the company name
    cy.get('[data-qa="company"]').clear().type(company);
    return this;
  }


  enterAddress(address) {
    // Clear any existing text and type the address
    cy.get('[data-qa="address"]').clear().type(address);
    return this;
  }


  selectCountry(country) {
    // Select the country from the dropdown menu
    cy.get('[data-qa="country"]').select(country);
    return this;
  }

  enterState(state) {
    // Clear any existing text and type the state
    cy.get('[data-qa="state"]').clear().type(state);
    return this;
  }

  enterCity(city) {
    // Clear any existing text and type the city
    cy.get('[data-qa="city"]').clear().type(city);
    return this;
  }

  enterZipcode(zipcode) {
    // Clear any existing text and type the zipcode
    cy.get('[data-qa="zipcode"]').clear().type(zipcode);
    return this;
  }

  enterMobileNumber(mobileNumber) {
    // Clear any existing text and type the mobile number
    cy.get('[data-qa="mobile_number"]').clear().type(mobileNumber);
    return this;
  }

  clickCreateAccount() {
    // Click the create account button
    cy.get('[data-qa="create-account"]').click();
    return this;
  }

  clickContinue() {
    // Click the continue button
    cy.get('b').click();
    cy.get('[data-qa="continue-button"]').click();
    return this;
  }
}

export default new RegistrationFormPage(); 