const accountId = 144553;
let accountMail = "sumit@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"

// accountId = 2 not allowed

accountMail = "sjadhav@google.com"
accountPassword = "112233"
accountCity = "Pune"

console.log(accountId)

/*
Prefer not to use var
because of block scope and functional scope
*/

console.table([accountId, accountMail, accountPassword, accountCity])