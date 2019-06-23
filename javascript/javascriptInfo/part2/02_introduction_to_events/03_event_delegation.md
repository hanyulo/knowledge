# Event Delegation

## Overview
* if we have a lot of elements handled in similar ways, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.
* good for tracking system (GA)

## Benefit
* We don’t need to write the code to assign a handler to each button. Just make a method and put it in the markup.
* The HTML structure is flexible, we can add/remove buttons at any time.

* example


```html

<div id="menu">
  <button data-action="save">save</button>
  <button data-action="load">load</button>
  <button data-action="search">search</button>
</div>


<script>
class Menu {
  constructor(elem) {
    this._elem = elem;
    elem.onClick = this.onClick.bind(this);
  }

  save() {
    console.log('save')
  }

  load() {
    console.log('load')
  }

  search() {
    console.log('search')
  }

  onClick(e) {
    let action = e.target.dataset.action;
    if (action && this[action]) {
      this[action]();
    }
  }
}
</script>

```

## Behavior Pattern
* Use event delegation to add behaviors to elements declaratively with special attribute
* benefits:
  * add any elements that we want to tracked in any place inside html
* Steps:
  1. add special attributes to targeted elements.
  2. make a document-wide handler to handle events that initiated by those elements special attributes.

```html

<div>
  <div>
    Counter: <input type='button' value='1' data-counter/>
  </div>
  <div>
    One more counter: <input type='button' value='2' data-counter/>
  </div>
</div>

<script>
  document.addEventListener('click', (e) => {
      if (e.target.dataset.counter !== undefined) {
        event.target.value++;
      }
  })
</script>

```


## Summary

### Algorithm
1. put handler on document level
2. the handler can recognize the elements that it target
  * data-attribute
3. handle those events that initiate by targeted element

### Benefit
* Save memories: no need to add many handlers
* less code: reduce number of handlers
* DOM modification: mass add/remove elements

### Downside
* Increase CPU load
