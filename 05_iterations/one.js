// for 
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element === 5){
        // console.log('5 is best number')
    }
    // console.log(element)
}

// Nested for loop
for (let i = 1; i < 10; i++) {
    // console.log(`Outer loop value: ${i}`)
    
    for (let j = 1; j < 10; j++) {
        // console.log(`Inner loop value: ${j} Outer loop value: ${i}`) 
        const total = i * j;
        // console.log(`${i} * ${j} = ${total}`)
    }
}

// Iterating an array using for loop
const myArray = ['ironman', 'spiderman', 'antman']

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element)
}

// break and continue keywords
for (let i = 1; i <= 20; i++) {
    if(i === 5){
        // console.log('5 is detected')
        break
    }
    // console.log(i)
}

for (let i = 1; i <= 20; i++) {
    if(i === 5){
        console.log('5 is detected')
        continue;
    }
    console.log(i)
}