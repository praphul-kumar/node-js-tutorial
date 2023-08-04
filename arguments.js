/**
 * `process.argv` will return all command line arguments.
 * It also includes node path at 0th index, and 
 * current file name at 2nd index
 */
// console.log(process.argv);

// process.argv.forEach((val, index) => {
//     console.log(`${index} : ${val}`);
// })

// Using minimist to manage command line arguments 

const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

console.log(args.name);
console.log(args.designation);
