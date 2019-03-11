## Variables
* declare
* assign value

## Naming
* Only contain
  1. letters
  2. digits
  3. symbols
  4. $
  5. _
* The first character must not be a digit.
* use camelCase
* case matters
* Use English. It is okay to use any language other than English, but it is not recommended.
* var is old syntax
```js
// wrong naming
let 1a; // cannot start with a digit
let my-name; // hyphens '-' aren't allowed in the name
```

* Can not use reserved names
  1. let
  2. class
  3. return
  4. function

* Assign value to variable before declare it.
 * only works in non-strict mode.
 * it is not allowed in strict mode and is note recommended

## CONST
1. Upper Constant
  - const  ABC_DEF = 'XWEF'
  * for hard code value only 
2. Constant
  - const abc = 'sadfarg'

* But there are constants that are known prior to execution (like a hexadecimal value for red)
  * use Upper constant
* that are calculated in run-time, during the execution, but do not change after their initial assignment.
 * use case 2 constant

## Notes
* take reasonable time to think about how you name variables.
* most of time is spent on modifying and extending an existing code base
* Rules
  * use human-readable names
  * stay away from abbreviations
  * Make names maximally descriptive and concise ("data", "value" are not good)
   * they are only ok when the context point what it is clearly
  * Team has to agree on term
  * Create all the time rather than reuse it.


## Conclusion
* let
  * modern variable declaration
  * code must in strict mode
* var
  * old-school variable declaration
* const
  * value of the variable can't be changed.
  * you can not reassigned the variable.
