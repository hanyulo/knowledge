## How to determine this

1. how function is invoked
2. bind/apply/call
    * don't care about how function is invoked
3. arrow function
    * has no this in local lexical env object
    * get this in enclosing lexical context


## This
* A property of an execution context (global, function or eval)
    * non-strict mode: `this === specific object`
    * strict mode: `this === a value`

## Set **This/execution context** Manually
* apply
* call
* bind
    * only work once
        * bond function can not be bond again


## In different Contexts

### Global Context
* browser
    * this === window


### Function context
* simple call
    ```js
    function f1() {
      return this;
    }

    // In a browser:
    f1() === window; // true

    // In Node:
    f1() === global; // true

    ```

    ```js
    function f2() {
    'use strict'; // see strict mode
    return this;
    }

    f2() === undefined; // true

    ```


    ```js

          // An object can be passed as the first argument to call or apply and this will be bound to it.
      var obj = {a: 'Custom'};

      // This property is set on the global object
      var a = 'Global';

      function whatsThis() {
      return this.a;  // The value of this is dependent on how the function is called
      }

      whatsThis();          // 'Global'
      whatsThis.call(obj);  // 'Custom'
      whatsThis.apply(obj); // 'Custom'

    ```


## Refs
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
