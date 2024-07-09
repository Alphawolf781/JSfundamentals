// global context
// any execution that happens outside any function 
console.log(this)


// method context 
// when a function is called as a method of an object , this refers to the object that owns the method
const obj = {
    name: 'Joseph', 
    greet: function(){
        console.log(this.greet)
    }
}

obj.greet()

// constructor context (OOP programming)
// In a constructor function or class , 'this' will refer to the newly created instance 
// let newArray = new Array(3)
// newArray = new Array(4)

// class Array{
//    constructor(length){
//     this.length = length
//    }
// }

function Person(name){
   this.name = name
}

let x = new Person('Alice')
console.log(x.name)
x = new Person('Joseph')
console.log(x.name)

// Arrow function context 
// arrow functions do not have their own this references , instead 'this' is lexically (lexical scoping) from the 
// outer function where the arrow function is defined 
const normalarrow = () => {
    console.log(this)
}

normalarrow()

const arrowObj = {
    name: "Alice", 
    greet: function(){
        const innerGreet = () => {
            console.log(this)
        }
        innerGreet()
    }
}

arrowObj.greet()

function outer(){
    let x = 0
    function inner(){
        console.log(x)
    }
}

// Explicit Binding 
// function can explicitly bind their 'this' value using 'call' keyword : 'apply' 'bind'

// function context 
// any execution that happens inside of a function then the this keyword will refer to the global object or 
// undefined 
function showThis(){
    console.log(this.name)

}
const person = {name: 'Bobb'}
showThis.apply(person)
const boundedToThis = showThis.bind(person)
boundedToThis()
showThis()