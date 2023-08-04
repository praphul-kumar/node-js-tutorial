/**
 * Install `progress` package first using command:
 * `npm i progress`
 */

const ProgressBar = require('progress');

const bar  = new ProgressBar("downloading [:bar] :rate/bps :percent :etas", {
    total: 20,
});

const timer =  setInterval(() => {
    bar.tick();
    if (bar.complete) {
        clearInterval(timer);
    }
}, 100);

// We can also add color in console output using `chalk` package 
