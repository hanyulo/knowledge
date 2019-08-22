

## Example
* Rabbit inherits from Animal

```js

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} stopped.`);
  }
}

// Inherit from Animal by specifying "extends Animal"
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!

```

<div style="text-align: center">
<img src="../assets/class_inheritance_flow.png" width="80%">
</div>



## Any expression is allowed after extends

```js

function f(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
    }
  }
}

class Example extends f('hello world!') {

}

const example = new Example();
example.sayHi(); // hello world!

```


## "Override" a method

```js

class Rabbit extends Animal {
  stop() {
    // ...this will be used for rabbit.stop()
  }
}

```

* usually we don’t want to totally replace a parent method, but rather to build on top of it, tweak or extend its functionality. We do something in our method, but call the parent method before/after it or in the process.

### Super keyword
* super.method(...)
  * to call a parent method.
* super(...)
  * to call a parent constructor (inside our constructor only).


```js

class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    alert(`${this.name} stopped.`);
  }

}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stopped. White rabbit hides!

```

* arrow functions have no super keyword

```js

class Rabbit extends Animal {
  stop() {
    setTimeout(() => super.stop(), 1000); // call parent(Rabbit.prototype.__proto__) stop after 1sec
  }
}

```

```js

// Unexpected super
setTimeout(function() { super.stop() }, 1000);

```

## Overriding Constructor
* if a class extends another class and has no constructor, then the following “empty” constructor is generated.


```js

class Rabbit extends Animal {
  // generated for extending classes without own constructors
  constructor(...args) {
    super(...args);
  }
}

```

* override constructor without super -> error!!
  * you must call super(...), and (!) do it before using **this**.

```js

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  // ...
}

class Rabbit extends Animal {

  constructor(name, earLength) {
    this.speed = 0;
    this.name = name;
    this.earLength = earLength;
  }

  // ...
}

// Doesn't work!
let rabbit = new Rabbit("White Rabbit", 10); // Error: this is not defined.

```

* solution

```js

class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  // ...
}

class Rabbit extends Animal {

  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  // ...
}

// now fine
let rabbit = new Rabbit("White Rabbit", 10);
alert(rabbit.name); // White Rabbit
alert(rabbit.earLength); // 10

```

* Explanation
  * Constructor Function of an inheriting Class V.S. Normal Constructor Function
    - Normal Constructor Function
      * creates an empty object as this and continues with it. (this references to the object)
    - Constructor Function of an Inheriting Class
      1. Labelled with a special internal property [[ConstructorKind]]: "derived"
      2. when a derived constructor runs, it doesn’t create an empty object as "this". It expects the parent constructor to do this job.

## Super: internals mechanism

* Prerequisite
  * Rabbit extends Animal
  * new Rabbit() call methods from Animal

* https://javascript.info/class-inheritance#homeobject

##  [[HomeObject]]
* Only exist in function based on two conditions
  * function specified as object method
  * function specified as class
* it is not "free"
  * bind with the function context eternally.
  * only bind the [[HomeObject]] when super is called, otherwise, the function is still free

*  example

```js

let animal = {
  name: "Animal",
  eat() {         // animal.eat.[[HomeObject]] == animal
    alert(`${this.name} eats.`);
  }
};

let rabbit = {
  __proto__: animal,
  name: "Rabbit",
  eat() {         // rabbit.eat.[[HomeObject]] == rabbit
    super.eat();
  }
};

let longEar = {
  __proto__: rabbit,
  name: "Long Ear",
  eat() {         // longEar.eat.[[HomeObject]] == longEar
    super.eat();
  }
};

// works correctly
longEar.eat();  // Long Ear eats.


```
* Caveat Example

```js


let animal = {
  sayHi() {
    console.log(`I'm an animal`);
  }
};

// rabbit inherits from animal
let rabbit = {
  __proto__: animal,
  sayHi() {
    super.sayHi();
  }
};

let plant = {
  sayHi() {
    console.log("I'm a plant");
  }
};

// tree inherits from plant
let tree = {
  __proto__: plant,
  sayHi: rabbit.sayHi // (*)
};

tree.sayHi();  // I'm an animal (?!?)

```

### Methods V.S. Function Properties
* function properties has no [[HomeObject]]


```js

let animal = {
  eat: function() { // should be the short syntax: eat() {...}
    // ...
  }
};

let rabbit = {
  __proto__: animal,
  eat: function() {
    super.eat();
  }
};

rabbit.eat();  // Error calling super (because there's no [[HomeObject]])

```




## Critical Example
* https://javascript.info/class-inheritance#class-extends-object
