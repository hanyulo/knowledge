
## Notes
* two main types of ref
1. ref of DOM element
2. ref of react instance

* Pass ref to parent component
1. ref forwarding
2. callback

* Portal
1. although the portal component is not in the DOM tree hierarchy, it still in the react DOM tree hierarchy. So the event in portal still bubble up ancestors in react virtual DOM tree.

2. use cases:
  * overflow: hidden + z-index: 0;
  * you need child to break through the parent's style.
    1 .dialogs
    2. hovercards
    3. tooltips

3. 

## To Read
* unstable_renderSubtreeIntoContainer



## References
* [React-Modal](https://github.com/reactjs/react-modal/blob/master/src/components/Modal.js)
* [Portal - React](https://reactjs.org/docs/portals.html)
* [AppendChild - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
* [Forwarding Ref - React](https://reactjs.org/docs/forwarding-refs.html)
* [Refs and Dom](https://reactjs.org/docs/refs-and-the-dom.html#adding-a-ref-to-a-class-component)
