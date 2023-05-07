// Generic Interface 

interface CrushInterface<T>{
    name:string,
    husband:T
}

const crush1: CrushInterface<boolean>={name:"Kate Winslet", husband:true}

const crush5: CrushInterface<string> = {name:"Kate Winston", husband:"Persian"}