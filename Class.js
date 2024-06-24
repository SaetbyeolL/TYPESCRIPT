// The ways to create objects in Javascript

//1) object literal: How to define and create objects using curly braces{}. pairs of property&value 
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet1: function(){
        console.log(`hello, my name is ${this.firstName} ${this.lastName}`);
    }
};
console.log(person1.firstName);  // "John"
person1.greet1();                 // "Hello, my name is John Doe"


//2) Object.create method
const personProto = {
    greet2: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
};
const person2 = Object.create(personProto)
person2.firstName = "John",
person2.lastName = "Doe";

console.log(person2.firstName);
person2.greet2();


//3) constructor function : we can notice whether function is constructor or not based on 'this'
function Person(firstName, lastName) {
    this.firstName = firstName;        //this: 'this' points to newly(current) created object
    this.lastName = lastName;
}
Person.prototype.greet3 = function() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
}

const personA = new Person("John", "Doe");
const personB = new Person("Jane", "Smith");

console.log(personA.firstName);
personB.greet3();

//* prototype: In JavaScript, functions are objects, and every function object has a property called prototype.


//4) class
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    greet() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
}
const personC = new Person("John", "Doe");
const personD = new Person("Jane", "Smith");


//5) Return an object from a function
function createPerson(firstName, lastName) {
    return {
        firstName, 
        lastName, 
        greet: function(){
            console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
        }
    };
}

const personE = createPerson("John", "Doe");
const personF = createPerson("Jane", "Smith");































