import DashboardPage from '../support/pages/DashboardPage';
import HomePage from '../support/pages/HomePage';
import RegistrationFormPage from '../support/pages/RegistrationFormPage';
import SignupPage from '../support/pages/SignupPage';
import { generateUserData } from '../support/utils/testData';

describe('Registration', () => {
  // Generate user data once for all tests in this describe block
  let userData;

  beforeEach(() => {
    // Generate new user data before each test
    userData = generateUserData();
  });

  it('should successfully register a new user', () => {
    // Step 1: Navigate to the website and click on register
    HomePage.visit().clickRegister();

    // Step 2: Enter name and email for signup
    SignupPage.enterName(userData.username)
              .enterEmail(userData.email)
              .clickSignupButton();

    // Step 3: Fill out the complete registration form
    RegistrationFormPage.selectGender('male')
                        .enterPassword(userData.password)
                        .selectDateOfBirth('15', '11', '2003')
                        .checkNewsletterAndOffers()
                        .enterFirstName(userData.firstName)
                        .enterLastName(userData.lastName)
                        .enterCompany(userData.company)
                        .enterAddress(userData.address)
                        .selectCountry(userData.country)
                        .enterState(userData.state)
                        .enterCity(userData.city)
                        .enterZipcode(userData.zipcode)
                        .enterMobileNumber(userData.mobileNumber)
                        .clickCreateAccount();

    // Step 4: Assertions to verify successful registration
    DashboardPage.verifyAccountCreated()
                .clickContinue();
  });
});