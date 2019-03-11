## Statement

## Semicolons
* JavaScript interprets the line break as an “implicit” semicolon.
* In most cases, a newline implies a semicolon. But “in most cases” does not mean “always”!
  ```js
  // exception
  alert(3 +
  1
  + 2); // 6
  ```
* In some situation, javascript fails to assume  a semicolon where it is really needed
  ```js
  alert("There will be an error")  //need semicolon here
  // error
  [1, 2].forEach(alert)
  ```

## Practice
* Put semicolons between statements even if they are separated by newlines.
* 
