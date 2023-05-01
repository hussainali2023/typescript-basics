type NoobDeveloper={
    name:string
}

// type JuniorDeveloper = {
//     name:string,
//     expertise: string,
//     experience: number,
// }

type JuniorDeveloper = NoobDeveloper & {   //intersection type
    expertise:string,
    experience:number
}

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExp: number
}

const newDeveloper: NoobDeveloper | JuniorDeveloper ={  //union type
    name:"Moznu Mia",
    expertise:'Javascript'
}

const developer : NextLevelDeveloper = {
    name: "Rohit Molla",
    experience:2,
    expertise:'React, Next, Node, Mongo',
    leadershipExp:1
}