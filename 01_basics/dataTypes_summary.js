// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.5
const isLoggedIn = false
const outsideTemp = null
let userMail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigNumber = 35773487598478572n

// Reference (Non primitive)
// Array, Objects, functions

const heros = ["Ironman", "Spider-man", "Thor"]
const myObj = {
    name:"Sumit",
    age: 25, 
}

const myFunction = function(){
    console.log("Hello world")
}

console.log(typeof outsideTemp)

// https://262.ecma-international.org/5.1/#sec-11.4.3