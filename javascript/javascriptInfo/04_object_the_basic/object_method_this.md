## Method
* if the property of object is function then it is called method.
* The following way has some difference in  object inheritance.



```js

let user = {
  name: 'Han',
}

// use function expression to create a method for user object literal.
user.sayHi = function() {
  console.log('hi')
}

// Solution 2

// first, declare
function sayHi() {
  alert("Hello!");
};

// then add as a method
user.sayHi = sayHi;


//solution 3 - shorthand

// these objects do the same

let user = {
  sayHi: function() {
    alert("Hello");
  }
};

// method shorthand looks better, right?
let user = {
  sayHi() { // same as "sayHi: function()"
    alert("Hello");
  }
};


```

## This is not bound
* The value of this is evaluated during the runtime


```js

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// use the same functions in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)


```


* In the following case
  * strict mode: `this.name` will get error because strict is undefined
  * non-strict mode: this reference to the global object (window in the browser)

```js

function sayHi() {
  alert(this);
}

sayHi(); // undefined

```

### Consequence of unbound this
* cause: this is evaluated in runtime
* does not depend on where the method was declared, but rather on what’s the object “before the dot”.
* result:
  * benefit
    * you can assign the context instance to the function that use this. The function can be used by different objects
  * drawback:
    * you may encounter some errors.
    * in react: event handler...



## Note for this
* In object, this reference to the object
* If a function has this, then it is usually meant to be called in the context of an object.


 ```js
 function sayHi() {
   console.log(this.name + ': hi');
 }

 const user = {
   name: 'Han',
 }

 let sayHiV2 = sayHi.bind(user);
 sayHiV2();

 ```


## Internal Reference Type
* `user.hi()`
  * user.hi return a reference type which contains the object info.
* `test = user.hi`
  * just return the function that user.hi references to.


```js

let user = {
  name: "John",
  hi() { alert(this.name); },
  bye() { alert("Bye"); }
};

user.hi(); // John (the simple call works)

// now let's call user.hi or user.bye depending on the name
(user.name == "John" ? user.hi : user.bye)(); // Error!

```

## Arrow function
* Arrow Function has no their own `this`
*  reference this from such a function, it’s taken from the outer “normal” function.

```js
let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya

```
