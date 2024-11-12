// Dates

let myDate = new Date()

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2024, 1, 16, 20, 9)
// console.log(myCreatedDate.toLocaleString())
myCreatedDate = new Date("11-16-2024")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/100));

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getDate())
// console.log(newDate.getHours())

console.log(newDate.toLocaleString('default', {
    weekday:"long"
}))







