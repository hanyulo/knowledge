# Class Checking Instanceof

## What for
* create polymorphism


## instanceof
* works on direct classes
* works on ancestor classes
* works on built-in classes

### Examples

* constructor function

```js


// instead of class
function Rabbit() {}

alert( new Rabbit() instanceof Rabbit ); // true

```

* direct classes

```js

class Rabbit {}
let rabbit = new Rabbit();

console.log(rabbit instanceof Rabbit) // true


```

* ancestor classes

```js

class Animal {}
class Rabbit extends Animal{}
let rabbit = new Rabbit();

console.log(rabbit instanceof Animal) // true

```

* built-in classes

```js
let arr = [1,2,3];

console.log(arr instanceof Array) // true
console.log(arr instanceof Object) // true

```

## Symbol.hasInstance
* To create customized the behavior of instnaceof, use [Symbol.hasInstance] as static method of class.

```js

class Animal {
  static [Symbol.hasInstance](obj) {
    if (obj.canEat) {
      return true;
    }
  }
}

class Bird {
  constructor() {
    this.canEat = true;
  }
}

class Pigeon extends Bird{}

let pigeon = new Pigeon();

console.log(pigeon instanceof Animal) // true;

```


## instanceof wrap-up
* Class constructor itself does not participate in the check! Only the chain of prototypes and Class.prototype matters.

```js

obj.__proto__ === Class.prototype
obj.__proto__.__proto__ === Class.prototype
obj.__proto__.__proto__.__proto__ === Class.prototype

// if any answer is true, return true
// otherwise, if we reached the end of the chain, return false

```

## class.isPrototypeOf(objB)


```js

class Animal {}
class Rabbit extends Animal {}
let rabbit === new Rabbit();


Rabbit.constructor === Function //true
Rabbit.prototype.constructor === Rabbit // true
Rabbit instanceof Function // true
Animal instanceof Function // true
rabbit.__proto__.__proto__ === Animal.prototype // true
Animal.prototype.__proto__ === Object.prototype // true
Animal.prototype.isPrototypeOf(rabbit) // true

```

* caveat
  * if you change the prototype object of class, the instnaceof will not work correctly

```js

function Rabbit() {}
let rabbit = new Rabbit();

// changed the prototype
Rabbit.prototype = {};

// ...not a rabbit any more!
alert( rabbit instanceof Rabbit ); // false

```


##[Bonus: Object.prototype.toString for the type](http://javascript.info/instanceof#bonus-object-prototype-tostring-for-the-type)


## [Summary](http://javascript.info/instanceof#summary)
