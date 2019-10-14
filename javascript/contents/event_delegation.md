## Event Delegation.
* Situation
  * add li dynamically.
```html
<ol class="items">
  { // add following part dynamiceally.
    <li>Label 1</li>
    <li>Label 2</li>
    <li>Label 3</li>
    ...
  }
</ol>
```

```js
const checkBoxes = document.querySelectorAll(‘input’)
checkBoxes.forEach(input => input.addEventListener(‘click’, ()=> alert(‘hi!’)))
```
  * Since we only have ol element at initial load, the evetlistener of each li will not be triggered.
  * solution: addEventListener on ol element, which is event delegation.
  * Internal process: bubble up.

## Bubble Up vs. Event Capturing
 1. Bubble: bottom-up method.
 2. Capture: Top-down method.


 ## References
 [Bubble vs. Capturing](https://www.quirksmode.org/blog/archives/2008/04/delegating_the.html)
 [What is Event Delegation](https://medium.com/@bretdoucette/part-4-what-is-event-delegation-in-javascript-f5c8c0de2983)
