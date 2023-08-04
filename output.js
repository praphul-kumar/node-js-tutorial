// this a method to print some data into console in javascript
// console.log()

const x = 5;
const y = 4;

console.log(x + y);

/**
 * Formatting Variable String
 * '%d': for number,
 * '%i': for integer,
 * '%o': for object,
 * '%s : for string,
 */

console.log("Name %s , Age: %d", "Praphul", '24');

// it will clear the console
console.clear();

// it will count if there is aonther log that is already printed in the console and show the count along with the log message
console.count("Console Log");
console.count("Console Log");
console.count("Console Log");
// countReset() will reset the counter and start the counter
console.countReset("Console Log");
console.count("Console Log 2nd");
console.count("Console Log 2nd");
console.count("Console Log 2n");

console.clear();
// To print the Trace in the log we use `console.trace()` function

const fun01 = () => console.trace();
const fun02 = () => fun01();

fun02();

console.clear();

// To print the time taken by a funciton we use following functions

const sum = () => console.log(`The sum of a and b is: ${3 + 4}`);
const multiply = () => console.log(`The product of a and b is: ${3 * 4}`);

const measureTime = () => {
    console.time("sum()");
    sum();
    console.timeEnd("sum()");

    console.time("multiply()");
    multiply();
    console.timeEnd("multiply()");
}

measureTime();