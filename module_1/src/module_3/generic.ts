const RollNumbers1: Array<number> = [32, 45, 64]   //number[] er poriborte
const RollNumbers2:string[] = ["32", '45', '64']

type GenericArray<T> = Array<T>

const RollNumbers3: GenericArray<number| string | boolean | null | undefined> = [12, "15", true, null, undefined]

const userNameAndRollNumbers: Array<{name:string, roll:number}> =[
    {
        name: "Rohit",
        roll: 3
    },
    {
        name:'Sakil',
        roll: 34
    }
]

console.log(userNameAndRollNumbers)

type GenericTuple <x, y> = [x, y]
 const relation: GenericTuple <string, string> = [ "Kate Unision", "Robin Dsarta"]
