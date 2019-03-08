## Debugging
* cmd + opt + i
  * open inspector
* esc:
  * open console


## Coding Style
* The maximum line length should be agreed upon at the team-level. It’s usually 80 or 120 characters.
* Code First then helper function
* Must use semicolon all the time.

##  Comments
* self-descriptive
 * if you need to comment on a function to tell reader what is going on in the function, then don't do it. Just put all statements into a function can name the function correspondingly.
 * function tell you what is it for directly.

* What is good comment
 * Describe architecture of function rather than explanatory.
 * Explain why is the task solved by trick way.
 * If the code has anything subtle and counter-intuitive, it’s definitely worth commenting.

* Comment this:
  * Overall architecture, high-level view.
  * Function usage. (JSDoc)
  * Important solutions, especially when not immediately obvious.

* Avoid Comments
  * That tell “how code works” and “what it does”.
  * Put them only if it’s impossible to make the code so simple and self-descriptive that it doesn’t require those.

## Ninja Code
  * bad practice!!!!

## Automated Testing with Mocha
* Behavior Driven Development
 * Tests guarantee that the code works correctly.
 * Docs – the titles of 'describe' and 'it' tell what the function does.
 * Examples – the tests are actually working examples showing how a function can be used.

* Behavior Driven Development Overview
 1. come up with test first (Spec)
 2. implementation

* The Development Flow
1. An initial spec is written, with tests for the most basic functionality.
2. An initial implementation is created.
3. To check whether it works, we run the testing framework Mocha (more details soon) that runs the spec. Errors are displayed. We make corrections until everything works.
4. Now we have a working initial implementation with tests.
5. We add more use cases to the spec, probably not yet supported by the implementations. Tests start to fail.
6. Go to 3, update the implementation till tests give no errors.
7. Repeat steps 3-6 till the functionality is ready.

* Tools
 * Mocha – the core framework: it provides common testing functions including describe and it and the main function that runs tests.
 * Chai – the library with many assertions. It allows to use a lot of different assertions, for now we need only assert.equal.
 * Sinon – a library to spy over functions, emulate built-in functions and more, we’ll need it much later.


## To Do
* How to run test on react app
[React with test](https://medium.freecodecamp.org/react-unit-testing-with-mocha-and-enzyme-77d18b6875cb)

## Reference
[javascript.info - code-quality](https://javascript.info/code-quality)
