# Node Properties

## Overview
* properties
    * Different DOM nodes may have different properties (instance property)
    * Different DOM nodes have some same properties (inheritance)
* inheritance
    * EventTarget -> Node -> Other DOM nodes


<img src="https://javascript.info/article/basic-dom-node-properties/dom-class-hierarchy.svg" />

## classes
* classes
    * Object
    * EventTarget
        * root, serve as base
        * abstract class (no instances)
        * provide `event` related-functions
    * Node
        * abstract (no instances)
        * serve as base of DOM nodes
        * provides node-level navigation
            * parentNode
            * nextSibling
            * childNodes
            * ...
        * inherited by following
            * Text: text node
            * comment: comment node
            * Element: element nodes
    * Element
        * base class for DOM element
        * provides element-level navigation
            * children, nextElementSibling, previousElementSibling, firstElementChild, lastElementChild, parentElement
            * getElementsByTagName, querySelector
        * server as base of following elements
            * SVGElement
            * HTMLElement
            * XMLElement
    * HTMLElement
        * base class for all HTML elements
        * each element has its own properties and methods
            * HTMLInputElement: `<input>` element
            * HTMLBodyElement: `<body>` element
            * HTMLAnchorElement: `<a>` element

* input element example
    * the full set of properties and methods of a given node comes as the result of the inheritance.
    * inheritance
        * `<input>` -> HTMLInputElement -> HTMLElement -> Element -> Node -> EventTarget -> Object
            * HTMLInputElement – this class provides input-specific properties,
            * HTMLElement – it provides common HTML element methods (and getters/setters),
            * Element – provides generic element methods,
            * Node – provides common DOM node properties,
            * EventTarget – gives the support for events (to be covered),
            * Object, so “plain object” methods like hasOwnProperty are also available.

* To see the DOM node class name, we can recall that an object usually has the constructor property. It references the class constructor, and constructor.name is its name.

* DOM nodes are regular JavaScript objects. They use prototype-based classes for inheritance

```js

alert( document.body.constructor.name ); // HTMLBodyElement
alert( document.body ); // [object HTMLBodyElement]

alert( document.body instanceof HTMLBodyElement ); // true
alert( document.body instanceof HTMLElement ); // true
alert( document.body instanceof Element ); // true
alert( document.body instanceof Node ); // true
alert( document.body instanceof EventTarget ); // true
```

## console.log v.s console.dir
* console.log(elem) shows the element DOM tree.
* console.dir(elem) shows the element as a DOM object, good to explore its properties.

## [nodeType](https://dom.spec.whatwg.org/#node)
* examples
    * elem.nodeType == 1 for element nodes,
    * elem.nodeType == 3 for text nodes,
    * elem.nodeType == 9 for the document object,
    * ...
* nodeType: read only

```js

document.body.nodeType === 1;

```

## nodeName and tagName
* same
    * show tag name
* difference
    * nodeName
        * only for `Node` which means it also include `Element` (inheritance)
    * tagName
        * only for `Element`

```js
// assume that document.body.firstChild === comment node
document.body.firstChild.tagName === undefined //true
document.body.firstChild.nodeName === '#text' // true

document.tagName // undefined
document.nodeName // #document


```

### [The tagname is always uppercase except in XML mode](https://javascript.info/basic-dom-node-properties#tag-nodename-and-tagname)

## innerHTML
* read + write
    * read content inside html tags as string
    * write html string
* browser will fix invalid innerHTML string automatically
* assign new value to innerHTML, you can read it later

```js

 document.body.innerHTML = '<h1>this is header</h1>'

```

#### Scripts don’t execute
    * If innerHTML inserts a <script> tag into the document – it becomes a part of HTML, but doesn’t execute.

#### full overwrite

```js

chatDiv.innerHTML += "<div>Hello<img src='smile.gif'/> !</div>";
chatDiv.innerHTML += "How goes?";

```

* after `How goes?`
    * replace += with = -> overwrite original content
    * +=
        * img src="smile.gif" reload
        * if you have <input>, the typed content of input will be removed

## outerHTML
* like innerHTML plus the element itself
* assign new value to outerHTML just replace the node of DOM [REF](https://javascript.info/basic-dom-node-properties#outerhtml-full-html-of-the-element)


## nodeValue/data
* innerHTML is only for element nodes
* for other node types: text. comment.
* comment data can be used to server as mark for replacing comment with real html string (ssr)


```js

<body>
  Hello
  <!-- Comment -->
  <script>
    let text = document.body.firstChild;
    alert(text.data); // Hello

    let comment = text.nextSibling;
    alert(comment.data); // Comment
  </script>
</body>

```

## textContent
* pure text
* prevent overwriting content that you want

```js

<div id="elem1"></div>
<div id="elem2"></div>

<script>
  let name = prompt("What's your name?", "<b>Winnie-the-pooh!</b>");

  elem1.innerHTML = name;
  elem2.textContent = name;
</script>

```

## hidden
* Technically, hidden works the same as style="display:none". But it’s shorter to write.

```js

<div>Both divs below are hidden</div>

<div hidden>With the attribute "hidden"</div>

<div id="elem">JavaScript assigned the property "hidden"</div>

<script>
  elem.hidden = true;
</script>

```

## [More](https://javascript.info/basic-dom-node-properties#more-properties)

## [Summary](https://javascript.info/basic-dom-node-properties#summary)

## To Read
* what is Interface Description Language (IDL)
