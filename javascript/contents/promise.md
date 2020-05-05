## Status
* settled
    1. fulfilled: resolve()
    2. rejected: reject()
* unsettled
    * pending


* example
```js

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('1');
  }, 3000)
})

const onFulfilled = () => {

}

const onRejected = () => {

}

promise
  .then(onFulfilled)
  .catch(onRejected);


```


## features
* chaining
* exception management
* can only be settled once
*


## Return Promsie
* A handler, used in .then(handler) may create and return a promise. In that case further handlers wait until it settles, and then get its result.


```js
const wait = time => new Promise(
  res => setTimeout(() => res(), time)
);

wait(200)
  // onFulfilled() can return a new promise, `x`
  .then(() => new Promise(res => res('foo')))
  // the next promise will assume the state of `x`
  .then(a => {
    console.log(a);   //foo
  })



```

## Chaining Example

```js


const wait = time => new Promise(
  res => setTimeout(() => res(), time)
);

wait(200)
  // onFulfilled() can return a new promise, `x`
  .then(() => new Promise(res => res('foo')))
  // the next promise will assume the state of `x`
  .then(a => a)
  // Above we returned the unwrapped value of `x`
  // so `.then()` above returns a fulfilled promise
  // with that value:
  .then(b => console.log(b)) // 'foo'
  // Note that `null` is a valid promise value:
  .then(() => null)
  .then(c => console.log(c)) // null
  // The following error is not reported yet:
  .then(() => {throw new Error('foo');})
  // Instead, the returned promise is rejected
  // with the error as the reason:
  .then(
    // Nothing is logged here due to the error above:
    d => console.log(`d: ${ d }`),
    // Now we handle the error (rejection reason)
    e => console.log(e)) // [Error: foo]
  // With the previous exception handled, we can continue:
  .then(f => console.log(`f: ${ f }`)) // f: undefined
  // The following doesn't log. e was already handled,
  // so this handler doesn't get called:
  .catch(e => console.log(e))
  .then(() => { throw new Error('bar'); })
  // When a promise is rejected, success handlers get skipped.
  // Nothing logs here because of the 'bar' exception:
  .then(g => console.log(`g: ${ g }`))
  .catch(h => console.log(h)) // [Error: bar]
;

```


## methods
1. Promise.all
2. Promise.race

## References
* https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261