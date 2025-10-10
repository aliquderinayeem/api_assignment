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
Let I have an object or array and the object has some attributes.If I write any attribute's name on the left side of object declaration then a variable will be created automatically of the same name as the attribute and contain value of the attribute.

5) Explain template literals in ES6. How are they different from string concatenation?
=>
Template literals are written inside  `` .
They help a lot to write dynamic text or any dynamic object.They also help to write as the same way as expected in output.
For example:
console.log("Hello\nI am Boss")
If we use `` then
console.log(`Hello
I am Boss`)