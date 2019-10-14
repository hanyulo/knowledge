## Framework vs. Library
* Framework
  * full flavor/fledged development environment
  * provide much functionality possible to help with the complete product's lifecycle.
  * examples:
    * Django

* Library
  * less functionality
  * address specific issue
  * more freedom
  * developer can choose how to approach the rest of the product environment
  * examples:
    1. react
    2. jQuery


## Javascript History
* In old time
  * tech stacks: html, css, javascript, php, sql
  * web page rendered from server
  * javascript
    * manipulate real DOMs
    * form validation

* Modern Javascript
  * routing (react-router)
  * state management (redux)


## jQuery
* target
  * write less, do more
  * easy methods for common front-end tasks that require many lines of code
    * AJAX call
    * DOM manipulation
    * css manipulation
    * animation
  * sovle cross browser issue ???
  * In modern world:
    * good for support old browser?

## Modern Web Development
* Manipulate DOM directly is not an optimal way.
  * DOM contain a lot of unnecessary data.


## react
* take care View of Model, View, Controller architectural pattern
* follow the recommended life cycle mechanism + virtual DOM
  * optimization


## Virtual DOM vs. DOM manipulation

* why we need Virtual DOM
  * single page app
    * need to manipulate DOM often.


### DOM Manipulation
* Update DOM more then we really need
* example:
  * check list with ten items
    * check off first item of list
    * jQuery -> rebuild the entire list

### Virtual DOM Manipulation
* Virtual DOM Object
  * has same properties as real DOM
  * lighter then real DOM
    * it dose not has power to directly change what’s on the screen.

* virtual DOM snapshot
  * that was taken right before the update.

* Manipulating V DOM is really quick
  *  Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.

* Steps
  1. User initiate action
  2. react update virtual DOM
  3. diffing
    * react compare virtual DOM with virtual DOM snapshot
    * find those updated DOM nodes (reconciliation)
  4. only update the corresponding real DOM node at once (Batch Update)


## Reference
[jQuery](https://programmingwithmosh.com/javascript/react-vs-jquery-how-they-compare/)
[DOM Manipulation VS. Virtual Dom Manipulation](https://www.codecademy.com/articles/react-virtual-dom)
[Batch Update](https://programmingwithmosh.com/react/react-virtual-dom-explained/)
