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

console.log(loginUserMessage("Sumit"))