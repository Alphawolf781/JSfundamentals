let temprature = 0;

// temprature > 30 , temprature == 25 , temprature does not meet whats on the left do sth else  

// let a = "5"
// let b = 5
// // loose equality : doesnt check the data type
// // strict : checks 
// if(a === b){
// //   true 
// console.log("true")
// } else {
//     console.log("false")
//     // convert a to become an integer 
//     let numbera = parseInt(a, 10)
//     //  string to integer b.toString()
//     console.log(numbera + b)
// }

let a  = 5 
let b  = 10 
let c  = 20 
// and results to true of both sets of comparisons are true 

if(a >= b && a >= c){
   console.log(a)
} else if (b >= a && b >= c) {
   console.log(b)

} else {
   console.log(c)

}