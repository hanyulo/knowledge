# Factory Function

## Overview
* In JavaScript, any function can return a new object. When it’s not a constructor function or class, it’s called a factory function.

## Benefit
* avoid complexities of classes
* avoid `new` keyword

## Purpose
* create multiple objects
  * object literal + factory function
* Mixin Composition

## Return Syntax
* in default, `{}` to javascript is body block of function

```js

const createFoo = () => ({ foo: 'bar' });

```

## Multiple Objects
* `} = {})`: prevent error
  *  Cannot destructure property `userName` of 'undefined' or 'null'.

```js

const createUser = ({
  userName = 'Anonymous',
  avatar = 'anon.png'
} = {}) => ({
  userName,
  avatar
});

console.log(
  // { userName: "echo", avatar: 'anon.png' }
  createUser({ userName: 'echo' }),
  // { userName: "Anonymous", avatar: 'anon.png' }
  createUser()
);


```

## Mixin Composition
* mixin === an entity has such feature
* features
    * abstract similar features from multiple objects into function mixin
    * reuse
* mixin
    * withConsturctor
    * withFlying
    * withBattery
* function composition
    * pipe


```js

const withConstructor = constructor => o => ({
  // create the delegate [[Prototype]]
  __proto__: {
    // add the constructor prop to the new [[Prototype]]
    constructor
  },
  // mix all o's props into the new object
  ...o
});

```


```js

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
// or `import pipe from 'lodash/fp/flow';`
// Set up some functional mixins
const withFlying = o => {
  let isFlying = false;
  return {
    ...o,
    fly () {
      isFlying = true;
      return this;
    },
    land () {
      isFlying = false;
      return this;
    },
    isFlying: () => isFlying
  }
};

const withBattery = ({ capacity }) => o => {
  let percentCharged = 100;
  return {
    ...o,
    draw (percent) {
      const remaining = percentCharged - percent;
      percentCharged = remaining > 0 ? remaining : 0;
      return this;
    },
    getCharge: () => percentCharged,
    getCapacity: () => capacity
  };
};
const createDrone = ({ capacity = '3000mAh' }) => pipe(
  withFlying,
  withBattery({ capacity }),
  withConstructor(createDrone)
)({});
const myDrone = createDrone({ capacity: '5500mAh' });
console.log(`
  can fly:  ${ myDrone.fly().isFlying() === true }
  can land: ${ myDrone.land().isFlying() === false }
  battery capacity: ${ myDrone.getCapacity() }
  battery status: ${ myDrone.draw(50).getCharge() }%
  battery drained: ${ myDrone.draw(75).getCharge() }% remaining
`);
console.log(`
  constructor linked: ${ myDrone.constructor === createDrone }
`);


```


## References
* [factory function - Eric Elliott](https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1)
