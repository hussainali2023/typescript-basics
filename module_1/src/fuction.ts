// normal function

function  add (num1:number, num2:number){
    return num1 + num2;
}
add(5,6)

//Arrow Function

const arrowFunction = (num1:number, num2:number):number => num1 + num2;

const arr = []

function addition(num1: number = 44, num2: number) {  //paramter we always use last value as a default parameter
    return num1 + num2;
}

addition(34, 46)


// spread operator 
const myFriends = ['Ashik', 'Mahasin', "Swyeb"]
const newFriends = ["Nowaj", "Sahid", "Bikram"]

myFriends.push(...newFriends)
console.log(myFriends)

// npx ts-node-dev src/function.ts

// rest paremeter 

const greetFriends = (friend1:string, friend2:string, friend3:string ):void => 
// console.log(`Hi ${friend1}\n Hi ${friend2} \n Hi ${friend3}`) 

greetFriends('abul', "kabul", "dabul")

const surpriseFriends = (...friends:string[] ):void => friends.forEach((friend) => console.log(`Hi ${friend}`))


surpriseFriends("Rohit", "Mamun", "Sakil", "Ashik", "Mahasin")


