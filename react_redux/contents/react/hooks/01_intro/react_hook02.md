## Why we need hooks
#### 1. Wrapper hell
* Higher Order Component
* render props

##### Solution
* ?

#### 2. Complex Components: hard to understand (life cyce)
* split related logic to different life cycle methods
* combine unrelated logic in to single life cycle methods
* componentDidMount
  1. addEventListener
  2. fetch data from API

##### Solution
* useEffect hook

#### 3. Class Confusion
* Not easy to use
  * confused this
  * bind event handler
* not good at minifying
* make hot reloading flaky and unreliable. (I don't understand)

##### Solution
1. hook has no `this.state.blabla`
2. hook has no this.state -> no need binding function

#### 4. consistency
* before hook
    1. stateful -> class
    2. stateless -> function

*


## Everything about hooks

### Hooks and Function Components
* only works in function components
  * before hooks, you only create function components for stateless components
  * but now, the function components can manipulate the state through hooks so we prefer call it function components

### What is hook
* hook is a function
* hook function component to react to manipulate states.

### When to use it
1. declare a function component
2. realize that I need to manipulate the state of function
3. add hook to the function component


### rules of using hooks
* https://reactjs.org/docs/hooks-rules.html
* https://medium.com/better-programming/introduction-to-react-hooks-e0102c038bf1
