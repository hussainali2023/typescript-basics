"use strict";
// npx ts-node-dev --respawn fileName 
const crush1 = {
    name: "Moina Pakhi",
    age: 19,
    profession: 'Developer',
    address: "Kolkata"
};
const crush2 = {
    name: "Jaan Pakhi",
    // age:20,
    profession: 'Teacher',
    address: "Siliguri"
};
const courseName = "Next Level Web Developement Course";
const calculate = (num1, num2, operation) => {
    return console.log(operation(num1, num2));
};
calculate(20, 20, (x, y) => x - y);
