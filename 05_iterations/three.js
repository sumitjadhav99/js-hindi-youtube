// for of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if(greet === ' '){
        continue
    }
    // console.log(greet)
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

// console.log(map)
for(const [key, value] of map){
    // console.log(key, ":", value)
}

// for of loop is not work to iterate objects
// const myObject = {
//     'game1': 'GTA',
//     'game2': 'MineCraft'
// }

// for(key in myObject){
//     console.log(key[myObject])
// }
