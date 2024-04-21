
/*const name = "Shubham"
const repoCount = 20
const result = true

console.log ( name + repoCount + " Value"); //this is the old dated concatinate option 

console.log(`Hello my name is ${name} and my repo count is ${repoCount} .`); // we can user backtick and 
//doller and curly braces this is new one 
// we can add method while in go 


//Using Backticks we can add placeholders
console.log(`My Name ${name} i have succefully completed game and my result is ${result}`);
*/

//in string we need do master in methods
const gameName = new String('shubham-shinde')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase()); // uppar case convert
console.log(gameName.charAt(5)); // Index number 
console.log(gameName.indexOf('m')); // Position check 

const newString = gameName.substring(2 , 6) // ubha last value ati nhi h focus here

console.log(newString);

//slice
const anotherString = gameName.slice(-14,3); // we can give negative value here 
console.log(anotherString);  

//tream
const newStringOne  = "   shubham   "
console.log(newStringOne);
console.log(newStringOne.trim());


//replace

const url = "https://shubham.com/shubham%20 shinde"
console.log(url);
console.log(url.replace('%20','-'));
console.log(url.includes('shinde')); //true

console.log(url.split(' '));


