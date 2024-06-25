///////////////////////////////////////////////////////////////////////////////////////////////////
// private 

class Player {
    constructor(
        private firstName: string,  // private only allowed in Typescript
        private lastName: string,
        public nickname: string
    ){}
}

const nico = new Player("nico", "las", "nick");
nico.firstName // it does not allows to modify 'firstName'


// Abstract class: This class cannot create new instance directly
//                 This can only be used when you inherit abstract class to subclass
abstract class User {
    constructor(
        private firstName: string,
        private lastName: string,
        public nickname: string
    ) {}
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}


//* child class cannot have 'private' properties and methods
class Player extends User { // Player inherits User
}
const niko = new Player("nico", "las", "nick")
niko.getFullName()


// Abstract method: abstract method is a method that must be implemented by all classes that inherit from the abstract class.
// protected: it allows within inside of declared class, subclass
// public: default
// private: only within class 

abstract class User {
    constructor(
        protected firstName: string,
        protected lastName: string,
        protected nickname: string
    ) {}

    abstract getNickName(): void //this class cannot be instantiated

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}
 
class Player extends User {
    getNickName(){
    }
}
const niko = new Player("nico", "las", "nick")
niko.getFullName()
niko.firstName // it cause error


/////////////////////////////////////////////////////////////////////////////////////////////////////

//Creating Dictionary using class
type Words = {
    [key:string]: string
}

class Dictionary {
    private words: Words
    
    constructor(){
        this.words = {}
    }
    add(word: Word){
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def;
        }
    }
    def(term: string){
        return this.words[term]
    }
    static hello(){
        return "hello"
    }
}

class Word {
    constructor(
        public readonly term: string, 
        public readonly def: string
    ) {}
}

const kimchi = new Word("kimchi", "korean food")
const dict = new Dictionary()
dict.add(kimchi)
dict.def("kimchi")











    







