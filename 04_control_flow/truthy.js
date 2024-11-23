const userEmail = []

if(userEmail){
    console.log('User have email');
} else{
    console.log("Don't have email");
}

// Falsy Values
// False, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values
// " ", "false", "0", [], {}, function(){}

// To check array is empty or not 
if(userEmail.length === 0){
    console.log("Array is empty")
}

// To check object is empty or not 
const userObj = {}

if(Object.keys(userObj).length === 0){
    console.log("Object is empty")
} 

// Nullish Coalescing Operator (??) null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 5
// val1 = undefined ?? 10
val1 = undefined ?? 10 ?? 15

console.log(val1)

// Ternary operator
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <=80 ? console.log('less than 80') : console.log('greater than 80')