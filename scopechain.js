let globalVar = 'Global'

function outer(){
    let outervar = 'outer'

    function inner(){
       let innerVar = 'inner'
       console.log(innerVar) // inner , local varibale , scope chain :
       console.log(outervar)
       console.log(globalvar)
    }

    inner()
}

outer()