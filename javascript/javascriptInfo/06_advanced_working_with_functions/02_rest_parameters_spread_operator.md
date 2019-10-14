## Rest Parameters

```js

function sumAll(...args) { // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3
alert( sumAll(1, 2, 3) ); // 6

```

## Spread Operator

```js

let arr = [3, 5, 1];
alert( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)


let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
alert( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25


let arr = [3, 5, 1];
let arr2 = [8, 9, 15];
let merged = [0, ...arr, 2, ...arr2];
alert(merged); // 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)
```


## Arguments
  * is iterable object

## Summary

* When we see "..." in the code, it is either rest parameters or the spread operator.
* There’s an easy way to distinguish between them:
  * When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array
  * When ... occurs in a function call or alike, it’s called a “spread operator” and expands an array into a list.

* Use patterns:
  * Rest parameters are used to create functions that accept any number of arguments.
  * The spread operator is used to pass an array to functions that normally require a list of many arguments.

* Together they help to travel between a list and an array of parameters with ease.
* All arguments of a function call are also available in “old-style” arguments: array-like iterable object.
