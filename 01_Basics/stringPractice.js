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


//Note: All string methoda return a new string.They dont modify the original string.
//Strings are Immutable: String cannot be changed only replaced.

//Trim()-method removes space from both the side 

let trim1 = "   shubham  shinde  patil   "
let trim2 = trim1.trim()
console.log(trim2);


//trimStart() -> ECMA script added 2019 
//the the trimStart () method will work like trim() only but removes whitespace only from a start of the string.

//trimEnd() -> remove whitespace only from the ending 


//************Javascript String Padding********************

//padStart() method pads a string from the start. ECMAScript2017
//It pads a string with another string (Multiple times ) until it reaches  a given length.


//Examples
//Pad a string with "0" until it reaches the length 4:
let textPad = "a";
let padded = textPad.padStart(4,"b")
console.log(padded);

//Note: The padStart() method is a string method 
//To pad a number, convert the number to string first 

//2. padEnd() me3thoed pads a string from the end.
//It pads a string with another string until it reaches a given number.

let padText = "4"
let padEnd1 = padText.padEnd(3,0)
console.log(padEnd1);

//Note: the padEnd () method is a string method.
//To pad a number, convert the number to string FileSystemWritableFileStream.apply


//*********************Javascript String repeat() */

//1. string.repeat(count) - a new string containing a copies
//method returns  a string with number of copies of a string 
//repeat methods returns a new string
//repeat method does not change the original string




let rep = "Line break using \\n  \n" // i have used \n for line break 
console.log(rep.repeat(3));


/***************Replacing string content ***********/

//1. replace() - method replaces a specified value with another value in a string


let TextRep = "Please Visit Microsoft Microsoft and Microsoft! "
let textnew = TextRep.replace("Microsoft","Google")
console.log(textnew);

//Note: replace mthod does ot change the string it is called on.
//method returns a new string
//replace() replace a first match only 
//by default replace method is case sensetive writing MICROST will not work
//to replace case sensative user /i flag 




//If you want to replace all matches, use a regular expression with the /g flag set. 
//Regular expression are written without quotes 

//exp-
let TextRep2 = "Please Visit Microsoft Microsoft and Microsoft! "
let textnew2 = TextRep2.replace(/MICROSOFT/i,"Google")
console.log(textnew2);



//To replace all matches, use a  regular expression with /g flag ( global match): ( we can learn more about regular expression in later )

let textReplaceGlobal = " Shubham please join Google or Microsoft you will get so much hike in Google and i know Google is your Dream company"

let joinCom = textReplaceGlobal.replace(/Google/g , "Microsoft")
console.log(joinCom);

//ReplaceAll() -> its an ES2021 feature 
//ReplaceAll method allow you to specify a regular expression insted of a string to be replace.
// If the parameter is a regular expression, the global flag (g) must be set , otherwise a TypeError is thrown.




let rest = "I love cats, cats are very lovely, \n Cats are very popular. \n Cats is much funnier than dogs , \n I dont like dogs as i like Cats"

 rest = rest.replaceAll("cats","dogs");

rest = rest.replaceAll("Cats","Dogs");

let rest1 = rest
console.log(rest1);


/**************************Converting a String to an Array ********************/

/****  If you want to worrk with a string as an array, you can convert it to an arrays// */


/**************Javascript  ********************/
//split() ->  a string can be converted into array with the split method

let spli = "Hello shubham, how are you doing? I have  your a Better apportinity for! you "

console.log(spli.split(",")); // Split on commas
console.log(spli.split(" "));// Split on spaces
console.log(spli.split("|"));//split on pipe

// if the seperator is omitted, the returned array will contain the whole string in index[0].
// if the seperator is "" . the returned array will be an array of single characters.



let split1 ="SHubham"
console.log(split1.split(""));
console.log(typeof split1);

console.log(spli.includes('better'));
