# Native Prototypes


## Object.prototype
* `let obj = {}` is equal to `new Object()`
  * Object is a built-in object constructor function
    * is has several methods, e.g., toString

```js

let obj = {}

alert( obj ); // "[object Object]" ?

```

* check


```js

let obj = {}

obj.__proto__ === Object.prototype //true

```

* Object.prototype is root

```js

alert(Object.prototype.__proto__); // null

```


## Other built-in prototypes
1. `new Array()` // const a = []
2. `new Date()`
3. `new Function()`

* the prototype chain is very memory-efficient.


<img src="./assets/native_prototype_chain.png" />

* [].__proto__ === Array.prototype
* Array.prototype.__proto__ === Object.prototype
* [].__proto__.__proto__ === {}.__proto__
* [].__proto__.__proto__ === Object.prototype
* arr.__proto__.__proto__.__proto__  // null

## Primitive
* Number, String, Boolean are primitive not objects
  * As we remember, they are not objects. But if we try to access their properties, then temporary wrapper objects are created using built-in constructors String, Number, Boolean, they provide the methods and disappear.
  * methods reside in prototype object.

```js

'ABCDEF'.toLowerCase();

String.prototype.toLowerCase.call('ABCDEF')

```

* null, undefined has no such object wrappers

## Changing native Prototypes
* Generally, modifying a native prototype is considered a bad idea.
  * It will cause conflicts

```js

String.prototype.show = function() {
  alert(this);
};

"BOOM!".show(); // BOOM!

```

* In modern programming, there is only one case where modifying native prototypes is approved. That’s polyfilling.

```js

if (!String.prototype.repeat) { // if there's no such method
  // add it to the prototype

  String.prototype.repeat = function(n) {
    // repeat the string n times

    // actually, the code should be a little bit more complex than that
    // (the full algorithm is in the specification)
    // but even an imperfect polyfill is often considered good enough
    return new Array(n + 1).join(this);
  };
}

alert( "La".repeat(3) ); // LaLaLa


```

## Borrowing from prototypes


```js


let obj = {
  0: "Hello",
  1: "world!",
  length: 2,
};

obj.join = Array.prototype.join;

alert( obj.join(',') ); // Hello,world!

```
