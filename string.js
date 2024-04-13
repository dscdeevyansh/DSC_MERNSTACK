/* basics of strings : it is a premdatatype

 in js strings are immutable means no direct modifications to the string can be made instead changing string creates a new one keeping orignal string unchanged a copy is made. operations like slicing , sorting  is done on the copy of the orignal string.kepping orignal string unchanged.

 arrays are mutable 

 string immutablity causes performance impact by using more memory
 ways of creating strings :
 1. double quotes
 2. single quotes
 3. backticks : complex strings, variables,multiline
 // UNLIKE NORMAL SINGLE QUOTES AND DOUBLE QUOTES, BACKTICKS ARE INTERPRETED AS A STRING AND HV SOME ADDITIONAL BEHAVIOUR
  EXAMPLE : let weather = `Today's weather is ${feelsLike}, with a temperature of ${temperature} degrees ${unit}`;
 4. string constructor : type coversion , object oriented patterns.
 */

let name = "Deevyansh";
console.log(name);

// using string constructor:
const name1 = new String("Deevyansh");
console.log(name1); // instead of string we get object so not prefeably used in js

// using template literals:
const gretting = 'hello';
console.log(gretting);

const username =" Deevyansh Singh Chhabra";
const welcomeMessage = `=>${gretting} ${username}`;  // this is the best application of template literals or backticks
console.log(welcomeMessage)

const multLine =  // this also is the best application of template literals or backticks
`
I,
am,
Deevyansh Singh Chhabra,
`

console.log(multLine);     


const a = 10; // this is also the application of template literals
const b = 20;
const sum = `the sum of above two mentioned no are : ${a+b}`;
console.log(sum);
/*
escape sequences 
'\"' : double quote
'\\' : backslash
`\n` : new line
`\t` : tab
*/

const multiline = "line1\nline2\t tabbed";
console.log(multiline);

// escaping backslash

const path = 'c:\\users\\deevyansh';
console.log(path);

const anotherQUOTE = `HE SAID "HELLO"`;
console.log(anotherQUOTE);

// using unicode characters
const heart = "I love \u2665 JS";
console.log(heart);

// backslash more helpful ways
const metaSTRING = 'THE SYNATAX FOR VARIABLE IS \${variableName}';
console.log(metaSTRING);
