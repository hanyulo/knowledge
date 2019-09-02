## Overview
* producing code
  * do something and take time
  * example: load script, call api to get data
* consuming code
  * wants the result of the “producing code”
* promise
  * an object from new Promise constructor
  * links the “producing code” and the “consuming code”
* executor: callback function for new Promise
* handler: then, catch

## Promise

```js

const executor = function(resolve, reject) {
  // executor (the producing code, "singer")
}
let promise = new Promise(executor);
```

* Executor
  * the argument of Promise constructor called executor
  * executor run automatically as the promise is created.
  * it contains producing code
  * receive two arguments
    1. resolve function
    2. reject function
  * invoke resolve || reject after execute it's tasks.
  * can only call resolve || reject once.


* promise object
 * state:
  1. pending
  2. settled
    1. fulfilled
    2. rejected
 * result:
  1. undefined
  2. whatever you return

* After execution
  * resovle and reject are only accpet one argument
  * resolve
    * set state of promise to fulfilled
    * set result to values
  * reject
    * set state of promise object to rejected
    * set result to error
    * Better to use Error objects


* Tips
  * Immediately calling resolve/reject is fine

## Consumers
* then
* catch
* finally

### then
* First Argument
 * run when the promise object is resolved
 * receive the result data

* Second Argument
  * run when the promise object is rejected
  * receives the error

### catch
  * .catch(f) is a complete analog of .then(null, f), it’s just a shorthand.

### finally
  * has no arguments
  * runs when the promise is settled, doesn't matter successfully or not.
  * perform “general” finalizing procedures.
  * finally pass anything(result, err) to next handler.

## Comparison
* Callback
  * has pyramid doom.
  * can just have on callback function.

* Promise
  * solve pyramid doom
  * chain: process data multiple times with different function.



## MyQuickNote
* if the error is handled by a then, the error will not be passed on to the next then or catch handler.
* if there is any error in the middle of chaining-then, the next/closest error handler will handle the error. Therefore, the rest of the error handlers will not be invoked.
* if there is no error occurs, all chained then will be invoked
* if the current then do not return anything, the next then will receive undefined.
* finally no need to return anything, the next handler will still get what it needs.

## Promise V.S Callback
* promise has better flow and flexibility.
  * multiple then V.S. single callback
  * multiple callbacks can cause pyramid of doom.
