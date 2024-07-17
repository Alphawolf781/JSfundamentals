a word machine is a system that perfroms a sequence of simple operations on a stack of integers . Initially this stack is empty. the sequence of operations is given as a string. operations are separated by single spaces. The following operations are specified 

1. an integer x (from 0 to 2^20 - 1) :  the machine pushes x onto the stack 
2. "POP" the machine removes the topmost number from the stack 
3. "DUP" : the machine pushes a duplicate of the topmost number onto the stack 
4. "+":  the machine pops the two topmost elements from the stack , adds them together and pushes the sum onto the stack 
5. "-" : the machine pops the two topmost elements from the stack, subtracts the second one from the first (topmost) one and pushes the difference onto the stack. 

After processing all the operations the machine returns the topmost value from the stack. The machine processes 20-bit unsigned integers ( numbers from 0 to 2^20 - 1). An overflow in addition or underflow in subtraction causes an error .The machine also reports an error when it tries to perform an operation that expects more numbers on the stack than the stack actually contains. Also if, after performing all the operations , the stack is empty, the machine reports an error. For example given "4 5 6 0 7 +" the machine will return 8.  Given "13 DUP 4 POP 5 DUP + DUP + -" the machine returns 7. Given a string "5 6 + -" the machine reports an error , after addition there is only one number on the stack and the subtraction expects two. 
Given a string "3 DUP 5 - -" the machine reports an error, the second subtraction yields a negative result. In javascript write a function that given a string s containing a sequence of oeprations for the word machine, returns the result the machine would return after processing the operations. The function should return -1 if the machine would report an error. Use sample inputs above to represent S


