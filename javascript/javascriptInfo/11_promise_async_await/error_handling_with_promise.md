## Overview
 * Put catch in the end of chain to catch all errors

## Implicit try...catch
* promise executor and promise handlers has invisible try...catch around it.


* in executor

```js

new Promise((resolve, reject) => {
  throw new Error('Whoops!!')
})
.catch((err) => {
})


// same as
new Promise((resolve, reject) => {
  reject(new Error("Whoops!"));
}).catch(alert); // Error: Whoops!

```

* in handler

```js
// throe error
new Promise((resolve, reject) => {
  resolve("ok");
}).then((result) => {
  throw new Error("Whoops!"); // rejects the promise
}).catch(alert); // Error: Whoops!


// programming errors
new Promise((resolve, reject) => {
  resolve("ok");
}).then((result) => {
  blabla(); // no such function
}).catch(alert); // ReferenceError: blabla is not defined

```

## Rethrowing
* case one: first catch handle the error, and the flow goes on to next then
* case two: first catch can not handle the error and rethrow it to the next closest catch.


* case one

```js

// the execution: catch -> then
new Promise((resolve, reject) => {

  throw new Error("Whoops!");

}).catch(function(error) {

  alert("The error is handled, continue normally");

}).then(() => alert("Next successful handler runs"));

```


* case two

```js

// the execution: catch -> catch -> then
new Promise((resolve, reject) => {

  throw new Error("Whoops!");

}).catch(function(error) { // (*)

  if (error instanceof URIError) {
    // handle it
  } else {
    alert("Can't handle such error");

    throw error; // throwing this or another error jumps to the next catch
  }

}).then(function() {
  /* never runs here */
}).catch(error => { // (**)

  alert(`The unknown error has occurred: ${error}`);
  // don't return anything => execution goes the normal way

});

```


## Example (fetch error handling)
* fetch API
  * only reject when it is impossible to request:
    1. remote sever is not available
    2. url is malformed
  * Caveat
    * web status 404, 500 are considered a valid response.


```js

fetch('http://javascript.info/article/promise-chaining/no-surch-user.json') // (*)
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`)) //(**)
  .then(response => response.json())
  // .catch(alert) SyntaxError: Unepxeced token < in JSON at position 0;

```

* problems of the above code
  1. `(*)`: the server do not provide such json object.
    * catch just alert the SyntaxError
  2. Event you get the right json response from frst then, what if the github server has no such user and return 404
  * conclusion: your catch should recognize different errors and return different responses to user.


### Customized HttpError


```js

class HttpError extends Error {
  constructor(response) {
    super(`${response .status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }  
}

function loadJSON(url) {
  fetch(url)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    })
    .catch((err) => {
      throw  err; // handle unknown errs ??
    })
}

/*case 1 */

loadJson('no-such-user.json') // (3)
  .catch(alert); // HttpError: 404 for .../no-such-user.json



/*case 2*/

function demoGithubUser() {
  let name = prompt("Enter a name?", "iliakan");

  return loadJson(`https://api.github.com/users/${name}`)
    .then(user => {
      alert(`Full name: ${user.name}.`);
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        return demoGithubUser();
      } else {
        throw err; // (*)
      }
    });
}

demoGithubUser();

```

* in second case, we can response different message according the web status that we get.
* we only handle 404, others we rethrow it in `(*)`


## unhandled rejections
* in the previous line `(*)`, if we don't have the outer catch, then there is the unhandled rejections.
  * The script will probably just die.
  * in practice, we need to log such error and prevent the script just die.

*  In browser we use unhandledrejection handlers
  * log errors
  * prevent script jsut die.
  * node js has similar stuff like unhandledrejectino.


```js
window.addEventListener('unhandledrejection', function(event) {
  // the event object has two special properties:
  alert(event.promise); // [object Promise] - the promise that generated the error
  alert(event.reason); // Error: Whoops! - the unhandled error object
});

new Promise(function() {
  throw new Error("Whoops!");
}); // no catch to handle the error

```

* catch the err and what to do now ?
  1. inform the user about the problem
  2. report the incident to the sever


## Finally

* Finally run after either then or catch
* stop loading popup

```js
function demoGithubUser() {
  let name = prompt("Enter a name?", "iliakan");

  document.body.style.opacity = 0.3; // (1) start the indication

  return loadJson(`https://api.github.com/users/${name}`)
    .finally(() => { // (2) stop the indication
      document.body.style.opacity = '';
      return new Promise(resolve => setTimeout(resolve, 0)); // (*)
    })
    .then(user => {
      alert(`Full name: ${user.name}.`);
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}

demoGithubUser();


// There’s a little browser trick (*) with returning a zero-timeout promise from finally. That’s because some browsers (like Chrome) need “a bit time” outside promise handlers to paint document changes. So it ensures that the indication is visually stopped before going further on the chain.

```
