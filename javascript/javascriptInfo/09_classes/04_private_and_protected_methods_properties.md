## Internal and External Interface
* Internal interface – methods and properties, accessible from other methods of the class, but not from the outside.
* External interface – methods and properties, accessible also from outside the class.

## Protect vs. Private Overview
* Protect
  * accessible only from inside the class and those extending it.
  * not implemented by javascript (need babel)
  * start with _
* Private
  * only accessible from the class
  * implemented by javascript (need babel)
  * start with #



## Protect
* Public field declarations
  * `_waterAmount` is on stage3 so you need babel to run it successfully
* Protected properties are usually prefixed with an underscore _
  * it is an emulation for javascript since javascript do not provide such feature.
* Protected fields are inherited

```js

class CoffeeMachine {
  _waterAmount = 0;

  constructor(power) {
    this.power = power
  }

  set waterAmount(value) {
    if (value < 0) {
      throw new Error('negatove value for amount of water');
    }
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }
}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

// add water
coffeeMachine.waterAmount = -10; // Error: Negative water

```


### Set protected field only once

```js

class CoffeMachine {
  _waterAmount = 0;

  constructor(value) {
    this._power = value;
  }

  getPower() {
    return this._power;
  }

  setWaterAmount(value) {
    if (value < 0) {
      throw new Error('negative value for amount of water');
    }
    this._waterAmount = value;
  }

  getWaterAmount(value) {
    this._waterAmount = value;
  }

}

```

## Private Field
* Cautious: A recent addition
  * This is a recent addition to the language. Not supported in JavaScript engines, or supported partially yet, requires polyfilling.

### Overview
* # is a special sign that the field is private
* can’t access it from outside or from inheriting classes.
* Private fields do not conflict with public ones.
  * you can have #waterAmount and public waterAmount fields at the same time.


* example

```js

class CoffeeMachine {
  #waterLimit = 200;

  #checkWater(value) {
    if (value < 0) throw new Error("Negative water");
    if (value > this.#waterLimit) throw new Error("Too much water");
  }

}

let coffeeMachine = new CoffeeMachine();

// can't access privates from outside of the class
coffeeMachine.#checkWater(); // Error
coffeeMachine.#waterLimit = 1000; // Error


```

* example to demonstrate the public and private fields with same name can exist at same time

```js

class CoffeeMachine {

  #waterAmount = 0;

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) throw new Error("Negative water");
    this.#waterAmount = value;
  }
}

let machine = new CoffeeMachine();

machine.waterAmount = 100;
alert(machine.#waterAmount); // Error


```

* private field will not be inherited, so you can only access those field through the public method of parent class

```js

class MegaCoffeeMachine extends CoffeeMachine() {
  method() {
    alert( this.#waterAmount ); // Error: can only access from CoffeeMachine
  }
}


```

### Private fields are not available as this[name]
* Private fields are special.
* As we know, usually we can access fields using this[name]:


```js

class User {
  ...
  sayHi() {
    let fieldName = "name";
    alert(`Hello, ${this[fieldName]}`);
  }
}

```

* With private fields that’s impossible: this['#name'] doesn’t work. That’s a syntax limitation to ensure privacy.

## Conclusion
* Protected + Private -> encapsulation
* benefits
  * prevent user from breaking internal mechanism
  * upgrade without pain
    * change internal mechanism but not public interface
  * Hiding complexity
