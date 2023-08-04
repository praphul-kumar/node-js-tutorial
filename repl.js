// REPL
/**
 * R: Read
 * E: Evaluate
 * P: Print
 * L: Loop
 * 
 * This is a module in NodeJS which allows us to run some basic calculation or call a function or see the avialable methods of an object using command line
 * 
 * To enter into repl type `node` in terminal
 */

const repl = require('repl');

// It will set the `$` in the start of every new line
const local = repl.start("$ ");

// Passing a callback function on exit from Repl
local.on('exit', () => {
    console.log('Exiting REPL');
    process.exit();
})



