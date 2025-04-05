# ToolboxUI Test Automation

This repository contains automated tests for the Automation Exercise website using Cypress. The tests cover both UI interactions and API endpoints.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Getting Started

### Clone the Repository

```bash
git clone <repository-url>
cd toolboxui
```

### Install Dependencies

```bash
npm install
```

### Running the Tests

To run all tests in headless mode:

```bash
npx cypress run
```

To open the Cypress Test Runner (interactive mode):

```bash
npx cypress open
```

## Test Structure

The tests are organized using the Page Object Model pattern for better maintainability and reusability.

### UI Tests

The UI tests are located in `cypress/e2e/AutomationExercice.cy.js` and validate the following functionality:

- User registration flow:
  - Navigate to the website
  - Click on the Register/Login button
  - Enter user details for signup
  - Complete the registration form with personal information
  - Verify successful account creation
  - Delete the created account
  - Verify successful account deletion

### API Tests

The API tests are located in `cypress/e2e/ApiEchoSpec.cy.js` and validate the following endpoints:

- POST /test: Verifies that the echo server correctly returns the query parameters
- DELETE /test: Verifies that the echo server correctly responds to DELETE requests

## Project Structure

- `cypress/e2e/`: Contains the test specifications
- `cypress/support/pages/`: Contains page object models for different pages
- `cypress/support/utils/`: Contains utility functions and test data generators
- `cypress/fixtures/`: Contains test data files
- `cypress/downloads/`: Contains downloaded files during test execution
- `cypress/results/`: Contains test execution results

## Page Objects

The project uses the Page Object Model pattern with the following page objects:

- `HomePage.js`: Contains selectors and methods for the home page
- `SignupPage.js`: Contains selectors and methods for the signup page
- `RegistrationFormPage.js`: Contains selectors and methods for the registration form
- `DashboardPage.js`: Contains selectors and methods for the user dashboard

## Test Data

Test data is generated dynamically using the Faker.js library to ensure unique data for each test run. 