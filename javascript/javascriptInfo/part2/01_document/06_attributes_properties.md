## Attribute and properties
* browser parse html to DOM objects
    * element nodes: most **standard** html attributes -> properties of DOM object
    * example
        * `<body id="page">` -> `body.id === page`


## DOM Properties
* DOM node are regular JavaScript objects
* DOM properties and methods behave just like regular JavaScript objects
* They are case-sensitive
* They can have any value.
* [example](https://javascript.info/dom-attributes-and-properties#dom-properties)


## HTML Attributes
* browser only parse standard attributes of tag to DOM properties
* Their name is case-insensitive
* Their values are always strings.

```html

<body id="test" something="non-standard">
  <script>
    alert(document.body.id); // test
    // non-standard attribute does not yield a property
    alert(document.body.something); // undefined
  </script>
</body>

```
* each tag may have different specific standard attributes

```HTML

<body id="body" type="...">
  <input id="input" type="text">
  <script>
    alert(input.type); // text
    alert(body.type); // undefined: DOM property not created, because it's non-standard
  </script>
</body>

```

#### Access all properties (standard/non-standard) with methods
* elem.hasAttribute(name) – checks for existence.
* elem.getAttribute(name) – gets the value.
* elem.setAttribute(name, value) – sets the value.
* `elem.removeAttribute(name)` – removes the attribute.
* `elem.attributes`

* Their name is case-insensitive
* Their values are always strings.

```HTML
<body>
  <div id="elem" about="Elephant"></div>

  <script>
    alert( elem.getAttribute('About') ); // (1) 'Elephant', reading

    elem.setAttribute('Test', 123); // (2), writing

    alert( elem.outerHTML ); // (3), see if the attribute is in HTML (yes)

    for (let attr of elem.attributes) { // (4) list all
      alert( `${attr.name} = ${attr.value}` );
    }
  </script>
</body>

```

1. getAttribute('About') – the first letter is uppercase here, and in HTML it’s all lowercase. But that doesn’t matter: attribute names are case-insensitive.
2. We can assign anything to an attribute, but it becomes a string. So here we have "123" as the value.
3. All attributes including ones that we set are visible in outerHTML.
4. The attributes collection is iterable and has all the attributes of the element (standard and non-standard) as objects with name and value properties.
Property-attribute synchroni


## Property-attribute synchronization
* When a standard attribute changes, the corresponding property is auto-updated, and (with some exceptions) vice versa.

```html

<input>

<script>
  let input = document.querySelector('input');

  // attribute => property
  input.setAttribute('id', 'id');
  alert(input.id); // id (updated)

  // property => attribute
  input.id = 'newId';
  alert(input.getAttribute('id')); // newId (updated)
</script>

```

* exception
    * input.value synchronizes only from attribute → to property
        * That “feature” may actually come in handy, because the user actions may lead to value changes, and then after them, if we want to recover the “original” value from HTML, it’s in the attribute.

```html

<input>

<script>
  let input = document.querySelector('input');

  // attribute => property
  input.setAttribute('value', 'text');
  alert(input.value); // text

  // NOT property => attribute
  input.value = 'newValue';
  alert(input.getAttribute('value')); // text (not updated!)
</script>

```

## [Non-standard attributes, dataset](https://javascript.info/dom-attributes-and-properties#non-standard-attributes-dataset)
* what for
    * manipulates style
    * pass custom data from html to javascript
* to avoid non-standard becomes standard -> you have to modify all code
    * `data-`

```html

<style>
  .order[data-order-state="new"] {
    color: green;
  }

  .order[data-order-state="pending"] {
    color: blue;
  }

  .order[data-order-state="canceled"] {
    color: red;
  }
</style>

<div id="order" class="order" data-order-state="new">
  A new order.
</div>

<script>
  // read
  alert(order.dataset.orderState); // new

  // modify
  order.dataset.orderState = "pending"; // (*)
</script>

```

## [Summary](https://javascript.info/dom-attributes-and-properties#summary)

## [DOM properties are typed](https://javascript.info/dom-attributes-and-properties#dom-properties-are-typed)
