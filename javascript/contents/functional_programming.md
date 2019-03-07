## Functional Programming
* Overview
  * A programming paradigm
  * Functional code tends to be more concise, more predictable, and easier to test than imperative or object oriented code.
  * Declarative rather than imperative
* Principles
  * Pure Function
  * Avoid shared state
  * Avoid mutable data
  * AVOID side effect
  * Application state flow through pure functions

## Pure Function
* Given the same inputs, always returns the same output, and
* Has no side-effects

## Function Composition
* the composition f . g (the dot means “composed with”) is equivalent to f(g(x))
* put a function as parameter.
* Just like following
```js

decorator, HOC, _.compose. _.once ....

```

## Shared State
* Scope
  * global scope
  * closure scope
* Thins in shared scope
  * variable
  * object
  * memory space
* Things being passed between scopes
  * property of an object

### Problem
1. In order to understand the effects of a function, you have to know the entire history of every shared variable that the function uses or affects.
2. Call async function which altered shared state multiple times, the state only show the last edition.
    -> race condition
    -> it can not be solved by pure function -> it should be solved by debounce
    -> **Remove function call timing dependency, and you eliminate an entire class of potential bugs.**
3. After you call the function that change shared state multiple times, other functions who use the shared state as input will be influenced.


### Solution
* Use immutable data structures and pure calculations to derive new data from existing data.
* Best Example: react and redux state


## Immutable Object
* Once it is created, you can not modified
* A key factor to maintain state history
* Don't confuse with const
  * const only create an variable that you can not reassigned different value to it.
  * const a = { }, you can still alter properties in a.

### How to Implement Immutable Object
* Object.freeze
  * only freeze one level deep
* [Trie Data Structure + structural sharing](https://medium.com/@dtinth/immutable-js-persistent-data-structures-and-structural-sharing-6d163fbd73d2)
  * No matter which level's property you change, the immutable system (trie data structure + structural sharing) always **create a new root** for the whole tree. Now you can just compare memory location of different roots to determine if the state tree has been edited before.


## Side Effects
* any application state change that is observable outside the called function other than its return value
* Such as:
  *  Modifying any external variable or object property (e.g., a global variable, or a variable in the parent function scope chain)
  * Logging to the console
  * Writing to the screen
  * Writing to a file
  * Writing to the network
  * Triggering any external process
  * Calling any other functions with side-effects


## Reusable through HOC

## Containers, Functors, Lists, and Streams
????? No Idea


## Declarative V.S Imperative
* Imperative
  * Imperative programs spend lines of code describing the specific steps used to achieve the desired results — the flow control: How to do things.
  * Imperative code frequently utilizes statements. A statement is a piece of code which performs some action. Examples of commonly used statements include for, if, switch, throw, etc…

  ```js

  const doubleMap = numbers => {
    const doubled = [];
    for (let i = 0; i < numbers.length; i++) {
      doubled.push(numbers[i] * 2);
    }
    return doubled;
  };

  console.log(doubleMap([2, 3, 4])); // [4, 6, 8]

  ```

* Declarative
  * Declarative programs abstract the flow control process, and instead spend lines of code describing the data flow: What to do. The how gets abstracted away.
  * Declarative code relies more on expressions. An expression is a piece of code which evaluates to some value. Expressions are usually some combination of function calls, values, and operators which are evaluated to produce the resulting value.


```js

const doubleMap = numbers => numbers.map(n => n * 2);

console.log(doubleMap([2, 3, 4])); // [4, 6, 8]

```

## conclusion
Functional programming favors:

1. Pure functions instead of shared state & side effects
2. Immutability over mutable data
3. Function composition over imperative flow control
4. Lots of generic, reusable utilities that use higher order functions to act on many data types instead of methods that only operate on their colocated data
5. Declarative rather than imperative code (what to do, rather than how to do it)
6. Expressions over statements
7. Containers & higher order functions over ad-hoc polymorphism
