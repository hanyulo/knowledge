* function is an object
* properties
  * name
  * length
    * length of parameters
      * rest parameters are not counted
    * which can be used to implement polymorphism
  * custom properties
    * imitate closure
      * set an inner function with a custom property.
      * difference between imitating-closure custom property and closure
        * closure: user can not modify the private variable in outer scope
        * imitating-closure by custom property: user can modify the private variable in outer scope.
    * lodash
      * create a function _
      * set multiple custom properties on function _
        * get
        * remove
        * ...


```js
function makeCounter() {

  function counter() {
    return counter.count++;
  };

  counter.count = 0;

  return counter;
}

let counter = makeCounter();

counter.count = 10;
alert( counter() ); // 10


```


## Function
* Function Declaration

```js
 function test() {

 }

```

* function expression

```js

const test = function() {

}

```

* Named function expression
  * prevent losing reference to function when the function want to call itself inside the function.

```js

const test = function func() {

}


let sayHi = function(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    sayHi("Guest"); // Error: sayHi is not a function
  }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Error, the nested sayHi call doesn't work any more!

```
