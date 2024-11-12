// singleton
// object.create

// object literals
const mySym = Symbol('key1')

const JsUser = {
    name: 'Hitesh',
    'full name': 'Hitesh Chaudhary',
    [mySym]: 'key1',
    age: 18,
    location: 'Jaipur',
    email: 'hitesh@google.com',
    isLoggedIn: 'false',
    lastLoggedInDays: ['Monday', 'Saturday']
}

// console.log(JsUser.name)
// console.log(JsUser['name'])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])

JsUser.email = 'hitesh@chatgpt.com'
// Object.freeze(JsUser)
// JsUser.email = 'hitesh@microsoft.com'
// console.log(JsUser)

JsUser.greetings = function(){
    console.log("Hello JS Users")
}

JsUser.greetingsTwo = function(){
    console.log(`Hello JS User ${this.name}`);
    
}

console.log(JsUser.greetings())
console.log(JsUser.greetingsTwo())