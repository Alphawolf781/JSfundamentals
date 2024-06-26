let globalVar = 'I am global'

function showGlobalVar() {
     //console.log(globalVar)
     globalVar = "This is change"
     return globalVar
}

const nextGlobalVar = () => {
    return globalVar
}

console.log(showGlobalVar())
console.log(nextGlobalVar())


//  Local scope 
function showLocalScope(){
    let localVar = 'I am Local'
    return localVar
}

// function shownextLocal(){
//     return localVar
// }

console.log(showLocalScope())
// console.log(shownextLocal())

function calculatesum(a,b){
    // this is a new local scope, where a and b are treated as local variables 
    let sum = a + b
    console.log(`the sum of ${a} and ${b} is ${sum}`)

    function multiplyByTwo(){
        let name = "Joseph"
        let doublesum = sum * 2
        console.log(`the double of the sum is ${doublesum}`)
        console.log(name)
    }
    multiplyByTwo()
}

calculatesum(5,3)


// Lexical example 
function outerFunction(){
    let outerVar = 'I am outside'
    function innerFunction(){
        //onsole.log(outerVar) // this is accessible due to lexical scope 
        return outerVar
    }
    return innerFunction()
}

console.log(outerFunction())


