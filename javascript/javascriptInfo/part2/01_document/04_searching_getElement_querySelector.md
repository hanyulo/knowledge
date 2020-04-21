# Overview

* properties
    * `getElementById`
    * `querySelectorAll`
    * `querySelector`
    * `matches`
    * `closest`
    * `getElementsBy*`
        * kind of obsolete. Replaced by querySelectorAll
    * `elemA.contains(elemB)`


## getElementById
```HTML
<div id="elem">
  <div id="elem-content">Element</div>
</div>

```

* `document.getElementById("elem").style` || `elem.style`
    * `elem.style`
        * only if you do not declare the elem variable
        * does not recommend to use such syntax
* id must be unique


## querySelectorAll
* elem.querySelectorAll(css)

```HTML
<ul>
  <li>The</li>
  <li>test</li>
</ul>
<ul>
  <li>has</li>
  <li>passed</li>
</ul>
<script>
  let elements = document.querySelectorAll('ul > li:last-child');

  for (let elem of elements) {
    alert(elem.innerHTML); // "test", "passed"
  }
</script>

```

## querySelector
* returns the first element for the given CSS selector.
    * querySelector(css) === querySelectorAll(css)[0]

## matches
* `elem.matches(css)`

```HTML

<a href="http://example.com/file.zip">...</a>
<a href="http://ya.ru">...</a>

<script>
  // can be any collection instead of document.body.children
  for (let elem of document.body.children) {
    if (elem.matches('a[href$="zip"]')) {
      alert("The archive reference: " + elem.href );
    }
  }
</script>

```

## closest
* `elem.closest(css)`
* goes up from the element and checks each of parents (include itself). If it matches the selector, then the search stops, and the ancestor is returned.

```HTML
<h1>Contents</h1>

<div class="contents">
  <ul class="book">
    <li class="chapter">Chapter 1</li>
    <li class="chapter">Chapter 1</li>
  </ul>
</div>

<script>
  let chapter = document.querySelector('.chapter'); // LI

  alert(chapter.closest('.book')); // UL
  alert(chapter.closest('.contents')); // DIV

  alert(chapter.closest('h1')); // null (because h1 is not an ancestor)
</script>

```

## [getElementsBy*](https://javascript.info/searching-elements-dom#getelementsby)
* properties
    * getElementsByTagName
    * getElementsByClassName
    * getElementsByName
* caveats
      * It returns a collection, not an element!
          * `document.getElementsByTagName('input')[0].value = 5;`

```HTML

<form name="my-form">
  <div class="article">Article</div>
  <div class="long article">Long article</div>
</form>

<script>
  // find by name attribute
  let form = document.getElementsByName('my-form')[0];

  // find by class inside the form
  let articles = form.getElementsByClassName('article');
  alert(articles.length); // 2, found two elements with class "article"
</script>

```

## Live Collections

* `getElementsBy*`
    * All methods "getElementsBy*" return a live collection. Such collections always reflect the current state of the document and “auto-update” when it changes.

```HTML

<div>First div</div>

<script>
  let divs = document.getElementsByTagName('div');
  alert(divs.length); // 1
</script>

<div>Second div</div>

<script>
  alert(divs.length); // 2
</script>

```

* `querySelectorAll` returns a static collection

```HTML

<div>First div</div>

<script>
  let divs = document.querySelectorAll('div');
  alert(divs.length); // 1
</script>

<div>Second div</div>

<script>
  alert(divs.length); // 1
</script>

```

## [Summary](https://javascript.info/searching-elements-dom#summary)
