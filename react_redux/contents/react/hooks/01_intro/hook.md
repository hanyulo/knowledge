
## Problems Caused by Conventional Method.
1. reuse stateful logic between components
 * In convention, we use render props and HOC to solve related problems, which creates wrapper hell problem.
 * [Solution](https://reactjs.org/docs/hooks-custom.html)
2. Mutually related code get split apart, but completely unrelated code ends up combined in a single method.
 * fetch data at componentDidMount, but the componentDidMount may also contain code that set up event listener. And clean the event listener in componentWillUnmount.
 * Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data)
 * [Solution](https://reactjs.org/docs/hooks-effect.html#tip-use-multiple-effects-to-separate-concerns)

3. Classes confuse both people and machines
 * Need to understand lexical context and this syntax in javascript
 * The distinction between function and class components in React and when to use each one leads to disagreements even between experienced React developers.
 * classes don’t minify very well, and they make hot reloading flaky and unreliable.  
 * Solution:
  * Hooks let you use more of React’s features without classes.

## Other Front-end frameworks
* Svelte, Angular, Glimmer

## References
* [Hook - official website](https://reactjs.org/docs/hooks-intro.html)
