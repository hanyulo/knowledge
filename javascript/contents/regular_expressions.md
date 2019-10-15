# Regular Expression

## Expression
 * []: Match Single Character with Multiple Possibilities
 * { }: quantity specifier
  * {3}: 3 exactly
  * {2, 5}: 2 - 5
  * example: {2,} : at least two characters long.
 * [^]: negated
 * ^: start, $: end
 * ```js *: >=0 ```
 * +: >=1
 * ?: the previous element is optional.
 * `*`: Zero or more times
 * lookahead
  * (?=...): positive lookahead
  * (!=...): negative lookahead
 * Capture Group: ()
  *
* $ sign: specify the capture groups.()
 * "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
 * // Returns "Camp Code"
 * .: Period matches any single character except a line break.

```
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/;
let result = pwRegex.test(sampleWord);
```


## Shortcuts
1. \w = [A-Za-z0-9_]
2. \W = [^A-Za-z0-9_]
3. \d = [0-9]
4. \D = [^0-9]
5. \s = [ \r\t\f\n\v]
6. \S = [^ \r\t\f\n\v]
 * whitespace
 * carriage return
 * tab
 * form feed
 * new line characters.
 * [ref](https://www.w3schools.com/jsref/jsref_obj_regexp.asp)

## Function
 * Using the .match() method on a string will return an array with the string it matches, along with its capture group.

## To Read
 * [Capture Group](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/regular-expressions/reuse-patterns-using-capture-groups)


## References
[freeCodeCamp](https://learn.freecodecamp.org/)
[Github](https://github.com/ziishaned/learn-regex)
