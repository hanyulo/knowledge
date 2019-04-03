## Constructor Function
1. They are named with capital first in convention
2. The should be executed with `new` operator.
3. to implement reusable object creation code.
4. Technically, all functions can be constructor function.


```js

function Musician(name, instrument) {
  this.name = name
  this.instrument = instrument;
}

let musician = new Musician('Han', 'Drummer');

```

### How `new` works

```js

function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}

```

### Omit Parentheses
* if you don't have to pass arguments then it is okay to omit parentheses

```js

let user = new User; // <-- no parentheses
// same as
let user = new User();

```



## new function() {}
  * to create complex object
  * only use once.

```js

let user = new function() {
  this.name = "John";
  this.isAdmin = false;

  // ...other code for user creation
  // maybe complex logic and statements
  // local variables etc
};


```

## Return From Constructor
* Usually constructor will go without return
* But if you have return statement inside the constructor, there will be two scenarios
  1. If return is called with object, then it is returned instead of this.
  2. If return is called with a primitive, it’s ignored.

```js

function BigUser() {

  this.name = "John";

  return { name: "Godzilla" };  // <-- returns an object
}

alert( new BigUser().name );  // Godzilla, got that object ^^

```


```js

function SmallUser() {

  this.name = "John";

  return; // finishes the execution, returns this

  // ...

}

alert( new SmallUser().name );  // John


```

## Methods in Constructor

```js
function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); // My name is: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/

```
