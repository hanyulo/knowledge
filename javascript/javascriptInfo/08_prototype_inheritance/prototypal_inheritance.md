# Prototypal Inheritance
* one type of inheritance
* we only can inherit from one object at a time.
* reuse some code
* process:
  * say, user is looking for a property in an object called A. If the A object has no such property, then javascript will looking for the property in prototype object of A object.

## [[Prototype]]
* All object has such property
* is a special hidden/internal property
  * but still can be set/get by several ways
* value is a reference which references to two kinds of value.
  1. null
  2. another object which is called **a prototype (which is a object)**


## get/set [[Prototype]]

1. __proto__
  * a historical setter/getter for [[Prototype]]

2. Object.[methods]
  * Object.getPrototypeOf
  * Object.setPrototypeOf


## Prototype Chain Limitations
* [[Prototype]] can only references to either null or objects
* you can not form a circular prototype chain
* each object has only one unique [[Prototype]]

## How prototype chain
* only works on reading
* steps
 1. try to get property from the calling object
 2. if no such property exist in the calling object -> follow the [[Prototype]] to search for the property in prototype object.
* works on both data and accessor properties.

## Value of this
* this is always the object before dot.
* this in each method would be the corresponding object, evaluated at the call-time
* methods/properties are shared, but the object state is not.
  * object state === this


```js

let animal = {
  sleep() {
    this.sleeping = true;
  }
  getSleepStatus() {
    return this.sleeping;
  }
}

let rabbit = {
  __photo__: animal,
  name: 'Bug Bunny',
}

rabbit.sleep();
rabbit.sleep // true
animal.sleep // undefined

```


## for in loop
* in terms of iteration, there are two types of key in object
  1. own keys
  2. inherited keys

* iterate through keys
  1. Object.keys()/Object.values()
    * only return own keys
  2. for...in
    * iterate both own and inherited keys
    * To only iterate own properties:
      * add `Object.prototype.hasOwnProperty.call({ name: 'han' }, 'name')`

* prototype chain of the following code
  * rabbit -> animal -> Object.prototype

* all properties of Objct.prototype are not enumerable (enumerable: false)
 * so they can not be iterated by for...in loop



```js

let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

for(let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    alert(`Our: ${prop}`); // Our: jumps
  } else {
    alert(`Inherited: ${prop}`); // Inherited: eats
  }
}

```

## Good Exam
* speedy and lazy should have different stomach


```js


let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // apple


```
