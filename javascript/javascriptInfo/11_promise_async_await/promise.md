## Overview
* producing code
  * do something and take time
  * example: load script, call api to get data
* consuming code
  * wants the result of the “producing code”
* promise
  * an object from new Promise constructor
  * links the “producing code” and the “consuming code”

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

### Finally
  * has no arguments
  * 
