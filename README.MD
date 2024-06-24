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