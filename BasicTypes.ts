// Typescript catches error before executing code
// Typescript can infer automatically types. 
let a : number = 1;
let b : string = "hello";
let c : boolean[] = [true]

//How to explicitly write the type of an object
type Age = number;
type Player =  {   // Type Alias
    readonly name: string,
    age?: Age      // optional parameter
}
const nico : Player = {
    name: "nico"
}
const Lynn: Player = {
    name: "lynn",
    age: 11    
}

//return type
function playerMaker(name: string) : Player{ // How to write the type of argument
    return {
        name: name
    }
}
// same as above::  const playerMaker = (name: string) : Player => ({name})
const nicho = playerMaker("nicho")
nicho.age = 12


/////////////////////////////////////////////////////////////////////////////////////////////////////

//ReadOnly : this cannot be modified
type Player =  {   
    readonly name: string,
    age?: number      
}

const numbers: readonly number[] = [1,2,3,4]
numbers.push(1)                // this will cause error


// Tuple: specify each element types and length of the array clearly
const player: [string, number, boolean] = ["nico", 12, false]
player[0] = "stella"

// undefinedL A value automatically assigned to variables, properties, function return values, etc., 
// that have not been assigned a value.
let a : undefined = undefined // optionalType(?) can be 'undefined'
let b : null = null           // no value

// any: escape from typescript protection. not recommended
const c : any[] = [1,2,3,4]
const d: any = true
c + d                         // it does not cause error


/////////////////////////////////////////////////////////////////////////////////////////////////////

// unknown: When the type of a variable is not known in advance
let a: unknown;
if (typeof a === 'number') {
    let b = a + 1
}

if(typeof a === 'string') {
    let b = a.toUpperCase();
}

// void: return nothing
function hello() {
    console.log('x')
}
const c = hello();

// never: When a function never returns, throw error, infinite loop
function Hi(): never{
    throw new Error("xxx")
}






