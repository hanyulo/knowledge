
## Pure Function

* testable, predictable
* has no side-effect
* Given the same input, will always return the same output.
* example (redux)
    * action
        * return the action(state)
    * reducer
        * a pure function
        * should not have any network request in reducer
        * benefit: time traveling
            * Given the same input, will always return the same output.

### Side-Effect
* mutate states/properties of objects / variable outside the scope
    * a function receive an array of objects and mutate the objects


## Refs
* [Pure Function with no side effect - Eric Elliott](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)
