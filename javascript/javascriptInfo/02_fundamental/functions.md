## Function Declaration
* if the parameter has no default value and corresponding argument, then it is assigned undefined.

```js

function showMessage() {
  alert( 'Hello everyone!' );
}

```

* default value

```js

function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given

```

* default value from Function
  * generate default value each time you invoke the function.

```js


function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}

```

* Don't add new line after return

```js

return
 (some + long + expression + or + whatever * f(a) + f(b))

// become

 return;
 (some + long + expression + or + whatever * f(a) + f(b))

```

## Naming a Function
* Functions are actions. So their name is usually a verb.
* Team should have agreement on prefix
  * "show" usually show something.
  * "get…" – return a value,
  * "calc…" – calculate something,
  * "create…" – create something,
  * "check…" – check something and return a boolean, etc.


## **One Function Once Action**
* A function should do exactly what is suggested by its name
* one task one function
* Functions should be short and do exactly one thing.
* Bad Examples
  * getAge – would be bad if it shows an alert with the age (should only get).
  * createForm – would be bad if it modifies the document, adding a form to it (should only create it and return).
  * checkPermission – would be bad if it displays the access granted/denied message (should only perform the check and return the result).

### Example
* self-describing.
* functions can be created even if we don’t intend to reuse them. They structure the code and make it readable.


```js

function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // a prime
  }
}

// to below


function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}


```
