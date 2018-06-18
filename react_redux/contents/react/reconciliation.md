# Reconciliation

## Prerequisite
[**React Element**](./element.md)

## Motivation
* React try to differ tree of React elements in each render()/
* Generic algorithm has time complexity O(n^3) => Need Diffing Algorithm whihc is heuristic O(n) algorithm.
  * 2 Assumptions
    * Two elements of different types will produce different trees.
    * The developer can hint at which child elements may be stable across different renders with a key prop.
      * Should avoid unstable keys such as Math.random(). (DOM nodes will be unnecessarily recreated.)


## Element of Different Types
* Whenever the root elements have different types, React will tear down the old tree and build the new tree from scratch.
  * All children components will be unmounted.
  * Old component-instances (Unmounted) -> New component-instances Unmounted.
    * Old: componentWillUnmount
    * New: componentWillMount, componentDidMount
  * Destroy old DOM nodes/tree -> insert new DOM nodes/sub-tree into DOM.

* Example

```js
<div>
  <Counter />
</div>

<span>
  <Counter />
</span>
```

## DOM Elements of the Same Type
* React only update different attributes.
* Do not unmount the instance === Do not tear the node and insert new one in DOM Tree.
* recurses on the children.
  * Check form root to all children instances. (All siblings at same time.)

* example one

```js
// Update className of the DOM node.
<div className="before" title="stuff" />

<div className="after" title="stuff" />
```


* example two

```js
// Update property color only.
<div style={{color: 'red', fontWeight: 'bold'}} />

<div style={{color: 'green', fontWeight: 'bold'}} />  
```

## Component Elements Of The Same Type
* Component Instances persist. => State persist
* componentWillReceiveProps -> componentWillUpdate -> render -> diff algorithm (previous res and current res)

## Recursing On Children
* Iterate all sub tress at same time.
*

```js
// Only add third subtree
<ul>
  <li>first subtree</li>
  <li>second subtree</li>
</ul>

<ul>
  <li>first subtree</li>
  <li>second subtree</li>
  <li>third subtree</li>
</ul>


// Recreate all children inside <ul>
// Time consuming and inefficient -> solution: keys
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

<ul>
  <li>Connecticut</li>
  <li>Duke</li>
  <li>Villanova</li>
</ul>


// Example with keys

// Now React know to add Connecticut instance and moved the rest rather than generate whole new ul
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```

## Keys

### Type of keys
1. create id property of each object
2. hash some part of content
3. index
  * Only work perfectly when the items are never reordered.
  * Index may confuse react to recognize the new instance as old one mistakenly.
    * [Flaw example (index as keys)](https://reactjs.org/redirect-to-codepen/reconciliation/index-used-as-key)
    * [Improved Example](https://reactjs.org/redirect-to-codepen/reconciliation/no-index-used-as-key)

## Tradeoffs
Check the link at bottom.


## References
[Reconciliation - Official](https://reactjs.org/docs/reconciliation.html)
