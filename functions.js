// named functions 
// 1. named function without parameters 
without_parameters()

// named functions are not self invoking (only executed when called)
// to use a function ensure you make a call to the function 

// 2. a function with parameters 
function addition(x,y){
    let s = x + y 
    console.log(s)
    // the return keyword is used to return a value from function 
    return s
}
//  when a function has parameters , on the call of the function the required arguments must be provided 
addition(10,40)

//  a function can be reusable  : function declarations
function sum(){
    let s = addition(10,40) + 10 
    return s 
}

console.log(sum())

//  function expressions :
const functionName = function(){
    // code logic 
    console.log('this is a function expression')
}
functionName()

// arrow functions syntax

const multiply = (a,b) => a * b 
console.log(multiply(10,40))

const division = (a,b) => {
   return a / b
}
console.log(division(40,10))

// anonymous function 
// function(parameters){

// }

// document.addEventListener('click', function(){

// })
// document.addEventListener(event,function)

setTimeout(function(){
    console.log("this is anonymous function")
},5000)
// setTimeout(function,time)

// functions : pre-built, custom functions , Methods : pre-defined , inbuilt functions 
// the instance method .toUpperCase 
let name = 'joseph'
console.log(name.toUpperCase())

// immediately invoked function expressions (IIFE)
// (function(){})()
// (function(){
//     console.log("this is an immediately invoked function expression")
// })()

// 6. Callback Function : a function passed as an arguement to another function is executed after some operation
// parameters can be of any data type,
function greetUser(name,callback){
    // string interpolation ``
    name = "Jack"
    console.log(`Hello, ${name}`)
    callback(10,40)
}

function saygoodbye(){
    console.log('Goodbye!!')
}

greetUser("joseph", addition)

function without_parameters(){
    console.log("This is a named function without parameters")
 }


//  generator functions 


// functions can be returned from other functions 
function createMultiplier(multiplier){
    return function(num){
        return num * multiplier
    }
}

const double = createMultiplier(2)
console.log(createMultiplier(2))
console.log(double(5))

function createGreeting(greeting){
    // here we can have more logic 
    return function(name){
        return `${greeting}, ${name}!`
    }
}

console.log(createGreeting('Good Morning'))
const user_logged_in = createGreeting('Good Morning')
console.log(user_logged_in)
console.log(user_logged_in('Joseph'))


function sayHello(){
    console.log("Hello!")
}

sayHello.description =  "this function says hello"
sayHello.newFunction = function (){
    console.log('this is the function call')
}
console.log(sayHello())
console.log(sayHello.description)
console.log(sayHello.newFunction())