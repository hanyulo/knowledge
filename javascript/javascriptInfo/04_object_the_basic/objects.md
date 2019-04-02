## Objects
* can access property's value by dot or square bracket.
* reserved words are allowed as property name
  * but those words can't be variable name


```js

let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

```


```js

let user.age = 'John';

delete user.age

user.age // undefined

```

* multi-world properties

```js

let user = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};

```

## Computed Properties

```js

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

/* same as */

// take property name from the fruit variable
bag[fruit] = 5;

alert( bag.apple ); // 5 if fruit="apple"


```

* complex example

```js

let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

````

## Reserved Words Rule in Objects
* reserved words are allowed as key of object.
  * you can not name variable with reserved words
* Special case: __proto__
  * you can only assign obj to __proto__

```js

let obj = {
  for: 1,
  let: 2,
  return: 3
};

alert( obj.for + obj.let + obj.return );  // 6

```


```js

let obj = {};
obj.__proto__ = 5;
alert(obj.__proto__); // [object Object], didn't work as intended

```

## Existence Check


```js

/* solution one */

let user = {};

alert( user.noSuchProperty === undefined ); // true means "no such property"


/* solution two */

'key' in user

```

### Special Case for `in` syntax
* but the case is really rare, because the case is caused by not understanding the difference between null and undefined.
  * null is for empty.
  * undefined is for the key that has not been assigned value.
* In the case, we should assign null to test

```js

let obj = {
  test: undefined
};

alert( obj.test ); // it's undefined, so - no such property?

alert( "test" in obj ); // true, the property does exist!


```

## for....in

```js

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let prop in user) {
  // keys
  alert( prop );  // name, age, isAdmin
  // values for the keys
  alert( user[prop] ); // John, 30, true
}

```

## Ordered like an object


....

...
...
