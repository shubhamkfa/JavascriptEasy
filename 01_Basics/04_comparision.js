/*
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


//while comparision check the data type first we should not compare two defferent datatype 

let a = ("2">1)

console.log(typeof a); // js converted string into boolean value
console.log("02 " > 1);
*/

/*
The reason is that an equality check 
== and comparisons >, <, >=, <= work differently 

comparision convert null to number, trating it as 0. thats why console.log(null >= 0); //true
and console.log(null > 0); // false




console.log(null > 0); // null empty value 
console.log(null == 0);
console.log(null >= 0); //true Value conversion 


console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined < 0);

console.log(NaN > 0);
console.log(NaN  == 0);
console.log(NaN  >= 0);
console.log(NaN  < 0);

*/

// Strict check === ( it will check data type along with value )

console.log(null > 0); // null empty value 
console.log(null === 0);
console.log(null >= 0); //true Value conversion 

console.log("2" === 2);

//Note: Dont use above comparision ever write clean code  