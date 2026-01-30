// string 
let color = "Yellow";
let lastName = 'Doe';

// number
let age = 22;
let pi = 3.14;

// boolean
let turnOn = true;
let turnOff = false;

// undefined
let car;

// null
let empty = null;

// object
let person = {
                 firstName: "John",
                 lastName: "Doe"
            };

// array
let fruits = ["Apple", "Banana", "Cherry"];
let numbers = [1, 2, 3, 4, 5];

// symbol
let sym1 = Symbol('foo');
let sym2 = Symbol('bar');

// bigint
let bigIntNum = 9007199254741991n;
let anotherBigInt = BigInt(12345678901234567890);

// Date
let currentDate = new Date();
let specificDate = new Date('2023-01-01');





// you can use typeof operator to check the type of a variable

console.log(typeof color); 
document.getElementById("demo").innerHTML = typeof color;

// this will returns "string".







// Strings can be defined using single quotes or double quotes.
// and can contain both single and double quotes inside them, as long as they don't match the quotes surrounding the string.

// Using double quotes:
let carName1 = "Volvo XC60";

// Using single quotes:
let carName2 = 'Volvo XC60';

// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';



// a variable without a value has the data type and value of undefined:
let carName3;

// an empty value has both a legal value and a data type of object
let carName4 = " ";  // empty string



// All JavaScript numbers are stored as decimal numbers (floating point).
// Numbers can be written with, or without decimals.


//you can also add a number and a string together, and JavaScript will treat the number as a string:
let x = 5 + "5"; // x will be "55"
let z = "HELLO" + 5; // z will be "HELLO5"

// += is addition assignment operator and adda the value to the variable of the left
let y = 5;
y += 5;             // y will be 10 because it's equivalent to y = y + 5
let w = "Hello ";
w += "World";      // w will be "Hello World" because it's equivalent to w = w + "World"    

let a = 5;
let b = 4;
b += a;  // b will be 9 because it's equivalent to b = b + a


// != is not equal operator
// ** is exponentiation operator outputs the power of a number
// % is modulus operator outputs the division remainder

let d = 10;
d %= 3;  // d will be 1 because 10 divided by 3 leaves a remainder of 1

let e = 2;
e **= 3; // e will be 8 because it's equivalent to e = e ** 3 (2 to the power of 3)

let f = 5;
f != 3; // f will be true because 5 is not equal to 3

