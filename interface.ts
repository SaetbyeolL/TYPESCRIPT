// Interface
// type can be whatever you want(boolean, string, number, specific values, object, type alias)
// interface only work for one thing: specify shape of objects
// we can use interface as types

type Nickname = string
type Friends = Array<string>

//* we can use concrete value as type 
type Team = "red" | "blue" | "yellow"
type Health = 1 | 5 | 10


// 2 ways to let typescript know shape of objects
//1) type
type Player = {
    nickname: Nickname,
    team: Team,
    health: Health
}
//2) interface
interface Player {
    nickname: Nickname,
    team: Team,
    health: Health
}

const nico: Player = {
    nickname: "nico",
    team: "yellow",
    health: 10
}


// interface: looks like class
interface User {
    name: string
}
interface User {     //combine same interface
    lastName: string
}
interface Player extends User {
}
const nico: Player = {
    name: "nico"
}

nico.name = "lalalala"


/////////////////////////////////////////////////////////////////////////////////////////////////////
//abstract class convert to interface

abstract class User {
    constructor(
        protected firstName: string,
        protected lastName: string
    ){}
    abstract sayHi(name:string): string 
    abstract fullName(): string
}

class Player extends User {
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string){
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}

// interface is lightweight. When the interface is compiled, it is not converted to js and disappears.

interface User {
    firstName: string,
    lastName: string
    sayHi(name:string): string 
    fullName(): string
}
interface Human {
    health: number
}

class Player implements User, Human { //implements: it says 'Player' inherits 'User'
    constructor(
        public firstName: string, //Inherited properties cannot be private
        public lastName: string,
        public health: number
    ){}
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string){
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}




















