## Noun

### [[Prototype]]
* A internal and hidden property of javascript instance.
* Can not be accessed directly in code.

### __proto__
* is a setter and getter for setting [[Prototype]]

### Constructor

```js
// Boxer is a constructor
function Boxer() {

}
const fighter = new Boxer()

// In default
// Boxer.prototype = {
  // constructor: Boxer,
// }

// fighter's [[prototype]] point to Boxer.prototype

// fighter.constructor === Boxer
```

## Native Prototypes
* Object
  * Array
  * Date
  * Function
  * Primitives
    * Number
    * String
    * Boolean

### Object
* Is the mother root.
* there is no additional [[Prototype]] in the chain above **Object.prototype**

```js
alert(Object.prototype.__proto__); // null
```

```js
// Short Notation
let obj = {} === obj = new Object();
let arr = [] === arr = new Array();
function a() {

}

a.__proto__ === Function.prototype


// case1
let obj = {};

alert(obj.__proto__ === Object.prototype); // true

```

### Function
* function Boxer() {}
  * Boxer constructor has its own prototype property for all instances of Boxer.
  * Boxer constructor also has a internal [[Prototype]] which point to Function.prototype (for call, apply methods)
  * all boxer instances point to Boxer.prototype.

## References
* [Native Prototype](https://javascript.info/native-prototypes)
* [Function Prototype](https://javascript.info/function-prototype)
* [__proto__](https://javascript.info/prototype-inheritance)
