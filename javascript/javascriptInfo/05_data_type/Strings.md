## Overview
* format: utf-16
* ways to do it
  1. single quote
  2. double quote
  3. backticks
    * you can put expression in it.
    * allow multiple lines without `\n`


## Special Characters
* \n
* ...
* unicode
  * \u00A9
* use backslash to escape reserved characters
* the special character e.g., `\n` count as one character in .length


## Accessing characters
* two ways
  1. square bracket
  2. charAt function
* differences
  * if no character found
    1. return undefined
    2. return empty string

```js
let str = 'abcdef'
/* solution one */
str[1]

/* solution #2 */
str.charAt(2)

```

* iterate over the string

```js

for(let char of str) {
  console.log(char);
}

```

## Strings are Immutable

```js

let str = 'Hi';

str[0] = 'h'; // error
alert( str[0] ); // doesn't work

```

## Changing Case
* 'abcdef'.toUpperCase()
* 'ABCDEF'.toLowerCase()


## The bitwise NOT trick

```js

let str = "Widget";

if (~str.indexOf("Widget")) {
  alert( 'Found it!' ); // works
}

```

## Comparing Strings
* javascript encode string in utf-16, so each character has its code.

* str.codePointAt(pos)

```js
'abcdef'.codePointAt(0)
```

* String.fromCodePoint(code)

```js
String.fromCodePoint(97)
```
* unicode

```js
'\u005a'

```

* let's see the numeric value of characters

```js

let str = '';

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
alert( str );
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ


 'Österreich' > 'Zealand'; // true

```

## Correct comparisons
* str.localeCompare
  * Returns 1 if str is greater than str2 according to the language rules.
  * Returns -1 if str is less than str2.
  * Returns 0 if they are equal.

```js
'Österreich'.localeCompare('Zealand') // -1

```
