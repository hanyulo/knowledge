# Walking The Dom
* find the DOM node that you want
* use `document` object as entry

## Overview
<img style="background-color: white" src="https://javascript.info/article/dom-navigation/dom-links.svg" />

<br></br>

## Top most layer

* `document.documentElement` === `<html>`
* `document.body` === `<body>`
* `document.head` === `<head>`


#### caveat

```html

<html>

<head>
  <script>
    alert( "From HEAD: " + document.body ); // null, there's no <body> yet
  </script>
</head>

<body>

  <script>
    alert( "From BODY: " + document.body ); // HTMLBodyElement, now it exists
  </script>

</body>
</html>

```

* the script run synchronously
    * browser hasn't parse code below the script
        * `document.body === null`


## Children: childNodes, firstChild, lastChild
* terms:
    * child nodes / children: direct descendent
    * Descendants: all nested nodes

* example

```html
<html>
  <body>
    <div>Begin</div>

    <ul>
      <li>
        <b>Information</b>
      </li>
    </ul>
  </body>
</html>
```

* children of body: div, ul
* descendents of body: div, ul, li, b

* properties
    * childeNodes
    ```js
    for (let i = 0; i < document.body.childNodes.length; i++) {
          alert( document.body.childNodes[i] ); // Text, DIV, Text, UL, ..., SCRIPT
        }
    ```
    * firstChild, lastChild
    ```js
    elem.childNodes[0] === elem.firstChild
    elem.childNodes[elem.childNodes.length - 1] === elem.lastChild  

    ```

* special method: hasChildNodes()
    * to check whether there are any child nodes.
    * `elem.hasChildNodes()`

## DOM Collections
* childNodes is array like iterable object(collection) but not array

1. how to iterate
```js

for (let node of document.body.childNodes) {
  alert(node); // shows all nodes from the collection
}

```

2. array method won't work, you need to transform it

```js

Array.from(document.body.childNodes).filter(node => return node......) // function

```

#### [caveats](https://javascript.info/dom-navigation#dom-collections)
* collections are read-only
    * can't do this `childNodes[i] = ...`
    * Changing DOM needs other methods

* DOM collections are live
    * add/remove nodes into DOM, then they appear in the collection automatically.
* Don’t use for..in to loop over collections

## Siblings and Parents

```html

<html>
  <head>...</head>
  <body>...</body>
</html>

```
* terms
    * rightSibling === nextSibling
    * leftSibling === previousSibling
* properties (nodes)
    * includes: text nodes, element nodes, comment nodes, etc.
        * `nextSibling`
        * `previousSibling`
        * `parentNode`
        * `childNodes`
        * `firstChild`
        * `lastChild`

```js
document.body.nextSibling === null //true
document.body.previousSibling === document.head //true
document.body.parentNode === document.documentElement //true
document.head.nextSibling === document.body  //true

```

## Element-only navigation

<img style="background-color: white" src="https://javascript.info/article/dom-navigation/dom-links-elements.svg" />

<br></br>

* only tags
    * no text/comment nodes
* properties
    * `children`
    * `firstElementChild`, `lastElementChild`
    * `previousElementSibling`, `nextElementSibling`
    * `parentElement`

* caveats
    * document is node not a element
        * example
        ```js
        alert( document.documentElement.parentNode ); // document
        alert( document.documentElement.parentElement ); // null
        ```
        * traverse
        ```js
        while(elem = elem.parentElement) { // go up till <html>
          alert( elem );
        }
        ```

## [Tables](https://javascript.info/dom-navigation#dom-navigation-tables)
