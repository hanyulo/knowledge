## 5 Static Methods
* `Promise.all`
* `Promise.allSettled`
* `Promise.race`
* `Promise.resolve/reject`



## Promise.all()
* execute multiple promises in parallel, and wait till all of them are ready.
* take an array of promise instances
* result of each array will allocate in to an array in order.
  * [result of first promise, result of second promise, ...]
* If any of the promises is rejected, the promise returned by Promise.all immediately rejects with that error. The reset of results of promises will be ignored.
  * all or nothing.


```js

let promise = Promise.all([...promises...]);

Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert);

```

#### Common Trick

```js

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

// map every url to the promise of the fetch
let requests = urls.map(url => fetch(url));

// Promise.all waits until all jobs are resolved
Promise.all(requests)
  .then(responses => responses.forEach(
    response => alert(`${response.url}: ${response.status}`)
  ));


```

#### Practical Example
* response.json() return promise

```js

let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
  .then(responses => {
    // all responses are resolved successfully
    for(let response of responses) {
      alert(`${response.url}: ${response.status}`); // shows 200 for every url
    }

    return responses;
  })
  // map array of responses into array of response.json() to read their content
  .then(responses => Promise.all(responses.map(r => r.json())))
  // all JSON answers are parsed: "users" is the array of them
  .then(users => users.forEach(user => alert(user.name)));

```


#### Error occur during Promise.all() process
* If any of the promises is rejected, the promise returned by Promise.all immediately rejects with that error.
* Promise.all only handle the errored-promise and ignore the rest of the promises.
* The rest of free-error promises will still be settled eventually, however will not be handled by Promise.all and can not be aborted.

```js

Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).catch(alert); // Error: Whoops!

```

#### Promise.all(iterable)
* allows non-promise “regular” values in iterable


```js

Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
  }),
  2,
  3
]).then(alert); // 1, 2, 3

```


## Promise.allSettled()

#### Overview
* recent addition
  * old browser need polyfills
* if any promise in `Promise.allSettled()` be rejected, the rest of the promises will still be handled correctly

##### Results
Promise.allSettled waits for all promises to settle.
* {status:"fulfilled", value:result} for successful responses,
* {status:"rejected", reason:error} for errors.


```js

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => { // (*)
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        alert(`${urls[num]}: ${result.value.status}`);
      }
      if (result.status == "rejected") {
        alert(`${urls[num]}: ${result.reason}`);
      }
    });
  });

//results

[
  {status: 'fulfilled', value: ...response...},
  {status: 'fulfilled', value: ...response...},
  {status: 'rejected', reason: ...error object...}
]

```

#### [Polyfill](http://javascript.info/promise-api#polyfill)

```js
if(!Promise.allSettled) {
  Promise.allSettled = function(promises) {
    return Promise.all(promises.map(p => Promise.resolve(p).then(value => ({
      state: 'fulfilled',
      value
    }), reason => ({
      state: 'rejected',
      reason
    }))));
  };
}


```


## Promise.race()
* only return first settled result of promise
  * both response or error.

```js

Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1

```


## Promise.resolve() &&  Promise.reject()


## Promise.resolve()
* overview
  * creates a resolved promise with the result value.
  * return a promise
  * to return a consistent result (check cache example)


```js

let promise = new Promise((resolve) => {
  resolve('123')
})

let promise2 = Promise.resolve('123')

promise2 and promise are same thing

```

#### Cache Example
* `Promise.resolve()` return consistent promise.

```js

let cache = new Map();

function loadCached(url) {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url)); // (*)
  }

  return fetch(url)
    .then(response => response.text())
    .then(text => {
      cache.set(url,text);
      return text;
    });
}

```

## Promise.reject()
* creates a rejected promise with error

```js
let promise = new Promise((resolve, reject) => reject(error));

```
