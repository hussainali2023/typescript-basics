// npx ts-node-dev --respawn fileName 
 
 type CrushType = {
    name:string,
    age?:number,
    profession:string,
    address:string
 }
const crush0: CrushType = {
    name:"Moina Pakhi",
    age:19,
    profession: 'Developer',
    address: "Kolkata"
}

const crush2: CrushType = {
    name:"Jaan Pakhi",
    // age:20,
    profession: 'Teacher',
    address: "Siliguri"
}


type CourseNameType = string
const courseName: CourseNameType = "Next Level Web Developement Course"

const calculate = (num1:number, num2:number, operation:(x:number, y:number)=>number ) => {
    return console.log(operation(num1, num2)) ;
    
}
calculate(20, 20, (x,y) => x - y)
