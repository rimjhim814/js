const accountId = 144533
let accuntEmail = "rimjhim@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 // not allowed bc of const

/* 
prefer not to use var
bc of issue in block scope and functional scope 
use let
*/

accuntEmail = "rim@hc.com"
accountPassword = "564332"
accountCity = "Indore"

console.log(accountId);
console.table([accountId, accuntEmail, accountPassword, accountCity, accountState])
