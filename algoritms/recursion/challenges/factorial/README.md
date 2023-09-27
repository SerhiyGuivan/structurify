# Factorial

Write a function **factorial** which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.**factorial zero (0!) is always 1**.

```js
// factorial(4) // 24
```

<details>
  <summary><b>JS Solution</b></summary>

  ```js
  function factorial(x) {
    if (x < 0 ) return 0;
    if (x <= 1 ) return 1;
    return x * factorial(x - 1);
  }

  factorial(4) // 24
  ```
</details>