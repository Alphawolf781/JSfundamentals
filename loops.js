//  for loop 
// syntax 
// for(intializer, condition based off intializer , incrementor/decremtor){
//     // what we want to be repeated 

// }
// printing o-4 using the loop
// incremetor : ++ : add one , -- minus 1 
// the loop terminates when the condition is no longer satisfied.
for(let x = 0; x < 5; x++){
    // what we want to be repeated 
    console.log(x)
}

//  while loop 
// syntax 
// while(condition based off the variable/initializer){
//     // repeated code 
// }
// 1. we need an initializer , mostly this is a variable reference 
let count = 0
while(count < 5){
    console.log(count)
    // incrementor or decrementor 
    count++
}

// do...while 
// first all of does then looks at the condition to keep on doing 
// syntax 
// do {
//    // code to be repeated 
// } while()
// I have initializer 
let do_count = 0
do {
    console.log(do_count)
    // incrementor or decrementor 
    do_count++
} while(do_count < 5)