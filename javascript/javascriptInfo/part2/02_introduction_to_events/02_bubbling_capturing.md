## Bubbling
* When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.



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
* 
