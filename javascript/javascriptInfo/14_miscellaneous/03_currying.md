## Currying

### Prerequisite
* fixed length of parameters


### overview
* transformation from `f(a,b,c)` to `f(a)(b)(c)`


### What for
1. maintain original function
2. create partial function form the original function
    * the passed args are in the Lexical Environment


#### Example
* log
   * params: dateTime, type, content

```js
function log() {
  ...
}
log(new Date(), 'DEBUG', 'the system error');
curriedLog = _.curry(log);
curriedLog(new Date())('DEBUG')('the system error');

const logNow = curriedLog(new Date());
logNow('DEBUG')('the system error')

const debugNow = logNow('DEBUG');
debugNow('what!?')

```


### Curry Implementation

```js

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}

```
