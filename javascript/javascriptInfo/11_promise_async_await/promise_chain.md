## Overview
* tackle the problem that caused by the callback function
  * problem: pyramid doom
  * solution: promise chain

## Promise Chain

```js
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000)
}).then((v) => {
  return v * 2;
}).then((v) => {
  return v * 2;
}).then((v) => {
  return v
})

```
* promise.then return a promise object.
* then the promise resolve with the value that you just returned.

## Multiple Handlers for one single Promise
* each then run independently
* rarely use this kind of stuff.
```js
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

```


## Return Thenable Object
1. new Promsie()
2. new ThenableObject()

* JavaScript checks the object returned by .then handler
 1. check if has callable then method of the obj
 2. if it has then, pass resolve and reject as arguments.
 3. wait for one of the arugments called.



```js

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000)
})

promise
  .then((value) => {
    console.log('first then!')
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(value + 2);
      }, 1000);
    })
  })
  .then((value) => {
    console.log('secon then!!: ', value)
    return new MyThenable(value);
  })
  .then((value) => {
    console.log('final result: ', value);
  })



class MyThenable {
  constructor(nums) {
    this.nums = nums;
  }

  then(resolve, reject) {
    console.log('this is my thenable object');
    setTimeout(() => {
      resolve(this.nums + 3);
    }, 2000)
  }
}
```

## Summary
* If .then (or catch/finally, doesn’t matter) handler returns a promise, the rest of the chain waits until it settles. When it does, its result (or error) is passed further.
