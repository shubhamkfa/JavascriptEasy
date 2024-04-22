 /* 
 
Strings are for storing Text
Strings are written with quotes
A Javascript string with a zero or more character written inside quotes



 */

let text ="'shubham' shinde"

//You can use single or double quotes 
let textOne ='Pragati "Kale"'
console.log(text)
console.log(textOne)


// Template String - Template string introduced with ES6 2016 - 
//Templates are strings enclosed in backticks (`this is a template string`)
//Template allow single and double qoutes inside a string 


let para = `Shubham-shinde is from "Nanded" and Pragati kale is From 'Pune' and we are living in \'Mumbai\' `

console.log(para);

//Note : Templates are not supported in Internet Explorer





//*************************Escape Characters **************************

//"The string will be chopped to "we are so-called "winkings" from the north"
//to solve this problem we have to use an backslash escape characters 
//The backslacsh escape character (\) turns special character into string characters \




let  text2 ="we are so called \"Linkings\"from the north"
let text3 = 'it\'s alright'
let text4 = "in js \\ called as backslash"
console.log (text2);
console.log (text3);
console.log (text4);

//**********************Breaking Long Lines****************** */

//FOr readability programmers often like to break long lines
//A safe way to breck a statement  is after an  Operator.



//*****************Strings Method *****************
//String Lenght 

let methodTest = "SHubhamshINDKmmklakks " ;
console.log(methodTest.length);

//Extracting STring Character 
//There are 4 methods for extracting string character 

//at(position) // introduces in ES20222 //returns the character at specified index position in string

//this is supported in all modern browsers from march 2022
/* Note: The at () method is a new addition to javascript 
It allows the negative indexes white charAt() don not 
Not you can user myText.at(-2) instaed of myTxt (charAt.Lenghth.-2) 
*/
//charAt(Position) // method return the character at a specified index (position ) in string.
//charCoadAt(position) // ethod return the code of character at a specified index in a string 
//the method returns a UFT-16 code (an Interger beetween 0 and 65535)
//Using property access like [] in arrays

console.log(methodTest.at(5)); 
console.log(methodTest.charAt(2));
console.log(methodTest.charCodeAt(3));


// PropertyAccess[]

/*
let propertyAccess ("ShubhamPragati");
propertyAccess [0] = "A" //give an error but does not work
console.log(propertyAccess[7]);
*/

//******************* Extracting String Parts *************************

/*there are 3 methods for extracting  a part of a string

1. slice(start,end)
2. substring(start,end)
3. substr(start,end)

*/


//1.slice(start,end)
let str = "Apple,Banana,Mango"
let slic = str.slice(5,15)
let slic2 = str.slice(8)


console.log(slic);
console.log(slic2);


//2.Substring
// substring is similar to slice only 
//the difference is that start and end values less that 0 are treated as 0 in substring ()

console.log(str.substring(6,10));


//3.substr() - > method is similar to slice() 
// the difference is that the second parameter specified the length of extraceted part


console.log(str.substr(6,4));


//If you omit the second parameter,substr() will slice the rest of the string 

console.log(str.substr(-8));
//if the first parameter is negative, the position counts from the end of the string 


/* Coneverting to Upper and Lower case

1.A string is converted to upper case with toUpperCase()
2.a string is converted to lower case with toLowerCase()



console.log(str.toUpperCase());
console.log(str.toLowerCase());

*/

//Concat() ->  this method joins two or more strings

let textt1 = "Hello"
let text1 ="Shubs"
let textt3 = textt1.concat(" ",text1);

console.log(textt3);