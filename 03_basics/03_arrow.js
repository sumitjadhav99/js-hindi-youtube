/* 
    "this" function refer to the current context of objec. In below example username can be access by using this keyword to access values in username object and in future the value changes then it refers to the current or the changed value
*/

const user = {
    username: "Hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website.`)
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// In node environment this refers to empty object but in browser it refers to window object
// console.log(this)

// this is not usable in function

// function chai(){
//     let username = "Hitesh"
//     console.log(this.username); this is not allowed in js
// }


// chai()

// const chai = function(){
//     let username = "Hitesh"
//     console.log(this.username);
// }

// const chai = () => {
//      let username = "Hitesh"
//     console.log(this.username);
// }

// chai()

// Arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicit return
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2) 

// Implicitly return object 
const addTwo = (num1, num2) => ({username: "Sumit"})
// Above syntax mostly used in react

console.log(addTwo(2, 3))
