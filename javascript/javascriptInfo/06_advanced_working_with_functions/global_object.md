## Global Object
1. window of browser
2. global of node.js

## window of browser
1. window provide multiple properties and functionalities.
2. top-level var variable will become property of window
3. <script> share global variables
4. this in global scope === window

## Modulation
* <script type="module"></script>
  * var x can not be the property of window
  * scripts can not share global variables with each other
  * top-level this === undefined

## Usage
* you can use window to check if the browser support of modern language features.

```js
if (!window.Promise) {
  alert("Your browser is really old!");
}

```
