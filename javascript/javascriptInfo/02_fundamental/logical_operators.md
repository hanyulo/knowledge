
## OR finds the first truthy value
* If an operand is not a boolean, it’s converted to a boolean for the evaluation.

```js

result = value1 || value2 || value3;

```

* returns the first truthy value or the last one if no such value is found.
  * Evaluates form left to right
  * For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
  * **If all operands have been evaluated (i.e. all were false), returns the last operand.**
    * the value of last operand is returned in its original form, without the conversion.


```js

alert( 1 || 0 ); // 1 (1 is truthy)
alert( true || 'no matter what' ); // (true is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)
alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

```

### Two main cases

### Get first truthy value from a list of variables and expressions

```js

let currentUser = null;
let defaultUser = "John";

let name = currentUser || defaultUser || "unnamed";

alert( name ); // selects "John" – the first truthy value

```

### Short-circuit evaluation
* assign value to outter variavle (side effects)
* it is handy but it will be better use if statement

```js

let x;

// from left to right
// the true value is returned and the statement stop there
true || (x = 1);

alert(x); // undefined, because (x = 1) not evaluated

/* if example */

if (1 === 1) {
  x = 1;
}

```

```js

let x;

// from left to right
// flase -> next -> x = 1
false || (x = 1);

alert(x); // 1

/* if example */

if (!(1 === 2)) {
  x = 1;
}

```


## AND
* If an operand is not a boolean, it’s converted to a boolean for the evaluation.

```js
if (1 && 0) { // evaluated as true && false
  alert( "won't work, because the result is falsy" );
}

```

### AND find the first falsy value

```js

result = value1 && value2 && value3;

```

* In other words, AND returns the first falsy value or the last value if none were found.
  * Evaluates operands from left to right.
  * For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
  * If all operands have been evaluated (i.e. all were truthy), returns the last operand.


```js

// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0
```

```js

alert( 1 && 2 && null && 3 ); // null

```


```js

alert( 1 && 2 && 3 ); // 3, the last one

```


### special use case
* not recommended.


```js
 let x = 1;
(x > 0) && alert( 'Greater than zero!' );

// same as

if (x > 0) {
  alert('qwetwqetq')
}

```

### Precedence of AND && is higher than OR ||

```js

// following two statements are equal to each other.
a && b || c && d;
(a && b) || (c && d);

```

## !NOT
* Converts the operand to boolean type: true/false.
* Returns the inverse value.

* basic use case

```js

alert( !true ); // false
alert( !0 ); // true

```

* convert plain value to boolean

```js

alert( !!"non-empty string" ); // true
alert( !!null ); // false


// same as


alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false

```
