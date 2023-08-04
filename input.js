// const readline = require('readline');
const prompt = require('prompt-sync')();

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Name: ", (name) => {
//     console.log(`Hi, ${name}`);
//     rl.close();
// });

// We can also use prompt-sync package to receive input from user

const name = prompt("Name: ");
console.log(`Hi, ${name}`);

