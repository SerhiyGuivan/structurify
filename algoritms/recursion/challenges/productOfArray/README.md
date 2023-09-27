# ProductOfArray

Write a function called ``productOfArray`` which takes in an array of numbers and returns the product of them all.

```js
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
```

<details>
  <summary><b>JS Solution</b></summary>

  ```js
  function productOfArray(arr) {
    if(arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
  }

  productOfArray([1,2,3,10]) // 60
  ```
</details>


