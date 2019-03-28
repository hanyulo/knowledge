## Function Expression
* treat function as value. You can assign it to various variables.

```js

function sayHi() {
  alert( "Hello" );
}

let sayHi = function() {
  alert( "Hello" );
};

let sayHi = function() { ... };


```

### Why semicolon in the end of Function Expression

```js
function sayHi() {
  // ...
}

let sayHi = function() {
  // ...
};


```

* function declaration just like `if`, `for`. They are code block.
* function expression is a common statement. Treat function as a value and assign it to a variable.
  * So the semicolon here is not related to the Function Expression itself in any way, it just terminates the statement.

## Call back
* Treat function as a value and pass it as argument
* can work with anonymous functions

```js

function test(a, b) {

}

test(function() {}, function() {});

```

## Function Expression  V.S Function Declaration


### Function Declaration
* a function, declared as a separate statement (code block), in the main code flow.
* is usable in the whole script/code block.
* Created in “initialization stage”.
  * JavaScript prepares to run the script or a code block, it first looks for Function Declarations in it and creates the functions.
* After all function declarations are processed, javascript then execute the code.
* Function Declaration is only visible inside the code block in which it resides.

```js

<!-- Following codes works -->

sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}

```

### Function Expression
*  is created when the execution reaches it and is usable from then on.




```js

<!-- error -->

sayHi("John"); // error!

let sayHi = function(name) {  // (*) no magic any more
  alert( `Hello, ${name}` );
};

```
