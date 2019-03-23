# Operators

## Term

### Terms
* operator
* operand

### Example
* 5 * 2
  * 5, 2 = operand (arguments)  
  * operator
    * operator with multiple operands -> binary operator
    * operator with single operand -> unary operator
      * example: -x -> `-` === unary

```js
//unary
let x = 1;
x = -x;

//binary
let x = 2;
let y = 3;

x * y;

```


## Binary +, string concatenation (binary form)
```js
// either one of operand is string, then the + turn both to string
'1' + 2; '12'
2 + '1'; '21'

// left to right
2 + 2 + '1'; '41'
```

* only + turn numbers to string
```js
2 - '1' // 1
'6' / '2' // 3
```


## Numeric Conversion, Unary +
* no effect on number
* convert non-number to number
* same as Number() function

```js
let x = 1;
let y = -2;
+x // 1
+y // -2

+true // 1
+ ''// 0
```


```js
let x = '2';
let y = '3';

x + y // '23'
+x + +y // 5

// the unary pluses applied to values before the binary ones because of Operator Precedence

```


## Operator Precedence
* Parentheses override any precedence // (1 + 2) * 3
* Every operators in javascirpt has corresponding precedence number
  * the larger execute first
* **If the precedence is the same**, execution order is from left to right
* unary has higher precedence than binary
* [Operator Precedence Table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)


## Assignment (=)
* Assignment is an operator
* Operator Precedence: 3

```js

let x = 2 * 2 + 1;

alert( x ); // 5

```

* chain assignment
  * from right to left

```js

let a, b, c;
a = b = c = 2 + 2;

```



* assignment operator returns a value
  * we should not write something like this, but some thrid-party has this kind of ninja code.

```js

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0

```

## Remainder %
* Exponentiation

```js
alert( 2 ** 2 ); // 4  (2 * 2)
alert( 2 ** 3 ); // 8  (2 * 2 * 2)
alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2)

alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root, that's maths)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

```


## Increment/Decrement
* postfix
* prefix


```js

/*  prefix */
let counter = 1;
let a = ++counter; // (*)

alert(a); // 2

/* postfix */
let counter = 1;
let a = counter++; // (*) changed ++counter to counter++

alert(a); // 1

```

* ++/-- has higher precedence than most other arithmetical operations

```js
let counter = 1;
alert( 2 * ++counter ); // 4

let counter = 1;
alert( 2 * counter++ ); // 2, because counter++ returns the "old" value

/*  above are ninja code, which is not good at all*/
let counter = 1;
alert(2 * counter);
counter++;

```

## Bitwise operators
* Bitwise operators treat arguments/operands as 32-bit integer numbers and work on the level of their binary representation.

1. AND ( & )
2. OR ( | )
4. XOR ( ^ )
5. NOT ( ~ )
6. LEFT SHIFT ( << )
7. RIGHT SHIFT ( >> )
8. ZERO-FILL RIGHT SHIFT ( >>> )

## Modify in Place
```js
let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14


```


* has lower precedency than usual arithmetical operators.
* same precedence as a normal assignment,
* run after
```js

let n = 2;

n *= 3 + 5;

alert( n ); // 16  (right part evaluated first, same as n *= 8)

```

## Comma
* has ver low precedency
* With round bracket (parentheses)
  * every thing before the last comma was calculated and may be used in the last statement
    * then it will be throw away.
* without parentheses
  * assign the first part first
  * last part ignored

```js
let a = (1 + 2, 3 + 4);
alert( a ); // 7 (the result of 3 + 4)


let b = 1+2, 3+4;
b // 3
```


```js

// three operations in one line
for (a = 2, b = 3, c = a * b; a < 10; a++) {
// c start at 6
}

```


## Ref
[Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
