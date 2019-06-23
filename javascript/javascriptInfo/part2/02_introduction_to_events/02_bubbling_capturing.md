## Bubbling
* When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
* child element -> parent element -> .... -> body -> html -> document -> window (some events)



* example


```html

<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>


```

## **Most** Events bubbling
* Event that not bubbling
  * focus and others


## event.target
*  element that caused the event is called a target element, accessible as event.target
  * so the parent handler can get the details about where it actually happens

### this V.S. event.target
  * event.target: the element that initiate the event
  * this: the current element that is running the handler
   * this === event.currentTarget

  * example: For instance, if we have a single handler form.onclick, then it can “catch” all clicks inside the form. No matter where the click happened, it bubbles up to <form> and runs the handler.
  * In form.onclick handler:
    * this (=event.currentTarget) is the <form> element, because the handler runs on it.
    * event.target is the concrete element inside the form that actually was clicked.

## Stop Bubbling
* event.stopPropagation()
  * If an element has single event handlers on a single event
* event.stopImmediatePropagation()
  * If an element has multiple event handlers on a single event

### Only Stop Bubbling if it is **Necessary**
* stopPropagation cause problem
* make analytic system malfunction
  * example:
    1. We create a nested menu. Each submenu handles clicks on its elements and calls stopPropagation so that the outer menu won’t trigger.
    2. Later we decide to catch clicks on the whole window, to track users’ behavior (where people click). Some analytic systems do that. Usually the code uses document.addEventListener('click'…) to catch all clicks.
    3. Our analytic won’t work over the area where clicks are stopped by stopPropagation. We’ve got a “dead zone”.

## Capturing
* rarely used
* addEventListener(event, handler) know nothing about capturing
* set { capture: true } to capture event.

```js
elem.addEventListener('click', () => {

}, {capture: true})
// or, just "true" is an alias to {capture: true}
elem.addEventListener('click', () => {

} ,true)

```

* The standard DOM Events describes 3 phases of event propagation:
  1. Capturing phase – the event goes down to the element.
  2. Target phase – the event reached the target element.
  3. Bubbling phase – the event bubbles up from the element.

* 3 phases of event_propagation example:
  * user click on and <td>

<img src="./assets/3_phases_event_propagation.png">


* Phases V.S. Handling
  * `event.eventPhase`: to know which phase you are in, but usually you already knew.
  1. First Phase -> Capturing
  2. Second Phase -> Capturing + Bubbling
  3. Third Phase -> Bubbling

* example

```html

<form>
  <div>
    <p>
    </p>
  </div>
</form>

```

* steps:
  0. html - capturing
  1. body - capturing
  2. form - capturing
  3. div - capturing
  4. **p - capturing**
  5. **p - bubbling**
  6. div - bubbling
  7. form bubbling
  8. body - bubbling
  9. html - bubbling

## Remove EventHandler
* To remove the handler, removeEventListener needs the same phase

```js

addEventListener(..., true)
removeEventListener(..., true)

```

## For document-level handlers – always addEventListener
* addEventListener: add new eventHandler to document
* document.onclick:
  * first assignemnt: new handler
  * second assignment: overwrite first handler
