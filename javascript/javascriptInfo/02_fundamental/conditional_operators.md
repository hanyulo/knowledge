## if
* It would be better id you do not just write a single line if condition statement.
* The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.
* boolean conversion
  * false value
    1. 0
    2. empty string: ''
    3. undefined
    4. null
    5. NaN
  * True
    * others


## ternary operators ?
* ternary: the operator has three operands

```js
let accessAllowed = (age > 18) ? true : false;

```
s

* Technically, we can omit the parentheses around age > 18. The question mark operator has a low precedence, so it executes after the comparison >.
