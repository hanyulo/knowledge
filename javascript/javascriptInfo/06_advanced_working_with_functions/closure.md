## Lexical Environment Object
* Who kind of conditions, create such object
  1. running function: function() {}
  2. whole script (Global Lexical Environment)
  3. code block

* Properties of Lexical Environment Object
  1. Environment Record:
    1. local variables
    2. this value
    * if you change a value of variable, it just like change the value of specific property of Lexical Environment Object.
  2. reference to outer lexical environment

<img src="./assets/lexical_environment_ basic.png">

<img src="./assets/lexical_environment_assign_value.png">

## Tmp Conclusion
* A variable is a property of a special internal object, associated with the currently executing block/function/script.
* Working with variables is actually working with the properties of that object.

## Function Declaration
* function declaration exist in the lexical environment before the execution.

* Execute
  1. create function declaration in lexical environment
  2. execute to the rest of variables
  3. create those properties in lexical environment.

<img src="./assets/lexical_environment_with_function_declaration.png">


## Inner + Outer Lexical environment

* The inner Lexical Environment corresponds to the current execution of say.
 - It has a single variable: name, the function argument. We called say("John"), so the value of name is "John".

* The outer Lexical Environment is the global Lexical Environment.
 - It has phrase and the function itself.

<img src="./assets/lexical_environment_inner_outer.png">


## Caveat
### One call – one Lexical Environment
* invoking a function create a lexical environment
* invoking same function multiple times, each invocation has its own lexical environment.

### Lexical Environment is a specification object
* we can't get it and manipulate it.
* javascript may optimize it.
  * remove unused variable to save memory.
