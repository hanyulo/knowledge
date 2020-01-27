## Overview
* composition: what they do
* inheritance: what they are

## Mentality
* choose (object) composition over (class) inheritance
* object composition === mixin composition

## Problem of class inheritance
* not flexible
* you have to perfectly predict whole system before you really get your hand dirty
* taxonomy of class inheritance
    1. The Gorilla / Banana problem
        * only need specific feature but has to inherit whole system
    2.  The Fragile Base Class Problem
        * change trivial part of base class cause ripple effects
    3. The Duplication by Necessity Problem
        * to get rid of The Gorilla / Banana problem
            * create a slightly different version of base class === not good
    4. The Fallout
        * rewrite whole class.


### Taxonomy Example

```js

Robot
  .drive()

    CleanRobot
      .clean()

    MurderRobot
      .kill()

Animal
  .breath()

  Dog
    .bark()

  Cat
    .meow()


Goal
MurderRobotDog
  .kill() v
  .bark() v
  .drive() v
  .breath() x
  .clean() x
  .meow() x


XXXObject
  .bark()

    Robot
      .drive()

        CleanRobot
          .clean()

        MurderRobot
          .kill()

          MuderRobotDog

    Animal
      .breath()

      Dog

      Cat
        .meow()


```

## Solution For Class Inheritance
* object composition: factory function for mixin composition
* mixin for class syntax


### Solution Example
```js

const barker = ({ state }) => ({});
const breather = ({ state }) => ({});
const meower = ({ state }) => ({});
const cleaner = ({ state }) => ({});
const driver = ({ state }) => ({});
const killer = ({ state }) => ({});

const MuderRobotDog = ({ state }) = {
  return Object.assign(
    {},
    killer(state),
    barker(state),
    driver(state),
  )
}

```



## Reference
* [composition v.s inheritance](https://www.youtube.com/watch?v=wfMtDGfHWpA)
