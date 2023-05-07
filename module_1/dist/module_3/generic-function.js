"use strict";
// Arrow Function 
const createArray = (param) => {
    return [param];
};
const result3 = createArray("Bangladesh");
const createArray1 = (param) => {
    return [param];
};
const result4 = createArray1("dhdhd");
const result5 = createArray1({ name: "Raju" });
//Spread Operator
const crush = "kate Winston";
const myInfo = {
    name: "Persian",
    age: 34,
    salary: 100000
};
const newData = Object.assign(Object.assign({}, myInfo), { crush });
console.log(newData);
