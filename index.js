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
// let fullName = 'Wesley Berry';

// for(const char of fulName) {
//     console.log(char);
// }
// console.log(total);

// -------------------------------------------------------
// For of Loop Challenge
// Do not use let in for of loop

// -----------------------------------------------------------
// Spread Operator
// let example1 = [1,2,3,4,5,6];

// let example2 = [...example1];
// example2.push(true);

// console.log(example2);

// -----------------------------------------------------------
// rest Operator
// function add(...nums) {
//     console.log(nums);
// }

// add(4, 5, 7, 8, 12);

// -----------------------------------------------------------
// Arrow Functions
add = (...nums) => {
    // let total = nums.reduce(function (x, y) {
    //     return x + y;
    // });
    // vs
    let total = nums.reduce((x, y) => x + y);
    console.log(total);
}
add(4, 5, 7, 8, 12);