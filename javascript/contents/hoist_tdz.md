## Overview
* const , let
    * Respect lexical environment convention
    * Respect Code block/block scope
    * Respect function block
* Var
    * Var is the legacy of javascript at the time that it does not has lexical environment.
    * Only respect function block
    * Ignore code block, e.g., if() {}, for loop. The variable can be accessed outside of block scope.
    * Only var has hoisting (partially right)
    * var are “hoisted” (raised) to the top of the scope of function.
    * **Declarations are hoisted, but assignments are not.**

## Diagram
|      | scope | hoisting | can be reassigned | can be redeclared |
| :--: | :--: | :--:| :--:| :--:|
| var | function scope | v | v | v |
| let | code block | x | v | x |
| const | code block | x | v | x |



## let && const && var (hoisting)
* var has hoist
    * undefined
* let && const
    * only has hoist in function block, because of execution context
    * but before you assign any value to them, they are declared but not defined
        * `ReferenceError: a is not defined`
        * cautious: is not primitive value undefined    

## Temporary Dead Zone (TDZ)

* let 與 const 也有 hoisting 但沒有初始化為 undefined，而且在賦值之前試圖取值會發生錯誤。

```js

function test() {
    var a = 1; // c's TDZ start
    var b = 2;
    console.log(c) // error: c is not defined
    if (a > 1) {
      console.log(a)
    }
    let c = 10 // c's TDZ is done
}
test()

```


```js

function test() {
    yo() // c's TDZ start
    let c = 10 // c's TDZ is end
    function yo(){
      console.log(c)
    }
}
test()

```

## Refs
* https://blog.techbridge.cc/2018/11/10/javascript-hoisting/
