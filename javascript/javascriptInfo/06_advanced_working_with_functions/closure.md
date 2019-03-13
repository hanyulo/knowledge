## Lexical Environment Object
* Who kind of conditions, create such object
  1. running function: function() {}
  2. whole script (Global Lexical Environment)
  3. run a code block { ... }

* Properties of Lexical Environment Object
  1. Environment Record:
    1. local variables
    2. this value
    * if you change a value of variable, it just like change the value of specific property of Lexical Environment Object.
  2. reference to outer lexical environment

<img src="./assets/lexical_environment_ basic.png">

<img src="./assets/lexical_environment_assign_value.png">

## Tmp Conclusion
* A variable is a property of a special internal object, associated with the currently executing block/function/script.
* Working with variables is actually working with the properties of that object.

## Function Declaration
* function declaration exist in the lexical environment before the execution.

* Execute
  1. create function declaration in lexical environment
  2. execute to the rest of variables
  3. create those properties in lexical environment.

<img src="./assets/lexical_environment_with_function_declaration.png">


## Inner + Outer Lexical environment

* The inner Lexical Environment corresponds to the current execution of say.
 - It has a single variable: name, the function argument. We called say("John"), so the value of name is "John".

* The outer Lexical Environment is the global Lexical Environment.
 - It has phrase and the function itself.

<img src="./assets/lexical_environment_inner_outer.png">


## Caveat
### One call – one Lexical Environment
* invoking a function create a lexical environment
* invoking same function multiple times, each invocation has its own lexical environment.

### Lexical Environment is a specification object
* we can't get it and manipulate it.
* javascript may optimize it.
  * remove unused variable to save memory.

## Nested Functions
```js
/* ----- example 1 ----- */
function sayHiBye(firstName, lastName) {

  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName;
  }

  alert( "Hello, " + getFullName() );
  alert( "Bye, " + getFullName() );

}

/* ----- example 2 ----- */
// constructor function returns a new object
function User(name) {

  // the object method is created as a nested function
  this.sayHi = function() {
    alert(name);
  };
}

let user = new User("John");
user.sayHi(); // the method "sayHi" code has access to the outer "name"

/* ----- example 3 ----- */
function makeCounter() {
  let count = 0;

  return function() {
    return count++; // has access to the outer counter
  };
}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1
alert( counter() ); // 2

```

<img src="./assets/makecounter_nested_lexical_environment.png" />

* the count was found in makeCounter's lexical environment 2
* the only way to modify variable count is that export another function that modify the variable count in makeCounter's lexical environment.
* each counter instance/function makes from makeCounter() is independent.


## Environments in Detail (makeCounter)
1. Start script
  * javascript create global lexical environment
* All functions on birth receive hidden property
  * [[Environment]]
    * the reference for the lexical environment

2. create the lexical environment for makeCounter function.
  * the outer of LE is set to [[Environment]] of the function.
  * has local variable count.

* After you get counter form makeCounter(). Even though it seems that makeCounter vanish after you invoke it. The lexical environment of makeCounter still exist because the variable in counter function make a reference to count in makeCounter.

* Generally, a Lexical Environment object lives as long as there is a function which may use it. And only when there are none remaining, it is cleared.

* if you use/invoke makeCounter to declare multiple functions, you will create multiple lexical environments for each invoked makeCounter. Therefore, you can create private variables


<img src="./assets/nested_function_01.png" />
<img src="./assets/nested_function_02.png" />
<img src="./assets/nested_function_03.png" />
<img src="./assets/nested_function_04.png" />
<img src="./assets/nested_function_05.png" />
<img src="./assets/nested_function_06.png" />
<img src="./assets/nested_function_07.png" />


* Private Variable

<img src="./assets/private_variable_lexical_environment.png">

## Closure
* Definition:
  closure is a function that remembers its outer variables and can access them.
* Javascript:
  * All functions are naturally closure.
  * Exception: new Function('a', 'b', 'return a + b')
  * [[Environment]]
  * Lexical Environment


## Code Block

### if
<img src="./assets/lexical_environment_if.png">

### For While

```js
for (let i = 0; i < 10; i++) {
  // Each loop has its own Lexical Environment
  // {i: value}
}

alert(i); // Error, no such variable
```

### Code Blocks
* a “bare” code block {…} to isolate variables into a “local scope”.
* { } create a local lexical environment
```js
{
  // do some job with local variables that should not be seen outside

  let message = "Hello";

  alert(message); // Hello
}

alert(message); // Error: message is not defined
```

## Immediately-Invoked Function Expression (IIFE)
* block-level lexical environment
```js
(function() {

  let message = "Hello";

  alert(message); // Hello

})();

```

## Garbage Collection
* Lexical Environment is cleaned up and deleted after the function run

```js
function f() {
  let value1 = 123;
  let value2 = 456;
}

f();

```

* But if there’s a nested function that is still reachable after the end of f, then its [[Environment]] reference keeps the outer lexical environment alive as well:
 * [local le g] -> [local lexical environment - f] -> [global lexical environment - f] -> null
 * g's [[Environment]] references to f's local LE

```js
function f() {
let value = 123;

function g() { alert(value); }

return g;
}

let g = f(); // g is reachable, and keeps the outer lexical environment in memory
```

* Called Multiple times

```js

function f() {
  let value = Math.random();

  return function() { alert(value); };
}

// 3 functions in array, every one of them links to Lexical Environment
// from the corresponding f() run
//         LE   LE   LE
let arr = [f(), f(), f()];
```
## if the lexical environment is unreachable, it will be deleted.

```js
function f() {
  let value = 123;

  function g() { alert(value); }

  return g;
}

let g = f(); // while g is alive
// there corresponding Lexical Environment lives

g = null; // ...and now the memory is cleaned up
```

## Real-life optimizations (Weird Experience in Debugging mode)
* In theory, as long as we have variable that references to the function. The correspondent lexical environment will be alive.
* In reality, javascript engines will analyze (private) variable usage and if it's not used, the lexical environment will be deleted.
  * Example: chrome debugger can not access the variable that is not in the local scope.

```js

function f() {
  let value = Math.random();

  function g() {
    debugger; // in console: type alert( value ); No such variable!
  }

  return g;
}

let g = f();
g();

```

* The funny debugging issue.

```js
let value = "Surprise!";

function f() {
  let value = "the closest value";

  function g() {
    debugger; // in console: type alert( value ); Surprise!
  }

  return g;
}

let g = f();
g();
```
