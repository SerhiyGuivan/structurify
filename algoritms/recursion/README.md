## What is Recursion?

**Recursion** is a problem-solving technique in programming.

A **recursive function** is a function that calls itself somewhere within the body of the function.

```js
function recursiveFunc() {
  // some code here... 
  recursiveFunc()
}
```
### The Three Parts of a Recursive Function

* *The function definition.*
* *The base condition.*
* *The recursive call.*

```js
  function doSomething(n) {
    if (n === 0) { // <= Base condition
      console.log("TASK COMPLETED!")
      return;
    }
    
    console.log("I'm doing something.")
  
    doSomething(n - 1) // <= The recursive call
  }
  
  doSomething(3)
```

When using a recursive function, **the base condition** is what lets the function know when to stop calling itself. Once the base condition is met, the recursion ends. Without the base condition, you will run into infinite recursion. Also, without a base condition, your function exceeds **the maximum call stack**.

**The recursive call** is what handles the function calling itself again. On every iteration of a recursive call, the parameter will differ from that of the previous call. The function will keep calling itself until the new parameter satisfies the base condition.

### Recursion vs Loops

Recursion and loops work in similar ways. Every recursive function you write has an alternative solution with a loop.

### More about Recursion

* [What is Recursion in JavaScript?](https://www.freecodecamp.org/news/recursion-in-javascript/)