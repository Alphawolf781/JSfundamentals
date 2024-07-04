// array is a ds that can hold multiple values , typically of the same type in a single variable 
//  1. Will hold multiple values 
//  2. they values are ordered and are called elements 
//  3. the numeric index starts from zero : 0

// a . how to create an array  ?
 
// 1. Literal notation 
let fruits = ['Apple','Banana','Orange']
console.log(fruits)
// 2. the Array constructor 
let numbers = new Array(1,2,3,4,5)
// 3. Having an empty array and adding elements later (.push)
let emptyArray = []
// fruits[3] = 'Grapes' .push
emptyArray.push('Apple')
emptyArray.push('Banana')

// b. Accessing elements : accessing is done via tagging the index position
// index position of the array , the size/length of the array (what is the element count of the array)
console.log(fruits[0])
// getting the length (.length)
console.log(fruits.length)

// c. Modifying elements 
// changing the value of the element ,
// access the element and reassign it its new value 
fruits[1] = 'Pear'


// d. in built array methods 

// 1. push() : add one or more elements to the end of the array 
// 2. pop() : removes the last element of the array 
fruits.pop()
console.log(fruits)
// 3. shift() : removes the first element of the array 
fruits.shift()
console.log(fruits)
// 4. unshift() : adds one or more elements to the beginning of an array 
fruits.unshift('Blueberry')
fruits.unshift('Grapes')
console.log(fruits)
// 5. slice() : returns a shallow copy of the portion of the array
let slicedFruits = fruits.slice(0,2)
console.log(slicedFruits)
// 6. splice : add/removes elements from a specified index position an array 
fruits.splice(1,0, 'Orange', 'Peach')
console.log(fruits)

// e. looping over arrays : 
// for loop , for...of loop 
let colors = ['red', 'green', 'blue']
// console.log(colors[0])
// console.log(colors[1])
// console.log(colors[2])
//  using for loop 
//  in the condition use the size of the array for your initializer 
for(let x = 0; x < colors.length; x++){
      console.log(colors[x])
}

// for...of loop 
// for(initializer of nameofarray){
//     // code to be repeated
// }

for(let x of colors){
    console.log(x)
}


// function to add two numnbers 
//  1. validate the entries 
//  2. Input tansforms to integer from string
//  3. variable to save sum 
//  4. use of arithmetic operator + 