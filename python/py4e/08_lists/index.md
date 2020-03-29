# List

## Initialization
* constructor
    ```python
      thislist = list(("apple", "banana", "cherry")) # note the double round-brackets
      print(thislist)
    ```

* assign
    ```python

      a = []
    ```


## Mutable

```python

>>> numbers = [17, 123]
>>> numbers[1] = 5
>>> print(numbers)
[17, 5]

```

## Traversing a list

```python
for cheese in cheeses:
    print(cheese)
```

```python
for i in range(len(numbers)):
    numbers[i] = numbers[i] * 2
```

* nested array is seemed as single element
    * ['spam', 1, ['Brie', 'Roquefort', 'Pol le Veq'], [1, 2, 3]]

## List of Operations
* `+`

```python
>>> a = [1, 2, 3]
>>> b = [4, 5, 6]
>>> c = a + b
>>> print(c)
[1, 2, 3, 4, 5, 6]

```

* `*`

```python

>>> [0] * 4
[0, 0, 0, 0]
>>> [1, 2, 3] * 3
[1, 2, 3, 1, 2, 3, 1, 2, 3]

```

## List of Slices

* check ref

## List of Methods

* check ref

## Deleting elements
* check ref

## List and Funcs
* check ref

## List and Strings

```python
>>> s = 'spam'
>>> t = list(s)
>>> print(t)
['s', 'p', 'a', 'm']

```

```python
>>> s = 'pining for the fjords'
>>> t = s.split()
>>> print(t)
['pining', 'for', 'the', 'fjords']
>>> print(t[2])
the

```

```python
>>> t = ['pining', 'for', 'the', 'fjords']
>>> delimiter = ' '
>>> delimiter.join(t)
'pining for the fjords'

```
