// Typescript catches error before executing code
// Typescript can infer automatically types. 
let a : number = 1;
let b : string = "hello";
let c : boolean[] = [true]

//How to explicitly write the type of an object
type Age = number;
type Player =  {   // Type Alias
    name: string,
    age?: Age      // optional parameter
}
const player : Player = {
    name: "nico"
}
const playerLynn: Player = {
    name: "lynn",
    age: 11    
}

//return type
function playerMaker(name: string) : Player{ // How to write the type of argument
    return {
        name
    }
}
// same as above::  const playerMaker = (name: string) : Player => ({name})
const nico = playerMaker("nico")
nico.age = 12

//////////////////////////////////////////////////////////////////////////////////////////






















