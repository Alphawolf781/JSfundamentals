### FUNDAMENTALS OF PROGRAMMING 

1. Variables 
2. Data types 
3. Conditionals 
4. Operators 
5. Control Flows 


(Conditionals , operators and control flows )
1. Making decisions 
2. Performing calculations 
3. Controlling the execution flow of a program 

## Conditionals + Control Flows 
Allows a program to make decisions based on a certain criteria or condition


## Operators (comparisons, arithmetic , logical operators )

Artithmetic Operators : + , - , * , / 

if adding a + b 

let a  = 5 
let b  = 6 
let sum = a + b 


Comparison Operators : used to compare two values -> the result is a boolean value (true or false)

a > b , a >= b 
> : greater than
<  : less than 
= : assignment
! = not 
== : loose equality 
=== : strict equality 

let a  = 5

!a == 5

Logical Operators : combination of symbols that result to a boolean value (true or false)

let a  = 5 
let b  = 10 
let c  = 20 

if(a >= b && a >= c){
   console.log(a)
} else if (b >= a && b >= c) {
   console.log(b)

} else {
   console.log(c)

}

&&  : AND : evaluates to true if both sets of comparisons are true 

|| : OR  : evaluates to true if any of the comparisons sets are true

! : NOT : evaluates to opposite boolean value 



## Control FLows 
Determines the order in which a program's code will execute. 
Allows programs to respond dynamically to different inputs and steates. 

1. Sequential execution : code runs from top to bottom 
2. conditional execution : based on conditions " if , else if , else : switch statement 

if(condition){
    this block runs if the condition evaluates to true 
} else if (condition){
    this block runs to check multiple conditions , can be as many as program needs 
} else if(condition){

} else {
    every condition evaluates to false , then this block runs
}


3. Looping : execute code repeatedly based off a condition , for loop , while loop , do while loop
4. Jump statements : break , continue (loops) , return (functions)


## Types of functions 

1. Named Functions 
2. Anonymous functions
3. Arrow functions 
4. IIFE
5. Callback Functions
6. In built methods (research on the different data type methods)


## Scoping 
In JS , a scope determines the visibility or accessibility of variables and function in different parts of a code script
Affects how variables are looked up and what data is available in different contexts 

## Types 
1. Global Scope 
2. Local/Function scope
3. Block scope 
4. Lexical Scope / Static Scope

### Global Scope 
These references variables declared outside any function or block 
let x = 5 // has a global scope 

{
    block of code.
}

1. Accessible from anywhere inside the code 
2. Can be modified from any place, (this may lead to unintended side effects)


### Local Scope 
Variables declared within functions. They can be used only inside that function

1. Variables are confined to the function in which they are declared 
2. Not accessible from outside the function 
3. Each function call creates a new scope 

### Block Scope 
These defines variables declared within a block of code 

1. Variables are accessible within the block of declaration 
2. Prevents accidental modification of variables outside their intended context. 

{
    let definedvariable = "sth"
    then defined variable is only accessible withing that scope!!!
}

### Lexical Scope (Static Scope)
The scope of variables is determined by their physical location in the code during compilation phase. 
NESTED FUNCTIONS : A function within a function 

1. A functions scope includes the scope of the function or block where it was defined 
2. Variables can be accessed from their defining context 


## Scope Chain 
when a variable is referenced in JavaScript , during compilation the JS engine look up the scope chain to find it. It starts from the current scope and moves outwards until it finds the variable or reaches the global scope

## Hoisting 
A JS mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. Only the declarations are hoisted not the initilization

let x;
x = '5'


### Data types : 
In JS there are two categories of data types 

## Primitive data types 
These types of data types are immutable and values cannot be changed once created , however you can reassign a new value to the variable holding the primitive type.

- Numbers : integers and floating point numbers (1.0,)
- String 
- Boolean 
- Undefined : when a variable is declared but not assigned a value 
- Null : intentional absence 
- Symbols 

1. Immutability 
2. Stored by value 
3. Fixed size : occupy a fixed amount memory , therefore storage is in stacks 


## Non-primitive data types 
They are also known as reference types. 
They hold multiple values or more complex entities

- Objects : a collection of key and value pairs where keys are strings and the values can be of any data type 

<!-- syntax of object -->
let variablename = {
    name : "Bob",
    age : 20, 
    address: {
        location : hshdjhsd, 
        postal_code: 4934834
    }
}

- arrays : ordered collections of elements that can be of any type and are indexed by numbers 

let colors  = ["red","green",true,20]

- functions
- maps 
- sets
- date 

1. Mutability : the values can be changed or modified after creation 
2. Stored by Reference : variables store references to the memory location where the data is actually held 
3. Dynamic Size : they can grow or shrink in size , and their memory allocation is managed dynamically 

### DATA STRUCTURES 
DS are a way of organizing and storing data in computer systems to efficiently manage and manipulate the data 

- arrays 
- objects 


### Loops
Loops are used to execute a block of code repeatedly 
{
    block of code 
}

an initializer : is a variable that reference the current element in iteration/loop sequence

1. for loop : used when we know in advance how many times we want to execute a block of code. 
2. while loop : used to execute a block of code as long as a condition remains true
3. do while loop : similar to the while loop , but it will execute the block of code before checking the condition
4. for..in loop :  used to iterate over properties of an object 
5. for ...of loop : used to loop over arrays. , forEach


### Phrase JAVASCRIPT FUNCTIONS ARE FIRST CLASS (CITIZENS)
- functions in js are treated as first-class objects
- functional programming : 
- Object Oriented Programming : 

document.addEventListener('click', function () {
    validateEntries()
    <!-- different functions -->
    function validateEntries(){
        <!-- code logic -->
        submitFunction(name,email,institution)
    }

    <!-- submit -->
    function submitFunction(name,email,institution){
          <!-- code logic -->

    }
})


- this is a fundamental concept to understanding JS functional programming capabilities and flexibilities in handling functions 

1. Functions can be assigned to variables
2. Functions can be passed as arguments (Callback functions) 
3. Functions can be returned from other functions 
4. Functions can be stored in data structures 
5. Function have properties and methods.
6. Functions can be immediately invoked.  