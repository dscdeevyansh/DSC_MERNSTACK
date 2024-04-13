// js variables
// var,let,const

var fname = "Deevyansh"
var lname = "Singh Chhabra"

var fullname = fname + " " + lname
console.log(fullname)     

// let and const is best used in modern day javascript
// var less comman and used in function scoped

var myAGE = 21;
console.log(myAGE);

const PI = 3.14;
//PI = 12;
console.log(PI);

let cube; // cube is declared but unassigned so js name is at undefined
console.log(cube);

// non prem dtype :: multiple values can be attached to a single variable

const user = {  // also helps us in creating in memory data bases
    Firstname : "Deevyansh",
    lname : "Singh",
    age : 21,
};
console.log(user);

// arrays

let mixedArray = [1, 'two', true, {name: 'John Doe'}, [5, 6, 7]];  // array in js can hv mixed data types as js is dynamically typed language
console.log(mixedArray);


// oprerators:

let score = 5;
score += 5;  // VERY USEFUL
console.log(score);

/*== (Double Equals): This is the loose equality operator, and it will convert the operands to the same type before making the comparison. For example, 1 == '1' would return true because JavaScript converts the string ‘1’ to a number before making the comparison.

=== (Triple Equals): This is the strict equality operator, and it does not do type conversion. It will check both the value and the type of the operands. If the values are not of the same type, it will return false. For example, 1 === '1' would return false because one operand is a number and the other is a string.

!= (Not Equals): This is the loose inequality operator. It returns true if the operands are not equal. Like the loose equality operator, it will convert the operands to the same type before making the comparison.

!== (Strict Not Equals): This is the strict inequality operator. It returns true if the operands are not equal or not of the same type. Like the strict equality operator, it checks both value and type. */

let a = 5;
let b = '5';
console.log(a == b); // true
console.log(a === b); // false
console.log(a != b); // false
console.log(a !== b); // true

/*
conrtrol structures:
type of control structures: 
1.DESICION MAKEING(if,switch)
2.lopping (for,while,do while)
3. branching(function,return)
 */

let inStock = false;
if(inStock){
    console.log("In Stock");
}

// switch statements

let dayn=2;

switch(dayn){
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
        break;
    case 2: 
        console.log("tuesday");
        break;
    case 3: 
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    default:    
        console.log("invalid day");
    

}