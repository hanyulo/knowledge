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
