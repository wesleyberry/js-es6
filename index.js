// Destructuring Objects
// const personalInfo = {
//     firstName: 'Wesley',
//     lastName: 'Berry',
//     city: 'San Marcos',
//     state: 'TX',
//     zipCode:'78666'
// };

// const {firstName, lastName} = personalInfo;

// console.log(`${firstName} ${lastName}`);
// ------------------------------------------------------
// Destructuring Arrays
// let [firstName, middleName, lastName] = ['Wesley', 'Coding Genius', 'Berry'];

// lastName = 'Gordon';

// console.log(firstName)
// console.log(middleName)
// console.log(lastName)
// -------------------------------------------------------
// Object Literal
// function addressMaker(city, state) {
//     const newAddress = {city, state};

//     console.log(newAddress);
// }

// addressMaker('San Marcos', 'Texas');
// -------------------------------------------------------
// Object Literal Challenge
// function addressMaker(address) {
//     const {city, state} = address;
//     const newAddress = {
//         city, 
//         state,
//         country: 'United States of America'
//     };
//     console.log(`${newAddress.city} ${newAddress.state} ${newAddress.country}`);
// }

// addressMaker({ city: 'San Marcos', state: 'Texas'});
// -------------------------------------------------------
// For of Loop
let fullName = 'Wesley Berry';

for(const char of fulName) {
    console.log(char);
}
console.log(total);