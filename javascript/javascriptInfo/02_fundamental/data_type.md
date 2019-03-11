# Data Type
* Javascript is dynamically typed
* Primitive Type
  * the value can only contain one of the following things.
  1. Number
  2. NaN
  3. String
  4. Boolean
  5. null
  6. undefined
* Special Type
  *  Object is a special type to store collections of data and more complex entities.
  * Symbol is a type to create unique identifiers for objects.
  1. Objects
  2. Symbols

## Number
* Infinity
  * represents the mathematical Infinity ∞. It is a special value that’s greater than any number.
  * it is a primitive value
```js
alert( 1 / 0 ); // Infinity
alert( Infinity ); // Infinity
```

* NaN
 * represents a computational error. It is a result of an incorrect or an undefined mathematical operation
  * 'not a number' / 2
 * NaN somewhere in a mathematical expression, it propagates to the whole result.
 * Create a special feature to Javascript. You can do any unreasonable mathematical operation and in the end you just get NaN.

 ```js
alert( "not a number" / 2 ); // NaN, such division is erroneous
alert( "not a number" / 2 + 5 ); // NaN

 ```


## String
* Double quotes: "Hello".
* Single quotes: 'Hello'.
* Backticks: `Hello`.

## Boolean
* true and false

## null
* does not belong to any of the types described above.
* It forms a separate type of its own which contains only the null value:
* it is not a reference to non-existing object or null pointer.
* it is a primitive value which represents "nothing", "empty", "value unknown"

```js
let age = null;
```

## undefined
* means a value is not assigned
* the value should be generate by javascript automatically, you should not assign such value instead you should use null.
* use the such value to recognize if the variable has been assigned.

```js
let x;
alert(x); // shows "undefined"
```


```js
// technically you can do it
// but in practice, we should not do it.

let x = 123;
x = undefined;
alert(x); // "undefined"
```


## Objects and Symbols
* Object is a special type to store collections of data and more complex entities.
* Symbol is a type to create unique identifiers for objects.

## typeof
* two form of syntax
1. As an operator: typeof x.
2. As a function: typeof(x).
* The call to typeof x returns a string with the type name:

```javascript
typeof undefined // "undefined"

typeof 0 // "number"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
```

* The result of typeof null is "object". That’s wrong. It is an officially recognized error in typeof, kept for compatibility. Of course, null is not an object. It is a special value with a separate type of its own. So, again, this is an error in the language.

* The result of typeof alert is "function", because alert is a function of the language. We’ll study functions in the next chapters where we’ll see that there’s no special “function” type in JavaScript. **Functions belong to the object type**. But typeof treats them differently. Formally, it’s incorrect, but very convenient in practice.


### Summary
* number for numbers of any kind: integer or floating-point.
* string for strings. A string may have one or more characters, there’s no separate single-character type.
* boolean for true/false.
* null for unknown values – a standalone type that has a single value null.
* undefined for unassigned values – a standalone type that has a single value undefined.
* object for more complex data structures.
* symbol for unique identifiers.
