## Comparison Operators
```py
  x != y               # x is not equal to y
  x > y                # x is greater than y
  x < y                # x is less than y
  x >= y               # x is greater than or equal to y
  x <= y               # x is less than or equal to y
  x is y               # x is the same as y
  x is not y           # x is not the same as y
```


## Type Check
```py
type(True)
type(5)
```

## Logical Operators
* and
* or
* not

```py
x > 10 and x < 12
not (x > 10)
```

## Conditional Execution
* try the best you can to avoid nested conditionals

```py

# case one
if x < y:
    print('x is less than y')
elif x > y:
    print('x is greater than y')
else:
    print('x and y are equal')


# case two
if x == y:
    print('x and y are equal')
else:
    if x < y:
        print('x is less than y')
    else:
        print('x is greater than y')

```

## Catch Exception

```py
fahr = input('please enter the fahrenheit degree: ')
try:
  cel = (fahr - 32.0) * 5.0 / 9.0
  print(cel)
except:
  print('your input most be number')
```

## Short-circuit evaluation
* `x >= 2 and (x/y) > 2`
* python exam logical operation from left to right
* if x >= 2 is false, python stop there and do not compute the rest of code

### guardian pattern

* prerequisite
```python
>>> x = 1
>>> y = 0
>>> x >= 2 and (x/y) > 2
False
>>> x = 6
>>> y = 0
>>> x >= 2 and (x/y) > 2
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero

```

* guardian pattern
```python
>>> x = 1
>>> y = 0
>>> x >= 2 and y != 0 and (x/y) > 2
False
>>> x = 6
>>> y = 0
>>> x >= 2 and y != 0 and (x/y) > 2
False
>>> x >= 2 and (x/y) > 2 and y != 0
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero
>>>

```

## Debugging
* traceback info
    * What kind of error it was, and
    * Where it occurred.

```py
>>> x = 5
>>>  y = 6
  File "<stdin>", line 1
    y = 6
    ^
IndentationError: unexpected indent

```


## Summary

body
The sequence of statements within a compound statement.
boolean expression
An expression whose value is either True or False.
branch
One of the alternative sequences of statements in a conditional statement.
chained conditional
A conditional statement with a series of alternative branches.
comparison operator
One of the operators that compares its operands: ==, !=, >, <, >=, and <=.
conditional statement
A statement that controls the flow of execution depending on some condition.
condition
The boolean expression in a conditional statement that determines which branch is executed.
compound statement
A statement that consists of a header and a body. The header ends with a colon (:). The body is indented relative to the header.
guardian pattern
Where we construct a logical expression with additional comparisons to take advantage of the short-circuit behavior.
logical operator
One of the operators that combines boolean expressions: and, or, and not.
nested conditional
A conditional statement that appears in one of the branches of another conditional statement.
traceback
A list of the functions that are executing, printed when an exception occurs.
short circuit
When Python is part-way through evaluating a logical expression and stops the evaluation because Python knows the final value for the expression without needing to evaluate the rest of the expression.

## References
* https://www.py4e.com/html3/03-conditional
