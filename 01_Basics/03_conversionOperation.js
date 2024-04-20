//6 dont rely on numbers check type and do conversion if needed and check typeof

/* //session 6 

let score = "33" //33
let value1 = "33abc" //NaN ( Not a Number type is Number only)
let value2 = null // we did not provide 0 input here
let value3 = undefined //NaN
let value4 = true //1
let value5 = 25 //25
let value6 = 0 //0 => false, 1 => true , ""empty=> false , "shubham"=> true


console.log(typeof score);
console.log(typeof value1);
console.log(typeof value2);
console.log(typeof value3);
console.log(typeof(value4));
console.log(typeof(value5));
console.log(typeof(value6));




let valueInNumber = Number (score)  // we can use number for this for conversion  it should be in Capital ( class based)
let valueInAlph = Number (value1)
let valueInnull = Number(value2)
let valueInUndefined = Number(value3)
let valueinbool = Number (value4)
let valueInBool = Boolean (value6)


let valueInString = String(value5);

console.log(typeof valueInNumber);  //dont rely on value check and confirm every time for converting value
console.log(typeof valueInAlph);
console.log(typeof valueInnull);
console.log(typeof valueInUndefined);
console.log(typeof(valueinbool));
console.log((typeof(valueInString)));
console.log(typeof (valueInBool));



console.log(valueInNumber);
console.log(valueInAlph);
console.log(valueInnull);
console.log(valueInUndefined);
console.log(valueinbool);
console.log(valueInString);

console.log(valueInString +77+ (10+5))
console.log(valueInBool);

*/ 


//*********************** Operations ****************/

/* //negative value
let value = 3
let negValue = -value
console.log (negValue);


//operators

console.log( 2 + 2 );
console.log( 2- 2 );
console.log(2 * 2);
console.log(2 ** 3);
console.log(2 / 3);
console.log(2 % 3);


let str1 = "Hello"
let str2 = " Shubham"
let str3 = str1 + str2

console.log(str3);



console.log( "1" + 2 ); //12
console.log( 1 + "2" );//12
console.log( "1"+ 2 + 2 ); //122
console.log( 1 + 2 + "2" ); //32
console.log( 3 + 4 * 5 % 3 );//5 dont code this messy code its not a exam its coading 

*/

console.log( + true);// 1
console.log( true + 2);//incorrect
console.log(+ "");

let num1,num2,num3
num1 = num2 = num3 = 2 + 2
console.log(num1);

//Presidend operator
let gameCounter = 100
gameCounter++; // Increment 
console.log(gameCounter);

//Post Increment //postfix
let x = 3;
const y = x++;
console.log(x); //4
console.log(y);// 3

//pre increment // prefix
let a = 3;
const b = ++a;
console.log(a);//4
console.log(b);//4




