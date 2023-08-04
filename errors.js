const { CustomError } = require("./CustomError");

//---------- Creating Error ---------------
// const error = new Error('Something went wrong!!');

//---------- Print error message -----------
// console.log(error.message);

//---------- Print Error Stack ----------
// console.log(error.stack);


//----------- Throw an Error ---------------
// throw new Error("Login Failed!!");

//--------- Creating CustomError ------------
// const customError = new CustomError("Something went wrong!!");

// console.log(customError.message);

//--------- Exception handling using try/catch -------------

try {

    // it will throw an error because doSomething() is not defined
    // doSomething(); 

    // fetchUser();

} catch(e) {
    console.log("Error Occured!!");
    console.log(e);
}

function fetchUser() {
    // it will throw an error because fetch() is not defined
    const users = fetch('http://localhsot/api');
}

// ------------ Uncaught Exception --------------

// process.on('uncaughtException', (error) => {
//     console.log("THere was an uncaught exception: ", error);
//     process.exit();
// })

// fetchUser();

// ---------- Exception with promisses -----------

function fetchData() {
    const data  = fetch('http://localhost/api');
    // const data = {
    //     name : "Praphul",
    //     age : 24
    // }

    return data;
}

// const promise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve(fetchData());
//     } else {
//         reject(fetchData());
//     }
// });

// promise.then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log("Error Occured!! ", error);
// });

// --------------- Exception with Async and Await -----------


const someFunction = async () => {
    try {
        await fetchData();
    } catch (err) {
        throw new CustomError(err.message);
    }
};

someFunction();