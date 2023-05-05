"use strict";
function kgToGram(param) {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return (`The converted result is: ${value} gram`);
    }
    else if (typeof param === 'number') {
        const value = param * 1000;
        return (value);
    }
}
kgToGram(1000);
const resultToNumber = kgToGram(5000);
const resultToString = kgToGram("5000");
try {
}
catch (error) {
    console.log(error.message);
}
