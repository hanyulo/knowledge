## Syntax
```js

/* Syntax #1 */
let sum = new Function('a', 'b', 'return a + b');
alert( sum(1, 2) ); // 3

/* Syntax #2 */
let sayHi = new Function('alert("Hello")');
sayHi(); // Hello

```

## What is the syntax for
* Create function at runtime.
  * Example: receive function string from server and make it a function.
* Can not access any variable out of its scope except global variables.
* only process variables that pass to it as arguments.

```js
let str = ... receive the code from a server dynamically ...

let func = new Function(str);
func();
```

## Closure
* [[Environment]]
  * is a congenital property for the function to remember where it was created.
  * It references to the Lexical Environment
* Common Case (Normal function declaration || function expression)
  * [[Environment]] references to where the function born(To the one level outer lexical environment).
* Special Case: new Function('', '', '')
  * [[Environment]] references to global lexical environment.
    * another reason that hard to let new Function to access outer variables (I don't understand) :
      * how javascript run:
        original code -> minifier -> runtime -> new Function
      * the minifier rename all variable names in shorter term.
      * the function create at run time will try to access the variable through old variable name.

## Function
* function declaration:  

```js
function test() {

}
```

* function expression:

```js

const test = () => {
}

const testv2 = function() {

}

```

## Conclusion
* syntax

```js

let func = new Function(arg1, arg2, ..., body);

```


* we may receive code from a server, or to dynamically compile a function from a template.

* [[Environemnt]] of the syntx references to global lexical environment (works on browser not node.js)
  * Only allow to use variable that pass as arguments explicitly, which save us from unexpected error.
