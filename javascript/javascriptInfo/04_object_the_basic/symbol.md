## Overview
* types of property of object
  * valid types
    1. string
    2. symbol
  * unvalid types
    1. numbers
    2. boolean
* Each symbol instance from Symbol() is unique


* simple usage
  * create an unique identifier

```js
const id = Symbol();
```

* create an unique identifier and give it an label.

```js

const id = Symbol('id');

```

* Even labels are same, those symbols are different

```js

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); // false

```

## Symbol to String
* Other javascript types can be converted to string implicitly.
* Symbols don’t auto-convert to a string


```js
let id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string

let id = Symbol("id");
alert(id.toString()); // Symbol(id), now it works

let id = Symbol("id");
alert(id.description); // id
```

## Hidden Properties
* Symbol can be the hidden properties of object literal
  * the hidden is just a metaphor
    * you can still access the properties through the symbol that you create,
      but the symbol is unique so other developer will not modify the value of the key symbol accidentally.
  * other script can not access the property or overwrite it.
  * for...in loop will not loop over the Symbol property.

```js

let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123 // not just "id: 123"
};


```

```js

let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert( "Direct: " + user[id] );

```

* Object.assign copies both string and symbol properties:

```js

let id = Symbol("id");
let user = {
  [id]: 123
};

let clone = Object.assign({}, user);

alert( clone[id] ); // 123

```

## Property keys of other types are coerced to strings

```js

let obj = {
  0: "test" // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
alert( obj["0"] ); // test
alert( obj[0] ); // test (same property)

```

## Global Symbols
* Declare symbol by symbol.for(key) create the symbol that exist in the global symbol registry.


```js

// read from the global registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again
let idAgain = Symbol.for("id");

// the same symbol
alert( id === idAgain ); // true

```

### Get Label from symbol
* `Symbol.keyFor` will look up the global symbol registry to find the symbol.
* If the symbol is not in the global registry, then the function return undefined.


```js

let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name from symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id


alert( Symbol.keyFor(Symbol.for("name")) ); // name, global symbol
alert( Symbol.keyFor(Symbol("name2")) ); // undefined, the argument isn't a global symbol

```
