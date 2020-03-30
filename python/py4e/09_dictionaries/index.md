# Dictionaries
* key-value pair
    * key can be almost any type
* javascript - set
* `{}`: curly brackets
* `[]`: square brackets

## constructor `dic()`
```python
>>> eng2sp = dict()
>>> print(eng2sp)
{}
```

## scnearios

* `len()`

```python
eng2zh = dict()
eng2zh['apple'] = '蘋果'
len(eng2zh) # 1

```

* key `in`
```python

eng2zh = dict()
eng2zh['apple'] = '蘋果'
'apple' in eng2zh # true

```

* value `in`
    * values return values in a list

```python

>>> vals = list(eng2sp.values())
>>> 'uno' in vals
True
```

* in
    * list: brute force -> O(n)
    * dictionary: hash table -> O(1)


* `get`
    * get value by key with a default value

```python

>>> counts = { 'chuck' : 1 , 'annie' : 42, 'jan': 100}
>>> print(counts.get('jan', 0))
100
>>> print(counts.get('tim', 0))
0

```

```python
word = 'brontosaurus'
d = dict()
for c in word:
    if c not in d:
        d[c] = 1
    else:
        d[c] = d[c] + 1
print(d)

```

```python

word = 'brontosaurus'
d = dict()
for c in word:
    d[c] = d.get(c,0) + 1
print(d)

```

* `+=`, `*=`, `/=`, `-=`


## Looping
```python

counts = { 'chuck' : 1 , 'annie' : 42, 'jan': 100}
for key in counts:
    print(key, counts[key])

```

* sorted keys

```python

counts = { 'chuck' : 1 , 'annie' : 42, 'jan': 100}
lst = list(counts.keys())
print(lst)
lst.sort()
for key in lst:
    print(key, counts[key])

```

## Advanced text parsing
* methods
    1. lower
    2. punctuation
    3. translate

```python

import string

fname = input('Enter the file name: ')
try:
    fhand = open(fname)
except:
    print('File cannot be opened:', fname)
    exit()

counts = dict()
for line in fhand:
    line = line.rstrip()
    line = line.translate(line.maketrans('', '', string.punctuation))
    line = line.lower()
    words = line.split()
    for word in words:
        if word not in counts:
            counts[word] = 1
        else:
            counts[word] += 1

print(counts)

```
