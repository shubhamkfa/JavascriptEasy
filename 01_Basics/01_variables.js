const accountId = 144553
let accountEmail = "shubham@gmail.com"
var accountPassword = "12345" // we are not using var anymore
accountCity = "Jaipur"
let accountState;  //Value not defined here so it will print undefined

//accountId = 2 // This is not allowed 

accountEmail = "shubhams@gmail.com"
accountPassword = "54321"
accountCity = "Pune"


console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*  
Prefer not to use var
because of issue in block scope and functional scope //scope { }
*/
