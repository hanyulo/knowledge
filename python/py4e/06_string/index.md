## String
* string is a sequence of characters

```python
fruit = 'banana'
letter = fruit[1]
letter == 'a' #true

```


## len()
```python

len(fruit) == 6 #true

```


## Traversal through a string

```python

index = 0
while index < len(fruit):
    letter = fruit[index]
    print(letter)
    index = index + 1

```

```python

for char in fruit:
  print(char)

```

## String Slices

```python

>>> s = 'Monty Python'
>>> print(s[0:5])
Monty
>>> print(s[6:12])
Python

```


```Python

>>> fruit = 'banana'
>>> fruit[:3]
'ban'
>>> fruit[3:]
'ana'

```


```python

>>> fruit = 'banana'
>>> fruit[3:3]
''

```

## Strings are immutable

```Python
>>> greeting = 'Hello, world!'
>>> greeting[0] = 'J'
TypeError: 'str' object does not support item assignment

```

```Python

>>> greeting = 'Hello, world!'
>>> new_greeting = 'J' + greeting[1:]
>>> print(new_greeting)
Jello, world!
```

## in operator

```python

>>> 'a' in 'banana'
True
>>> 'seed' in 'banana'
False

```

## String Comparison

```Python

if word == 'banana':
    print('All right, bananas.')

if word < 'banana':
    print('Your word,' + word + ', comes before banana.')
elif word > 'banana':
    print('Your word,' + word + ', comes after banana.')
else:
    print('All right, bananas.')

```


## [String Methods](https://docs.python.org/library/stdtypes.html#string-methods.)
* https://docs.python.org/3/library/stdtypes.html#string-methods

## [Format Operator](https://docs.python.org/library/stdtypes.html#printf-style-string-formatting.)
* When applied to integers, `%` is the modulus operator. But when the first operand is a string, % is the format operator.

* details
    * `%d` - integer
    * `%g` - float
    * `%s` - string

```python

>>> camels = 42
>>> 'I have spotted %d camels.' % camels
'I have spotted 42 camels.'
```



```Python

>>> 'In %d years I have spotted %g %s.' % (3, 0.1, 'camels')
'In 3 years I have spotted 0.1 camels.'

```

* The number of elements in the tuple must match the number of format sequences in the string.
* The types of the elements also must match the format sequences:

```Python

>>> '%d %d %d' % (1, 2)
TypeError: not enough arguments for format string
>>> '%d' % 'dollars'
TypeError: %d format: a number is required, not str

```

## Caveat

* original code
```Python

> hello there
hello there
> # don't print this
> print this!
print this!
>
Traceback (most recent call last):
  File "copytildone.py", line 3, in <module>
    if line[0] == '#':
IndexError: string index out of range

* improvement
```python

if line.startswith('#'):

if len(line) > 0 and line[0] == '#':

```


## Terms
* https://www.py4e.com/html3/06-strings
