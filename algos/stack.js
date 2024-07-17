// functional programming / oop 
const createStack = () => {
    let items = []

    let operationObjects = {
        push: (element) => {
            items = [...items,element]
        }, 
        pop: () => {
            if(items.length === 0){
                return 'stack is empty'
            }
            const top = items[items.length - 1]
            items = items.slice(0,-1)
            return top
        },
        peek: () => {
            if(items.length === 0){
                return 'stack is empty'
            }
            const top = items[items.length - 1]
            return top
        }, 
        size: () => {
            return items.length
        }, 
        isEmpty: () => {
            return items.length === 0;
        }, 
        printStack: () => {
            return items.join(" ")
                }
    }

    return operationObjects

}

const stack = createStack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
console.log(stack.printStack())
console.log(stack.pop())
console.log(stack.printStack())
console.log(stack.peek())
console.log(stack.printStack())
console.log(stack.isEmpty())
console.log(stack.size())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())





