const marvel_Heros = ["IronMan", "SpiderMan", "Thor"]
const dc_Heros = ["Batman", "flash", "wolverine"]

// marvel_Heros.push(dc_Heros)

// console.log(marvel_Heros)
// console.log(marvel_Heros[3][1])

// concat method
// const allHeros = marvel_Heros.concat(dc_Heros)
// console.log(allHeros)

// Spread operator
const allNewHeros = [...marvel_Heros, ...dc_Heros]
// console.log(allNewHeros)

const anotherArray = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10]]]
const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray)

// console.log(Array.isArray('Sumit'))
// console.log(Array.from('Sumit'))

// console.log(Array.from({name: "Sumit"})) interesting case

let score1 = 100;
let socre2 = 200;
let socre3 = 300;

console.log(Array.of(score1, socre2, socre3))
