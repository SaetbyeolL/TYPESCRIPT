//call signatures: What we see when you hover your mouse over the function
function add(a: number,b: number): number {
    return a + b
}
//same as above:: const add = (a:number, b:number)=> a+b

type Add = (a:number, b:number) => number // Creating a function's call signature type
// type Add = {
//     (a: number, b: number) : number
// } same as above
const add: Add = (a,b) => a + b


/////////////////////////////////////////////////////////////////////////////////////////////////////

// overloading: occur when a function has multiple call signatures(different sets of parameters)
type Add = {
    (a: number, b: number) : number
    (a: number, b: string) : number
}
const add: Add = (a,b) => {
    if(typeof b === "string") return a
    return a + b
}


//example)
Router.push("/home")  // string type's call signature

Router.push({         // object type's call signature
    path: "/home",
    state: 1
})                  

type Config = {
    path: string,
    state: object
}
type Push = {
    (path:string): void
    (config: Config): void
}
const push: Push = (config) => {
    if(typeof config === "string"){
        console.log(config)
    } else {
        console.log(config.path, config.state)
    }
}


//when numer of paramter is different
type Add = {
    (a: number, b: number) : number
    (a: number, b: string, c?: number) : number // c: optional
}

const add:Add = (a, b, c?:number) => {          // specify type
    if(c) return a + b + c
    return a + b
}


/////////////////////////////////////////////////////////////////////////////////////////////////////

// polymorphism
type SuperPrint = {
    (arr: number[]) : void
    (arr: boolean[]) : void
    (arr: string[]) : void
    (arr: (number | boolean)[]) : void
}
const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}
superPrint([1,2,3,4])
superPrint([true,false,false,false])
superPrint(["d", "c"])
superPrint([1,2, true, false])

// concrete type: boolean, number, unknown, etc..
// generic: type's placeholder. typescript infer the type


// generic
// when we make call signature, we don't know type, we use generic
//<>: Type parameter, replaced by a specific type when the function is called
type SuperPrint = {
    <TypePlaceholder>(arr: TypePlaceholder[]) : TypePlaceholder
}
// type SuperPrint = <T>(a: T[]) => T  same as above

const superPrint: SuperPrint = (arr) => arr[0]
const a = superPrint([1,2,3,4])
const b = superPrint([true,false,false,false])
const c = superPrint(["d", "c"])
const d = superPrint([1,2, true, false])

// TypeScript infers the type of generics based on their first usage
type SuperPrint = <T, M>(a: T[], b: M) => T


/////////////////////////////////////////////////////////////////////////////////////////////////////

// generic function
function superPrint<T>(a: T[]){
    return a[0]
}
const a = superPrint<number>([1,2,3,4]) // When you want to explicitly let generic know the type
const b = superPrint([true,false,false,false])
const c = superPrint(["d", "c"])
const d = superPrint([1,2, true, false])


// generic type extension
// If you have a large type that contains many things, and one of them is a type that can be changed, use generic.
type Player<E> = {
    name: string
    extraInfo: E
}
type NicoExtra = {
    favFood: string
}
type NicoPlayer = Player<NicoExtra>

const nico: NicoPlayer = {
    name: "nico",
    extraInfo: {
        favFood: "kimchi"
    }
}
const lynn: Player<null> = {
    name: "lynn",
    extraInfo: null
}

type A = Array<number>
let arr: A = [1,2,3,4]

function printAllNumbers(arr: Array<number>){
}

useState<number>()
















