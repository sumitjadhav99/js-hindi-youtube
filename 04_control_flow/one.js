// if statement

const isUserLoggedIn = true;
const temperature = 55

// if(2 === '2'){
//     console.log('Executed');
// }

// If-else statement
// if(temperature < 50){
//     console.log('less than 50')
// } else{
//     console.log('greater than 50');
// }
// console.log(`Today's temperature`);


// Operators
// <, >, <=, >=, !=, ==, ===

// Block scope: it will not allowed to access variable outside of scope let keyword is used for block scope 
// const score = 200

// if(score > 100){
//     let power = 'fly'
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`)

// Shorthand to check condition which is not used and not allowed because it is making code non-readable
// const balance = 1000
// if(balance > 500) console.log('test'), console.log('test2')

// Nested if-else
// const balance = 1000

// if(balance < 500){
//     console.log('less than 500');
// } else if(balance < 750){
//     console.log('less than 750');
// } else if(balance < 900){
//     console.log('less than 900');
// } else{
//     console.log('less than 1200');
// } 

// && logical and operator: All values needs to truthy otherwise it will not run
const userLoggedIn = true;
const debitCard = true;

const loggedInfromEmail = true;
const loggedInfromGmail = false;

if(userLoggedIn && debitCard && 2==3){
    console.log('Allow to buy course');
}

// || is used for logical or statement : if any one of the condition is true it will return true otherwise it will return false
// We can also use three conditions to check 
if(loggedInfromEmail || loggedInfromGmail){
    console.log('Used logged in');
}

