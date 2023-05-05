type User = {
    name:string;
    age:number;
};

interface IUser {
    name:string;
    age:number
}

interface IExtendedUser extends IUser {
    role:string
}

const result: IExtendedUser = {
    name:'Rohit',
    age:12,
    role: 'Student'
}

// const userWithTypeAlias: User={
//     name:"Tyep Alias",
//     age:100
// };
// userWithTypeAlias.

// const userWithInterface: IUser = {
//     name:'Interface',
//     age: 20
// }
// userWithInterface.



interface IAddNumbers {
    (num1:number, num2:number):number
}

// type addNumberTypes=(num1:number, num2:number)=> number

const addNumber : IAddNumbers = (num1, num2) => num1+ num2;

// const addNumber = (num1:number, num2:number):number => num1 + num2

type rollType = number[]
interface IRollNumbers {
[index:number]:number
}

const rollNumbers: IRollNumbers = [1, 5, 7]
console.log(rollNumbers)