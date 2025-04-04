/**
 * This file contains utility functions for generating test data using Faker.js
 */
import { faker } from '@faker-js/faker';

/**
 * Generate a random user object with all necessary registration data
 * @returns {Object} A user object with registration data
 */
export const generateUserData = () => {
  // Generate a random username (lowercase, no spaces)
  const username = faker.internet.userName().toLowerCase().replace(/\s+/g, '');
  
  // Generate a random email based on the username
  const email = `${username}@${faker.internet.domainName()}`;
  
  // Generate a random password that meets common requirements
  const password = `${faker.internet.password({ length: 8, memorable: false })}*`;
  
  // Generate random personal information
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const company = faker.company.name();
  const address = faker.location.streetAddress();
  const country = 'Australia'; // Fixed for this test
  const state = faker.location.state();
  const city = faker.location.city();
  const zipcode = faker.location.zipCode();
  const mobileNumber = faker.phone.number('###########');
  
  return {
    username,
    email,
    password,
    firstName,
    lastName,
    company,
    address,
    country,
    state,
    city,
    zipcode,
    mobileNumber
  };
}; 