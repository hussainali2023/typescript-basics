"use strict";
// normal function
function add(num1, num2) {
    return num1 + num2;
}
add(5, 6);
//Arrow Function
const arrowFunction = (num1, num2) => num1 + num2;
const arr = [];
function addition(num1 = 44, num2) {
    return num1 + num2;
}
addition(34, 46);
// spread operator 
const myFriends = ['Ashik', 'Mahasin', "Swyeb"];
const newFriends = ["Nowaj", "Sahid", "Bikram"];
myFriends.push(...newFriends);
console.log(myFriends);
// npx ts-node-dev src/function.ts
// rest paremeter 
const greetFriends = (friend1, friend2, friend3) => 
// console.log(`Hi ${friend1}\n Hi ${friend2} \n Hi ${friend3}`) 
greetFriends('abul', "kabul", "dabul");
const surpriseFriends = (...friends) => friends.forEach((friend) => console.log(`Hi ${friend}`));
surpriseFriends("Rohit", "Mamun", "Sakil", "Ashik", "Mahasin");
// Array and Object Destructure 
