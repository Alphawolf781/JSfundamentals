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