## Variable Types
* integer
* string
* float


```py
type(1)   // <class 'int'>
type('1')  // <class 'str'>
type(3.4)  // <class 'float'>

```


## Variable names and keywords

#### Variable
* they can contain both letters and numbers
* they cannot start with a number
* special characters
  * only underscore is valid
* if we are writing library code for others to use, start with an underscore character


#### Keywords
* can't not be used as variables
* examples

```
and       del       from      None      True
as        elif      global    nonlocal  try
assert    else      if        not       while
break     except    import    or        with
class     False     in        pass      yield
continue  finally   is        raise     async
def       for       lambda    return    await
```

## Statements
* a unit of code that the Python interpreter can execute
* two kinds
  1. expression statement
    * `x + y`
  2. assignment
    * `x = 1`


## Operators and operands
* Operators
  * `+, -, * and /`
  * `**`
    * exponentiation
* Operands
  * The values the operator is applied to are called operands


#### Division
* version difference
* Python 3.x
  * `59/60`  # 0.9833333333333333
  * `59//60` # 0
    * divide two integers and truncate the result to an integer
* Python 2.x
  * `59/60`  # 0
    * divide two integers and truncate the result to an integer


## Expressions
* is a combination of values, variables, and operators
* a value all by itself is considered an expression

```py

>>> 17
>>> x + 17 // assuming that the x has been assigned value

```

## Order of Operations
* order of evaluation depends on the rules of precedence
* Python follows mathematical convention
* acronym PEMDAS rule
  1. Parentheses have the highest precedence
  2. Exponentiation has the next highest precedence
    * `2*3**2 + 1` // 19
  3. Multiplication/Division
  4. Addition/Subtraction
  5. Operators with the same precedence are evaluated from left to right

## Modules Operator
* `%`
  * get remainder

```py

>>> quotient = 7 // 3
>>> print(quotient)
2
>>> remainder = 7 % 3
>>> print(remainder)
1

```


## String Operations
* `+` -> concatenation
*  `*` -> multiplying the content of a string by an integer. For example:

```py

>>> first = 10
>>> second = 15
>>> print(first+second)
25
>>> first = '100'
>>> second = '150'
>>> print(first + second)
100150

```


```py

>>> first = 'Test '
>>> second = 3
>>> print(first * second)
Test Test Test

```

## User Input

```py

>>> inp = input()
Some silly stuff
>>> print(inp)
Some silly stuff

```


```py

>>> name = input('What is your name?\n')
What is your name?
Chuck
>>> print(name)
Chuck

```

### Type Conversion
* int()
  * if the user types something other than a string of digits, you get an error

```py
speed = '17'
int(speed)  # get number 17

```

## Comments
* `#`


## Debugging
* use reserved words
* invalid syntax
  * `US$`
* semantic error
  * `>>> 1.0 / 2.0 * pi` !== `1/2π`


## Terms
* assignment
  * A statement that assigns a value to a variable.
* concatenate
  * To join two operands end to end.
* comment
  * Information in a program that is meant for other programmers (or anyone reading the source code) and has no effect on the execution of the program.
* evaluate
  * To simplify an expression by performing the operations in order to yield a single value.
* expression
  * A combination of variables, operators, and values that represents a single result value.
* floating point
  * A type that represents numbers with fractional parts.
* integer
  * A type that represents whole numbers.
* keyword
  * A reserved word that is used by the compiler to parse a program; you cannot use keywords like if, def, and while as variable names.
* mnemonic
  * A memory aid. We often give variables mnemonic names to help us remember what is stored in the variable.
* modulus operator
  * An operator, denoted with a percent sign (%), that works on integers and yields the remainder when one number is divided by another.
* operand
  * One of the values on which an operator operates.
* operator
  * A special symbol that represents a simple computation like addition, multiplication, or string concatenation.
* rules of precedence
  * The set of rules governing the order in which expressions involving multiple operators and operands are evaluated.
* statement
  * A section of code that represents a command or action. So far, the statements we have seen are assignments and print expression statement.
* string
  * A type that represents sequences of characters.
* type
  * A category of values. The types we have seen so far are integers (type int), floating-point numbers (type float), and strings (type str).
* value
  * One of the basic units of data, like a number or string, that a program manipulates.
* variable
  * A name that refers to a value.


## Status
* done

## References
* https://www.py4e.com/html3/02-variables
