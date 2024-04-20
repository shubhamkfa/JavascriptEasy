//which type of language Javascript ? -> we are no defining landuage in js





/* Data Type
two categories - jitne b data h wo memory me kis tarah se store hote h and kis tarah se access kr sakte ho 
isi ke basis pe wo taha se categories h primitiv and non primitive 

*/
/*  # Primitive  (7) -jitne b primitive hote h wo  call by value hote h -> jab bhi inko aap kahi se kahi copy krte 
h tab inka orogional data ke reference nhi diya jata unko copy karke ref diya jyata h 

1. String 
2. Number 
3. Boolean
4. null
5. undefined
6. Symbol -> kisi b value ko unique banane ke liye use hote h advance js me hoga use
7. Bigint -> scientefic value big one

*/

let name="shubham"
const score= 100
const scoreValue=100.23
const isLoggedIn=true
const temparature=null
let userEmail;  // notice we use let here as its a variable

const id = Symbol ('123')
const anotherId = Symbol('123')

const bigNumber = 566543154684564654n



console.log(name);
console.log(score);
console.log(scoreValue);
console.log(isLoggedIn);
console.log(temparature);

console.log(id === anotherId);
console.log(bigNumber);







/* Non Primitive / reference type ( 3 ) - call by reference -> inka reference milta h 
1. Array // arrays ko squre bracket me lihate h uske under valvue dete h 
2. Objects // curly braces me likhate h key value ki format me
3. Functions

^ non premitive ka data type function hi ata h sab ka 
*/
//array
const heros = ["shaktiman","naagraj","doga"]

//object 

let myObj = {
    name: "shubham",
    lastName: "shinde",
    age : 29

}


//function

const myFunction = function ( ) {

    console.log("Hello Function");

}


    
console.log(typeof myObj);


//***************************memory****************************
    
//Stack ( Primitive ) DDD, -> value ka copy milta hai oroginal value change nhi hota 
//Heap (Non-Primitive) D -> value ka reference milta h oroginal value change hota hai 


let myYoutubeName = "pragatizvlog"

let anotherName = myYoutubeName
anotherName = "shubhamsvlog"

console.log(myYoutubeName);
console.log(anotherName);



let userOne ={
    email:"user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "shubham@google.com"

console.log(userOne.email);
console.log(userTwo.email);