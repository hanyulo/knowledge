## Iterable Objects
* can be iterated through `for...of`
1. array
2. string



* Each iterable objects in javascript has the property
  * [Symbol.iterator]
    * the property reference a iterator function that return the iterator(an object)
      * the object/iterator has the a next function.
        * the next function return a object with following properties
          1. done
          2. value
