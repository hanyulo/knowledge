# Comparison


## String Comparison
* rule: dictionary (lexicographical)
* steps
  1. Compare the first character of both strings
  2. If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
  3. Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
  4. Repeat until the end of either string.
  5. If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

* `'be' >  'Be'` // true
  *  lowercase character has a greater index in the internal encoding table JavaScript uses (Unicode).


```js
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true
'be' >  'Be' // true
```


## Comparison of different types

* '01' -> 1
* '2' -> 2

```js
alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1
'' == false // true  '' -> 0 -> false
```

* true -> 1
* false -> 0

```js
// true ==> 1
alert( true == 1 ); // true
// false ==> 0
alert( false == 0 ); // true

```

* weird consequence

```js
let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!

```

## Strict Equality
* strict equality operator === checks the equality without type conversion.
* ===
* !==


## Comparison with null and undefined


* strict equality

```js
alert( null === undefined ); // false
```

* non-strict equality

```js
alert( null == undefined ); // true
```

## Strange result
* For maths and other **comparisons** < > <= >=
 * null -> 0
 * undefined -> NaN


### Null VS 0

* equality check == and comparisons > < >= <= work differently.
  * comparison: null is converted to number 0
  * equality check for null and undefined:
    * without any conversion
    * they equal each other and don’t equal anything else


```js

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

```

### undefined VS 0
* 1,2 : undefined => NaN
* 3: undefined only equal to null

```js
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
```


## Evade Problems
* Keep those cases in mind for debugging
* Don’t use comparisons >= > < <= with a variable which may be null/undefined, unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.

## summary 

Comparison operators return a boolean value.
Strings are compared letter-by-letter in the “dictionary” order.
When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
The values null and undefined equal == each other and do not equal any other value.
Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.
