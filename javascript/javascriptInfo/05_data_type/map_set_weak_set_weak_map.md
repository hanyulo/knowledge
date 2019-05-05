* Four Main Types
  * Objects: store key/value collections.
  * Arrays: store ordered collections.
  * Map: store key/value collections.
  * Set: store value collections only.

## Map

### Overview
* has key/value pairs
* The difference between Map and Object
  * Map accept any types for key
    * string
    * number
    * boolean
  * key is unique
  * object
    * only accept string
    * convert non-string key to string

### How to Use
* Instantiate
  * new Map()
* methods
  1. map.set(key, value)
  2. map.get(key)
    * return undefined if key doesn’t't exist.
  3. map.has(key)
    * true/false
  4. map.delete(key)
  5. map.clear()
  6. map.size
* strictly compare keys
* Chaining

### Create Map from Object
* pass array/iterable to Map Constructor
* how to pass object to Map Constructor
  * Object.entries
  * get array
  * pass the array to Map Constructor

```js

// array of [key, value] pairs
let map = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);


let map = new Map(Object.entries({
  name: "John",
  age: 30
}));

```

### The iteration over Map
* map.keys() – returns an iterable for keys,
* map.values() – returns an iterable for values,
* map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.


### forEach
```js
// runs the function for each (key, value) pair
recipeMap.forEach( (value, key, map) => {
  alert(`${key}: ${value}`); // cucumber: 500 etc
});

```

## Set
* collection of distinct values.
* Instantiate
  * new Set();
* methods
  * set.add()
    * add an existed value, the set will just have one unique value
  * set.delete()
  * set.has()
  * set.clear()
  * set.size



### The iteration over Map
* set.keys() – returns an iterable object for values,
* set.values() – same as set.keys, for compatibility with Map,
* set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.

```js

//valueAgain is only for compatibility with Map

let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  alert(value);
});


```

##WeakMap
* In Map/Set, even though you set the variable which references the key of map to null, javascript will not remove the object from memory.

```js

let john = { name: "John" };

let map = new Map();
map.set(john, "...");

john = null; // overwrite the reference

// john is stored inside the map,
// we can get it by using map.keys()

```

* In contrast with the Map, WeakMap do not prevent garbage-collection of key objects.
* the key of WeakMap must be object.
* do not support iteration.
  * why?
    * because although javascript may choose to perform the memory cleanup immediately or to wait and do the cleaning later when more deletions happen.
* why we need such thing
  * Because, we may need Javascript to clean up the object from memory without our instruction.

```js

let john = { name: "John" };

let visitsCountMap = new WeakMap();

visitsCountMap.set(john, 123);

// now john leaves us, we don't need him anymore
john = null;

// there are no references except WeakMap,
// so the object is removed both from the memory and from visitsCountMap automatically
```
