// STRING METHODS IN JAVASCRIPT
// it comes after dot of a string variable



// ---- String Length ----
let len = text.length;                   // returns number of characters



// ---- Extracting String Parts ----
let part1 = text.slice(0, 5);             // extracts from index 0 to 5 (not included)
let part2 = text.substring(6, 11);        // similar to slice, but negative values will be treated as 0
let part3 = text.substr(6, 5);            // similar to slice, but second parameter specifies length



// ---- Replacing String Content ----
let replaced = text.replace("World", "JS"); // replaces first match only, replaces "World" with "JS"
let replacedAll = text.replaceAll("o", "0"); // replaces all matches



// ---- Upper / Lower Case ----
let upper = text.toUpperCase();           // converts to uppercase
let lower = text.toLowerCase();           // converts to lowercase



// ---- Concatenation ----
let text2 = "JavaScript";
let combined = text.concat(" ", text2);   // joins strings together



// ---- Trim ----
let spaced = "   hello   ";
let trimmed = spaced.trim();              // removes spaces from both sides
let trimStart = spaced.trimStart();       // removes spaces from start only
let trimEnd = spaced.trimEnd();           // removes spaces from end only



// ---- Padding ----
let num = "5";
let paddedStart = num.padStart(3, "0");   // adds padding at start -> "005"
let paddedEnd = num.padEnd(3, "0");       // adds padding at end -> "500"



// ---- Character Access ----
let char1 = text.charAt(0);               // gets character at index
let char2 = text.charCodeAt(0);           // gets UTF-16 code of character
let char3 = text[1];                      // bracket access (read-only)



// ---- String to Array ----
let arr = text.split(" ");                // splits string into array on spaces
let arrChars = text.split(",");           // on comma
let arrAll = text.split("|");             // on pipe



// ---- Searching Strings ----
let index1 = text.indexOf("World");       // returns first match index
let search = text.search("o");           // returns first match index

/* 

Did You Notice? The two methods, indexOf() and search(), are equal?
They accept the same arguments (parameters), and return the same value?
The two methods are NOT equal. These are the differences:

-The search() method cannot take a second start position argument.
-The indexOf() method cannot take powerful search values (regular expressions).

simple conclusion:
-Use indexOf() → simple string search + need start position
-Use search() → powerful matching with RegExp

*/

let index2 = text.lastIndexOf("o");       // returns last match index
let found = text.includes("Hello");       // checks and returns if a string contains a specific value true/false
let starts = text.startsWith("Hello");    // checks if a string starts with a specific value
let ends = text.endsWith("World");        // checks if a string ends with a specific value

// Both indexOf(), and lastIndexOf() return -1 if the text is not found.


// ---- Match ----
let matchOne = text.match("o");            // returns first match (string)
let matchAll = text.match(/o/g);           // returns all matches (regex)



// ---- Repeat ----
let repeatText = text.repeat(2);           // repeats string n times, 2 times here



// ---- Template Strings ----
let name = "Imam";
let greet = `Hello ${name}`;               // allows variables & expressions
