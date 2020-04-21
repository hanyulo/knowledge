# DOM tree

## Overview
* every HTML tag is an object.
    * <p></p> === a node
* Nested tags: are “children” of the enclosing one
* <p>text</p>
    * text is a object

* example
    * document.body === object representing the <body> tag.

## [DOM example](https://javascript.info/dom-nodes#an-example-of-the-dom)

* tags === elements === element nodes
    * is an object
* 'this is paragraph': will be put in text node
* special characters:
    * a newline: ↵ (in JavaScript known as \n)
    * a space: ␣
    * this is why we need uglify
    * Spaces at string start/end and space-only text nodes are usually hidden in tools
* caveats
    * Spaces and newlines before <head> are ignored for historical reasons.
    * if we put something after </body>, then that is automatically moved inside the body.

## [Autocorrection](https://javascript.info/dom-nodes#autocorrection)
* auto create following tags
    * HTML
    * BODY
    * HEAD
    * tbody
* close unclosed tags


## [Other Node Types](https://javascript.info/dom-nodes#other-node-types)
* DOCTYPE
* comment
* documents

```html

<!DOCTYPE HTML>
<html>
<body>
  The truth about elk.
  <ol>
    <li>An elk is a smart</li>
    <!-- comment -->
    <li>...and cunning animal!</li>
  </ol>
</body>
</html>

```

* There are [12 node types](https://dom.spec.whatwg.org/#node). In practice we usually work with 4 of them:

* document – the “entry point” into DOM.
* element nodes – HTML-tags, the tree building blocks.
* text nodes – contain text.
* comments – sometimes we can put information there, it won’t be shown, but JS can read it from the DOM.


## Interaction with console

#### Method 1
1. select tag
2. press ESC to open console
3. select
    * `$0` === current selection
    * `$1` === previous selection

#### Method
1. inspect() // a node 


## Refs
* https://javascript.info/dom-nodes
