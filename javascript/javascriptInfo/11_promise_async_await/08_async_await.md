# Async & Await


## Async Functions
* async function
  * the function always returns a promise
* Other values are wrapped in a resolved promise automatically.
* You can also return resolved promise manually

```js

// automatic
async function f() {
  return 1;
}

f().then(alert); // 1


// manual
async function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1

```


## await
* works only inside async functions
  * can’t use await in regular functions
* makes JavaScript wait until that promise settles and returns its result
  * That doesn’t cost any CPU resources, because the engine can do other jobs meanwhile: execute other scripts, handle events etc.


```js


// works only inside async functions
let value = await promise;

```

```js

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait till the promise resolves (*)

  alert(result); // "done!"
}

f();

```

* complex example
  * compare to then, async/await simplify the reading effort


```js

async function showAvatar() {

  // read our JSON
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // show the avatar
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();


```


## async won't work at top-level

* error

```js

// syntax error in top-level code
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();

```

* solution

```js

(async () => {
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();
  ...
})();


```


## Thenable object
* promise.then and await both allows to use thenable objects (those with a callable then method)
* If await gets a non-promise object with .then, it calls that method providing native functions resolve, reject as arguments.

```js


class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    alert(resolve);
    // resolve with this.num*2 after 1000ms
    setTimeout(() => resolve(this.num * 2), 1000); // (*)
  }
};

async function f() {
  // waits for 1 second, then result becomes 2
  let result = await new Thenable(1);
  alert(result);
}

f();

```

## Async Class Methods

```js

class Waiter {
  async wait() {
    return await Promise.resolve(1);
  }
}

new Waiter()
  .wait()
  .then(alert); // 1

```


## Error Handling
* async/await
  * promise resolved -> await get result
  * promise rejected -> async function throw error
* two ways to handle errors
  1. try...catch
  2. .catch()
* If we forget to add .catch or don't use any try...catch, then we get an unhandled promise error (viewable in the console). We can catch such errors using a global event handler


```js

async function f() {
  await Promise.reject(new Error("Whoops!"));
}

// equal to following function


async function f() {
  throw new Error("Whoops!");
}

```


* try...catch

```js


async function f() {
  try {
    let response = await fetch('http://no-such-url');
  } catch(err) {
    alert(err); // TypeError: failed to fetch
  }
}

f();

```

* catch multiple await funcs

```js


async function f() {

  try {
    let response = await fetch('/no-user-here');
    let user = await response.json();
  } catch(err) {
    // catches errors both in fetch and response.json
    alert(err);
  }
}

f();

```


* .catch()

```js

async function f() {
  let response = await fetch('http://no-such-url');
}

// f() becomes a rejected promise
f().catch(alert); // TypeError: failed to fetch // (*)

```


## When/How to use

* two main async syntaxs
  1. async/await
  2. promise.then/catch

* async/await
  * rarely need .then
  * use a regular try..catch instead of .catch. That’s usually (not always) more convenient.

* at top level
  * use promise.then/catch because we’re syntactically unable to use await
  * it’s a normal practice to add .then/catch to handle the final result or falling-through errors
    * because it's convenient to use await at global scope



## async/await with Promise.allows

* using try..catch around the call to catch any possible errors

```js

// wait for the array of results
let results = await Promise.all([
  fetch(url1),
  fetch(url2),
  ...
]);

```


## [Summary](http://javascript.info/async-await#summary)
