// Generic Interface 

interface CrushInterface<T, U= null>{   //default value U=null
    name:string,
    husband:T,
    wife?:U    //optional chaining ?
}

const crush1: CrushInterface<boolean>={name:"Kate Winslet", husband:true}

const crush5: CrushInterface<string> = {name:"Kate Winston", husband:"Persian"}

const crush6: CrushInterface<PersonInterface, PersonInterface> ={
    name:"kate",
    husband:{
        name:"Persian",
        age:32
    },
    wife:{
        name:"Winset",
        age:32
    }

}

interface PersonInterface {
    name:string,
    age:number
}