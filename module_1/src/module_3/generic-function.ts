// Arrow Function 

const createArray = (param:string): string[]=>{
    return [param]
}

const result3 = createArray("Bangladesh")


const createArray1 = <T>(param:T): T[]=>{
    return [param]
}

const result4 = createArray1<string>("dhdhd")

type Name = {
    name:string
}
const result5 = createArray1<Name>({name:"Raju"})

//Spread Operator

const crush = "kate Winston"
const myInfo = {
    name: "Persian",
    age: 34,
    salary: 100000
}

// const newData = {...myInfo, crush}
// console.log(newData)

const addMeInMyCrush=(myInfo:object)=>{
    const crush = "linds crusar"
    const newData = {...myInfo, crush}
    return newData;
}