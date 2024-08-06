// let text='!@#S!@#H!@#U!@#B!@#H!@#M!@'

// function removeText(str, textToRemove) {
//     return str.replace(textToRemove, '');
// }

// // Example usage:
// var originalString = "This is some unwanted text. Remove this.";
// var textToRemove = "unwanted text";
// var stringWithoutText = removeText(originalString, textToRemove);

// console.log(stringWithoutText); // Outputs: "This is some . Remove this."
// //  Outputs: "This is some . Remove this."

// let text="SHubham"
// let list1=text.split("")
// // console.log(list1)
// let text2=list1.reverse()
// console.log(text2.join(""))


//*****Array Reverse****** */

// let arr=["shubham","Pk"]
// console.log(arr.reverse())


// //******** */

// let str="SHubham Shinde"

// let newText=str.split("")

// let rev=newText.reverse()

// console.log(rev.join(""))
 

///******************* */
// Reverse string 

/*
const strr='shubham'
const array=strr.split("")
const newval=array.reverse()
console.log(newval.join(""))


//1.reverse string by using function 

function reverseString(str){
    return str.split('').reverse().join('')
}
console.log(reverseString("HelloShubham"));




// console.log(strr.join(""))

let text=strr.toUpperCase()
let sortText=newval.sort() // we can perform sort operation in array only and it will write a to be 
console.log(sortText.reverse()) 

//Length
let len="shubhamShinde"
console.log(len.length)

//////////////





// ***************Check for Palindrome ( means value that is same fro LTR RTL racecar) ***********


// function pal(str){

//     const reversed=str.split('').reverse().join('');
//     return str===reversed;

// }

// console.log(pal("ssuss"))


let newPal="sssussbha"
let new1=newPal.split('').reverse().join('')
// console.log(new1) // for reverse
console.log(new1===newPal) // for palindrome


//*********Find the Maximum Number in an Array *** */
/*
var arr=[1,4,5,76,8,9]

var largest=0;

for (i=0; i<=largest; i++){

    if (arr>largest){
        var largest=arr[i]
    }

}

console.log(largest)


*/
//Reverse String

let str="shubham"
let emp=str.split('').reverse()
console.log(emp.join(''))


//2.remove duplicate value from array

const removeDuplicate= arr =>[...new Set(arr)];


const number=[1,2,2,5,2,5,6,4,8,9,4];
const uniqueNumber=removeDuplicate(number);
console.log(uniqueNumber)



// ***** To removing the same character from the name 

const removeDuplicate2= arr =>[...new Set(arr)];
const textarr="shubham"
const newtxt=textarr.split("")
const unique=removeDuplicate2(newtxt);
console.log(unique)


// remove symbols from string 

const removeSpecialChar=arr=>arr.map(str=>str.replace(/[^\w\s]/g,''));


const symr="shub#@$%^*&nhbsd#u@"

const newarr1=symr.split("")
// console.log(newarr1)

const cleanedtext=removeSpecialChar(newarr1);
console.log(cleanedtext)

//******************************** */




