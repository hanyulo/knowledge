# What is Node
* Features
  1. Node.js® is a JavaScript runtime built on Chrome’s V8 JavaScript engine.
  2. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
  3. Node.js’ package ecosystem, npm, is the largest ecosystem of open source libraries in the world.


## Prerequisite
### Noun Explanation
* Run Time Environment
  * An **execution** environment.
  * Provided by operating system.
  * RTE provide following resources.
    1. software libraries.
    2. system variables.
    3. environment variables.

* V8
  * An Javascript Engine.
  * Parse and run Javascript.
  * Is a compiler.
    * Compile Javascript to Machine code.
  * V8 is written by C++.
    Javascript -> C++ -> machine code.

## Node.js

* Originally, javascript can only run on browser. Now you have node.js so your javascript code can run on any Node-compatible system.
### Feature One
* Node create execution env for you to import specific libraries.
* V8 of Node compile all your code with libraries of Node env to machine code.

### Feature Two
* Example
  1. Reading / Writing local files.
  2. Make HTTP request.
* Blocking IO
  * Say, front-end code request two users data from database. If you have single thread server system. Then your code server-side code need to request user1 data, receive data, print data. After that then you can go fetch user2 data. The solution for this is multi-threads so you server can handle two user's data at a time. But javasccript is single thread programming language which means your node web server should be single thread web server. Now, is the time call back async method kicks in.

* Non-blocking IO
  * Javascript Implement non-blocking IO by call-back function(js can handle call-back events).
  * Check Event Loop [Video](https://www.youtube.com/watch?v=8aGhZQkoFbQ).
  * So now, node server can initiate both data request at same time.


## Module
* Node module is reusable block of code that can be used without installation. Say, in your web app, you import twreporter-registration npm package which is a big block of code === module. Now, if in twreporter-registration scope, each file import from utility can be reckoned as a small block of code which is also a module.


## References
* [What is node - Priyesh Patel - Medium](https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5)
