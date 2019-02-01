# React 16

## Features
1. ErrorBoundary Component
  * ComponentDidCatch
  * Only class component can be error boundaries.
  * Can only catch error of sub tree (children), it can not catch error in itself.
  *
2. New Render return Types: Fragments and Strings
  * [Fragments](https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html)
    ```javascript

      return [
        // Don't forget the keys :)
        <li key="A">First item</li>,
        <li key="B">Second item</li>,
        <li key="C">Third item</li>,
      ];

    ```
  * Strings
    ```javascript

    render() {
      return 'Look ma, no spans!';
    }

    ```
3. [Portals](./pattern/portal.md)
4. Custom Dom Attribute
5. Return null to prevent re-render
6. getDerivedStateFromProps -> New Life Cycle
  * [Async Rendering](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props)
  * [No need derived state](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)

## References
[React 16 introduction](https://medium.freecodecamp.org/why-react16-is-a-blessing-to-react-developers-31433bfc210a)
