// Destructuring
const personalInfo = {
    firstName: 'Wesley',
    lastName: 'Berry',
    city: 'San Marcos',
    state: 'TX',
    zipCode:'78666'
};

const {firstName, lastName} = personalInfo;

console.log(`${firstName} ${lastName}`);