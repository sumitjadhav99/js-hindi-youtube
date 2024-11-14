// let a = 10;
// const b = 20;
// var c = 30;

// var c = 300
let a = 300

if(true){
    let a = 10;
const b = 20;
// var c = 30;
// console.log("inner: ", a)
}

// console.log(a);
// console.log(b);
// console.log(c);

// nested scope 
function one(){
    const username = "Hitesh"

    function two(){
        const website = "youtube"
        console.log(username)
    }
two()
//    console.log(website)
}

// one()

if(true){
    const username = "Hitesh"
    if(username === "Hitesh"){
        const website = "youtube"
        // console.log(username + website)
    }

    // console.log(website)
}

// console.log(username)

// console.log(addOne(2))

function addOne(num){
    return num + 1
}

// console.log(addTwo(2))

const addTwo = function(num){
    return num + 2
}

function exampleFunction() {
    const x = "declared inside function"; // x can only be used in exampleFunction
    console.log("Inside function");
    console.log(x);
  }
  
  console.log(x); // Causes error
  

