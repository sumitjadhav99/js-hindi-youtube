// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, currVal){
//     console.log(`acc is ${acc} and currVal is ${currVal}`)
//     return acc + currVal
// }, 0)

// const myTotal = myNums.reduce((acc, currVal)=> acc + currVal, 1)

// console.log(myTotal)

const shoppingCart = [
    {itemName: 'js course',
        price: 999
    },
    {itemName: 'py course',
        price: 99
    }, {itemName: 'mobile dev course',
        price: 1299
    },
]

const totalBill = shoppingCart.reduce((acc, item)=> acc + item.price, 0)

console.log(totalBill);
