// a collection of key and value pairs where each key is a string and each value can be of any data type

// a. Creating an object 
// 1. Object literal notation 
let person = {
    name: 'Joseph Mbugua', 
    age: 28,
    isEmployed: true,
    greet: function(){
        console.log("Hello , I am Joseph!")
    }
}

// 2. Using the object constructor 
let car = new Object()
car.make = 'Toyota'
car.model = 'Camry'
car.yom = '2020'

let car_two  = {
    make : 'Toyota',
    model: 'Camry',
    yom: '2020'
}



// b. accessing properties 
// dot notation 
console.log(person.name.toUpperCase())
console.log(person.greet())

console.log(car.model)
// bracket notation 
console.log(car['make'])
console.log(person['age'])


// c. modifying properties 
// access the key reassign the new value 
// i want to change the model of the car to a corolla 
car['model'] = 'Corolla'
console.log(car.model)
car.make = 'prado'
console.log(car.make)
// adding properties 
person.country = 'Kenya'
console.log(person.country)
car['chassis_number'] = 495849859
console.log(car.chassis_number)


// d. Methods 
// objects can have methods which are simply functions associated with the object


// e. Looping over object properties : loops
// for .... in loop 
// syntax notation 
// for(initializer in object reference){
//     // task to be repeated 
// }
// x / initializer stores a reference to the different keys in the object 
for(let x in car){
   // console.log(`${x}: ${car[x]}`)
    if(x === 'make'){
       console.log(car[x])
    }
}
