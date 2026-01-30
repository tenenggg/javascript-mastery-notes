// BOOLEAN NOTES (JavaScript)

let isOnline = true;              // boolean true
let isAdmin = false;             // boolean false

console.log(typeof true);        // "boolean"

let x = 10 > 5;                  // comparison returns boolean (true)
let y = 5 === "5";               // strict comparison (false)
let z = 5 == "5";                // loose comparison (true)

if (isOnline) {                  // boolean used in condition
  console.log("User online");    // runs if true
}

let age = 20;
let canVote = age >= 18;         // boolean from expression

// Falsy values (auto false)
Boolean(0);                      // false      everything that is 0 is false even -0 in number, not string
Boolean("");                     // false
Boolean(null);                   // false
Boolean(undefined);              // false
Boolean(NaN);                    // false

// Truthy example
Boolean("hello");                // true         everything with a value is true even "0" which is 0 in string
Boolean(1);                      // true

// Logical operators
true && false;                   // AND → false
true || false;                   // OR → true
!true;                           // NOT → false

// Ternary (returns based on boolean)
let status = isAdmin ? "Admin" : "User"; // conditional result


// boolean also can be object but not recommended as it may lead to unexpected results and slows down performance

// Comparing two JavaScript objects always returns false.

// boolean also have a function that can be called like document.getElementById("demo").innerHTML = Boolean(10 > 9); // returns true
// or  document.getElementById("demo").innerHTML = (10 > 9);