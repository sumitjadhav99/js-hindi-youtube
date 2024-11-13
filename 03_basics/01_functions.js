// console.log("H")
// console.log("i")
// console.log("t")
// console.log("e")
// console.log("s")
// console.log("h")

function sayMyName(){
    console.log("H")
    console.log("i")
    console.log("t")
    console.log("e")
    console.log("s")
    console.log("h")
}

// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2){
    // const result = number1 + number2;
    // return result
    return number1 + number2
}

const result = addTwoNumber(3, "a")

// console.log("Result: ", result)

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter username")
        return
    }
    return `${username} is logged in.`
}

// console.log(loginUserMessage("Sumit"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(2, 2002, 3000))

const user = {
    name: "Sumit",
    price: 300
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`)
}

// handleObject(user)
// handleObject(
//     {
//         name: "Hitesh",
//         price: 400
//     }
// )

const myNewArray = [10, 20, 30, 40]

function returnSecondValue(anyArray){
    return anyArray[1]
}

// console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([10, 20, 30]))

