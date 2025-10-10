1) What is the difference between var, let, and const?
=>
var=>
a.if a variable is declared as var then it will be hoisted but won't contain the value assigned will contain [undefined]
b.It's value can be changed any time
let=>
a.if a variable is declared as let then it will not be hoisted and it's value cannot be used before declaration
b.It's value can be changed any time
c.remains within function scope if declared inside function
const=>
a.if a variable is declared as const then it will not be hoisted and it's value cannot be used before declaration
b.It's value cannot be changed any time
c.remains within function scope if declared inside function


2) What is the difference between map(), forEach(), and filter()?
=>
map()=>
a.it returns automatically if not defined within {}
b.it must return something 
forEach()=>
a.It is the alternative of for loop
b.It iterates through it's members
filter()=>
a.It returns an array based on condition
b.It returns an empty array if nothing is found

3) What are arrow functions in ES6?
=>
The syntax of arrow function is :
const funcName=(parameters_list)=>{
    //function body
}

4) How does destructuring assignment work in ES6?
=>
Let I have an object and the object has some attributes.If I write any attributes name in the left side of object declaration then 