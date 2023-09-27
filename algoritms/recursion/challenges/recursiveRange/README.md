# RecursiveRange

Write a function called **recursiveRange** which accepts a number and adds up all the numbers from 0 to the number passed to the function

```js
// recursiveRange(6) // 21
// recursiveRange(10) // 55 
```

<details>
  <summary><b>JS Solution</b></summary>

  ```js
  function recursiveRange (num) {
    if (num <= 1) return num;
    return num + recursiveRange(num - 1);
  }

  recursiveRange(6) // 21
  ```
</details>