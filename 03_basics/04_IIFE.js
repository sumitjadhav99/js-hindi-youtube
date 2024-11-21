// Immediately invoked function expressions (IIFE)

(function chai(){
    console.log('DB Connected')
})
();

( () => {
    console.log(`db connected two`)
}) ();

( (name) => {
    console.log(`DB connected two ${name}`)
})('Sumit')