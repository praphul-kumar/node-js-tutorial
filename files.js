const path = require('path');


const filePath = "D:/Learning/NodeJS/node-js-tutorial/assets/file.txt";

// // dirname
// console.log(path.dirname(filePath));

// // basename
// console.log(path.basename(filePath));

// // extension
// console.log(path.extname(filePath));

// // join path
// const sampleFile = "sample.txt";

// // console.clear();
// console.log(path.join(path.dirname(filePath), sampleFile));

// console.clear();

//------------- Using FileSystem ------------

const fs = require('fs');
const fsPromise = require('fs').promises;

//---------- Reading a file -------------

// fs.readFile(filePath, 'utf-8', (err, data) => {
//     if (err) throw new Error(err.message);

//     console.log(data);
// });

//--------- Async Call ---------
// try {

//     const data = fs.readFileSync(path.join(__dirname, 'assets', 'file.txt'), 'utf-8');

//     console.log("Async Call: ", data);

// } catch (err) {
//     throw new Error(err.message);
// }

//--------- using FS Promisses ----------

// const fileReading = async () => {
//     try {
//         const data = await fsPromise.readFile(filePath, { encoding: 'utf-8' });

//         console.log("FS Promisses: ", data);
//     } catch(err) {
//         throw new Error(err);
//     }
// }

// fileReading();


// ---------------- Writing into File -----------------
const sampleFile = path.join(__dirname, 'assets', 'sample.txt');
const content = "This is all about writing into a file using NodeJS";

// fs.writeFile(sampleFile, content, (err) => {
//     if (err) throw new Error(err);

//     console.log("Write Operation completed Successfully!!");

//     fs.readFile(sampleFile, 'utf-8', (err, data) => {
//         if (err) throw new Error(err);

//         console.log(data);
//     })
// });

const writingInFile = async () => {
    try {
        // Write data into a file
        // await fsPromise.writeFile(sampleFile, content);

        // Append content to a file
        // await fsPromise.appendFile(sampleFile, "\n This is the end of the file");

        // Write data to the end of the file 
        await fsPromise.writeFile(sampleFile, "\n we successfully renamed this file.", {
            flag: 'a+'
        });

        // New path
        const newFilePath = path.join(__dirname, "assets", 'newSample.txt');

        // Renaming a file 
        await fsPromise.rename(sampleFile, newFilePath);
    
        const data = await fsPromise.readFile(newFilePath, {encoding: 'utf-8'});
        console.log(data);
    } catch(err) {
        throw new Error(err);
    }
}

writingInFile();