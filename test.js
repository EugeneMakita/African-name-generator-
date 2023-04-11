// test.js

const { getRandomName, getRandomDateOfBirth, getEmail, getRandomAddress } = require('./randomDataGenerator');

const randomName = getRandomName();
const randomDateOfBirth = getRandomDateOfBirth(minAge=13,maxAge=18);
const emailAddress = getEmail(randomName);
const address = getRandomAddress();

console.log(`Random Name: ${randomName}`);
console.log(`Random Date of Birth: ${randomDateOfBirth}`);
console.log(`Email Address: ${emailAddress}`);
console.log(`Address: ${address}`);
