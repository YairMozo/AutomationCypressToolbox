// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Import page objects
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import RegistrationFormPage from './pages/RegistrationFormPage';
import SignupPage from './pages/SignupPage';

// Make page objects available globally
Cypress.HomePage = HomePage;
Cypress.SignupPage = SignupPage;
Cypress.RegistrationFormPage = RegistrationFormPage;
Cypress.DashboardPage = DashboardPage;

