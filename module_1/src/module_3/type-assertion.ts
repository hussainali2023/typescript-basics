function kgToGram(param:string |number):string|number| undefined {
    if (typeof param === 'string'){
        const value = parseFloat(param)*1000;
        return (`The converted result is: ${value} gram`) ;
    }
    else if(typeof param === 'number'){
        const value = param * 1000;
        return (value);
    }
    }
    kgToGram(1000)
    
    const resultToNumber = kgToGram(5000) as number;
    const resultToString = <string>kgToGram("5000");


    type CustomErrorType={
        message:string
    }

    try{

    }
    catch(error){
        console.log((error as CustomErrorType).message)
    }
