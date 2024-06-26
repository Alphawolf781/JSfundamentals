let hoistedVar = "I am hoisted"
console.log(hoistedVar)  

hoistedFunction() // function call 
function hoistedFunction(){
    console.log("I am hoisted function!!")
}