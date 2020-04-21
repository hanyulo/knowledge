# Tuples
* just like list
    * mutable
    * not hashable
* immutable
* comparable
* hashable
* can be used as key values in Python dictionaries


## How to create
```Python
# normal way
>>> t = 'a', 'b', 'c', 'd', 'e'
>>> t = ('a', 'b', 'c', 'd', 'e')

# create only one element in tuple, need last comma
>>> t1 = ('a',)
>>> type(t1)
<type 'tuple'>

# without comma -> string
>>> t2 = ('a')
>>> type(t2)
<type 'str'>

# with tuple() constructor

>>> t = tuple()
>>> print(t)
()

>>> t = tuple('lupins')
>>> print(t)
('l', 'u', 'p', 'i', 'n', 's')

````

* manipulate tuple

```Python

>>> t = ('a', 'b', 'c', 'd', 'e')
>>> print(t[0])
'a'

>>> print(t[1:3])
('b', 'c')

>>> t[0] = 'A'
TypeError: object doesn't support item assignment

>>> t = ('A',) + t[1:]
>>> print(t)
('A', 'b', 'c', 'd', 'e')

```


## Comparing Tuples
* weight: left to right
    * The comparison operators work with tuples and other sequences. Python starts by comparing the first element from each sequence. If they are equal, it goes on to the next element, and so on, until it finds elements that differ. Subsequent elements are not considered (even if they are really big).

* The sort function works the same way. It sorts primarily by first element, but in the case of a tie, it sorts by second element, and so on.

```Python

>>> (0, 1, 2) < (0, 3, 4)
True
>>> (0, 1, 2000000) < (0, 3, 4)
True

```

* Decorate Sort Undecorate (DSU)

* Decorate
    * a sequence by building a list of tuples with one or more sort keys preceding the elements from the sequence,
* Sort
    * the list of tuples using the Python built-in sort, and
* Undecorate
    * by extracting the sorted elements of the sequence.

```Python

txt = 'but soft what light in yonder window breaks'
words = txt.split()
t = list()
for word in words:
    t.append((len(word), word))

t.sort(reverse=True)

res = list()
for length, word in t:
    res.append(word)

print(res)

# ['yonder', 'window', 'breaks', 'light', 'what', 'soft', 'but', 'in']
````

* sort compares the first element, length, first, and only considers the second element to break ties. The keyword argument reverse=True tells sort to go in decreasing order.

* The second loop traverses the list of tuples and builds a list of words in descending order of length. The four-character words are sorted in reverse alphabetical order, so "what" appears before "soft" in the following list.

## Tuple Assignment
* tuple allows you to assign more than one variable at a time when the left side is a sequence.


```Python

>>> m = [ 'have', 'fun' ]
>>> x, y = m
>>> x
'have'
>>> y
'fun'
>>>

# equal to

>>> m = [ 'have', 'fun' ]
>>> (x, y) = m
>>> x
'have'
>>> y
'fun'
>>>

# Python will translate the code to the following statement

>>> m = [ 'have', 'fun' ]
>>> x = m[0]
>>> y = m[1]
>>> x
'have'
>>> y
'fun'
>>>

```

### swap elements (tuple assignment)
* left side is a tuple of variables
* right side is a tuple of expressions
* Each value on the right side is assigned to its respective variable on the left side.
* All the expressions on the right side are evaluated before any of the assignments.

```Python

>>> a, b = b, a

```
* The number of variables on the left and the number of values on the right must be the same:

```Python
>>> a, b = 1, 2, 3
ValueError: too many values to unpack

```

*  the right side can be any kind of sequence (string, list, or tuple).

<!-- ````Python

>>> addr = 'monty@python.org'
>>> uname, domain = addr.split('@')

>>> print(uname)
monty
>>> print(domain)
python.org

``` -->

## Dictionaries and Tuples
* Dictionaries have a method called items that returns a list of tuples, where each tuple is a key-value pair

```Python


>>> d = {'a':10, 'b':1, 'c':22}
>>> t = list(d.items())
>>> print(t)
[('b', 1), ('a', 10), ('c', 22)]

```

* sort items

```Python

>>> d = {'a':10, 'b':1, 'c':22}
>>> t = list(d.items())
>>> t
[('b', 1), ('a', 10), ('c', 22)]
>>> t.sort()
>>> t
[('a', 10), ('b', 1), ('c', 22)]

```

## Sort dictionaries by value

```Python

>>> d = {'a':10, 'b':1, 'c':22}
>>> l = list()
>>> for key, val in d.items() :
...     l.append( (val, key) )
...
>>> l
[(10, 'a'), (22, 'c'), (1, 'b')]
>>> l.sort(reverse=True)
>>> l
[(22, 'c'), (10, 'a'), (1, 'b')]
>>>

```


## The most common words (top 10)

```python


import string
fhand = open('romeo-full.txt')
counts = dict()
for line in fhand:
    line = line.translate(str.maketrans('', '', string.punctuation))
    line = line.lower()
    words = line.split()
    for word in words:
        if word not in counts:
            counts[word] = 1
        else:
            counts[word] += 1

# Sort the dictionary by value
lst = list()
for key, val in list(counts.items()):
    lst.append((val, key))

lst.sort(reverse=True)

for key, val in lst[:10]:
    print(key, val)

```


## Using tuples as keys in dictionaries


```python
myDir['Han', 'Tseng'] = 'engineer'
myDir['Valention', 'Rossi'] = 'rider'

# tuple assignment
for firstName, lastName in myDir:
    # use tuple as a key in dictionary
    print(firstName, lastName, directory[firstName,lastName])


```

## Summary - Sequences
* sequences in python
    1. list
    2. tuple
    3. string

* string
    * only characters
    * immutable
        * `s[2] = '3'` # error
* list
    * mutable

* tuple
    * syntactically simpler to create a tuple than a list.
    * If you want to use a sequence as a dictionary key, you have to use an immutable type like a tuple or string.
    * If you are passing a sequence as an argument to a function, using tuples reduces the potential for unexpected behavior due to aliasing (references).
    * immutable
        * has no sort, reverse methods

* Because tuples are immutable, they don't provide methods like sort and reverse, which modify existing lists. However Python provides the built-in functions sorted and reversed, which take any sequence as a parameter and return a new sequence with the same elements in a different order.

## Question
* if we have list why do we still need tuple

## To Do Exercise
