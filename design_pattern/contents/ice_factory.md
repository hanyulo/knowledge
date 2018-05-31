# Overview
There are several existing disadvantages of using class syntax of javascript without Object.freeze:
* Need to bind object.
* Coder can modify value enumerable properties accidentally.
* If coder modify xxx.prototype.functionName mistakenly, all instance.functionName will be influenced.

## Ice Factory (with Object.freeze)

### Example
```js
export default function makeShoppoingCart({db}) {
  return Object.freeze({
    addProduct,
    empty,
    getProducts,
    removeProduct,
    other functions
  })

  function addProduct(product) {
    db.push(product)
  }

 function empty() {
   db = []
 }

 function getProducts() {
   return Object.freeze([...db])
 }

 function removeProduct(id) {
   // remove a product
 }

 //other functions
}

const db = []
const cart = makeShoppingCart({ db })
cart.addProduct({
  name: 'foo',
  price: 9.99
})

```



### Features
* No need to use new => invoke a plain tranditional javascript object.
* No this => just access db object directly from member functions.
* Create immutable object, e.g., Cart.

### Advantages of Ice Factory
* Object.freeze() freezes the cart object so that new properties can’t be added to it, existing properties can’t be removed or changed, and the prototype can’t be changed either.
  * Object.freeze() is shallow

    if the object we return contains an array or another object we must make sure to Object.freeze() them as well. Also, if you’re using a frozen object outside of an ES Module, you need to be in strict mode to make sure that re-assignments cause an error rather than just failing silently.

## Composition Over Inheritance

### Inheritance
```js
function makeProductList({ productDb }) {
  return Object.freeze({
    addProduct,
    empty,
    getProducts,
    removeProduct,
    // others
  })

  // definitions for
  // addProduct, etc…
}

const db = []
const productList = makeProductList({db})

//==================

function makeShoppingCart({
  addProduct,
  empty,
  getProducts,
  removeProduct,
  …others
}) {
  return Object.freeze({
    addProduct,
    empty,
    getProducts,
    removeProduct,
    someOtherMethod,
    …others
  })

  function someOtherMethod () {
    // code
  }
}

//==================


function makeShoppingCart(produtList) {
  return Object.freeze({
    ...produtList,
    someOtherMethod,
    …others
  })

  function someOtherMethod () {
    // code
  }
}
```

### Composition

Actually Composition is a little bit like Higher Order Component.

```js
// Goal: shopping cart inherit product list

function makeProductList({ productDb }) {
  return Object.freeze({
    addProduct,
    empty,
    getProducts,
    removeProduct,
    // others
  })
  // definitions for
  // addProduct, etc…
}

function makeShoppingCart(productList) {
  return Object.freeze({
    items: productList,
    someCartSpecificMethod,
    // …
  })
  function someCartSpecificMethod () {
    // code
  }
}
```


## Questions To Do
* composition over inheritance
* what is composition exactly ? Is it just like interface of java ?
* When to put semicolons in javascript?

## References
[Ice Factory _ Bill Sourour _ Medium](https://medium.freecodecamp.org/elegant-patterns-in-modern-javascript-ice-factory-4161859a0eee)

[Composition Over Inheritance - Reddit](https://www.reddit.com/r/programming/comments/5dxq6i/composition_over_inheritance/da8bplv/?st=jhu33zxf&sh=a22be43d)
